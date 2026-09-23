import Image from "next/image";
import { AppShowcase } from "./components/showcase/AppShowcase";
import { NotifyForm } from "./components/NotifyForm";
import { Pip } from "./components/brand/Pip";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <AppShowcase />

      <div id="studio" className={styles.ending}>
        <section className={styles.studio} aria-labelledby="studio-title">
          <div className={styles.map} aria-hidden="true">
            <Image src="/brand/texas-outline.svg" alt="" width={360} height={340} className={styles.texas} />
            <div className={styles.marker}>
              <Pip pose="macbook" sizes="(max-width: 440px) 94px, 137px" />
            </div>
          </div>
          <h2 id="studio-title" className="font-extrabold tracking-[-0.03em] text-[clamp(28px,3.4vw,40px)]">
            Made in Austin.
          </h2>
          <p className="mt-4 mx-auto max-w-[42ch] text-[var(--muted)] text-lg">
            An independent studio building apps we want to use ourselves.
          </p>
        </section>

        <section id="notify" className={styles.notify}>
          <h2 className="font-extrabold tracking-[-0.03em] text-[clamp(24px,3vw,32px)]">
            Find out what&rsquo;s next.
          </h2>
          <p className="mt-3 mx-auto max-w-[42ch] text-[var(--muted)]">
            An email when a new app launches.
          </p>
          <NotifyForm />
        </section>
      </div>
    </>
  );
}
