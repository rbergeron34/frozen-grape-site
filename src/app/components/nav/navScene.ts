import type { CSSProperties } from "react";

export interface NavScene { bg: string; ink: string; muted: string; accent: string }

/**
 * Props for a page's root element so the top nav takes on that page's colors
 * (useSceneTone reads the same --scene-* variables the home showcase sets).
 * `bg` must be a 6-digit hex: it decides whether the nav goes dark.
 */
export function navScene(scene: NavScene) {
  return {
    "data-scene-root": "",
    style: {
      "--scene-bg": scene.bg,
      "--scene-ink": scene.ink,
      "--scene-muted": scene.muted,
      "--scene-accent": scene.accent,
    } as CSSProperties,
  };
}
