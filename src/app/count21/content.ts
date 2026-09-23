import { getApp } from "@/lib/apps";

// Facts for the Count21 landing page. Mirrors the App Store
// listing (release/metadata/en-US.json) and src/lib/apps.ts — update together.

export const SLUG = "count21";
export const PRICE = "$14.99";

export function count21Links() {
  const app = getApp(SLUG);
  return {
    privacy: app?.legal?.privacy ?? "/privacy",
    terms: app?.legal?.terms ?? "/terms",
    support: "/count21/support",
    details: `/apps/${SLUG}`,
    notify: "/#notify",
  };
}

export const LESSONS = [
  { n: 1, title: "Why counting works", blurb: "What a shoe rich in tens and aces does for the player.", free: true },
  { n: 2, title: "Hi-Lo card values", blurb: "Low cards +1, middles 0, tens and aces −1.", free: true },
  { n: 3, title: "Running count", blurb: "Keep a live tally as the cards come out.", free: false },
  { n: 4, title: "True count", blurb: "The same count means more in a smaller shoe.", free: false },
  { n: 5, title: "Basic strategy", blurb: "The right play for every hand before counting matters.", free: false },
  { n: 6, title: "Deviations", blurb: "When the count says to break from the chart.", free: false },
  { n: 7, title: "Betting concepts", blurb: "How the count relates to bet sizing — in concept only.", free: false },
];

export const DRILLS = [
  { title: "Card values", desc: "See a card, name its Hi-Lo value. Unlimited and free." },
  { title: "Running count", desc: "Track a stream of cards and report the tally." },
  { title: "True count", desc: "Convert running count by decks remaining." },
  { title: "Basic strategy", desc: "Hit, stand, double, split or surrender — quickly." },
  { title: "Deviations", desc: "The Illustrious 18 and Fab 4, drilled until they stick." },
];

export const TABLE_RULES = ["6 decks", "Dealer stands on soft 17", "Double after split", "Late surrender"];

export const HILO = [
  { ranks: "2 3 4 5 6", value: "+1", tone: "plus" },
  { ranks: "7 8 9", value: "0", tone: "zero" },
  { ranks: "10 J Q K A", value: "−1", tone: "minus" },
] as const;

export const SHOTS = [
  { src: "/assets/apps/count21/screen-1.png", title: "Learn the method.", caption: "A structured path from card values to deviations.", alt: "Count21 Learn screen with three of seven lessons complete and True count up next" },
  { src: "/assets/apps/count21/screen-2.png", title: "Understand the count.", caption: "Clear explanations, examples and lesson checks.", alt: "Count21 True count lesson showing +6 ÷ 1 = +6 beside +6 ÷ 3 = +2" },
  { src: "/assets/apps/count21/screen-3.png", title: "Build fast recall.", caption: "Focused drills with guidance when you need it.", alt: "Count21 card-value drill asking the Hi-Lo value of a nine of clubs" },
  { src: "/assets/apps/count21/screen-4.png", title: "Practice every decision.", caption: "A simulated table with honest strategy review.", alt: "Count21 practice table with a soft 15 against a dealer king" },
  { src: "/assets/apps/count21/screen-5.png", title: "Nothing hidden.", caption: "Inspect the shoe, count and shuffle seed.", alt: "Count21 shoe inspector showing remaining cards by rank and the shuffle seed" },
  { src: "/assets/apps/count21/screen-6.png", title: "See your practice add up.", caption: "Accuracy, pace and practice days.", alt: "Count21 progress screen with accuracy, pace and a practice calendar" },
];

export const FREE_INCLUDES = ["Lessons 1 and 2", "Unlimited card-value drills", "Ten practice-table hands"];
export const COMPLETE_INCLUDES = [
  "All seven lessons",
  "All five drills, guided or recall",
  "Unlimited practice hands",
  "Decision reviews, count checks, shoe inspection and history export",
];

export const PRIVACY_POINTS = [
  { title: "On your device", body: "Progress and hand history are stored locally. No Count21 account, no cloud sync." },
  { title: "No ads, no tracking", body: "No advertising, analytics or tracking SDKs. Data Not Collected." },
  { title: "Works offline", body: "Practice anywhere. A connection is only needed to buy or restore Complete." },
];

export const DISCLAIMER =
  "Count21 is an educational simulation. It does not offer real-money gambling, track live games or guarantee results. All practice cards are generated within the app.";

export const PLATFORMS = "iPhone & iPad · iOS 17 or later";
