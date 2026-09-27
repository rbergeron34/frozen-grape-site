"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";
import styles from "./PipActivity.module.css";

export type PipActivityKind = "journal" | "waking" | "reading" | "running" | "cards" | "basketball" | "portrait";

type PipActivityProps = {
  activity?: PipActivityKind;
  active?: boolean;
  inline?: boolean;
  eager?: boolean;
};

// Split only where the existing illustration has a natural foreground edge.
// Both layers reuse the same optimized image, so no extra artwork is downloaded.
const PIECES: Partial<Record<PipActivityKind, { cutout: string; piece: string }>> = {
  waking: {
    cutout: "24.5% 0%, 88% 0%, 88% 49%, 76% 49%, 65% 48.7%, 56% 51%, 47% 54.5%, 36% 60.2%, 30% 54.6%, 26% 47.5%, 24.5% 40%",
    // Extra overlap disappears behind the fixed duvet while Pip stretches.
    piece: "24.5% 0%, 88% 0%, 88% 51%, 76% 52%, 65% 51.7%, 56% 54%, 47% 57.5%, 36% 63.2%, 28% 57%, 24.5% 47%",
  },
  basketball: {
    cutout: "0% 72%, 16% 71.5%, 26% 72.1%, 33% 78%, 33% 100%, 0% 100%",
    piece: "0% 72%, 16% 71.5%, 26% 72.1%, 33% 78%, 33% 100%, 0% 100%",
  },
  portrait: {
    cutout: "71% 0%, 100% 0%, 100% 100%, 65% 100%, 71% 76%",
    piece: "71% 0%, 100% 0%, 100% 100%, 65% 100%, 71% 76%",
  },
};

function ActivityAccents({ activity }: { activity: PipActivityKind }) {
  return (
    <svg className={styles.accents} viewBox="0 0 100 100" fill="none" aria-hidden="true" focusable="false">
      {activity === "journal" && <>
        <ellipse className={`${styles.animated} ${styles.lanternGlow}`} cx="80" cy="65" rx="9" ry="12" fill="#ffcc66" />
        <path className={`${styles.animated} ${styles.writing}`} pathLength="1" d="M42 72l3-.4m-2 1.6 4-.5m-1 1.6 3-.4" stroke="#b4925e" strokeWidth=".6" strokeLinecap="round" />
      </>}
      {activity === "waking" && <g className={`${styles.animated} ${styles.alarm}`} stroke="#c58a31" strokeWidth="1.2" strokeLinecap="round">
        <path d="M3 69q-3 3-2 6M1 66q-4 4-3 9M24 68q4 2 5 6M27 65q5 2 6 7" />
      </g>}
      {activity === "reading" && <g stroke="#a48f9c" strokeWidth="1" strokeLinecap="round">
        <path className={`${styles.animated} ${styles.steam}`} d="M19 77c-5-5 5-7 1-12" />
        <path className={`${styles.animated} ${styles.steam} ${styles.steamSecond}`} d="M23 78c-4-4 5-7 1-11" />
      </g>}
      {activity === "running" && <g className={`${styles.animated} ${styles.speed}`} stroke="#ceef61" strokeWidth="1.4" strokeLinecap="round">
        <path d="M3 56h10M0 63h9M5 70h8" />
        <circle cx="13" cy="91" r="1.5" fill="#ceef61" stroke="none" />
      </g>}
      {activity === "cards" && <g className={`${styles.animated} ${styles.luckyCard}`}>
        <rect x="51" y="55" width="15" height="20" rx="1.6" fill="#fff8e8" stroke="#e7cd9f" strokeWidth=".7" />
        <path d="M58.5 67.5c-9-5.6-4.4-9.2 0-5.7 4.4-3.5 9 .1 0 5.7" fill="#c34839" />
      </g>}
      {activity === "basketball" && <ellipse className={`${styles.animated} ${styles.ballShadow}`} cx="18" cy="99" rx="11" ry="1.2" fill="#785548" />}
      {activity === "portrait" && <g className={`${styles.animated} ${styles.cameraSparkle}`} stroke="#a5c7e6" strokeWidth="1" strokeLinecap="round">
        <path d="M85 42v-4m-5 6-3-3m13 3 3-3" />
        <path d="M86 46l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" fill="#fffdf3" stroke="#d0e4f5" strokeWidth=".4" />
      </g>}
    </svg>
  );
}

/** Chapter artwork is decorative; the real app screen and copy carry the content. */
export function PipActivity({ activity, active = true, inline = false, eager = false }: PipActivityProps) {
  const companionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const companion = companionRef.current;
    if (!companion) return;
    // Own the observer here so a replaced/remounted pose is always observed,
    // including during live preview updates. Don't capture these nodes in a parent.
    const observer = new IntersectionObserver(([entry]) => {
      companion.setAttribute("data-pip-in-view", String(entry.isIntersecting && entry.intersectionRatio >= 0.35));
    }, { threshold: [0, 0.35] });
    const updateVisibility = () => companion.setAttribute("data-page-visible", String(!document.hidden));
    observer.observe(companion);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, [activity]);

  if (!activity) return null;
  const pieces = PIECES[activity];
  const imageProps = {
    src: `/brand/pip/activities/${activity}.png`,
    fill: true,
    sizes: "(max-width: 900px) 156px, (max-width: 942px) 132px, (max-width: 1357px) 14vw, 190px",
    loading: eager ? "eager" as const : "lazy" as const,
  };
  const pieceStyle = pieces ? {
    "--pip-cutout": `polygon(evenodd, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, ${pieces.cutout}, ${pieces.cutout.split(", ")[0]})`,
    "--pip-piece": `polygon(${pieces.piece})`,
  } as CSSProperties : undefined;

  return (
    <div
      ref={companionRef}
      className={`${styles.companion} ${inline ? styles.inline : ""}`}
      data-pip-activity={activity}
      data-active={active}
      aria-hidden="true"
      style={pieceStyle}
    >
      <div className={`${styles.figure} ${styles.animated}`}>
        {pieces && <div className={`${styles.piece} ${styles.animated}`}><Image {...imageProps} alt="" className={styles.artwork} /></div>}
        <div className={`${styles.base} ${styles.animated}`}><Image {...imageProps} alt="" className={styles.artwork} /></div>
        <ActivityAccents activity={activity} />
      </div>
    </div>
  );
}
