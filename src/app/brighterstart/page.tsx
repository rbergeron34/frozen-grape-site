import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nunito } from "next/font/google";
import "./brighterstart.css";

// Branded landing page — the marketing voice and sunrise palette come from the
// app itself (see the app repo's design brief and App Store metadata).

const nunito = Nunito({ subsets: ["latin"], weight: ["700", "800", "900"] });

export const metadata: Metadata = {
  title: "BrighterStart — Wake up and actually get up.",
  description:
    "The alarm that walks you into your morning: dismiss it into a short wake-up mission, then a guided routine. Private by design. The core alarm is free, forever.",
  alternates: { canonical: "/brighterstart" },
  openGraph: {
    type: "website",
    url: "/brighterstart",
    title: "BrighterStart — Wake up and actually get up.",
    description: "The alarm that walks you into your morning.",
  },
};

const steps = [
  ["1", "bs-step-1", "The alarm rings", "Built on Apple's AlarmKit, so it sounds with Clock-level reliability — through Silent mode and Focus."],
  ["2", "bs-step-2", "Prove you're up", "Clearing it takes a small mission: solve the math, take a few steps, or snap a photo that's checked entirely on your device."],
  ["3", "bs-step-3", "Walk into your morning", "Dismissal starts a guided routine, one timed step at a time, mirrored to your Lock Screen and Dynamic Island."],
];

const nightCards = [
  ["🌙", "Wind down", "An evening routine eases you toward lights-out, anchored to your alarm — so a 3 PM wake-up still gets a proper night."],
  ["📵", "Apps go quiet", "The optional blocker locks the apps you choose at night. Finishing your morning routine is what unlocks them."],
  ["🕰", "Bedside clock", "A calm nightstand clock — it only holds the screen awake while your phone is charging."],
];

const shots = [
  ["/assets/apps/brighterstart/screen-2.png", "BrighterStart dismissal mission asking you to solve 8 × 6 before the alarm clears"],
  ["/assets/apps/brighterstart/screen-3.png", "BrighterStart guided routine step with a rising-sun countdown and the next step queued"],
];

export default function BrighterStartPage() {
  return (
    <div className={`bs ${nunito.className}`}>
      <section className="bs-hero">
        <div className="bs-wrap bs-hero-grid">
          <div>
            <p className="bs-kicker">BrighterStart — alarm + morning routine</p>
            <h1>Wake up and <span>actually get up.</span></h1>
            <p className="bs-lede">
              Most alarms end at &ldquo;off&rdquo; — the exact moment mornings fall apart.
              BrighterStart bridges the gap: dismissing your alarm starts a short wake-up
              mission, then a guided routine that carries you from awake to actually up.
            </p>
            <div className="bs-actions">
              <Link href="/#notify" className="bs-button bs-button-primary">Get launch updates</Link>
              <a href="#how" className="bs-button bs-button-secondary">How it works</a>
            </div>
            <div className="bs-proof" aria-label="App highlights">
              <span>No account</span><span>No tracking</span><span>Core alarm free, forever</span>
            </div>
          </div>
          <div className="bs-hero-shot">
            <Image
              src="/assets/apps/brighterstart/screen-1.png"
              alt="BrighterStart home screen with a 6:30 weekday alarm, wake rhythm chart, and morning routine"
              fill
              priority
              sizes="(max-width: 800px) 80vw, 350px"
            />
          </div>
        </div>
      </section>

      <section id="how" className="bs-section bs-wrap">
        <p className="bs-kicker">From ringing to rolling</p>
        <h2>The alarm is just step one.</h2>
        <div className="bs-steps">
          {steps.map(([number, tone, title, description]) => (
            <article key={title} className={tone}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bs-gallery">
        <div className="bs-wrap">
          <p className="bs-kicker">Built for mornings that put up a fight</p>
          <h2>No snooze spiral. No guilt.</h2>
          <p className="bs-copy">
            A wake-up check re-rings until you&rsquo;re truly up, your wake rhythm is charted
            from real mornings — with optional, read-only Apple Health overlay — and skip days
            never break your streak. The routine takes the blame, not you.
          </p>
          <div className="bs-shots">
            {shots.map(([src, alt], index) => (
              <div className={index === 1 ? "bs-shot bs-shot-raised" : "bs-shot"} key={src}>
                <Image src={src} alt={alt} fill sizes="(max-width: 800px) 78vw, 300px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bs-night">
        <div className="bs-wrap">
          <p className="bs-kicker">The night before</p>
          <h2>Good mornings start at night.</h2>
          <div className="bs-night-cards">
            {nightCards.map(([glyph, title, description]) => (
              <article key={title}>
                <span aria-hidden="true">{glyph}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bs-close bs-wrap">
        <div>
          <p className="bs-kicker">Coming soon to iPhone</p>
          <h2>Tomorrow morning can go differently.</h2>
          <p>No account. No tracking. Everything stays on your device and your own iCloud.</p>
        </div>
        <Link href="/#notify" className="bs-button bs-button-primary">Tell me when it launches</Link>
      </section>

      <nav className="bs-links" aria-label="BrighterStart links">
        <Link href="/brighterstart/support">Support</Link>
        <Link href="/brighterstart/privacy">Privacy Policy</Link>
        <Link href="/brighterstart/terms">Terms of Use</Link>
        <Link href="/">Frozen Grape</Link>
      </nav>
    </div>
  );
}
