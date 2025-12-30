"use client";

import { useState } from "react";
import Image from "next/image";
import AppModal, { AppData } from "./AppModal";

const apps: AppData[] = [
  {
    id: "brighterstart",
    name: "BrighterStart",
    tagline: "Move forward, one step at a time",
    description:
      "BrighterStart helps ADHD minds move forward—one small step at a time. Struggling with decision fatigue or emotional overwhelm? Select your current feeling state and receive customizable routines featuring small, achievable tasks lasting just minutes. Features mood-boosting techniques using breathwork, movement, and mindfulness. Build personalized daily routines for mornings, work transitions, and wind-down periods. Track your streaks and celebrate every small win.",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/1a/a1/2a/1aa12a07-d6f8-c94b-ff62-1af58e0a5c69/AppIcon-0-0-1x_U007epad-0-1-85-220.png/200x200bb.png",
    rating: 5.0,
    ratingsCount: 1,
    price: "Free",
    category: "Productivity",
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
  },
  {
    id: "daily-wisdom",
    name: "Daily Wisdom",
    tagline: "Start your day with wisdom",
    description:
      "Start each day with wisdom from the timeless Book of Proverbs. Daily Wisdom delivers beautifully designed scripture verses to inspire and guide your spiritual journey. Enjoy a clean, distraction-free reading experience with adjustable text sizes, light and dark modes, and the ability to browse and search all verses. Share inspiring proverbs with friends and family, and access everything offline.",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/5d/e7/45/5de7457e-ed74-f7f9-ea7d-55dee66a3d32/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/200x200bb.png",
    rating: 5.0,
    ratingsCount: 2,
    price: "Free",
    category: "Lifestyle",
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
    whatsNew: {
      version: "2.1",
      date: "Dec 2024",
      notes: "Bug fix preventing premium content access",
    },
  },
  {
    id: "hoops-trivia",
    name: "Hoops Trivia",
    tagline: "The ultimate LeBron James quiz",
    description:
      "The most extensive LeBron James quiz you will ever find! With hundreds of questions all about the basketball legend, this app tests your knowledge across six categories: LeBron's Personal Life, High School Career, Cleveland Cavaliers, Miami Heat, Achievements, and Endorsement Deals. Completely ad-free for an uninterrupted trivia experience. Compete on Game Center leaderboards and unlock achievements!",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple5/v4/95/4e/33/954e339a-3839-bf69-0004-e0bf5fb86ff9/mzl.cvpayvfg.jpg/200x200bb.png",
    rating: 5.0,
    ratingsCount: 0,
    price: "$0.99",
    category: "Trivia",
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
    ],
    appStoreUrl: "https://apps.apple.com/us/app/hoops-trivia-lebron-james-edition/id946326329",
    privacyInfo: "Privacy details pending",
    platforms: ["iPhone", "iPad", "Mac", "Apple Vision"],
  },
  {
    id: "hoops-trivia-lite",
    name: "Hoops Trivia Lite",
    tagline: "Free LeBron James trivia",
    description:
      "Get started with LeBron James trivia for free! This lite version gives you a taste of the most extensive LeBron quiz ever made. Test your knowledge across six categories covering LeBron's personal life, high school career, Cleveland Cavaliers tenure, Miami Heat years, achievements, and endorsement deals. Love it? Upgrade to the full version for hundreds more questions!",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple1/v4/1b/79/66/1b7966a9-321c-c16b-82cd-e4a4f422378a/pr_source.png/200x200bb.png",
    rating: 0,
    ratingsCount: 0,
    price: "Free",
    category: "Trivia",
    ageRating: "4+",
    size: "22.5 MB",
    developer: "Ryan Bergeron",
    features: [
      "Free LeBron James trivia questions",
      "Six categories to explore",
      "Game Center leaderboards",
      "Perfect introduction to Hoops Trivia",
      "Offline play—no internet required",
    ],
    appStoreUrl: "https://apps.apple.com/us/app/hoops-trivia-lebron-james-edition-lite/id968168697",
    privacyInfo: "Privacy details pending",
    platforms: ["iPhone", "iPad", "Mac", "Apple Vision"],
  },
];

export default function AppsGrid() {
  const [selectedApp, setSelectedApp] = useState<AppData | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {apps.map((app) => (
          <button
            key={app.id}
            onClick={() => setSelectedApp(app)}
            className="group flex flex-col items-center text-center cursor-pointer"
          >
            <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 rounded-[22%] overflow-hidden shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-200 ring-1 ring-black/5">
              <Image
                src={app.icon}
                alt={`${app.name} app icon`}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
              {app.name}
            </h3>
            <p className="text-xs text-foreground/50 mt-0.5">{app.category}</p>
          </button>
        ))}
      </div>

      <AppModal app={selectedApp} onClose={() => setSelectedApp(null)} />
    </>
  );
}
