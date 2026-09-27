import { PlayingCard } from "../../count21/PlayingCard";
import type { AppEntry } from "@/lib/apps";
import { WatchFrame } from "../WatchFrame";
import type { ShowcaseScene } from "./scenes";
import styles from "./showcase.module.css";

export function SceneDetails({ kind, watch }: { kind: ShowcaseScene["detail"]; watch?: AppEntry["watchScreen"] }) {
  if (!kind || (kind === "watch" && !watch)) return null;
  return (
    <div className={styles.detail} aria-hidden="true">
      {kind === "verse" && (
        <div className={styles.verseCard}>
          <span className={styles.detailEyebrow}>A moment to reflect</span>
          <p>“Create in me a clean heart, O God, and renew a right spirit within me.”</p>
          <span className={styles.verseReference}>Psalm 51:10</span>
          <span className={styles.verseStar}>✦</span>
        </div>
      )}
      {kind === "heart" && (
        <div className={styles.heartCard}>
          <div className={styles.heartTop}><span className={styles.detailEyebrow}>The Line</span><span className={styles.zoneBadge}>IN ZONE</span></div>
          <div className={styles.heartNumber}>144 <span>BPM</span></div>
          <svg className={styles.heartGraph} viewBox="0 0 250 68" fill="none">
            <rect x="0" y="18" width="250" height="34" rx="5" fill="currentColor" opacity=".09" />
            <path d="M0 18H250M0 52H250" stroke="currentColor" strokeDasharray="3 5" opacity=".3" />
            <path className={styles.heartLine} pathLength="1" d="M0 43L12 41L23 46L35 36L48 39L60 28L73 35L86 31L99 40L112 34L125 27L137 33L150 29L163 36L175 28L188 33L200 26L213 32L226 27L238 32L250 29" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className={styles.heartCaption}><span>Easy effort.</span><span>Right where you belong.</span></div>
        </div>
      )}
      {kind === "watch" && watch && (
        <div className={styles.watchDetail}>
          <WatchFrame src={watch.src} alt="" sizes="170px" />
        </div>
      )}
      {kind === "cards" && (
        <div className={styles.cardFan}>
          <PlayingCard rank="K" suit="♠" size={100} className={styles.playingCard} />
          <PlayingCard rank="5" suit="♥" size={100} className={styles.playingCard} />
          <PlayingCard rank="9" suit="♦" size={100} className={styles.playingCard} />
        </div>
      )}
    </div>
  );
}
