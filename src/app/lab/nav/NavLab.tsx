"use client";

import { useEffect, useState, type CSSProperties, type MouseEvent } from "react";
import { CURSOR_EFFECTS, CursorEffects, type CursorEffect } from "./CursorEffects";
import { useHomeSection, useReducedMotion, useSceneTone } from "./hooks";
import type { IndicatorMode, LinkKey } from "./NavLinks";
import { VARIANTS, type VariantKey } from "./variants";
import styles from "./navlab.module.css";

type Page = "home" | "support" | "contact";

const INDICATORS: { key: IndicatorMode; label: string }[] = [
  { key: "liquid", label: "Liquid" },
  { key: "slide", label: "Slide" },
  { key: "off", label: "Off" },
];

const PAGES: { key: Page; label: string }[] = [
  { key: "home", label: "Home" },
  { key: "support", label: "Support" },
  { key: "contact", label: "Contact" },
];

function oneOf<T extends string>(value: string | undefined, options: readonly T[], fallback: T): T {
  return options.includes(value as T) ? (value as T) : fallback;
}

export interface LabSettings { variant?: string; indicator?: string; page?: string; tint?: string; cursor?: string }

export function NavLab({ initial }: { initial: LabSettings }) {
  const [variant, setVariant] = useState<VariantKey>(() => oneOf(initial.variant, VARIANTS.map((v) => v.key), "split"));
  const [indicator, setIndicator] = useState<IndicatorMode>(() => oneOf(initial.indicator, INDICATORS.map((i) => i.key), "liquid"));
  const [page, setPage] = useState<Page>(() => oneOf(initial.page, PAGES.map((p) => p.key), "home"));
  const [tint, setTint] = useState(initial.tint !== "0");
  const [cursor, setCursor] = useState<CursorEffect[]>(() =>
    CURSOR_EFFECTS.map((c) => c.key).filter((key) => initial.cursor?.split(",").includes(key)));
  const toggleCursor = (key: CursorEffect) =>
    setCursor((on) => (on.includes(key) ? on.filter((k) => k !== key) : [...on, key]));
  const [open, setOpen] = useState(true);

  const reduced = useReducedMotion();
  const section = useHomeSection(page === "home");
  const scene = useSceneTone(tint);
  const active = VARIANTS.find((v) => v.key === variant) ?? VARIANTS[1];
  const Nav = active.Component;
  // The liquid lens is pure motion; with reduced motion it becomes the plain pill.
  const shownIndicator: IndicatorMode = reduced && indicator === "liquid" ? "slide" : indicator;

  useEffect(() => {
    const params = new URLSearchParams({ v: variant, i: indicator, p: page, t: tint ? "1" : "0", c: cursor.join(",") });
    window.history.replaceState(window.history.state, "", `?${params}${window.location.hash}`);
  }, [variant, indicator, page, tint, cursor]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if ((event.target as HTMLElement).closest("input, textarea, select, [contenteditable]")) return;
      const next = VARIANTS[Number(event.key) - 1];
      if (next) setVariant(next.key);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const navigate = (key: LinkKey, event: MouseEvent<HTMLAnchorElement>) => {
    // Support and Contact stay on this page so you can see the "current page" state.
    if (key === "support" || key === "contact") {
      event.preventDefault();
      setPage(key);
    } else {
      setPage("home");
    }
  };

  const sceneStyle = scene
    ? ({ "--n-bg": scene.bg, "--n-ink": scene.ink, "--n-muted": scene.muted, "--n-accent": scene.accent } as CSSProperties)
    : undefined;

  return (
    <>
      <Nav
        key={variant}
        indicator={shownIndicator}
        current={page === "home" ? section : page}
        onNavigate={navigate}
        sceneStyle={sceneStyle}
        tone={scene?.dark ? "dark" : "light"}
        magnet={cursor.includes("magnet")}
        sheen={cursor.includes("sheen")}
      />
      <CursorEffects effects={cursor} sceneStyle={sceneStyle} resetKey={variant} />

      <aside className={styles.panel} data-open={open} aria-label="Nav lab controls">
        <div className={styles.panelHead}>
          <span className={styles.panelTitle}>Nav lab</span>
          <span className={styles.panelCurrent}>{active.name}</span>
          <button type="button" className={styles.panelToggle} onClick={() => setOpen((o) => !o)} aria-expanded={open}>
            {open ? "Hide" : "Show"}
          </button>
        </div>
        {open && (
          <>
            <div className={styles.choices}>
              {VARIANTS.map((v, index) => (
                <button key={v.key} type="button" className={styles.choice} aria-pressed={v.key === variant} onClick={() => setVariant(v.key)}>
                  <span className={styles.choiceKey}>{index + 1}</span>
                  {v.name}
                </button>
              ))}
            </div>
            <p className={styles.panelNote}>{active.blurb}</p>
            <div className={styles.panelRow}>
              <span className={styles.rowLabel}>Lens</span>
              {INDICATORS.map((i) => (
                <button key={i.key} type="button" className={styles.choice} aria-pressed={i.key === indicator} disabled={!active.usesIndicator} onClick={() => setIndicator(i.key)}>
                  {i.label}
                </button>
              ))}
              {reduced && indicator === "liquid" && <span className={styles.rowHint}>Reduced motion is on, so you&rsquo;re seeing Slide.</span>}
            </div>
            <div className={styles.panelRow}>
              <span className={styles.rowLabel}>Page</span>
              {PAGES.map((p) => (
                <button key={p.key} type="button" className={styles.choice} aria-pressed={p.key === page} onClick={() => setPage(p.key)}>
                  {p.label}
                </button>
              ))}
            </div>
            <div className={styles.panelRow}>
              <span className={styles.rowLabel}>Cursor</span>
              {CURSOR_EFFECTS.map((c) => (
                <button key={c.key} type="button" className={styles.choice} aria-pressed={cursor.includes(c.key)} title={c.hint} onClick={() => toggleCursor(c.key)}>
                  {c.label}
                </button>
              ))}
            </div>
            {cursor.length > 0 && (
              <ul className={styles.cursorNotes}>
                {CURSOR_EFFECTS.filter((c) => cursor.includes(c.key)).map((c) => <li key={c.key}><strong>{c.label}:</strong> {c.hint}</li>)}
              </ul>
            )}
            <div className={styles.panelRow}>
              <span className={styles.rowLabel}>Tint</span>
              <button type="button" className={styles.choice} aria-pressed={tint} onClick={() => setTint((t) => !t)}>
                {tint ? "Matches each app's colors" : "Off"}
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
