"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";
import { APPS } from "@/lib/apps";
import { BrandLockup } from "../brand/BrandLockup";
import { NavLinks, type NavKey } from "./NavLinks";
import { useHomeSection, useReducedMotion, useScrolled, useSceneTone, type HomeSection } from "./useNavState";
import styles from "./nav.module.css";

const APP_PATHS = APPS.flatMap((app) => (app.landingPath ? [app.landingPath] : []));

function currentFor(pathname: string, section: HomeSection): NavKey | null {
  if (pathname === "/") return section;
  if (pathname === "/support" || pathname.endsWith("/support")) return "support";
  if (pathname === "/contact") return "contact";
  if (pathname.startsWith("/apps/") || APP_PATHS.some((path) => pathname === path || pathname.startsWith(`${path}/`))) return "apps";
  return null;
}

const LIGHT_LENS_SHADOW = "0 1px 2px rgba(49,33,61,.16), 0 6px 16px rgba(49,33,61,.13), inset 0 0 0 1px rgba(49,33,61,.06)";
const DARK_LENS_SHADOW = "0 1px 2px rgba(0,0,0,.35)";

/**
 * Split top nav: Pip's lockup stands on the page (gaining a glass chip once you
 * scroll) and the links float in their own glass capsule with a liquid lens.
 * Over the home showcase, both take on the colors of the app on screen.
 */
export function SiteNav() {
  const pathname = usePathname();
  const scrolled = useScrolled();
  const reduced = useReducedMotion();
  const section = useHomeSection(pathname === "/");
  const scene = useSceneTone(pathname);
  const current = currentFor(pathname, section);
  const tone = scene?.dark ? "dark" : "light";
  const sceneVars = scene
    ? ({ "--n-bg": scene.bg, "--n-ink": scene.ink, "--n-muted": scene.muted, "--n-accent": scene.accent } as CSSProperties)
    : undefined;

  return (
    <nav className={styles.nav} aria-label="Main navigation" data-tone={tone} style={sceneVars}>
      <Link href="/" className={styles.brand} data-scrolled={scrolled} aria-label="Frozen Grape Studios — home">
        <BrandLockup priority />
      </Link>
      <div className={styles.capsule}>
        <NavLinks
          current={current}
          currentKind={pathname === "/" ? "location" : "page"}
          liquid={!reduced}
          lensShadow={tone === "dark" ? DARK_LENS_SHADOW : LIGHT_LENS_SHADOW}
        />
      </div>
    </nav>
  );
}
