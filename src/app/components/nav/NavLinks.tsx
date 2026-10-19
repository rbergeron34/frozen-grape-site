"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { Liquid } from "liquid-gooey";
import styles from "./nav.module.css";

export const NAV_LINKS = [
  { key: "apps", label: "Apps", href: "/#apps" },
  { key: "studio", label: "Studio", href: "/#studio" },
  { key: "support", label: "Support", href: "/support" },
  { key: "contact", label: "Contact", href: "/contact" },
] as const;

export type NavKey = (typeof NAV_LINKS)[number]["key"];

type Box = { x: number; y: number; w: number; h: number };

interface NavLinksProps {
  current: NavKey | null;
  /** "page" for a route match, "location" for a home-page section. */
  currentKind: "page" | "location";
  /** Liquid lens (liquid-gooey Move) or, for reduced motion, a plain sliding pill. */
  liquid: boolean;
  /** box-shadow syntax for the liquid lens; the plain pill reads --lens-shadow from CSS. */
  lensShadow: string;
}

/**
 * The nav links plus a lens behind them that follows the pointer and keyboard
 * focus and rests on the current page. In liquid mode the visible lens is
 * liquid-gooey's silhouette trailing an invisible pill on a spring.
 */
export function NavLinks({ current, currentKind, liquid, lensShadow }: NavLinksProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const lastBox = useRef<Box | null>(null);
  const wasHidden = useRef(true);
  const [hovered, setHovered] = useState<number | null>(null);

  const currentIndex = NAV_LINKS.findIndex((link) => link.key === current);
  const target = hovered ?? (currentIndex >= 0 ? currentIndex : null);

  useLayoutEffect(() => {
    const pill = pillRef.current;
    const track = trackRef.current;
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
        if (box && liquid) {
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
    // The plain pill appears where it's needed rather than sliding in from where it vanished.
    place(!liquid && wasHidden.current);
    wasHidden.current = target === null;
    let first = true;
    const observer = new ResizeObserver(() => { if (first) { first = false; return; } place(true); });
    observer.observe(track);
    return () => observer.disconnect();
  }, [target, liquid]);

  const pill = <span ref={pillRef} className={styles.pill} data-mode={liquid ? "liquid" : "slide"} data-visible="false" aria-hidden="true" />;
  const links = NAV_LINKS.map((link, index) => (
    <Link
      key={link.key}
      ref={(el) => { linkRefs.current[index] = el; }}
      href={link.href}
      className={styles.link}
      aria-current={current === link.key ? currentKind : undefined}
      onPointerEnter={() => setHovered(index)}
      onFocus={() => setHovered(index)}
      onBlur={() => setHovered(null)}
    >
      {link.label}
    </Link>
  ));
  const leave = () => setHovered(null);

  if (liquid) {
    return (
      <Liquid ref={trackRef} className={styles.track} fill="var(--lens)" shadow={lensShadow} blur={5} contrast={18} onPointerLeave={leave}>
        <Liquid.Item effect="move" move={{ springiness: 0.55, wobble: 0.45, stretch: 0.32, trail: 0.45 }}>
          {pill}
        </Liquid.Item>
        {links}
      </Liquid>
    );
  }
  return (
    <div ref={trackRef} className={styles.track} onPointerLeave={leave}>
      {pill}
      {links}
    </div>
  );
}
