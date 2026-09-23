"use client";

import { useEffect, useState, type RefObject } from "react";
import { ORBITS } from "./scenes";

export interface ShowcaseState {
  activeIndex: number;
  showNavigation: boolean;
  heroVisible: boolean;
}

const clamp = (value: number) => Math.max(0, Math.min(1, value));
const smooth = (value: number) => { const t = clamp(value); return t * t * (3 - 2 * t); };
const mix = (a: number, b: number, t: number) => a + (b - a) * t;

export function useShowcaseState(root: RefObject<HTMLDivElement | null>): ShowcaseState {
  const [state, setState] = useState<ShowcaseState>({ activeIndex: -1, showNavigation: false, heroVisible: true });

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const desktop = window.matchMedia("(min-width: 901px) and (prefers-reduced-motion: no-preference)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const world = element.querySelector<HTMLElement>("[data-stage-world]")!;
    const phone = element.querySelector<HTMLElement>("[data-phone-rig]")!;
    const chapters = Array.from(element.querySelectorAll<HTMLElement>("[data-chapter]"));
    const orbits = Array.from(element.querySelectorAll<HTMLElement>("[data-orbit]"));
    const tiles = Array.from(element.querySelectorAll<HTMLElement>("[data-grid-icon]"));
    let frame = 0;
    let needsMeasure = true;
    let previousIndex = -2;
    let previousNavigation = false;
    let previousHeroVisible = true;
    let disposed = false;
    let width = 0;
    let height = 0;
    let phoneWidth = 0;
    let phoneHeight = 0;
    let destinations: { x: number; y: number; size: number }[] = [];

    const commit = (activeIndex: number, showNavigation: boolean, heroVisible: boolean) => {
      if (previousIndex !== activeIndex || previousNavigation !== showNavigation || previousHeroVisible !== heroVisible) {
        previousIndex = activeIndex;
        previousNavigation = showNavigation;
        previousHeroVisible = heroVisible;
        setState({ activeIndex, showNavigation, heroVisible });
      }
    };

    const update = () => {
      frame = 0;
      if (!desktop.matches) { commit(-1, false, true); return; }
      if (needsMeasure) {
        width = world.clientWidth;
        height = world.clientHeight;
        phoneWidth = phone.offsetWidth;
        phoneHeight = phone.offsetHeight;
        const phoneRect = phone.getBoundingClientRect();
        const measuredScale = phoneRect.width / phoneWidth;
        // Normalize the measured grid once per resize. The rig only translates
        // and scales, so icon flights need no per-frame child layout reads.
        destinations = tiles.map((tile) => {
          const rect = tile.getBoundingClientRect();
          return {
            x: (rect.left + rect.width / 2 - phoneRect.left) / measuredScale - phoneWidth / 2,
            y: (rect.top + rect.height / 2 - phoneRect.top) / measuredScale - phoneHeight / 2,
            size: tile.offsetWidth,
          };
        });
        needsMeasure = false;
      }
      const localScroll = -element.getBoundingClientRect().top;
      const intro = clamp(localScroll / (height * 0.92));
      const assembly = smooth(intro);
      const shift = smooth((localScroll / height - 0.87) / 0.43);
      const phoneX = width * 0.22 * (1 - shift);
      const phoneY = (1 - assembly) * height * 0.78;
      const scale = mix(0.78, 1, assembly);
      const rects = chapters.map((chapter) => chapter.getBoundingClientRect());
      let activeIndex = -1;
      for (let i = 0; i < rects.length; i++) { if (rects[i].top <= height * 0.6) activeIndex = i; }
      const lastBottom = rects[rects.length - 1].bottom;
      const exit = smooth((height * 0.76 - lastBottom) / (height * 0.56));
      const showNavigation = activeIndex >= 0 && exit < 0.9;
      commit(exit >= 0.9 ? -1 : activeIndex, showNavigation, intro < 0.62);
      const open = activeIndex < 0 ? 0 : smooth((height * 0.6 - rects[activeIndex].top) / (height * 0.3));
      const detail = activeIndex < 0 ? 0 : smooth((height * 0.46 - rects[activeIndex].top) / (height * 0.26));
      const set = (name: string, value: number | string) => element.style.setProperty(name, String(value));
      set("--hero-opacity", 1 - smooth(intro / 0.62));
      set("--hero-y", `${-90 * assembly}px`);
      set("--phone-x", `${phoneX}px`);
      set("--phone-y", `${phoneY}px`);
      set("--phone-scale", scale);
      set("--phone-opacity", smooth((intro - 0.12) / 0.36) * (1 - exit));
      set("--grid-opacity", smooth((intro - 0.9) / 0.1));
      set("--home-opacity", activeIndex < 0 ? 1 : 0);
      set("--open", open);
      set("--detail", detail);
      set("--assembly-caption", smooth((intro - 0.62) / 0.25) * (1 - shift));
      set("--ring-opacity", (1 - shift) * 0.65);
      orbits.forEach((orb, index) => {
        const source = ORBITS[index % ORBITS.length];
        const target = destinations[index];
        if (!target) return;
        const travel = smooth((intro - 0.10 - index * 0.025) / (0.8 - index * 0.025));
        const targetX = width * 0.28 + phoneX + target.x * scale;
        const targetY = height * 0.5 + 36 + phoneY + target.y * scale;
        const size = mix(source.size, target.size * scale, travel);
        const x = (targetX - width * source.x) * travel;
        const y = (targetY - height * source.y) * travel;
        orb.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${source.angle * (1 - travel)}deg) scale(${size / source.size})`;
        orb.style.opacity = String(1 - smooth((intro - 0.94) / 0.06));
      });
    };
    const schedule = () => { if (!disposed && !frame) frame = requestAnimationFrame(update); };
    const measure = () => { needsMeasure = true; schedule(); };
    const resize = new ResizeObserver(measure);
    resize.observe(world);
    resize.observe(phone);
    chapters.forEach((chapter) => resize.observe(chapter));
    const entrances = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.entered = "true";
          entrances.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    const configure = () => {
      element.setAttribute("data-entrances", reduced.matches ? "false" : "true");
      chapters.forEach((chapter) => entrances.observe(chapter));
      measure();
    };
    configure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    window.addEventListener("hashchange", schedule);
    desktop.addEventListener("change", configure);
    reduced.addEventListener("change", configure);
    void document.fonts.ready.then(measure);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      resize.disconnect();
      entrances.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", measure);
      window.removeEventListener("hashchange", schedule);
      desktop.removeEventListener("change", configure);
      reduced.removeEventListener("change", configure);
    };
  }, [root]);
  return state;
}
