import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JetBrains_Mono, Newsreader } from "next/font/google";
import {
  COMPLETE_INCLUDES, DISCLAIMER, FREE_INCLUDES, HILO, PLATFORMS, PRICE, PRIVACY_POINTS,
  SHOTS, TABLE_RULES, count21Links,
} from "./content";
import { CountDrill, HeroDeal } from "./LiveCount";
import "./count21.css";

// Bespoke, app-branded landing page for Count21 ("Live Count": the page itself
// keeps a count). Facts live in ./content.ts, which mirrors src/lib/apps.ts and
// the App Store listing — update them together. This URL is the Marketing URL
// in App Store Connect.

const serif = Newsreader({ variable: "--font-c21a-serif", subsets: ["latin"], weight: ["500", "600"], display: "swap" });
const mono = JetBrains_Mono({ variable: "--font-c21a-mono", subsets: ["latin"], weight: ["500", "700"], display: "swap" });

export const metadata: Metadata = {
  title: "Count21 — Learn to count cards, one idea at a time",
  description:
    "A Hi-Lo card-counting trainer for iPhone and iPad: seven lessons, five drills and a practice table that explains every decision.",
  alternates: { canonical: "/count21" },
  openGraph: {
    type: "website",
    url: "/count21",
    title: "Count21 — Learn to count cards, one idea at a time",
    description:
      "Seven Hi-Lo lessons, five drills and a practice table that explains every decision. For iPhone and iPad.",
  },
};

const PATH = [
  { step: "01", title: "Learn", body: "Seven short lessons, from why counting works to deviations. Each ends in a ten-question check — nine right and you move on.", shot: SHOTS[0] },
  { step: "02", title: "Drill", body: "Five self-paced drills — card values, running count, true count, basic strategy, deviations — with an explanation after every answer.", shot: SHOTS[2] },
  { step: "03", title: "Play", body: "A six-deck practice table that reviews every decision and checks your count. Accuracy is measured separately from winning.", shot: SHOTS[3] },
];

export default function Count21Page() {
  const links = count21Links();
  return (
    <div className={`c21a ${serif.variable} ${mono.variable}`}>
      <section className="c21a-hero">
        <div className="c21a-wrap c21a-hero-grid">
          <div>
            <div className="c21a-brand">
              <Image src="/assets/apps/count21/icon.png" alt="" width={44} height={44} priority />
              <span>
                Count<b>21</b>
              </span>
              <em>Coming soon</em>
            </div>
            <h1>
              Keep the count.
              <br />
              <span>Trust the play.</span>
            </h1>
            <p className="c21a-lede">
              Count21 teaches blackjack card counting one skill at a time — short lessons, focused
              drills and a practice table that explains your decisions.
            </p>
            <div className="c21a-ctas">
              <Link href={links.notify} className="c21a-btn c21a-btn-amber">Get notified →</Link>
              <a href="#try" className="c21a-btn c21a-btn-ghost">Try a count</a>
            </div>
            <p className="c21a-fine">{PLATFORMS} · Free to start</p>
          </div>
          <HeroDeal />
        </div>
      </section>

      <section className="c21a-hilo" aria-label="Hi-Lo card values">
        {HILO.map((h) => (
          <div key={h.value} className={`c21a-hilo-col ${h.tone}`}>
            <strong>{h.value}</strong>
            <span>{h.ranks}</span>
          </div>
        ))}
      </section>

      <section id="try" className="c21a-wrap c21a-section c21a-try">
        <p className="c21a-kicker">Try it</p>
        <h2>Six cards. One number.</h2>
        <p className="c21a-body">
          This is the running-count drill, straight from the app. Add +1 for 2–6, nothing for 7–9,
          and −1 for tens and aces.
        </p>
        <CountDrill />
      </section>

      <section className="c21a-wrap c21a-section">
        <p className="c21a-kicker">The method</p>
        <h2>Learn it. Drill it. Play it.</h2>
        <div className="c21a-path">
          {PATH.map((p) => (
            <article key={p.step} className="c21a-path-card">
              <div className="c21a-phone">
                <Image src={p.shot.src} alt={p.shot.alt} fill sizes="(max-width: 880px) 70vw, 260px" />
              </div>
              <span className="c21a-step">{p.step}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="c21a-wrap c21a-section c21a-split">
        <div>
          <p className="c21a-kicker">Nothing hidden</p>
          <h2>See what&rsquo;s left in the shoe.</h2>
          <p className="c21a-body">
            Inspect remaining cards by rank, reveal running and true counts, copy the shuffle seed
            and replay its exact deck order. Review your hand history or export it as CSV. Hints
            and shoe inspection mark a hand as assisted, so your stats stay honest.
          </p>
          <ul className="c21a-rules">
            {TABLE_RULES.map((r) => <li key={r}>{r}</li>)}
          </ul>
        </div>
        <div className="c21a-phone c21a-phone-lg">
          <Image src={SHOTS[4].src} alt={SHOTS[4].alt} fill sizes="(max-width: 880px) 70vw, 320px" />
        </div>
      </section>

      <section className="c21a-wrap c21a-section">
        <p className="c21a-kicker">Pricing</p>
        <h2>Try it free. Unlock it once.</h2>
        <div className="c21a-price">
          <div className="c21a-price-card">
            <h3>Free download</h3>
            <p className="c21a-amount">$0</p>
            <ul>{FREE_INCLUDES.map((f) => <li key={f}>{f}</li>)}</ul>
          </div>
          <div className="c21a-price-card is-hero">
            <h3>Count21 Complete</h3>
            <p className="c21a-amount">{PRICE} <small>one time</small></p>
            <ul>{COMPLETE_INCLUDES.map((f) => <li key={f}>{f}</li>)}</ul>
          </div>
        </div>
        <p className="c21a-fine c21a-center">No subscription. No ads. In-app purchase via the App Store.</p>
      </section>

      <section className="c21a-wrap c21a-section">
        <div className="c21a-privacy">
          {PRIVACY_POINTS.map((p) => (
            <div key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="c21a-wrap c21a-close">
        <h2>A clear idea. A little practice.</h2>
        <div className="c21a-ctas c21a-center-row">
          <Link href={links.notify} className="c21a-btn c21a-btn-amber">Tell me when it launches →</Link>
        </div>
        <p className="c21a-disclaimer">{DISCLAIMER} Rated 18+.</p>
        <nav className="c21a-legal" aria-label="Count21 links">
          <Link href={links.support}>Support</Link>
          <Link href={links.privacy}>Privacy Policy</Link>
          <Link href={links.terms}>Terms of Use</Link>
          <Link href={links.details}>App details</Link>
          <Link href="/">Frozen Grape</Link>
        </nav>
      </footer>
    </div>
  );
}
