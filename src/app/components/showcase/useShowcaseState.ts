"use client";

import { useEffect, useState } from "react";

export type ShowcaseState =
  | { phase: "home" }
  | { phase: "icon"; index: number }
  | { phase: "screen"; index: number };

function parse(step: string): ShowcaseState {
  if (step === "home") return { phase: "home" };
  const [phase, i] = step.split("-");
  return { phase: phase as "icon" | "screen", index: Number(i) };
}

// Activation is triggered by an IntersectionObserver, but the *active* step is
// resolved deterministically as the one whose center is nearest the viewport
// center. This means a fast scroll that crosses several steps between frames
// still lands on the correct (last-crossed) beat instead of whichever entry the
// observer happened to report first.
export function useShowcaseState(): ShowcaseState {
  const [state, setState] = useState<ShowcaseState>({ phase: "home" });

  useEffect(() => {
    const steps = Array.from(
      document.querySelectorAll<HTMLElement>("[data-step]")
    );
    if (!steps.length) return;

    let raf = 0;
    const resolve = () => {
      raf = 0;
      const mid = window.innerHeight / 2;
      let best: HTMLElement | null = null;
      let bestDist = Infinity;
      for (const el of steps) {
        const r = el.getBoundingClientRect();
        const dist = Math.abs(r.top + r.height / 2 - mid);
        if (dist < bestDist) {
          bestDist = dist;
          best = el;
        }
      }
      if (best) setState(parse(best.dataset.step!));
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(resolve);
    };

    const io = new IntersectionObserver(schedule, {
      rootMargin: "-25% 0px -25% 0px",
      threshold: [0, 0.5, 1],
    });
    steps.forEach((s) => io.observe(s));
    resolve(); // set initial state on mount

    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return state;
}
