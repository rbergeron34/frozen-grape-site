import Image from "next/image";
import styles from "./WatchFrame.module.css";

// An Apple Watch drawn in CSS around a real 416×496 watchOS capture (the
// 46mm Series 11 screen). Size it by width; the band stubs spill above and
// below the case, so leave room for them.
export function WatchFrame({
  src,
  alt,
  sizes = "200px",
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`${styles.watch} ${className}`}>
      <span className={`${styles.band} ${styles.bandTop}`} aria-hidden="true" />
      <span className={`${styles.band} ${styles.bandBottom}`} aria-hidden="true" />
      <div className={styles.case}>
        <span className={styles.crown} aria-hidden="true" />
        <span className={styles.sideButton} aria-hidden="true" />
        <div className={styles.screen}>
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
        </div>
      </div>
    </div>
  );
}
