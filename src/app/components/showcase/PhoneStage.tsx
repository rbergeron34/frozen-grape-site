"use client";

import Image from "next/image";
import { FEATURED_APPS } from "@/lib/apps";
import { AppScreen } from "./screens";
import { SceneDetails } from "./SceneDetails";
import { sceneFor } from "./scenes";
import type { ShowcaseState } from "./useShowcaseState";
import styles from "./showcase.module.css";

export function PhoneStage({ state }: { state: ShowcaseState }) {
  const active = FEATURED_APPS[state.activeIndex];
  return (
    <div className={styles.phoneRig} data-phone-rig aria-hidden="true">
      <div className={styles.phoneShadow} />
      <div className={styles.phoneBody}>
        <span className={styles.volumeButton} /><span className={styles.powerButton} />
        <div className={styles.phoneScreen}>
          <div className={styles.homeScreen}>
            <div className={styles.phoneChrome}><span>9:41</span><span>••• ▰</span></div>
            <span className={styles.island} />
            <div className={styles.homeGreeting}><span>A little more thoughtful.</span><strong>Your every day.</strong></div>
            <div className={styles.homeGrid}>
              {FEATURED_APPS.map((app) => (
                <div className={styles.homeApp} key={app.slug}>
                  <div className={styles.homeTile} data-grid-icon><Image src={app.icon} alt="" fill sizes="64px" /></div>
                  <span>{app.shortName}</span>
                </div>
              ))}
            </div>
            <div className={styles.phoneSignature}><span>✦</span> Made by Frozen Grape</div>
          </div>
          {active && (
            <div className={styles.openingIcon} key={active.slug}>
              <Image src={active.icon} alt="" width={160} height={160} sizes="(max-height: 650px) 100px, 160px" />
              <span>{active.name}</span>
            </div>
          )}
          {FEATURED_APPS.map((app, index) => (
            <div className={styles.screenLayer} data-screen-layer data-active={index === state.activeIndex} key={app.slug}>
              <AppScreen app={app} eager={index === state.activeIndex} />
            </div>
          ))}
          <div className={styles.glassReflection} />
        </div>
      </div>
      <SceneDetails kind={active ? sceneFor(active.slug).detail : undefined} />
    </div>
  );
}
