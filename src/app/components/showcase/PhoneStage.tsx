"use client";

import Image from "next/image";
import { APPS, NEUTRAL_ACCENT, NEUTRAL_TINT, type AppEntry } from "@/lib/apps";
import { AppScreen } from "./screens";
import type { ShowcaseState } from "./useShowcaseState";

function IconTile({ app, size }: { app: AppEntry; size: "grid" | "big" }) {
  const cls = size === "grid" ? "tile" : "bigicon-inner";
  if (app.icon) {
    return (
      <div className={cls} style={{ background: app.iconBg }}>
        <Image src={app.icon} alt="" fill sizes="128px" className="object-cover" />
      </div>
    );
  }
  // glyph fallback (coming-soon apps with no real icon yet)
  return (
    <div className={cls} style={{ background: app.iconBg, color: app.accent }}>
      <span className="glyph">{app.fallbackGlyph}</span>
    </div>
  );
}

const DOCK = [
  { key: "phone", d: "M7 4l3 1 1 4-2 1a10 10 0 005 5l1-2 4 1 1 3a2 2 0 01-2 2A15 15 0 015 6a2 2 0 012-2z" },
  { key: "msg", d: "M4 6h16v9H9l-4 4V6z" },
  { key: "safari", d: "M15 9l-2 4-4 2 2-4z" },
  { key: "cam", d: "M4 7h16v12H4z M12 13a3 3 0 100-6 3 3 0 000 6z" },
];

export function PhoneStage({ state }: { state: ShowcaseState }) {
  const activeIndex = state.phase === "home" ? -1 : state.index;
  const active = activeIndex >= 0 ? APPS[activeIndex] : null;
  const inApp = state.phase === "screen";

  const styleVars = {
    "--accent": active?.accent ?? NEUTRAL_ACCENT,
    "--tint": active?.tint ?? NEUTRAL_TINT,
  } as React.CSSProperties;

  return (
    <div className="stage" style={styleVars} aria-hidden="true">
      <div className="phone">
        <span className="side b-mute" />
        <span className="side b-vu" />
        <span className="side b-vd" />
        <span className="side b-pwr" />

        <div className={`screen${inApp ? " in-app" : ""}`}>
          <div className="island" />
          <div className="chrome">
            <span>9:41</span>
            <span>5G&nbsp;&nbsp;100%</span>
          </div>

          {/* layer 1: home grid (shown once at the top) */}
          <div className={`home${state.phase === "home" ? " show" : ""}`}>
            <div className="home-grid">
              {APPS.map((app) => (
                <div className="hicon" key={app.slug}>
                  <IconTile app={app} size="grid" />
                  <span className="lbl">{app.shortName}</span>
                </div>
              ))}
              <div className="hicon more">
                <div className="tile">+</div>
                <span className="lbl">More soon</span>
              </div>
            </div>
            <div className="dock">
              {DOCK.map((d) => (
                <div className="dt" key={d.key}>
                  <svg viewBox="0 0 24 24">
                    <path d={d.d} fill="none" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* layer 2: single enlarged icon ("steps forward", zooms out on open) */}
          <div
            className={`iconstage${state.phase === "icon" ? " show" : ""}${
              state.phase === "screen" ? " zoom" : ""
            }`}
          >
            {active && (
              <>
                <div className={`bigicon${inApp ? " tap" : ""}`} key={active.slug}>
                  <IconTile app={active} size="big" />
                  <span className="ripple" />
                </div>
                <div className="bigname">{active.name}</div>
              </>
            )}
          </div>

          {/* layer 3: app screens */}
          {APPS.map((app, i) => (
            <div
              className={`appview${inApp && i === activeIndex ? " show" : ""}`}
              key={app.slug}
            >
              <AppScreen app={app} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
