"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import styles from "./navlab.module.css";

export type CursorEffect = "magnet" | "sheen" | "pip" | "glow";

export const CURSOR_EFFECTS: { key: CursorEffect; label: string; hint: string }[] = [
  { key: "magnet", label: "Magnet", hint: "The lens and link lean a few pixels toward the cursor." },
  { key: "sheen", label: "Sheen", hint: "A soft highlight slides across the glass and its rim near the cursor." },
  { key: "pip", label: "Pip looks", hint: "Pip (in the nav and the hero) leans gently toward the cursor." },
  { key: "glow", label: "Glow", hint: "A faint light in the current app's color trails the cursor." },
];

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const SHEEN_REACH = 90;

/**
 * Pointer-driven effects that work outside React state: one rAF loop writes
 * CSS variables/properties and sleeps once everything has settled. Mouse only
 * (touch has no hover), and the motion pieces stand down for reduced motion.
 * Magnet lives in NavLinks; this handles sheen, Pip and glow.
 */
export function CursorEffects({ effects, sceneStyle, resetKey }: { effects: CursorEffect[]; sceneStyle?: CSSProperties; resetKey: string }) {
  const glowRef = useRef<HTMLDivElement>(null);
  const sheen = effects.includes("sheen");
  const pip = effects.includes("pip");
  const glow = effects.includes("glow");

  useEffect(() => {
    if (!sheen && !pip && !glow) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const sheens = sheen ? Array.from(document.querySelectorAll<HTMLElement>(`.${styles.sheen}`)) : [];
    // Lab shortcut: the hero Pip is reached by class so the showcase files stay untouched.
    const pips = pip && !reduced
      ? Array.from(document.querySelectorAll<HTMLElement>(`[data-nav-lab] .${styles.pip}, img[class*="heroPip"]`))
      : [];
    const lean = pips.map(() => ({ r: 0, x: 0, y: 0 }));
    pips.forEach((el) => { el.style.transformOrigin = "50% 85%"; });

    let px = 0;
    let py = 0;
    let inside = false;
    let glowX = 0;
    let glowY = 0;
    let glowPlaced = false;
    let frame = 0;

    const tick = () => {
      frame = 0;
      let moving = false;

      for (const el of sheens) {
        const r = el.getBoundingClientRect();
        const gap = Math.hypot(Math.max(r.left - px, 0, px - r.right), Math.max(r.top - py, 0, py - r.bottom));
        el.style.setProperty("--sx", `${(px - r.left).toFixed(1)}px`);
        el.style.setProperty("--sy", `${(py - r.top).toFixed(1)}px`);
        el.style.setProperty("--sheen", inside ? clamp(1 - gap / SHEEN_REACH, 0, 1).toFixed(3) : "0");
      }

      pips.forEach((el, i) => {
        const r = el.getBoundingClientRect();
        const tx = inside ? clamp((px - (r.left + r.width / 2)) / window.innerWidth, -1, 1) : 0;
        const ty = inside ? clamp((py - (r.top + r.height / 2)) / window.innerHeight, -1, 1) : 0;
        const s = lean[i];
        const target = { r: tx * 8, x: tx * 3, y: ty * 2 };
        s.r += (target.r - s.r) * 0.1;
        s.x += (target.x - s.x) * 0.1;
        s.y += (target.y - s.y) * 0.1;
        el.style.rotate = `${s.r.toFixed(2)}deg`;
        el.style.translate = `${s.x.toFixed(2)}px ${s.y.toFixed(2)}px`;
        if (Math.abs(target.r - s.r) > 0.02 || Math.abs(target.x - s.x) > 0.02 || Math.abs(target.y - s.y) > 0.02) moving = true;
      });

      const light = glowRef.current;
      if (light) {
        if (!glowPlaced) { glowX = px; glowY = py; glowPlaced = true; }
        const follow = reduced ? 1 : 0.12;
        glowX += (px - glowX) * follow;
        glowY += (py - glowY) * follow;
        light.style.translate = `${glowX.toFixed(1)}px ${glowY.toFixed(1)}px`;
        light.style.opacity = inside ? "1" : "0";
        if (Math.hypot(px - glowX, py - glowY) > 0.5) moving = true;
      }

      if (moving) frame = requestAnimationFrame(tick);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(tick); };
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      px = event.clientX;
      py = event.clientY;
      inside = true;
      schedule();
    };
    const leave = () => { inside = false; schedule(); };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("scroll", schedule, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("scroll", schedule);
      document.documentElement.removeEventListener("pointerleave", leave);
      sheens.forEach((el) => el.style.setProperty("--sheen", "0"));
      pips.forEach((el) => { el.style.rotate = ""; el.style.translate = ""; el.style.transformOrigin = ""; });
    };
  }, [sheen, pip, glow, resetKey]);

  return glow ? <div ref={glowRef} className={styles.glow} style={sceneStyle} aria-hidden="true" /> : null;
}
