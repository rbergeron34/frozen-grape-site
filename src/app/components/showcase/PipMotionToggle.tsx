import styles from "./PipMotionToggle.module.css";

export function PipMotionToggle({ paused, onToggle, compact = false }: { paused: boolean; onToggle: () => void; compact?: boolean }) {
  return (
    <button
      type="button"
      className={`${styles.toggle} ${compact ? styles.compact : ""}`}
      onClick={onToggle}
      aria-label={paused ? "Resume character animations" : "Pause character animations"}
      aria-pressed={paused}
    >
      <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" aria-hidden="true">
        {paused ? <path d="M4 2.5v11L13 8z" /> : <path d="M3 2.5h3.5v11H3zm6.5 0H13v11H9.5z" />}
      </svg>
      <span>{paused ? "Play" : "Pause"}{!compact && " animation"}</span>
    </button>
  );
}
