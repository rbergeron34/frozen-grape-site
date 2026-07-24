"use client";

import { Fragment } from "react";
import { FEATURED_APPS } from "@/lib/apps";
import { PhoneStage } from "./PhoneStage";
import { AppScreen } from "./screens";
import { AppCta } from "./AppCta";
import { useShowcaseState } from "./useShowcaseState";

function FeatureCards({ app }: { app: (typeof FEATURED_APPS)[number] }) {
  return (
    <div className="fcards">
      {app.showcaseFeatures.map((f) => (
        <div className="fcard" key={f.title}>
          <span className="fi">{f.glyph}</span>
          <b>
            {f.title}
            <small>{f.desc}</small>
          </b>
        </div>
      ))}
    </div>
  );
}

// Desktop: the pinned phone + scroll steps. Hidden under 900px / reduced-motion
// (CSS), where MobileAppList renders the same content statically.
export function AppShowcase() {
  const state = useShowcaseState();

  return (
    <>
      <section className="story" id="apps">
        <PhoneStage state={state} />

        <div className="copy">
          <section data-step="home" className="step home-step">
            <div className="kicker">
              <span className="sw" />
              Frozen Grape
            </div>
            <h2>Your apps, as a home screen.</h2>
            <p className="lead">
              A familiar place to meet the studio. Scroll, and each app steps forward and opens.
            </p>
          </section>

          {FEATURED_APPS.map((app, i) => (
            <Fragment key={app.slug}>
              <section data-step={`icon-${i}`} className="step icon-step">
                <div className="kicker">
                  <span className="sw" />
                  {app.category}
                  {app.status === "coming-soon" && <span className="soon-tag">Coming soon</span>}
                </div>
                <h2>{app.name}</h2>
                <p className="lead">{app.lead}</p>
              </section>

              <section data-step={`screen-${i}`} className="step screen-step">
                <div className="kicker">
                  <span className="sw" />
                  {app.name}
                </div>
                <h2>{app.screenHeadline}</h2>
                <p className="lead">{app.lead}</p>
                <FeatureCards app={app} />
                <AppCta app={app} />
              </section>
            </Fragment>
          ))}
        </div>
      </section>

      {/* Static fallback: mobile + prefers-reduced-motion (CSS-controlled) */}
      <div className="m-apps" id="apps-mobile">
        {FEATURED_APPS.map((app) => (
          <div
            className="m-app"
            key={app.slug}
            style={
              {
                "--accent": app.accent,
                "--tint": app.tint,
              } as React.CSSProperties
            }
          >
            <div className="m-badge">
              <div className="m-tile" style={{ background: app.iconBg }}>
                {app.icon ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={app.icon} alt="" />
                ) : (
                  <span className="glyph" style={{ color: app.accent }}>
                    {app.fallbackGlyph}
                  </span>
                )}
              </div>
              <span className="nm">{app.name}</span>
              {app.status === "coming-soon" && <span className="soon-tag">Coming soon</span>}
            </div>

            <div className="m-phone">
              <div className="m-screen">
                <AppScreen app={app} />
              </div>
            </div>

            <p className="lead">{app.lead}</p>
            <FeatureCards app={app} />
            <AppCta app={app} />
          </div>
        ))}
      </div>
    </>
  );
}
