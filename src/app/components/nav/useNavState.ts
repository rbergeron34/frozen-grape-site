"use client";

import { useEffect, useState } from "react";

/** Subscribes to window scroll/resize, coalesced to one read per frame. */
function onScrollFrame(read: () => void) {
  let frame = 0;
  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(() => { frame = 0; read(); });
  };
  schedule();
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  return {
    schedule,
    dispose() {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    },
  };
}

export function useScrolled(threshold = 32) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => onScrollFrame(() => setScrolled(window.scrollY > threshold)).dispose, [threshold]);
  return scrolled;
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    const frame = requestAnimationFrame(update);
    query.addEventListener("change", update);
    return () => { cancelAnimationFrame(frame); query.removeEventListener("change", update); };
  }, []);
  return reduced;
}

export type HomeSection = "apps" | "studio" | null;

/** Home-page scrollspy: which section has reached the upper part of the viewport. */
export function useHomeSection(enabled: boolean): HomeSection {
  const [section, setSection] = useState<HomeSection>(null);
  useEffect(() => {
    if (!enabled) return;
    const apps = document.getElementById("apps");
    const studio = document.getElementById("studio");
    return onScrollFrame(() => {
      const line = window.innerHeight * 0.45;
      if (studio && studio.getBoundingClientRect().top < line) setSection("studio");
      else if (apps && apps.getBoundingClientRect().top < line) setSection("apps");
      else setSection(null);
    }).dispose;
  }, [enabled]);
  return enabled ? section : null;
}

export interface SceneTone { bg: string; ink: string; muted: string; accent: string; dark: boolean }

const NAV_LINE = 40;

function isDark(color: string) {
  const match = /^#([0-9a-f]{6})/i.exec(color);
  if (!match) return false;
  const n = parseInt(match[1], 16);
  return 0.299 * ((n >> 16) & 255) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255) < 110;
}

function readTone(element: HTMLElement): SceneTone | null {
  const get = (name: string) => element.style.getPropertyValue(name).trim();
  const bg = get("--scene-bg");
  if (!bg) return null;
  return { bg, ink: get("--scene-ink"), muted: get("--scene-muted"), accent: get("--scene-accent"), dark: isDark(bg) };
}

/**
 * The app scene currently painted behind the nav, so the bar can take on its
 * colors. App landing pages mark their root with navScene(); the home showcase
 * marks its root and swaps the active scene inline. The pinned desktop showcase
 * paints that scene full-screen; below 901px (or with reduced motion — the same
 * query useShowcaseState pins on) each [data-chapter] paints its own background,
 * so read whichever chapter is under the bar. `routeKey` re-subscribes after
 * client navigation swaps the page.
 */
export function useSceneTone(routeKey: string): SceneTone | null {
  const [tone, setTone] = useState<SceneTone | null>(null);
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-scene-root]");
    if (!root) {
      const frame = requestAnimationFrame(() => setTone(null));
      return () => cancelAnimationFrame(frame);
    }
    const chapters = Array.from(root.querySelectorAll<HTMLElement>("[data-chapter]"));
    const pinned = window.matchMedia("(min-width: 901px) and (prefers-reduced-motion: no-preference)");
    const read = () => {
      let next: SceneTone | null = null;
      if (root.getBoundingClientRect().bottom > NAV_LINE) {
        if (pinned.matches || chapters.length === 0) next = readTone(root);
        else {
          const chapter = chapters.find((c) => { const r = c.getBoundingClientRect(); return r.top <= NAV_LINE && r.bottom > NAV_LINE; });
          if (chapter) next = readTone(chapter);
        }
      }
      setTone((prev) => (prev?.bg === next?.bg && prev?.ink === next?.ink && prev?.accent === next?.accent ? prev : next));
    };
    const scroll = onScrollFrame(read);
    // The showcase swaps its scene variables inline as the active app changes.
    const observer = new MutationObserver(scroll.schedule);
    observer.observe(root, { attributes: true, attributeFilter: ["style"] });
    return () => { observer.disconnect(); scroll.dispose(); };
  }, [routeKey]);
  return tone;
}
