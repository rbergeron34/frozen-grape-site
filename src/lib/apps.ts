// Single source of truth for every app.
// Drives: home-screen grid, scroll showcase, mobile list, App Store modal,
// /apps/[id] detail pages, and the generated per-app legal pages
// (/apps/[id]/privacy and /apps/[id]/terms).
//
// `featured` (default true) controls the home showcase/grid; unfeatured apps
// (Hoops Trivia) keep their detail + legal pages and stay listed on
// Support/Legal so live App Store links never break.

import { APP_STORE_SELLER } from "./studio";

export type ScreenKind =
  | { kind: "image"; src: string; alt: string }
  | { kind: "mock"; component: MockComponent };

// Every featured app now uses a real simulator screenshot. This mock remains
// only for Hoops Trivia, the unfeatured legacy app we don't rebuild.
export type MockComponent = "HoopsMock";

export interface ShowcaseFeature {
  glyph: string;
  title: string;
  desc: string;
}

export interface AppEntry {
  // --- identity ---
  slug: string; // also the /apps/[slug] route id
  name: string;
  shortName: string; // home-grid label
  category: string;
  status: "live" | "coming-soon";
  /** Shown in the home showcase + phone grid. Default true. */
  featured?: boolean;

  // --- App Store metadata (used by modal + detail page) ---
  tagline: string;
  description: string;
  longDescription: string;
  icon: string; // self-hosted under /assets/apps/<slug>/ (Hoops Trivia still remote CDN)
  rating: number;
  ratingsCount: number;
  price: string;
  ageRating: string;
  size: string;
  developer: string;
  features: string[];
  appStoreUrl?: string; // absent for coming-soon
  privacyInfo: string;
  platforms: string[];
  inAppPurchases?: { name: string; price: string }[];
  whatsNew?: { version: string; date: string; notes: string };

  // --- trust / legal flags (drive Support, Terms, Privacy sections) ---
  hasAccount?: boolean; // app supports account creation → data-deletion instructions
  usesAI?: boolean; // app has AI features → AI disclosure
  /** One-line AI disclosure shown on the detail page (only when usesAI). */
  aiNote?: string;
  gameCenter?: boolean; // app uses Game Center → Apple-processed leaderboards note
  /** Auto-renewable subscription details. `period` / `note` are EDITABLE — confirm with Ryan. */
  subscription?: { name: string; period: string; price: string; note?: string };
  /** Optional in-app account-deletion path; EDITABLE — confirm exact steps with Ryan. */
  accountDeletionPath?: string;
  /** App-specific legal pages. Every app gets generated /apps/<slug>/privacy + /terms; bespoke pages (Guiding Light) point elsewhere. */
  legal?: { privacy: string; terms: string };
  /** Bespoke app-branded landing page (e.g. /lockin). Showcase CTAs prefer it over /apps/<slug>. */
  landingPath?: string;
  /** App-specific disclaimers rendered on the generated terms page and legal hub (e.g. non-affiliation, not-medical-advice). */
  disclaimers?: string[];
  /**
   * Extra sections rendered on the generated privacy page, for apps that touch
   * sensitive on-device data (HealthKit, location, camera, Apple Music, …).
   * Each becomes its own headed section after "What we collect."
   */
  privacyNotes?: { heading: string; body: string }[];

  // --- showcase presentation ---
  accent: string; // hex, applied only while this app is active
  tint: string; // rgba glow
  iconBg?: string; // tile background when using a glyph fallback
  fallbackGlyph: string; // shown if icon image is missing
  lead: string; // beat-1 one-liner
  screenHeadline: string; // beat-2 headline
  showcaseFeatures: ShowcaseFeature[]; // 2-3, calm marketing voice
  screen: ScreenKind; // what fills the phone
}

// Studio grape — the neutral/home-beat brand. Each app's accent takes over
// during its own showcase moment, then resets to this.
export const NEUTRAL_ACCENT = "#7b4ae2";
export const NEUTRAL_TINT = "rgba(123,74,226,.10)";

export const APPS: AppEntry[] = [
  {
    slug: "guiding-light",
    name: "Guiding Light",
    shortName: "Guiding",
    category: "Reflection",
    status: "coming-soon",
    tagline: "A daily verse, a private journal, a gentle companion",
    description:
      "A Bible journal with a daily cited verse, a private encrypted journal, and a companion that asks good questions.",
    longDescription:
      "Guiding Light is a daily Bible journal and reflection companion. Each morning brings a cited Scripture verse, and each evening a short reflection — with room to respond in a private, encrypted journal that never leaves your device unprotected. A gentle companion asks good questions and points to verified Scripture (never easy answers), while an on-device memory layer quietly surfaces recurring themes and answered prayers from your own writing. Five offline translations, audio narration, and no streak guilt — just begin again.",
    icon: "/assets/apps/guiding-light/icon.png",
    rating: 0,
    ratingsCount: 0,
    price: "Free",
    ageRating: "4+",
    size: "—",
    developer: APP_STORE_SELLER,
    features: [
      "A daily cited verse each morning, and a short evening reflection",
      "Private journal, encrypted on your device and unlocked with Face ID",
      "A gentle companion that asks questions and cites real Scripture",
      "Themes and answered prayers, noticed on-device from your own writing",
      "Guided modes: gratitude, prayer, sermon notes, SOAP, Examen, and more",
      "Audio narration with read-along, cached for offline listening",
      "Five offline translations — every verse shows its citation",
    ],
    privacyInfo: "Data not linked to you",
    platforms: ["iPhone"],
    usesAI: true,
    aiNote: "Uses AI to assist with reflection prompts.",
    subscription: {
      name: "Guiding Light Plus",
      period: "per month", // EDITABLE — confirm which plan to headline
      price: "$4.99",
      note: "Annual ($49.99/year), family ($79.99/year), and one-time lifetime ($99.99) options are also available. Journaling, your full history, the daily verse, and export are never paywalled.",
    },
    legal: { privacy: "/guidinglight/privacy", terms: "/guidinglight/terms" },
    landingPath: "/guidinglight",
    accent: "#C28A2C",
    tint: "rgba(194,138,44,.12)",
    iconBg: "#F3EAD7",
    fallbackGlyph: "✦",
    lead: "A daily verse, a private journal, and a gentle companion.",
    screenHeadline: "A quiet daily rhythm.",
    showcaseFeatures: [
      { glyph: "✦", title: "Daily verse", desc: "Cited Scripture each morning, with room to respond." },
      { glyph: "✎", title: "Private journal", desc: "Encrypted on your device, never sold, never mined." },
      { glyph: "❍", title: "A gentle companion", desc: "Good questions — never easy answers." },
    ],
    screen: {
      kind: "image",
      src: "/assets/apps/guiding-light/screen-1.png",
      alt: "Guiding Light's Today screen with a cited Psalm, a reading streak, and today's reading plan",
    },
  },
  {
    slug: "brighterstart",
    name: "BrighterStart",
    shortName: "BrighterStart",
    category: "Productivity",
    status: "coming-soon", // the all-new 2.0 wake-up app replaces the original listing when it ships
    tagline: "The alarm that walks you into your day",
    description:
      "A wake-up app that doesn't stop at the alarm — dismissing it walks you straight into a guided morning routine.",
    longDescription:
      "BrighterStart is a wake-up app that doesn't stop at the alarm. Its alarm rings with Clock-level reliability — through silent mode and Focus — and clearing it takes a small mission: solve the math, take the steps, or prove you're up with a live photo checked entirely on your device. The moment you're up, BrighterStart walks you into a guided, one-step-at-a-time morning routine, mirrored to your Lock Screen and Dynamic Island. Built for anyone who wins the alarm and still loses the morning.",
    icon: "/assets/apps/brighterstart/icon.png",
    rating: 0,
    ratingsCount: 0,
    price: "Free",
    ageRating: "4+",
    size: "—",
    developer: APP_STORE_SELLER,
    features: [
      "A reliable alarm that breaks through silent mode and Focus",
      "Dismissal missions: math, steps, or a live 'prove you're up' photo",
      "Dismiss → a guided, timed morning routine, one step at a time",
      "Routine timeline on the Lock Screen and Dynamic Island",
      "A wake-up check that re-rings until you're actually up",
      "Wake-rhythm trends and a gentle wake-earlier goal",
      "Guilt-free streaks — skip days don't break them",
    ],
    privacyInfo: "No data collected",
    platforms: ["iPhone", "iPad"],
    privacyNotes: [
      {
        heading: "Sleep data (Apple Health)",
        body: "With your permission, BrighterStart reads sleep data from Apple Health to chart your real wake times alongside your alarms. This data is read on your device, is never transmitted anywhere, and the App Store build never writes to Health.",
      },
      {
        heading: "Camera & motion",
        body: "The photo wake-up mission uses your camera, and the steps mission counts steps with your iPhone's motion sensors. Both are analyzed entirely on your device — photos are checked in the moment and never uploaded or stored, and step counts never leave your phone.",
      },
      {
        heading: "iCloud sync",
        body: "Your alarms, routines, and streaks can sync between your devices through your personal iCloud account. That data belongs to you and is handled under Apple's iCloud terms — we run no servers and cannot see it.",
      },
    ],
    disclaimers: [
      "BrighterStart is a wellness and productivity tool, not a medical device or mental-health treatment. It does not diagnose, treat, or cure ADHD, insomnia, or any other condition, and it is not a substitute for advice from a qualified healthcare professional.",
    ],
    legal: { privacy: "/apps/brighterstart/privacy", terms: "/apps/brighterstart/terms" },
    accent: "#FF8A3D",
    tint: "rgba(255,138,61,.12)",
    iconBg: "#FFE9DA",
    fallbackGlyph: "☀",
    lead: "The alarm that walks you into your day.",
    screenHeadline: "Wake up — then keep going.",
    showcaseFeatures: [
      { glyph: "◔", title: "An alarm that means it", desc: "Rings through silent mode and Focus." },
      { glyph: "✓", title: "Prove you're up", desc: "Math, steps, or a live photo — no snooze spiral." },
      { glyph: "▷", title: "Straight into a routine", desc: "Dismissing the alarm starts your morning." },
    ],
    screen: {
      kind: "image",
      src: "/assets/apps/brighterstart/screen-1.png",
      alt: "BrighterStart's home screen with a 6:30 weekday alarm, wake-rhythm chart, and morning routine",
    },
  },
  {
    slug: "daily-proverb",
    name: "Daily Proverb",
    shortName: "Proverb",
    category: "Lifestyle",
    status: "live",
    tagline: "One proverb a day, beautifully set",
    description:
      "A clean, distraction-free way to read, journal, and reflect on the Book of Proverbs — one verse a day.",
    longDescription:
      "Daily Proverb (formerly Daily Wisdom) serves one verse a day from the Book of Proverbs — 365 curated proverbs in a clean, distraction-free reader. Save favorites, keep private journal notes on any verse, and build a gentle reading streak. Beautiful share cards, Home and Lock Screen widgets, and up to three daily reminders keep wisdom close; favorites and notes sync privately across your devices through iCloud.",
    icon: "/assets/apps/daily-proverb/icon.png",
    rating: 5.0,
    ratingsCount: 2,
    price: "Free",
    ageRating: "4+",
    size: "13.5 MB",
    developer: APP_STORE_SELLER,
    features: [
      "A daily proverb, from a library of 365 curated verses",
      "Per-verse journal notes and favorites, synced via iCloud",
      "Reading streaks and beautiful shareable verse cards",
      "Home Screen and Lock Screen widgets",
      "Up to three daily reminder notifications",
      "Four translations — NIV free; KJV, NLT, and ESV with Premium",
      "Dark mode and adjustable text sizes",
    ],
    appStoreUrl: "https://apps.apple.com/us/app/daily-wisdom-book-of-proverbs/id977329614",
    privacyInfo: "No data collected",
    platforms: ["iPhone", "iPad"],
    inAppPurchases: [
      { name: "Premium (monthly)", price: "$2.99" },
      { name: "Premium (annual)", price: "$19.99" },
      { name: "Lifetime Premium", price: "$39.99" },
    ],
    subscription: {
      name: "Daily Proverb Premium",
      period: "per month", // EDITABLE — confirm live pricing once the 3.0 update ships
      price: "$2.99",
      note: "An annual plan ($19.99/year) and a one-time Lifetime unlock ($39.99) are also available; monthly and annual include a 3-day free trial.",
    },
    whatsNew: {
      version: "3.0", // EDITABLE — align with the shipped App Store version
      date: "July 2026",
      notes: "Complete refresh: 365-verse library, journal notes, streaks, and widgets",
    },
    privacyNotes: [
      {
        heading: "iCloud sync",
        body: "Favorites and journal notes are stored in your private iCloud database so they follow you between devices. They live in your personal Apple account — we run no servers, and we can never read them.",
      },
      {
        heading: "Notifications",
        body: "Daily reminders are scheduled locally on your device at times you choose. Nothing about your reading habits is sent anywhere.",
      },
    ],
    legal: { privacy: "/apps/daily-proverb/privacy", terms: "/apps/daily-proverb/terms" },
    accent: "#6FA382",
    tint: "rgba(111,163,130,.14)",
    iconBg: "#E7EFEA",
    fallbackGlyph: "✦",
    lead: "One proverb a day, beautifully set.",
    screenHeadline: "A small daily pause.",
    showcaseFeatures: [
      { glyph: "✦", title: "A verse a day", desc: "365 proverbs, one idea at a time." },
      { glyph: "✎", title: "Journal & favorites", desc: "Keep what resonates, privately." },
      { glyph: "—", title: "No feeds", desc: "Just a moment to think." },
    ],
    screen: {
      kind: "image",
      src: "/assets/apps/daily-proverb/screen-1.png",
      alt: "Daily Proverb's Today screen with a Proverbs verse, reading streak, and saved reflection",
    },
  },
  {
    slug: "lockin",
    name: "LockIN",
    shortName: "LockIN",
    category: "Health & Fitness",
    status: "coming-soon",
    tagline: "Run smarter. Stay locked in.",
    description:
      "A Zone 2–first running coach for iPhone and Apple Watch that keeps your easy runs actually easy.",
    longDescription:
      "LockIN is a Zone 2–first running coach. It calibrates a personal easy-effort heart-rate band, then keeps you inside it while you run — a live band chart on your wrist, gentle haptics, and a voice that says 'ease up' before you drift. An adaptive 80/20 plan builds toward your goal (5K to marathon, or just a solid base), and every run is scored by minutes in zone, not pace. Music comes along too: Apple Music with coaching cues ducked over your mix, and on-device AI playlists matched to your effort.",
    icon: "/assets/apps/lockin/icon.png",
    rating: 0,
    ratingsCount: 0,
    price: "Free",
    ageRating: "4+",
    size: "—",
    developer: APP_STORE_SELLER,
    features: [
      "Live heart-rate coaching on 'The Line' — your personal Zone 2 band",
      "Voice cues and directional haptics when you drift high or low",
      "Personalized zone calibration, with three methods and manual override",
      "Adaptive 80/20 training plans, from 5K to marathon",
      "A full Apple Watch app that mirrors live to your iPhone",
      "Runs scored by minutes in zone — not pace",
      "Apple Music with coaching-cue ducking and on-device AI mixes",
    ],
    privacyInfo: "No data collected",
    platforms: ["iPhone", "Apple Watch"],
    usesAI: true,
    aiNote: "Drafts playlists with on-device Apple Intelligence — nothing is sent to AI servers.",
    subscription: {
      name: "LockIN Premium",
      period: "per month", // EDITABLE — pre-release pricing; confirm before launch
      price: "$5.99",
      note: "An annual plan ($39.99/year) and a one-time lifetime unlock ($99.99) are also available.",
    },
    privacyNotes: [
      {
        heading: "Health & workout data",
        body: "With your permission, LockIN reads your heart rate and workout history from Apple Health to coach you in real time and calibrate your zones, and saves each run back to Apple Health as a workout. All of it stays in Apple Health and on your device — LockIN has no servers, and your health data is never transmitted to us or anyone else.",
      },
      {
        heading: "Location",
        body: "If you allow location access, LockIN records your route and pace with GPS during runs. Location is optional — coaching works without it — and routes are stored only on your device.",
      },
      {
        heading: "Motion & fitness",
        body: "LockIN uses your iPhone's motion sensors to improve pace accuracy and auto-pause. Motion data is processed on-device and never leaves it.",
      },
      {
        heading: "Apple Music & AI mixes",
        body: "If you connect Apple Music, LockIN plays your library and can draft playlists using Apple Intelligence, entirely on your device. Building a mix sends only catalog searches (like genre or song titles) to Apple Music — never your health, workout, or location data.",
      },
      {
        heading: "Sign in with Apple",
        body: "Signing in stores just two things on your device: your Apple identifier and your first name, used to personalize the app. There is no LockIN account on any server; signing out removes both.",
      },
    ],
    disclaimers: [
      "LockIN is a fitness training tool, not a medical device. Heart-rate zones and coaching cues are general fitness guidance, not medical advice — consult a qualified physician before starting a new training program, especially if you have a heart condition.",
    ],
    legal: { privacy: "/apps/lockin/privacy", terms: "/apps/lockin/terms" },
    landingPath: "/lockin",
    accent: "#65A30D",
    tint: "rgba(132,204,22,.13)",
    iconBg: "#101509",
    fallbackGlyph: "◉",
    lead: "A Zone 2 running coach on your wrist.",
    screenHeadline: "Stay in the zone.",
    showcaseFeatures: [
      { glyph: "∿", title: "The Line", desc: "Your live heart rate against your easy band." },
      { glyph: "◉", title: "Gentle cues", desc: "A voice and a tap before you drift." },
      { glyph: "▤", title: "80/20 plan", desc: "Scored by minutes in zone, not pace." },
    ],
    screen: {
      kind: "image",
      src: "/assets/apps/lockin/screen-1.png",
      alt: "LockIN in-run screen showing a heart rate of 144 locked inside the target band",
    },
  },
  {
    // Slug stays `hoops-connect` so URLs and legal paths survive the rename.
    slug: "hoops-connect",
    name: "Hoops Slate", // renamed in-app July 2026; trademark check still pending
    shortName: "Slate",
    category: "Games",
    status: "coming-soon",
    tagline: "Five daily basketball puzzles",
    description:
      "A daily NBA puzzle suite — five quick games on one fresh slate, every day.",
    longDescription:
      "Hoops Slate is a daily basketball puzzle suite in the spirit of the great newspaper games. Every day brings a fresh slate of five: Hoop Connections (group 16 names into four fours), Lineup (pin down the mystery player in eight guesses), Journey (name the player from their career path), Crossover (spot the odd one out), and HoopGrid (fill the 3×3). Build wins-only streaks, watch your Box Score grow, and share your grids — all offline, no account needed.",
    icon: "/assets/apps/hoops-connect/icon.png",
    rating: 0,
    ratingsCount: 0,
    price: "Free",
    ageRating: "4+",
    size: "—",
    developer: APP_STORE_SELLER,
    features: [
      "Five daily games: Hoop Connections, Lineup, Journey, Crossover, HoopGrid",
      "One fresh hand-curated slate every day",
      "Wins-only streaks and a career Box Score of your stats",
      "Emoji share grids for every game",
      "A 30-day puzzle archive for subscribers",
      "Fully offline — no account, no waiting",
    ],
    privacyInfo: "No data collected",
    platforms: ["iPhone"],
    subscription: {
      name: "Hoops Slate Pro",
      period: "per month", // EDITABLE — pre-release pricing; confirm before launch
      price: "$3.99",
      note: "An annual plan ($24.99/year) and a 12-month Season Pass ($9.99, one-time) are also available.",
    },
    disclaimers: [
      "Hoops Slate is an independent puzzle game. It is not affiliated with, endorsed by, or sponsored by the NBA or any team, league, or player. Player names and factual sports information are used solely for informational and puzzle purposes.",
    ],
    legal: { privacy: "/apps/hoops-connect/privacy", terms: "/apps/hoops-connect/terms" },
    accent: "#D2742E",
    tint: "rgba(210,116,46,.12)",
    iconBg: "#f4f3f0",
    fallbackGlyph: "🏀",
    lead: "Five daily basketball puzzles, one slate.",
    screenHeadline: "One slate a day.",
    showcaseFeatures: [
      { glyph: "◎", title: "Five daily games", desc: "Connections, Lineup, Journey, Crossover, HoopGrid." },
      { glyph: "≡", title: "Hand-curated", desc: "Every slate checked against the record books." },
      { glyph: "↗", title: "Streaks & Box Score", desc: "Keep your run going, share the grid." },
    ],
    screen: {
      kind: "image",
      src: "/assets/apps/hoops-connect/screen-1.png",
      alt: "Hoops Slate's daily challenge screen listing Hoop Connections, Lineup, Journey, Crossover, and HoopGrid",
    },
  },
  {
    slug: "passphoto",
    name: "PassPhoto", // EDITABLE — rebrand planned before release (headshot pivot)
    shortName: "PassPhoto",
    category: "Photography",
    status: "coming-soon",
    tagline: "Passport photos & headshots, entirely on your iPhone",
    description:
      "Compliant passport photos and clean professional headshots — captured, checked, and finished on-device.",
    longDescription:
      "PassPhoto turns your iPhone into a photo booth that knows the rules. Live camera coaching guides you into frame, an on-device compliance engine checks head size, background, and lighting against published requirements, and one tap renders a finished photo — a US passport or visa photo, a LinkedIn or résumé headshot, or a clean profile picture. Export digital sizes or a printable 4×6 sheet. It's a real photo of the real you: everything is processed on your iPhone, never uploaded, never synthesized.",
    icon: "/assets/apps/passphoto/icon.png",
    rating: 0,
    ratingsCount: 0,
    price: "Free",
    ageRating: "4+",
    size: "—",
    developer: APP_STORE_SELLER,
    features: [
      "Live camera coaching with auto-capture when you're framed right",
      "Compliance checks: head size, background, lighting, and more",
      "Styles for passport, US visa, LinkedIn, résumé, and profile photos",
      "Background replacement — white, studio gray, or a soft gradient",
      "Digital exports plus a printable 4×6 sheet with cut lines",
      "Restyle any photo into another format without retaking it",
      "100% on-device — photos are never uploaded",
    ],
    privacyInfo: "No data collected",
    platforms: ["iPhone"],
    inAppPurchases: [
      { name: "PassPhoto Unlock", price: "$12.99" }, // EDITABLE — pre-release pricing
    ],
    privacyNotes: [
      {
        heading: "Your photos",
        body: "Photos are captured, checked, and rendered entirely on your iPhone. The app contains no networking code at all — nothing you shoot or import is ever uploaded, and finished photos are saved to your photo library only when you ask.",
      },
      {
        heading: "Camera",
        body: "The camera is used only to take your photo, with live framing guidance computed on-device. Camera frames are analyzed in the moment and never stored or transmitted.",
      },
    ],
    disclaimers: [
      "PassPhoto checks photos against published government and platform guidelines, but final acceptance is always decided by the issuing authority. PassPhoto is an independent app and is not affiliated with any government agency.",
    ],
    legal: { privacy: "/apps/passphoto/privacy", terms: "/apps/passphoto/terms" },
    accent: "#3B6FD4",
    tint: "rgba(59,111,212,.12)",
    iconBg: "#E4ECFA",
    fallbackGlyph: "▣",
    lead: "Passport photos done right, on-device.",
    screenHeadline: "Frame. Check. Print.",
    showcaseFeatures: [
      { glyph: "◎", title: "Live coaching", desc: "Guided into frame, captured automatically." },
      { glyph: "✓", title: "Compliance checks", desc: "Head size, background, lighting — verified." },
      { glyph: "▣", title: "Never uploaded", desc: "Every pixel processed on your iPhone." },
    ],
    screen: {
      kind: "image",
      src: "/assets/apps/passphoto/screen-1.png",
      alt: "PassPhoto style picker offering passport, visa, LinkedIn, résumé, and profile photo formats",
    },
  },

  // ——— Live but no longer featured on the home page ———
  {
    slug: "hoops-trivia",
    name: "Hoops Trivia",
    shortName: "Trivia",
    category: "Games",
    status: "live",
    featured: false,
    tagline: "The ultimate LeBron James quiz",
    description:
      "Hundreds of LeBron James questions across six categories — completely ad-free.",
    longDescription:
      "The most extensive LeBron James quiz you will ever find! With hundreds of questions all about the basketball legend, this app tests your knowledge across six categories: LeBron's Personal Life, High School Career, Cleveland Cavaliers, Miami Heat, Achievements, and Endorsement Deals. Completely ad-free for an uninterrupted trivia experience. Compete on Game Center leaderboards and unlock achievements. A free Lite version is available if you'd like to try before you buy.",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple5/v4/95/4e/33/954e339a-3839-bf69-0004-e0bf5fb86ff9/mzl.cvpayvfg.jpg/200x200bb.png",
    rating: 5.0,
    ratingsCount: 0,
    price: "$0.99",
    ageRating: "4+",
    size: "22.5 MB",
    developer: APP_STORE_SELLER,
    features: [
      "Hundreds of LeBron James trivia questions",
      "Six different categories to master",
      "Game Center leaderboards",
      "Unlock achievements as you play",
      "Completely ad-free experience",
      "Offline play—no internet required",
      "Free Lite version available",
    ],
    appStoreUrl: "https://apps.apple.com/us/app/hoops-trivia-lebron-james-edition/id946326329",
    privacyInfo: "No data collected", // EDITABLE — confirm against the App Store privacy label
    platforms: ["iPhone", "iPad", "Mac", "Apple Vision"],
    inAppPurchases: [{ name: "Try free with Hoops Trivia Lite", price: "Free" }],
    gameCenter: true,
    legal: { privacy: "/apps/hoops-trivia/privacy", terms: "/apps/hoops-trivia/terms" },
    disclaimers: [
      "Hoops Trivia is an independent trivia game. It is not affiliated with, endorsed by, or sponsored by LeBron James, the NBA, or any team, league, or player. Player names and factual sports information are used solely for informational and trivia purposes.",
    ],
    accent: "#2F7DD1",
    tint: "rgba(47,125,209,.12)",
    iconBg: "#E2ECFA",
    fallbackGlyph: "🏀",
    lead: "The ultimate LeBron James trivia, ad-free.",
    screenHeadline: "Test your knowledge.",
    showcaseFeatures: [
      { glyph: "◉", title: "Hundreds of questions", desc: "Six categories to master." },
      { glyph: "≡", title: "Every era", desc: "High school to the Lakers." },
      { glyph: "↗", title: "Game Center", desc: "Leaderboards and achievements." },
    ],
    screen: { kind: "mock", component: "HoopsMock" },
  },
];

/** Apps shown in the home showcase, phone grid, and studio links. */
export const FEATURED_APPS: AppEntry[] = APPS.filter((a) => a.featured !== false);

export function getApp(slug: string): AppEntry | undefined {
  return APPS.find((a) => a.slug === slug);
}
