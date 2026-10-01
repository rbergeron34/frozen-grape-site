"use client";

import { useLayoutEffect, useRef, useState, type ComponentType, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import { Liquid } from "liquid-gooey";
import { Pip } from "../../components/brand/Pip";
import { useScrolled } from "./hooks";
import { NavLinks, type IndicatorMode, type LinkKey } from "./NavLinks";
import styles from "./navlab.module.css";

export interface VariantProps {
  indicator: IndicatorMode;
  current: LinkKey | null;
  onNavigate: (key: LinkKey, event: MouseEvent<HTMLAnchorElement>) => void;
  /** --n-* custom properties from the app scene behind the bar, when tinting is on. */
  sceneStyle?: CSSProperties;
  tone: "light" | "dark";
  magnet: boolean;
  sheen: boolean;
}

const LABEL = "Main navigation (lab)";

const cx = (...names: (string | false | undefined)[]) => names.filter(Boolean).join(" ");

function Lockup({ compact = false }: { compact?: boolean }) {
  return (
    <span className={styles.lockup} data-compact={compact}>
      <Pip className={styles.pip} priority sizes="40px" />
      <span className={styles.wordmark}>
        <span className={styles.name}>Frozen Grape</span>
        <span className={styles.descriptor}>Studios</span>
      </span>
    </span>
  );
}

function BrandLink({ children, className, scrolled }: { children: ReactNode; className?: string; scrolled?: boolean }) {
  return (
    <a
      href="#main"
      className={className ? `${styles.brandLink} ${className}` : styles.brandLink}
      aria-label="Frozen Grape Studios — home"
      data-scrolled={scrolled}
      onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
    >
      {children}
    </a>
  );
}

const LIGHT_LENS_SHADOW = "0 1px 2px rgba(49,33,61,.16), 0 6px 16px rgba(49,33,61,.13), inset 0 0 0 1px rgba(49,33,61,.06)";
const DARK_LENS_SHADOW = "0 1px 2px rgba(0,0,0,.35)";

/** Today's bar, unchanged, for side-by-side reference. */
function CurrentNav({ onNavigate }: VariantProps) {
  return (
    <nav className={`${styles.root} ${styles.current}`} aria-label={LABEL} data-nav-lab>
      <BrandLink><Lockup /></BrandLink>
      <NavLinks indicator="off" current={null} onNavigate={onNavigate} className={styles.currentTrack} />
    </nav>
  );
}

function GlassNav({ indicator, current, onNavigate, sceneStyle, tone, magnet, sheen }: VariantProps) {
  return (
    <nav className={cx(styles.root, styles.glass, sheen && styles.sheen)} aria-label={LABEL} data-nav-lab data-tone={tone} style={sceneStyle}>
      <BrandLink><Lockup /></BrandLink>
      <NavLinks indicator={indicator} current={current} onNavigate={onNavigate} magnet={magnet} lensShadow={tone === "dark" ? DARK_LENS_SHADOW : LIGHT_LENS_SHADOW} />
    </nav>
  );
}

function IslandNav({ indicator, current, onNavigate, sceneStyle, magnet, sheen }: VariantProps) {
  const scrolled = useScrolled();
  return (
    <nav className={`${styles.root} ${styles.islandWrap}`} aria-label={LABEL} data-nav-lab style={sceneStyle}>
      <div className={cx(styles.island, sheen && styles.sheen)} data-scrolled={scrolled}>
        <BrandLink><Lockup compact={scrolled} /></BrandLink>
        <span className={styles.islandDivider} aria-hidden="true" />
        <NavLinks indicator={indicator} current={current} onNavigate={onNavigate} magnet={magnet} lensShadow={DARK_LENS_SHADOW} />
      </div>
    </nav>
  );
}

function SplitNav({ indicator, current, onNavigate, sceneStyle, tone, magnet, sheen }: VariantProps) {
  const scrolled = useScrolled();
  return (
    <nav className={`${styles.root} ${styles.split}`} aria-label={LABEL} data-nav-lab data-tone={tone} style={sceneStyle}>
      <BrandLink className={cx(styles.splitBrand, sheen && styles.sheen)} scrolled={scrolled}><Lockup /></BrandLink>
      <div className={cx(styles.splitCapsule, sheen && styles.sheen)}>
        <NavLinks indicator={indicator} current={current} onNavigate={onNavigate} magnet={magnet} lensShadow={tone === "dark" ? DARK_LENS_SHADOW : LIGHT_LENS_SHADOW} />
      </div>
    </nav>
  );
}

const MERGE_OVERLAP = 14;
// Slightly underdamped: a little settle without the pills sliding over each other.
const MERGE_SPRING = { stiffness: 220, damping: 27, mass: 1 };

/**
 * Two solid pills that sit at opposite edges at the top of the page and flow
 * together into one island once you scroll (liquid-gooey Morph: blobs in one
 * group bridge and merge as they meet).
 */
function MergeNav({ indicator, current, onNavigate, sceneStyle, magnet }: VariantProps) {
  const scrolled = useScrolled();
  const groupRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const [offsets, setOffsets] = useState({ brand: 0, links: 0 });

  useLayoutEffect(() => {
    const group = groupRef.current;
    const brand = brandRef.current;
    const links = linksRef.current;
    if (!group || !brand || !links) return;
    const measure = () => {
      const width = group.offsetWidth;
      const a = brand.offsetWidth;
      const b = links.offsetWidth;
      const total = a + b - MERGE_OVERLAP;
      if (total >= width) { setOffsets({ brand: 0, links: 0 }); return; }
      const left = (width - total) / 2;
      setOffsets({ brand: left, links: left + a - MERGE_OVERLAP - (width - b) });
    };
    measure();
    const observer = new ResizeObserver(measure);
    [group, brand, links].forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`${styles.root} ${styles.mergeWrap}`} aria-label={LABEL} data-nav-lab style={sceneStyle}>
      <Liquid ref={groupRef} className={styles.mergeGroup} fill="#fff" blur={9} contrast={20} shadow="0 14px 34px rgba(49,33,61,.09), 0 2px 6px rgba(49,33,61,.06)">
        <Liquid.Item x={scrolled ? offsets.brand : 0} transition={MERGE_SPRING} className={styles.mergeItemBrand}>
          <div ref={brandRef} className={styles.mergePill}>
            <BrandLink><Lockup /></BrandLink>
          </div>
        </Liquid.Item>
        <Liquid.Item x={scrolled ? offsets.links : 0} transition={MERGE_SPRING} className={styles.mergeItemLinks}>
          <div ref={linksRef} className={`${styles.mergePill} ${styles.mergePillLinks}`}>
            <NavLinks indicator={indicator} current={current} onNavigate={onNavigate} magnet={magnet} />
          </div>
        </Liquid.Item>
      </Liquid>
    </nav>
  );
}

export type VariantKey = "current" | "glass" | "island" | "split" | "merge";

export const VARIANTS: { key: VariantKey; name: string; blurb: string; Component: ComponentType<VariantProps>; usesIndicator: boolean }[] = [
  { key: "current", name: "Current", usesIndicator: false, Component: CurrentNav,
    blurb: "Today's bar, unchanged — for comparison." },
  { key: "glass", name: "Clear Glass", usesIndicator: true, Component: GlassNav,
    blurb: "Same full-width shape, but clearer glass with a bright rim. A lens follows your cursor and rests on the current page." },
  { key: "island", name: "Island", usesIndicator: true, Component: IslandNav,
    blurb: "A compact dark capsule, like the iPhone's Dynamic Island. Once you scroll it tightens to just Pip and the links." },
  { key: "split", name: "Split", usesIndicator: true, Component: SplitNav,
    blurb: "No bar. Pip stands on the page and the links float in their own glass capsule; Pip gets a glass chip once you scroll." },
  { key: "merge", name: "Merge", usesIndicator: true, Component: MergeNav,
    blurb: "Two solid pills at the top of the page that flow together into one island as you scroll — and split apart again at the top." },
];
