import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IBM_Plex_Mono, Playfair_Display } from "next/font/google";
import { getApp } from "@/lib/apps";
import "./guidinglight.css";

// Bespoke, app-branded landing page for Guiding Light. Everything factual here
// (features, privacy claims, what's free) mirrors src/lib/apps.ts and
// /guidinglight/privacy — update them together. Visual language follows the
// app itself: parchment paper, ink line-art, a brass lantern glow, and
// Scripture set in serif italic.

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const APP_SLUG = "guiding-light";

export const metadata: Metadata = {
  title: "Guiding Light — A daily verse, a private journal, a gentle companion",
  description:
    "A daily Bible journal for iPhone. A cited verse each morning, a short reflection at night, and a private journal encrypted on your device — with a companion that asks good questions instead of giving easy answers.",
  alternates: { canonical: "/guidinglight" },
  openGraph: {
    type: "website",
    url: "/guidinglight",
    title: "Guiding Light — A daily verse, a private journal, a gentle companion",
    description:
      "A cited verse each morning, a short reflection at night, and a private journal encrypted on your device. Five offline translations, audio narration, and no streak guilt.",
  },
};

const SHOTS = [
  {
    src: "/assets/apps/guiding-light/screen-1.png",
    caption: "Today — a cited verse, and room to respond",
    alt: "Guiding Light's Today screen with a cited Psalm, a reading streak, and today's reading plan",
  },
  {
    src: "/assets/apps/guiding-light/screen-2.png",
    caption: "Reading — Matthew 5, with narration",
    alt: "Guiding Light's reading screen showing Matthew 5 with audio narration, Mark read, and Reflect",
  },
];

const FEATURES = [
  { glyph: "✦", title: "A daily verse", desc: "Cited Scripture each morning, and a short reflection to close the day." },
  { glyph: "✎", title: "Private journal", desc: "Encrypted on your device with AES-256 and unlocked with Face ID." },
  { glyph: "❍", title: "A gentle companion", desc: "Good questions and verified Scripture — never easy answers." },
  { glyph: "◈", title: "Themes & answered prayers", desc: "Recurring threads noticed on-device, from your own writing." },
  { glyph: "♪", title: "Audio narration", desc: "Read along as you listen, cached on your phone for offline days." },
  { glyph: "▤", title: "Five translations", desc: "Fully offline, and every verse arrives with its citation." },
];

const MODES = [
  "Gratitude",
  "Prayer",
  "Sermon notes",
  "SOAP",
  "Examen",
  "Free writing",
];

export default function GuidingLightPage() {
  const app = getApp(APP_SLUG);
  const privacyHref = app?.legal?.privacy ?? "/privacy";
  const termsHref = app?.legal?.terms ?? "/terms";

  return (
    <div className={`gl ${playfair.variable} ${plexMono.variable}`}>
      <div className="gl-bleed">
        {/* ---------- hero ---------- */}
        <section className="gl-hero">
          <div className="gl-wrap gl-hero-grid">
            <div>
              <div>
                <span className="gl-badge">
                  <i />
                  Coming soon
                </span>
              </div>

              <Image
                src="/assets/apps/guiding-light/icon.png"
                alt=""
                aria-hidden="true"
                width={62}
                height={62}
                className="gl-lantern"
              />

              <h1 className="gl-mark">
                Guiding <span className="gl-lit">Light</span>
              </h1>

              <p className="gl-tag">A daily verse, a private journal, a gentle companion.</p>
              <p className="gl-sub">
                A quiet place to read and respond. Scripture arrives cited, your journal stays
                encrypted on your phone, and nothing here asks you to keep a streak alive.
              </p>

              <div className="gl-ctas">
                <Link href="/#notify" className="gl-btn gl-btn-ink">
                  Get notified →
                </Link>
                <Link href={`/apps/${APP_SLUG}`} className="gl-btn gl-btn-ghost">
                  App details
                </Link>
              </div>
            </div>

            <div className="gl-phone">
              <div className="gl-phone-screen">
                <Image
                  src={SHOTS[0].src}
                  alt={SHOTS[0].alt}
                  fill
                  priority
                  sizes="(max-width: 880px) 320px, 320px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- stat strip ---------- */}
        <div className="gl-stats">
          <div className="gl-stat">
            <div className="gl-num">Morning &amp; night</div>
            <p>A cited verse to begin the day, a short reflection to close it.</p>
          </div>
          <div className="gl-stat">
            <div className="gl-num">Encrypted</div>
            <p>Your entries are locked on your device with a key only you hold.</p>
          </div>
          <div className="gl-stat">
            <div className="gl-num">Five translations</div>
            <p>All offline, all cited — read the same passage in another voice.</p>
          </div>
        </div>

        {/* ---------- the daily rhythm ---------- */}
        <section className="gl-wrap gl-rhythm">
          <span className="gl-micro">The rhythm</span>
          <h2>
            A verse, then <span className="gl-brass">room to answer.</span>
          </h2>
          <p className="gl-body">
            Each morning opens with one verse, cited and set to be read slowly — not a feed, not a
            card stack. Tap Reflect and the same screen becomes a place to write back. In the
            evening, a short reflection closes the loop.
          </p>
          <div className="gl-verse">
            <p className="gl-verse-text">
              &ldquo;Create in me a clean heart, O God, and renew a right spirit within me.&rdquo;
            </p>
            <div className="gl-verse-cite">
              <span>Psalm 51:10 · BSB</span>
              <span>Reflect →</span>
            </div>
          </div>
        </section>

        {/* ---------- reading ---------- */}
        <section className="gl-wrap gl-row gl-flip">
          <div className="gl-row-copy">
            <span className="gl-micro">The reading</span>
            <h2>
              Read it, or
              <br />
              <span className="gl-brass">be read to.</span>
            </h2>
            <p className="gl-body">
              Reading plans move a chapter at a time. Press play and narration follows along with
              you, so a passage can be read or listened to on the walk to work. Mark it read, or go
              straight to reflecting on it.
            </p>
            <ul className="gl-notes">
              <li>Berean, WEB, KJV, ASV, Young&rsquo;s — all offline</li>
              <li>Every verse arrives with its citation</li>
              <li>Audio cached after the first listen</li>
            </ul>
          </div>
          <div className="gl-phone">
            <div className="gl-phone-screen">
              <Image src={SHOTS[1].src} alt={SHOTS[1].alt} fill sizes="(max-width: 880px) 320px, 400px" />
            </div>
          </div>
        </section>

        {/* ---------- journal + modes ---------- */}
        <section className="gl-wrap gl-row">
          <div className="gl-row-copy">
            <span className="gl-micro">The journal</span>
            <h2>
              Written for
              <br />
              <span className="gl-brass">one reader.</span>
            </h2>
            <p className="gl-body">
              Entries are encrypted on your iPhone with AES-256 and opened with Face ID. The key
              lives in your device&rsquo;s Keychain and never leaves it — not to iCloud, not to us.
              We can&rsquo;t read what you write, which is the whole point. Start blank, or pick a
              mode that gives the page a shape.
            </p>
            <div className="gl-modes">
              {MODES.map((m) => (
                <b key={m}>{m}</b>
              ))}
            </div>
          </div>
          <div className="gl-row-copy">
            <span className="gl-micro">The companion</span>
            <h2>
              Questions,
              <br />
              <span className="gl-brass">not answers.</span>
            </h2>
            <p className="gl-body">
              When you finish an entry, the companion can offer one reflective question and point
              you to Scripture that actually says what it&rsquo;s quoted as saying. It never plays
              pastor, never diagnoses, and never tells you what your life means. Prefer to write
              alone? Local-only mode turns it off entirely.
            </p>
            <p className="gl-body">
              Over time, an on-device pass over your own writing surfaces the threads you keep
              returning to — and the prayers you once marked, now answered.
            </p>
          </div>
        </section>

        {/* ---------- features ---------- */}
        <section className="gl-wrap gl-features">
          <span className="gl-micro">What&rsquo;s inside</span>
          <h2 style={{ marginTop: 12 }}>Built for the quiet hour.</h2>
          <div className="gl-fgrid">
            {FEATURES.map((f) => (
              <div className="gl-fcard" key={f.title}>
                <span aria-hidden="true">{f.glyph}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- gallery ---------- */}
        <section className="gl-wrap gl-gallery">
          <span className="gl-micro">Screens</span>
          <h2 style={{ marginTop: 12 }}>A day in the app.</h2>
          <div className="gl-shots">
            {SHOTS.map((s) => (
              <figure className="gl-shot" key={s.src}>
                <div className="gl-phone">
                  <div className="gl-phone-screen">
                    <Image src={s.src} alt={s.alt} fill sizes="(max-width: 880px) 45vw, 300px" />
                  </div>
                </div>
                <figcaption>
                  <p>{s.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ---------- privacy ---------- */}
        <section className="gl-wrap gl-privacy">
          <span className="gl-micro">Your data</span>
          <h2 style={{ marginTop: 12 }}>
            We can&rsquo;t read it, <span className="gl-brass">and we don&rsquo;t try.</span>
          </h2>
          <div className="gl-plist">
            <div className="gl-pitem">
              <i>✓</i>
              <p>
                <strong>Encrypted with your key.</strong> Entries use AES-256-GCM, with the key
                held in your iPhone&rsquo;s Keychain behind Face ID. It never leaves the device.
              </p>
            </div>
            <div className="gl-pitem">
              <i>✓</i>
              <p>
                <strong>No accounts, no ads, no tracking SDKs.</strong> The only thing measured is
                a per-day count of a fixed list of events — never text of any kind — and you can
                switch it off.
              </p>
            </div>
            <div className="gl-pitem">
              <i>✓</i>
              <p>
                <strong>The companion is optional.</strong> Asking for a reflective question sends
                that entry&rsquo;s text to an AI provider that doesn&rsquo;t train on it — and
                Local-only mode stops it from ever leaving your phone.
              </p>
            </div>
            <div className="gl-pitem">
              <i>✓</i>
              <p>
                <strong>Themes stay home.</strong> Recurring themes are matched on your device
                against a fixed, hand-written list, using Apple&rsquo;s built-in language
                framework. Nothing is sent anywhere.
              </p>
            </div>
          </div>
          <div className="gl-ctas" style={{ marginTop: 26 }}>
            <Link href={privacyHref} className="gl-btn gl-btn-ghost">
              Read the privacy policy →
            </Link>
          </div>
        </section>

        {/* ---------- close ---------- */}
        <section className="gl-wrap gl-close">
          <h2>
            Begin again,
            <br />
            <span className="gl-brass">as many times as it takes.</span>
          </h2>
          <p>
            Guiding Light is finishing up before release. Journaling, your full history, the daily
            verse, and export are free and stay that way. Leave your email and we&rsquo;ll tell you
            the day it lands — nothing else.
          </p>
          <div className="gl-ctas">
            <Link href="/#notify" className="gl-btn gl-btn-ink">
              Get notified →
            </Link>
          </div>
          <div className="gl-legal">
            <Link href={privacyHref}>Privacy Policy</Link>
            <Link href={termsHref}>Terms of Service</Link>
            <Link href="/guidinglight/support">Support</Link>
            <Link href="/">Frozen Grape</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
