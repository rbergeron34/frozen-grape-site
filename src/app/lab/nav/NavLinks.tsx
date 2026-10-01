"use client";

import { useLayoutEffect, useRef, useState, type MouseEvent, type PointerEvent } from "react";
import { Liquid } from "liquid-gooey";
import styles from "./navlab.module.css";

export const LINKS = [
  { key: "apps", label: "Apps", href: "#apps" },
  { key: "studio", label: "Studio", href: "#studio" },
  { key: "support", label: "Support", href: "/support" },
  { key: "contact", label: "Contact", href: "/contact" },
] as const;

export type LinkKey = (typeof LINKS)[number]["key"];
export type IndicatorMode = "liquid" | "slide" | "off";

type Box = { x: number; y: number; w: number; h: number };

export interface NavLinksProps {
  indicator: IndicatorMode;
  current: LinkKey | null;
  onNavigate: (key: LinkKey, event: MouseEvent<HTMLAnchorElement>) => void;
  /** box-shadow syntax for the liquid lens; slide mode reads --lens-shadow from CSS. */
  lensShadow?: string;
  /** Lens and link lean a few px toward the mouse. */
  magnet?: boolean;
  className?: string;
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

/**
 * The four nav links plus a lens behind them that follows the pointer/focus and
 * rests on the current page. "liquid" lets liquid-gooey's Move effect draw the
 * lens (it trails the invisible pill on a spring); "slide" is the plain CSS version.
 */
export function NavLinks({ indicator, current, onNavigate, lensShadow, magnet = false, className }: NavLinksProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const lastBox = useRef<Box | null>(null);
  const wasHidden = useRef(true);
  const [hovered, setHovered] = useState<number | null>(null);

  const currentIndex = LINKS.findIndex((link) => link.key === current);
  const target = hovered ?? (currentIndex >= 0 ? currentIndex : null);

  useLayoutEffect(() => {
    const pill = pillRef.current;
    const track = trackRef.current;
    linkRefs.current.forEach((link) => { if (link) link.style.translate = ""; });
    if (!pill || !track) return;
    const place = (instant: boolean) => {
      const link = target === null ? null : linkRefs.current[target];
      if (instant) pill.style.transition = "none";
      if (link) {
        const box = { x: link.offsetLeft, y: link.offsetTop, w: link.offsetWidth, h: link.offsetHeight };
        lastBox.current = box;
        pill.style.width = `${box.w}px`;
        pill.style.height = `${box.h}px`;
        pill.style.transform = `translate(${box.x}px, ${box.y}px)`;
        pill.dataset.visible = "true";
      } else {
        pill.dataset.visible = "false";
        const box = lastBox.current;
        // The liquid lens evaporates into its centre instead of fading.
        if (box && indicator === "liquid") {
          pill.style.width = "0px";
          pill.style.height = "0px";
          pill.style.transform = `translate(${box.x + box.w / 2}px, ${box.y + box.h / 2}px)`;
        }
      }
      if (instant) {
        void pill.offsetWidth;
        pill.style.transition = "";
      }
    };
    // A plain pill appears where it's needed rather than sliding in from where it vanished.
    place(indicator === "slide" && wasHidden.current);
    wasHidden.current = target === null;
    let first = true;
    const observer = new ResizeObserver(() => { if (first) { first = false; return; } place(true); });
    observer.observe(track);
    return () => observer.disconnect();
  }, [target, indicator]);

  const pill = <span ref={pillRef} className={styles.pill} data-mode={indicator} data-visible="false" aria-hidden="true" />;
  const links = LINKS.map((link, index) => (
    <a
      key={link.key}
      ref={(el) => { linkRefs.current[index] = el; }}
      href={link.href}
      className={styles.link}
      aria-current={current === link.key ? (link.href.startsWith("#") ? "location" : "page") : undefined}
      onPointerEnter={() => setHovered(index)}
      onFocus={() => setHovered(index)}
      onBlur={() => setHovered(null)}
      onClick={(event) => onNavigate(link.key, event)}
    >
      {link.label}
    </a>
  ));
  const trackClass = className ? `${styles.track} ${className}` : styles.track;
  const leave = () => setHovered(null);
  const lean = (event: PointerEvent<HTMLDivElement>) => {
    if (!magnet || hovered === null || event.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const link = linkRefs.current[hovered];
    const box = lastBox.current;
    if (!link) return;
    const r = link.getBoundingClientRect();
    const dx = clamp((event.clientX - (r.left + r.width / 2)) * 0.12, -4, 4);
    const dy = clamp((event.clientY - (r.top + r.height / 2)) * 0.2, -2, 2);
    link.style.translate = `${(dx * 0.4).toFixed(2)}px ${(dy * 0.4).toFixed(2)}px`;
    if (pillRef.current && box) pillRef.current.style.transform = `translate(${(box.x + dx).toFixed(2)}px, ${(box.y + dy).toFixed(2)}px)`;
  };

  if (indicator === "liquid") {
    return (
      <Liquid ref={trackRef} className={trackClass} fill="var(--lens)" shadow={lensShadow} blur={5} contrast={18} onPointerLeave={leave} onPointerMove={lean}>
        <Liquid.Item effect="move" move={{ springiness: 0.55, wobble: 0.45, stretch: 0.32, trail: 0.45 }}>
          {pill}
        </Liquid.Item>
        {links}
      </Liquid>
    );
  }
  return (
    <div ref={trackRef} className={trackClass} onPointerLeave={leave} onPointerMove={lean}>
      {indicator === "slide" && pill}
      {links}
    </div>
  );
}
