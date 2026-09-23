"use client";

import { useRef, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_APPS } from "@/lib/apps";
import { PhoneStage } from "./PhoneStage";
import { AppScreen } from "./screens";
import { AppCta } from "./AppCta";
import { SceneDetails } from "./SceneDetails";
import { Pip } from "../brand/Pip";
import { ORBITS, sceneFor, sceneStyle, STUDIO_SCENE } from "./scenes";
import { useShowcaseState } from "./useShowcaseState";
import styles from "./showcase.module.css";

export function AppShowcase() {
  const root = useRef<HTMLDivElement>(null);
  const state = useShowcaseState(root);
  const active = FEATURED_APPS[state.activeIndex];
  const theme = active ? sceneFor(active.slug) : STUDIO_SCENE;

  return (
    <div ref={root} className={styles.experience} style={sceneStyle(theme)}>
      <div className={styles.canvas} data-canvas>
        <div className={styles.backdrop} aria-hidden="true" />
        <div className={styles.stageWorld} data-stage-world>
          <div className={styles.stageRings} aria-hidden="true"><i /><i /><i /></div>
          <PhoneStage state={state} />
          <div className={styles.orbits} aria-hidden="true">
            {FEATURED_APPS.map((app, index) => {
              const orbit = ORBITS[index % ORBITS.length];
              return (
                <div key={app.slug} className={styles.orbit} data-orbit style={{
                  left: `${orbit.x * 100}%`, top: `${orbit.y * 100}%`,
                  "--orbit-size": `${orbit.size}px`, "--orbit-angle": `${orbit.angle}deg`,
                } as CSSProperties}>
                  <Image src={app.icon} alt="" fill sizes="112px" priority />
                </div>
              );
            })}
          </div>
          <div className={styles.assemblyCaption} aria-hidden="true"><span>SEVEN SMALL APPS.</span><strong>A home for your every day.</strong></div>
        </div>
        <nav className={styles.appRail} aria-label="Explore our apps" inert={!state.showNavigation} data-visible={state.showNavigation}>
          <span className={styles.railLabel}>THE APPS</span>
          {FEATURED_APPS.map((app, index) => (
            <a key={app.slug} href={`#app-${app.slug}`} aria-label={`Explore ${app.name}`} aria-current={state.activeIndex === index ? "step" : undefined}>
              <Image src={app.icon} alt="" width={40} height={40} />
              <span className={styles.railTooltip}>{app.name}</span>
            </a>
          ))}
          <span className={styles.railCount}>{String(Math.max(0, state.activeIndex) + 1).padStart(2, "0")} <span>/ {String(FEATURED_APPS.length).padStart(2, "0")}</span></span>
        </nav>
      </div>
      <header className={styles.intro} data-intro>
        <div className={styles.heroContent}>
          <Pip className={styles.heroPip} priority sizes="(max-height: 650px) 52px, 88px" />
          <span className={styles.studioBadge}><span />Indie iOS studio · Austin</span>
          <h1>Worth a spot on<br /><span>your screen.</span></h1>
          <p>Useful tools. Daily rituals. Games you&rsquo;ll come back to. Explore the apps we&rsquo;re building at Frozen Grape.</p>
          <div className={styles.heroActions} inert={!state.heroVisible}><Link href="#apps" className="btn btn-dark">Find your next app <span aria-hidden="true">↗</span></Link></div>
          <div className={styles.mobileIcons} aria-hidden="true">{FEATURED_APPS.map((app) => <Image key={app.slug} src={app.icon} alt="" width={44} height={44} />)}</div>
          <div className={styles.scrollHint}><span>GOOD THINGS UNFOLD</span><span className={styles.scrollLine} /></div>
        </div>
      </header>
      <div id="apps" className={styles.appsAnchor} />
      {FEATURED_APPS.map((app, index) => {
        const scene = sceneFor(app.slug);
        return (
          <section key={app.slug} id={`app-${app.slug}`} className={styles.chapter} data-chapter aria-labelledby={`title-${app.slug}`} style={sceneStyle(scene)}>
            <div className={styles.chapterInner}>
              <div className={styles.chapterHeading}>
                <div className={styles.chapterEyebrow}><span>{String(index + 1).padStart(2, "0")} / {String(FEATURED_APPS.length).padStart(2, "0")}</span><i />{app.category}</div>
                <div className={styles.appIdentity}>
                  <Image src={app.icon} alt="" width={56} height={56} sizes="(max-width: 900px) 48px, 56px" />
                  <div className={styles.appIdentityText}>
                    <span>{app.name}</span>
                    {app.status === "coming-soon" && <small>Coming soon</small>}
                  </div>
                </div>
                <h2 id={`title-${app.slug}`}>{app.screenHeadline}</h2>
                <p className={styles.lead}>{app.lead}</p>
              </div>
              <div className={styles.inlineVisual}>
                <div className={styles.inlinePhone}><div className={styles.inlineScreen}><AppScreen app={app} /></div><SceneDetails kind={scene.detail} /></div>
              </div>
              <div className={styles.chapterInfo}>
                <div className={styles.features}>{app.showcaseFeatures.map((feature) => (
                  <div className={styles.feature} key={feature.title}><span className={styles.featureGlyph} aria-hidden="true">{feature.glyph}</span><div><h3>{feature.title}</h3><p>{feature.desc}</p></div></div>
                ))}</div>
                <AppCta app={app} className={styles.sceneCta} />
              </div>
            </div>
          </section>
        );
      })}
      <div className={styles.outro} aria-hidden="true" />
    </div>
  );
}
