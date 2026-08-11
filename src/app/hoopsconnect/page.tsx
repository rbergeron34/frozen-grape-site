import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./hoopsconnect.css";

export const metadata: Metadata = {
  title: "Hoops Slate — Five basketball puzzles. One slate.",
  description:
    "A fresh slate of five quick basketball puzzles every day: Hoop Connections, Lineup, Journey, Crossover, and HoopGrid.",
  alternates: { canonical: "/hoopsconnect" },
  openGraph: {
    type: "website",
    url: "/hoopsconnect",
    title: "Hoops Slate — Five basketball puzzles. One slate.",
    description: "Five daily basketball puzzles, built for the group chat.",
  },
};

const games = [
  ["01", "Hoop Connections", "Sort 16 names into their four hidden squads."],
  ["02", "Lineup", "Guess the mystery player in eight clues."],
  ["03", "Journey", "Name the player from their career path."],
  ["04", "Crossover", "Spot the odd one out across five rounds."],
  ["05", "HoopGrid", "Nine cells, nine guesses. Fill the grid."],
];

const shots = [
  ["/assets/apps/hoops-connect/screen-1.png", "Hoops Slate daily challenge screen with five basketball games"],
  ["/assets/apps/hoops-connect/screen-2.png", "Hoop Connections basketball grouping puzzle"],
  ["/assets/apps/hoops-connect/screen-3.png", "Hoops Slate basketball player puzzle"],
];

export default function HoopsConnectPage() {
  return (
    <div className="hs">
      <section className="hs-hero">
        <div className="hs-wrap hs-hero-grid">
          <div>
            <p className="hs-kicker">A daily basketball puzzle suite</p>
            <h1>HOOPS<br /><span>SLATE</span></h1>
            <p className="hs-tagline">Five puzzles. One slate.</p>
            <p className="hs-lede">
              Every midnight, a fresh slate of five quick games drops for basketball obsessives.
              Play in about a minute, keep your streak alive, then flex the spoiler-free grid in
              the group chat.
            </p>
            <div className="hs-actions">
              <Link href="/#notify" className="hs-button hs-button-primary">Get launch updates</Link>
              <a href="#games" className="hs-button hs-button-secondary">Meet the games</a>
            </div>
            <div className="hs-proof" aria-label="App highlights">
              <span>No ads</span><span>No account</span><span>Fully offline</span>
            </div>
          </div>
          <div className="hs-hero-shot">
            <Image src={shots[0][0]} alt={shots[0][1]} fill priority sizes="(max-width: 850px) 72vw, 360px" />
          </div>
        </div>
      </section>

      <section id="games" className="hs-section hs-wrap">
        <p className="hs-kicker">Today&rsquo;s card</p>
        <h2>Something different every possession.</h2>
        <div className="hs-games">
          {games.map(([number, title, description]) => (
            <article key={title}>
              <span>{number}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="hs-gallery">
        <div className="hs-wrap">
          <p className="hs-kicker">One fresh slate, every day</p>
          <h2>Made for the group chat.</h2>
          <p className="hs-copy">
            Everyone plays the same hand-curated puzzles. Build wins-only streaks, grow your
            career Box Score, and share emoji results without giving away an answer.
          </p>
          <div className="hs-shots">
            {shots.map(([src, alt], index) => (
              <div className={index === 1 ? "hs-shot hs-shot-raised" : "hs-shot"} key={src}>
                <Image src={src} alt={alt} fill sizes="(max-width: 760px) 76vw, 300px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-close hs-wrap">
        <div>
          <p className="hs-kicker">Coming soon to iPhone</p>
          <h2>Your next daily ritual is warming up.</h2>
          <p>No ads. No account. Your game data stays on your phone.</p>
        </div>
        <Link href="/#notify" className="hs-button hs-button-primary">Tell me when it drops</Link>
      </section>

      <nav className="hs-links" aria-label="Hoops Slate links">
        <Link href="/hoopsconnect/support">Support</Link>
        <Link href="/hoopsconnect/privacy">Privacy Policy</Link>
        <Link href="/hoopsconnect/terms">Terms of Use</Link>
        <Link href="/">Frozen Grape</Link>
      </nav>
    </div>
  );
}
