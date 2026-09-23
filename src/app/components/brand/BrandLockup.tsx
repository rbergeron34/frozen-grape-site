import { Pip } from "./Pip";
import styles from "./brand.module.css";

export function BrandLockup({ priority = false }: { priority?: boolean }) {
  return (
    <span className={styles.lockup}>
      <Pip className={styles.character} priority={priority} sizes="40px" />
      <span className={styles.wordmark}>
        <span className={styles.name}>Frozen Grape</span>
        <span className={styles.descriptor}>Studios</span>
      </span>
    </span>
  );
}
