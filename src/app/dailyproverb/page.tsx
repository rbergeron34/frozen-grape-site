import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Lora } from "next/font/google";
import "./dailyproverb.css";

// Branded landing page for Daily Proverb — cream paper, deep green, gold
// citations, book serif: the app's own reading aesthetic.

const lora = Lora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-dp-serif",
});

const APP_STORE_URL = "https://apps.apple.com/us/app/daily-wisdom-book-of-proverbs/id977329614";

export const metadata: Metadata = {
  title: "Daily Proverb — One proverb a day, beautifully set.",
  description:
    "A clean, distraction-free way to read, journal, and reflect on the Book of Proverbs — one verse a day, with private iCloud sync and no feeds.",
  alternates: { canonical: "/dailyproverb" },
  openGraph: {
    type: "website",
    url: "/dailyproverb",
    title: "Daily Proverb — One proverb a day, beautifully set.",
    description: "A small daily pause with the Book of Proverbs.",
  },
};

const features = [
  ["✦", "A verse a day", "365 curated proverbs, one each day — beautifully typeset in a clean, distraction-free reader."],
  ["✎", "Journal & favorites", "Keep private notes on any verse and save the ones that resonate. Everything syncs through your own iCloud."],
  ["❍", "Streaks & share cards", "A gentle reading streak, and beautiful cards for sharing a verse without a screenshot."],
  ["▦", "Widgets & reminders", "Today's proverb on your Home and Lock Screens, plus up to three daily reminders at times you choose."],
];

const shots = [
  ["/assets/apps/daily-proverb/screen-1.png", "Daily Proverb's Today screen with a Proverbs verse, reading streak, and saved reflection"],
  ["/assets/apps/daily-proverb/screen-2.png", "Daily Proverb's Browse screen with searchable Proverbs verses"],
];

export default function DailyProverbPage() {
  return (
    <div className={`dp ${lora.variable}`}>
      <section className="dp-hero">
        <div className="dp-wrap dp-hero-grid">
          <div>
            <p className="dp-kicker">The Book of Proverbs, daily</p>
            <h1 className="dp-serif">One proverb a day, <em>beautifully set.</em></h1>
            <p className="dp-lede">
              Daily Proverb is a small daily pause: one verse from the Book of Proverbs each
              morning, room to journal what it stirs, and nothing else pulling at your attention.
            </p>
            <div className="dp-actions">
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="dp-button dp-button-primary">Download on the App Store</a>
              <a href="#inside" className="dp-button dp-button-secondary">What&rsquo;s inside</a>
            </div>
            <div className="dp-proof" aria-label="App highlights">
              <span>365 curated verses</span><span>No feeds, no ads</span><span>Private iCloud sync</span>
            </div>
          </div>
          <div className="dp-hero-shot">
            <Image src={shots[0][0]} alt={shots[0][1]} fill priority sizes="(max-width: 800px) 80vw, 340px" />
          </div>
        </div>
      </section>

      <section className="dp-verse">
        <div className="dp-wrap">
          <div className="dp-verse-mark dp-serif" aria-hidden="true">&ldquo;</div>
          <blockquote className="dp-serif">
            As iron sharpens iron, so one person sharpens another.
          </blockquote>
          <cite>Proverbs 27:17 &middot; NIV</cite>
        </div>
      </section>

      <section id="inside" className="dp-section dp-wrap">
        <p className="dp-kicker">What&rsquo;s inside</p>
        <h2 className="dp-serif">Everything a quiet habit needs. Nothing more.</h2>
        <div className="dp-features">
          {features.map(([glyph, title, description]) => (
            <article key={title}>
              <span aria-hidden="true">{glyph}</span>
              <h3 className="dp-serif">{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dp-gallery">
        <div className="dp-wrap">
          <p className="dp-kicker">Free to read, every day</p>
          <h2 className="dp-serif">No feeds. Just a moment to think.</h2>
          <p className="dp-copy">
            The daily verse is free in the NIV translation, forever. Premium adds KJV, NLT, and
            ESV — monthly and annual plans include a 3-day free trial, or unlock it once with
            Lifetime.
          </p>
          <div className="dp-shots">
            {shots.map(([src, alt], index) => (
              <div className={index === 1 ? "dp-shot dp-shot-raised" : "dp-shot"} key={src}>
                <Image src={src} alt={alt} fill sizes="(max-width: 800px) 78vw, 300px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dp-close dp-wrap">
        <div>
          <p className="dp-kicker">Free on the App Store</p>
          <h2 className="dp-serif">Begin tomorrow morning.</h2>
          <p>No account. No tracking. Your notes stay in your own iCloud.</p>
        </div>
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="dp-button dp-button-primary">Download Daily Proverb</a>
      </section>

      <nav className="dp-links" aria-label="Daily Proverb links">
        <Link href="/dailyproverb/support">Support</Link>
        <Link href="/apps/daily-proverb/privacy">Privacy Policy</Link>
        <Link href="/apps/daily-proverb/terms">Terms of Use</Link>
        <Link href="/">Frozen Grape</Link>
      </nav>
    </div>
  );
}
