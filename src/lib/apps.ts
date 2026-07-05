// Single source of truth for every app.
// Drives: home-screen grid, scroll showcase, mobile list, App Store modal, and /apps/[id] detail pages.

export type ScreenKind =
  | { kind: "image"; src: string; alt: string }
  | { kind: "mock"; component: MockComponent };

// Keys map to components in src/app/components/showcase/screens/index.tsx
export type MockComponent =
  | "GuidingLightMock"
  | "BrighterStartMock"
  | "HoopsMock"
  | "DailyWisdomMock";

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

  // --- App Store metadata (used by modal + detail page) ---
  tagline: string;
  description: string;
  longDescription: string;
  icon: string; // remote (Apple CDN) for now; swap to /assets/apps/<slug>/icon.png once self-hosted
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
  /** Auto-renewable subscription details. `period` / `note` are EDITABLE — confirm with Ryan. */
  subscription?: { name: string; period: string; price: string; note?: string };
  /** Optional in-app account-deletion path; EDITABLE — confirm exact steps with Ryan. */
  accountDeletionPath?: string;
  /** App-specific legal pages; falls back to the studio-wide /privacy and /terms. */
  legal?: { privacy: string; terms: string };

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
    tagline: "An evening companion for Scripture and reflection",
    description: "A quiet space for Scripture, journaling, and prayer at the close of the day.",
    longDescription:
      "Guiding Light is an evening companion for Scripture and reflection. Each night brings a passage and a gentle prompt — room to read, respond, and rest. Guided journaling helps you reflect rather than simply read, and a calm plans-and-prayer timeline gives shape to the week. No streaks, no noise — just a quiet daily rhythm.",
    icon: "/assets/apps/guiding-light/icon.png",
    rating: 0,
    ratingsCount: 0,
    price: "Free",
    ageRating: "4+",
    size: "—",
    developer: "Ryan Bergeron",
    features: [
      "A daily passage each evening, with room to respond",
      "Guided journaling prompts to reflect, not just read",
      "A gentle plans and prayer timeline",
      "Calm, distraction-free reading",
    ],
    privacyInfo: "No data collected",
    platforms: ["iPhone"],
    hasAccount: true,
    usesAI: true,
    accountDeletionPath: "Settings → Account → Delete Account", // EDITABLE — confirm exact path
    legal: { privacy: "/guidinglight/privacy", terms: "/guidinglight/terms" },
    accent: "#C28A2C",
    tint: "rgba(194,138,44,.12)",
    iconBg: "#F3EAD7",
    fallbackGlyph: "✦",
    lead: "An evening companion for Scripture and reflection.",
    screenHeadline: "A quiet daily rhythm.",
    showcaseFeatures: [
      { glyph: "✦", title: "Daily verse", desc: "A passage each evening, with room to respond." },
      { glyph: "✎", title: "Guided journaling", desc: "Prompts to reflect, not just read." },
      { glyph: "❍", title: "Plans & prayer timeline", desc: "A gentle way through Scripture." },
    ],
    screen: {
      kind: "image",
      src: "/assets/apps/guiding-light/screen-1.png",
      alt: "Guiding Light evening home screen with a daily verse",
    },
  },
  {
    slug: "brighterstart",
    name: "BrighterStart",
    shortName: "BrighterStart",
    category: "Productivity",
    status: "live",
    tagline: "Move forward, one step at a time",
    description:
      "Helps ADHD minds build momentum through emotion-based routines of small, achievable tasks.",
    longDescription:
      "BrighterStart helps ADHD minds move forward—one small step at a time. Struggling with decision fatigue or emotional overwhelm? Select your current feeling state and receive customizable routines featuring small, achievable tasks lasting just minutes. Features mood-boosting techniques using breathwork, movement, and mindfulness. Build personalized daily routines for mornings, work transitions, and wind-down periods. Track your streaks and celebrate every small win.",
    icon:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/1a/a1/2a/1aa12a07-d6f8-c94b-ff62-1af58e0a5c69/AppIcon-0-0-1x_U007epad-0-1-85-220.png/200x200bb.png",
    rating: 5.0,
    ratingsCount: 1,
    price: "Free",
    ageRating: "4+",
    size: "6.7 MB",
    developer: "Ryan Bergeron",
    features: [
      "Emotion-based routine selection",
      "Small, achievable tasks to build momentum",
      "Breathwork and mindfulness exercises",
      "Movement prompts to energize your day",
      "Streak tracking to celebrate progress",
      "Customizable morning and evening routines",
      "Privacy-focused—no data collected",
    ],
    appStoreUrl: "https://apps.apple.com/us/app/brighterstart/id6745766308",
    privacyInfo: "No data collected",
    platforms: ["iPhone", "iPad", "Mac", "Apple Vision"],
    hasAccount: true,
    accountDeletionPath: "Settings → Account → Delete Account", // EDITABLE — confirm exact path
    accent: "#FF8A3D",
    tint: "rgba(255,138,61,.12)",
    iconBg: "#FFE9DA",
    fallbackGlyph: "☀",
    lead: "Routines that make mornings feel lighter.",
    screenHeadline: "Start the day with ease.",
    showcaseFeatures: [
      { glyph: "▷", title: "Guided routines", desc: "Step by step, calmly." },
      { glyph: "◔", title: "Gentle reminders", desc: "Nudges, never nags." },
      { glyph: "△", title: "Quiet progress", desc: "Momentum without pressure." },
    ],
    screen: {
      kind: "image",
      src: "/assets/apps/brighterstart/screen-1.png",
      alt: "BrighterStart home screen with mood check-in and routines",
    },
  },
  {
    slug: "hoops-trivia",
    name: "Hoops Trivia",
    shortName: "Trivia",
    category: "Games",
    status: "live",
    tagline: "The ultimate LeBron James quiz",
    description:
      "Hundreds of LeBron James questions across six categories — completely ad-free.",
    longDescription:
      "The most extensive LeBron James quiz you will ever find! With hundreds of questions all about the basketball legend, this app tests your knowledge across six categories: LeBron's Personal Life, High School Career, Cleveland Cavaliers, Miami Heat, Achievements, and Endorsement Deals. Completely ad-free for an uninterrupted trivia experience. Compete on Game Center leaderboards and unlock achievements. A free Lite version is available if you'd like to try before you buy.",
    icon:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple5/v4/95/4e/33/954e339a-3839-bf69-0004-e0bf5fb86ff9/mzl.cvpayvfg.jpg/200x200bb.png",
    rating: 5.0,
    ratingsCount: 0,
    price: "$0.99",
    ageRating: "4+",
    size: "22.5 MB",
    developer: "Ryan Bergeron",
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
    privacyInfo: "Privacy details pending",
    platforms: ["iPhone", "iPad", "Mac", "Apple Vision"],
    inAppPurchases: [{ name: "Try free with Hoops Trivia Lite", price: "Free" }],
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
  {
    slug: "hoops-connect",
    name: "Hoops Connect",
    shortName: "Connect",
    category: "Games",
    status: "coming-soon",
    tagline: "A daily basketball puzzle", // EDITABLE — confirm tagline
    description: "A daily basketball puzzle: line up the slate and solve the Hoop Connections.",
    longDescription:
      "Hoops Connect is a daily basketball puzzle. Each day brings a fresh slate — line up the right players, then solve the day's Hoop Connections. Build a streak, climb the tiers, and collect daily drops. A quick, satisfying hoops habit. (Copy is a draft — confirm before launch.)",
    icon: "/assets/apps/hoops-connect/icon.png",
    rating: 0,
    ratingsCount: 0,
    price: "Free",
    ageRating: "4+",
    size: "—",
    developer: "Ryan Bergeron",
    features: [
      "A fresh daily slate puzzle",
      "Hoop Connections — group players that belong together",
      "Streaks, tiers, and daily drops",
      "Stats and trophies",
    ],
    privacyInfo: "Privacy details pending",
    platforms: ["iPhone"],
    accent: "#D2742E",
    tint: "rgba(210,116,46,.12)",
    iconBg: "#f4f3f0",
    fallbackGlyph: "🏀",
    lead: "A daily basketball puzzle — line up the slate.",
    screenHeadline: "One slate a day.",
    showcaseFeatures: [
      { glyph: "◎", title: "Daily slate", desc: "A fresh lineup puzzle every day." },
      { glyph: "≡", title: "Hoop Connections", desc: "Group the players that belong together." },
      { glyph: "↗", title: "Streaks & trophies", desc: "Keep your run going." },
    ],
    screen: {
      kind: "image",
      src: "/assets/apps/hoops-connect/screen-1.png",
      alt: "Hoops Connect daily slate puzzle screen",
    },
  },
  {
    slug: "daily-wisdom",
    name: "Daily Wisdom",
    shortName: "Wisdom",
    category: "Lifestyle",
    status: "live",
    tagline: "Start your day with wisdom",
    description:
      "A clean, distraction-free way to read and reflect on the Book of Proverbs.",
    longDescription:
      "Start each day with wisdom from the timeless Book of Proverbs. Daily Wisdom delivers beautifully designed scripture verses to inspire and guide your spiritual journey. Enjoy a clean, distraction-free reading experience with adjustable text sizes, light and dark modes, and the ability to browse and search all verses. Share inspiring proverbs with friends and family, and access everything offline.",
    icon: "/assets/apps/daily-wisdom/icon.png", // self-hosted (remote CDN URL had expired)
    rating: 5.0,
    ratingsCount: 2,
    price: "Free",
    ageRating: "4+",
    size: "13.5 MB",
    developer: "Ryan Bergeron",
    features: [
      "Daily proverb delivered fresh each morning",
      "Adjustable text size for comfortable reading",
      "Browse and search Book of Proverbs verses",
      "Light and dark modes",
      "Share and copy verses",
      "Offline access—no internet required",
      "iOS home screen widget (Premium)",
      "Multiple Bible translations (Premium)",
    ],
    appStoreUrl: "https://apps.apple.com/us/app/daily-wisdom-book-of-proverbs/id977329614",
    privacyInfo: "No data collected",
    platforms: ["iPhone", "iPad", "Mac", "Apple Vision"],
    inAppPurchases: [
      { name: "Daily Wisdom Premium", price: "$2.99" },
      { name: "Lifetime Premium", price: "$19.99" },
    ],
    whatsNew: { version: "2.1", date: "Dec 2024", notes: "Bug fix preventing premium content access" },
    hasAccount: true,
    accountDeletionPath: "Settings → Account → Delete Account", // EDITABLE — confirm exact path
    subscription: {
      name: "Daily Wisdom Premium",
      period: "per month", // EDITABLE — confirm billing period (monthly/yearly)
      price: "$2.99",
      note: "A one-time Lifetime unlock ($19.99) is also available.",
    },
    accent: "#6FA382",
    tint: "rgba(111,163,130,.14)",
    iconBg: "#E7EFEA",
    fallbackGlyph: "✦",
    lead: "One proverb a day, beautifully set.",
    screenHeadline: "A small daily pause.",
    showcaseFeatures: [
      { glyph: "✦", title: "A thought a day", desc: "One idea, room to breathe." },
      { glyph: "♡", title: "Save favorites", desc: "Keep what resonates." },
      { glyph: "—", title: "No feeds", desc: "Just a moment to think." },
    ],
    screen: {
      kind: "image",
      src: "/assets/apps/daily-wisdom/screen-1.png",
      alt: "Daily Wisdom showing a Proverbs verse with copy and share",
    },
  },
];

export function getApp(slug: string): AppEntry | undefined {
  return APPS.find((a) => a.slug === slug);
}
