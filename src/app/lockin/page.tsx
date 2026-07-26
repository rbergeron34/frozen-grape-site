import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Barlow_Condensed } from "next/font/google";
import { getApp } from "@/lib/apps";
import "./lockin.css";

// Bespoke, app-branded landing page for LockIN. Everything factual here
// (features, pricing, privacy claims) mirrors src/lib/apps.ts — update both
// together. Visual language follows the app's own identity brief:
// Volt Lime on near-black, band-box brackets, condensed numerals.

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const APP_SLUG = "lockin";

export const metadata: Metadata = {
  title: "LockIN — Run smarter. Stay locked in.",
  description:
    "A Zone 2–first running coach for iPhone and Apple Watch. LockIN keeps your easy runs actually easy — live heart-rate coaching, an adaptive 80/20 plan, and runs scored by minutes in zone.",
  alternates: { canonical: "/lockin" },
  openGraph: {
    type: "website",
    url: "/lockin",
    title: "LockIN — Run smarter. Stay locked in.",
    description:
      "A Zone 2–first running coach for iPhone and Apple Watch. Live heart-rate coaching, an adaptive 80/20 plan, and runs scored by minutes in zone.",
  },
};

const SHOTS = [
  { src: "/assets/apps/lockin/screen-1.png", caption: "Locked in — inside your band", alt: "LockIN in-run screen showing a heart rate of 144 inside the lime target band" },
  { src: "/assets/apps/lockin/screen-2.png", caption: "Drifting high — ease up", alt: "LockIN in-run screen showing 164 bpm above the band with an Ease up cue" },
  { src: "/assets/apps/lockin/screen-3.png", caption: "Today's session", alt: "LockIN home screen showing a 10K plan week and today's easy run" },
  { src: "/assets/apps/lockin/screen-4.png", caption: "Minutes in zone, by week", alt: "LockIN progress screen showing total minutes in zone and a weekly bar chart" },
];

const FEATURES = [
  { glyph: "∿", title: "The Line", desc: "Your live heart rate drawn against your target band, so trend is obvious at a glance." },
  { glyph: "◉", title: "Voice & haptics", desc: "A spoken cue and a directional tap when you drift — not a screen you have to watch." },
  { glyph: "▤", title: "Adaptive 80/20", desc: "Plans for 5K through marathon that adjust to how your runs actually felt." },
  { glyph: "⌚", title: "Apple Watch", desc: "A full watch app with its own workout session, mirroring live to your iPhone." },
  { glyph: "♪", title: "Music that yields", desc: "Apple Music plays on, ducking politely under every coaching cue." },
  { glyph: "⚑", title: "Zone calibration", desc: "Three ways to find your band — field test, heart-rate reserve, or age-based — with manual override." },
];

export default function LockInPage() {
  const app = getApp(APP_SLUG);
  const privacyHref = app?.legal?.privacy ?? "/privacy";
  const termsHref = app?.legal?.terms ?? "/terms";

  return (
    <div className={`lk ${barlow.variable}`}>
      <div className="lk-bleed">
        {/* ---------- hero ---------- */}
        <section className="lk-hero">
          <div className="lk-wrap lk-hero-grid">
            <div>
              <div>
                <span className="lk-badge">
                  <i />
                  Coming soon
                </span>
              </div>

              <h1 className="lk-mark" style={{ marginTop: 22 }}>
                Lock<span className="lk-in">IN</span>
              </h1>

              <p className="lk-tag">Run smarter. Stay locked in.</p>
              <p className="lk-sub">
                A Zone 2–first running coach for iPhone and Apple Watch. LockIN finds your
                easy-effort heart-rate band, then keeps you inside it — so the runs that are
                supposed to be easy finally are.
              </p>

              <div className="lk-ctas">
                <Link href="/#notify" className="lk-btn lk-btn-lime">
                  Get notified →
                </Link>
                <Link href={`/apps/${APP_SLUG}`} className="lk-btn lk-btn-ghost">
                  App details
                </Link>
              </div>
            </div>

            <div className="lk-phone">
              <div className="lk-phone-screen">
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
        <div className="lk-stats">
          <div className="lk-stat">
            <div className="lk-num">Zone 2</div>
            <p>The easy band that builds the engine — most of your week belongs here.</p>
          </div>
          <div className="lk-stat">
            <div className="lk-num">80/20</div>
            <p>Mostly easy, a little hard. Your plan holds the ratio so you don&rsquo;t have to.</p>
          </div>
          <div className="lk-stat">
            <div className="lk-num">On-device</div>
            <p>No servers, no accounts on our side. Your health data never leaves your phone.</p>
          </div>
        </div>

        {/* ---------- the line ---------- */}
        <section className="lk-wrap lk-row">
          <div className="lk-row-copy">
            <span className="lk-micro">The signature</span>
            <h2>
              Your band is a box.
              <br />
              <span className="lk-lime">Stay inside it.</span>
            </h2>
            <p className="lk-body">
              The brackets are your target zone. The line is your heart rate arriving from the
              left, and the big number rides its tip — so its height tells you where you are
              before you&rsquo;ve read a single digit. Inside the box, everything is lime. Leave
              it, and only the line recolors.
            </p>
            <div className="lk-cues">
              <div className="lk-cue in">
                <b>✓</b>
                <span>
                  Locked in <small>— right where you should be</small>
                </span>
              </div>
              <div className="lk-cue hi">
                <b>↓</b>
                <span>
                  Ease up <small>— 14 over your band</small>
                </span>
              </div>
              <div className="lk-cue lo">
                <b>↑</b>
                <span>
                  Pick it up <small>— 10 under your band</small>
                </span>
              </div>
            </div>
          </div>
          <div className="lk-phone">
            <div className="lk-phone-screen">
              <Image src={SHOTS[1].src} alt={SHOTS[1].alt} fill sizes="(max-width: 880px) 320px, 400px" />
            </div>
          </div>
        </section>

        {/* ---------- plan ---------- */}
        <section className="lk-wrap lk-row lk-flip">
          <div className="lk-row-copy">
            <span className="lk-micro">The plan</span>
            <h2>
              A week that
              <br />
              <span className="lk-lime">adapts to you.</span>
            </h2>
            <p className="lk-body">
              Pick a goal — 5K to marathon, or just a stronger base — and LockIN builds the week
              around it, holding the easy-to-hard ratio. Three taps after each run tell it how you
              slept, how sore you are, and how it felt. When the next long run is too big a jump,
              it says so, and eases it.
            </p>
          </div>
          <div className="lk-phone">
            <div className="lk-phone-screen">
              <Image src={SHOTS[2].src} alt={SHOTS[2].alt} fill sizes="(max-width: 880px) 320px, 400px" />
            </div>
          </div>
        </section>

        {/* ---------- progress ---------- */}
        <section className="lk-wrap lk-row">
          <div className="lk-row-copy">
            <span className="lk-micro">The scoreboard</span>
            <h2>
              Scored in minutes,
              <br />
              <span className="lk-lime">not pace.</span>
            </h2>
            <p className="lk-body">
              Easy runs don&rsquo;t look impressive on a pace chart, which is exactly why people
              abandon them. So LockIN counts what actually builds fitness: minutes spent in your
              zone, week over week, with your real easy-to-hard split alongside.
            </p>
          </div>
          <div className="lk-phone">
            <div className="lk-phone-screen">
              <Image src={SHOTS[3].src} alt={SHOTS[3].alt} fill sizes="(max-width: 880px) 320px, 400px" />
            </div>
          </div>
        </section>

        {/* ---------- features ---------- */}
        <section className="lk-wrap lk-features">
          <span className="lk-micro">Everything in the box</span>
          <h2 style={{ marginTop: 12 }}>Built for the easy days.</h2>
          <div className="lk-fgrid">
            {FEATURES.map((f) => (
              <div className="lk-fcard" key={f.title}>
                <span aria-hidden="true">{f.glyph}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- gallery ---------- */}
        <section className="lk-wrap lk-gallery">
          <span className="lk-micro">Screens</span>
          <h2 style={{ marginTop: 12 }}>The whole run.</h2>
          <div className="lk-shots">
            {SHOTS.map((s) => (
              <figure className="lk-shot" key={s.src}>
                <div className="lk-phone">
                  <div className="lk-phone-screen">
                    <Image src={s.src} alt={s.alt} fill sizes="(max-width: 880px) 45vw, 240px" />
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
        <section className="lk-wrap lk-privacy">
          <span className="lk-micro">Your data</span>
          <h2 style={{ marginTop: 12 }}>
            It stays <span className="lk-lime">on your phone.</span>
          </h2>
          <div className="lk-plist">
            <div className="lk-pitem">
              <i>✓</i>
              <p>
                <strong>No servers.</strong> LockIN has no backend. Your runs, routes, and heart
                rate are stored on your device and in Apple Health.
              </p>
            </div>
            <div className="lk-pitem">
              <i>✓</i>
              <p>
                <strong>No analytics, no tracking.</strong> No third-party SDKs, no advertising,
                no cross-app tracking.
              </p>
            </div>
            <div className="lk-pitem">
              <i>✓</i>
              <p>
                <strong>AI runs locally.</strong> Playlists are drafted on-device with Apple
                Intelligence — only music searches reach Apple Music.
              </p>
            </div>
            <div className="lk-pitem">
              <i>✓</i>
              <p>
                <strong>Location is optional.</strong> Coaching works without it; routes are
                saved only on your device.
              </p>
            </div>
          </div>
          <div className="lk-ctas" style={{ marginTop: 26 }}>
            <Link href={privacyHref} className="lk-btn lk-btn-ghost">
              Read the privacy policy →
            </Link>
          </div>
        </section>

        {/* ---------- close ---------- */}
        <section className="lk-wrap lk-close">
          <h2>
            Your easy runs,
            <br />
            <span className="lk-lime">finally easy.</span>
          </h2>
          <p>
            LockIN is in the final stretch before release. Leave your email and we&rsquo;ll tell
            you the day it lands — nothing else.
          </p>
          <div className="lk-ctas">
            <Link href="/#notify" className="lk-btn lk-btn-lime">
              Get notified →
            </Link>
          </div>
          <div className="lk-legal">
            <Link href={privacyHref}>Privacy Policy</Link>
            <Link href={termsHref}>Terms of Use</Link>
            <Link href={`/support#${APP_SLUG}`}>Support</Link>
            <Link href="/">Frozen Grape</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
