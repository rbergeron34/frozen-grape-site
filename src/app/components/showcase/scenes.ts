import type { CSSProperties } from "react";

export interface ShowcaseScene {
  background: string;
  glow: string;
  ink: string;
  muted: string;
  accent: string;
  surface: string;
  border: string;
  buttonInk: string;
  detail?: "verse" | "heart" | "cards";
}

export const STUDIO_SCENE: ShowcaseScene = {
  background: "#f8f7fc", glow: "#e7d9ed", ink: "#211a32", muted: "#70687d",
  accent: "#805091", surface: "#ffffffb8", border: "#3724521a", buttonInk: "#ffffff",
};

// Homepage art direction only; product data continues to live in lib/apps.
export const SCENES: Record<string, ShowcaseScene> = {
  "guiding-light": {
    background: "#f4eddf", glow: "#e9d2a0", ink: "#392e20", muted: "#6f6049",
    accent: "#8b641e", surface: "#fffdf7bb", border: "#8b641e26", buttonInk: "#ffffff", detail: "verse",
  },
  brighterstart: {
    background: "#fff0e6", glow: "#ffc091", ink: "#482c26", muted: "#79574c",
    accent: "#ac471c", surface: "#fffaf5bb", border: "#ac471c26", buttonInk: "#ffffff",
  },
  "daily-proverb": {
    background: "#eaf0e6", glow: "#c7d9b8", ink: "#293e2c", muted: "#53664f",
    accent: "#486a41", surface: "#fafff6bb", border: "#486a4126", buttonInk: "#ffffff",
  },
  lockin: {
    background: "#151b17", glow: "#394e24", ink: "#f1f5e9", muted: "#b2bdaa",
    accent: "#ceef61", surface: "#ffffff08", border: "#ceef6126", buttonInk: "#1c2810", detail: "heart",
  },
  count21: {
    background: "#f4efdf", glow: "#ebcd85", ink: "#3d3220", muted: "#6e6046",
    accent: "#885b0d", surface: "#fffdf6bb", border: "#885b0d26", buttonInk: "#ffffff", detail: "cards",
  },
  "hoops-connect": {
    background: "#faf0e8", glow: "#ecc3a4", ink: "#422d23", muted: "#795c4c",
    accent: "#a14d27", surface: "#fffaf7bb", border: "#a14d2726", buttonInk: "#ffffff",
  },
  passphoto: {
    background: "#eaf1fa", glow: "#bdd5f2", ink: "#273951", muted: "#52657e",
    accent: "#365f99", surface: "#f8fcffbb", border: "#365f9926", buttonInk: "#ffffff",
  },
};

export function sceneFor(slug: string): ShowcaseScene {
  return SCENES[slug] ?? STUDIO_SCENE;
}

export function sceneStyle(scene: ShowcaseScene): CSSProperties {
  return {
    "--scene-bg": scene.background, "--scene-glow": scene.glow,
    "--scene-ink": scene.ink, "--scene-muted": scene.muted,
    "--scene-accent": scene.accent, "--scene-surface": scene.surface,
    "--scene-border": scene.border, "--scene-button-ink": scene.buttonInk,
  } as CSSProperties;
}

// Relative to the stage; destinations are measured from the real phone grid.
export const ORBITS = [
  { x: 0.13, y: 0.27, size: 91, angle: -14 },
  { x: 0.86, y: 0.25, size: 102, angle: 13 },
  { x: 0.075, y: 0.60, size: 73, angle: -10 },
  { x: 0.925, y: 0.59, size: 83, angle: 12 },
  { x: 0.25, y: 0.84, size: 87, angle: -12 },
  { x: 0.76, y: 0.83, size: 95, angle: 15 },
  { x: 0.61, y: 0.90, size: 61, angle: -8 },
];
