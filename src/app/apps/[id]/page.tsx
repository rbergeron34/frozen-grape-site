import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Apps data - keep in sync with home page or move to a shared file
const apps: Record<string, {
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  appStoreUrl: string;
  screenshots: string[];
}> = {
  "brighterstart": {
    name: "BrighterStart",
    tagline: "Move forward, one step at a time",
    description: "Helps ADHD minds build momentum through guided routines.",
    longDescription: "BrighterStart helps individuals with ADHD manage daily challenges through guided routines. Select your current emotional state and receive customizable routines featuring small, achievable tasks. Features mood-boosting techniques like breathwork and mindfulness, streak tracking to celebrate progress, and the ability to build personalized routines for morning prep, work transitions, and wind-down periods.",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/1a/a1/2a/1aa12a07-d6f8-c94b-ff62-1af58e0a5c69/AppIcon-0-0-1x_U007epad-0-1-85-220.png/200x200bb.png",
    features: [
      "Emotion-based routine selection",
      "Small, achievable tasks to build momentum",
      "Breathwork and mindfulness exercises",
      "Streak tracking to celebrate progress",
      "Customizable morning and evening routines",
      "Privacy-focused—no data collected",
    ],
    appStoreUrl: "https://apps.apple.com/us/app/brighterstart/id6745766308",
    screenshots: [],
  },
  "daily-wisdom": {
    name: "Daily Wisdom: Book of Proverbs",
    tagline: "Start your day with wisdom",
    description: "A clean, distraction-free way to read and reflect on the Book of Proverbs.",
    longDescription: "Start each day with a carefully selected proverb from the Book of Proverbs, designed to inspire and guide your spiritual journey. Daily Wisdom offers a clean, distraction-free reading experience, allowing you to reflect on timeless biblical truths that provide practical wisdom for modern life. Whether you're seeking guidance, meditation, or a habit of scripture reading, this app serves as your daily companion for spiritual growth.",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/5d/e7/45/5de7457e-ed74-f7f9-ea7d-55dee66a3d32/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/200x200bb.png",
    features: [
      "Daily proverb delivered fresh each morning",
      "Adjustable text size for comfortable reading",
      "Browse and search verses from the Book of Proverbs",
      "Light and dark modes to suit your preference",
      "Share verses with friends and family",
      "Offline access—no internet required",
    ],
    appStoreUrl: "https://apps.apple.com/us/app/daily-wisdom-book-of-proverbs/id977329614",
    screenshots: [],
  },
  "hoops-trivia": {
    name: "Hoops Trivia - LeBron James Edition",
    tagline: "The ultimate LeBron James quiz",
    description: "Test your knowledge about the NBA legend with hundreds of questions.",
    longDescription: "The most extensive LeBron James quiz you will ever find! With hundreds of questions all about the basketball legend, this app tests your knowledge across six categories including LeBron's Personal Life, High School Career, Cleveland Cavaliers, Miami Heat, and his incredible achievements. Completely ad-free for an uninterrupted trivia experience.",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple5/v4/95/4e/33/954e339a-3839-bf69-0004-e0bf5fb86ff9/mzl.cvpayvfg.jpg/200x200bb.png",
    features: [
      "Hundreds of LeBron James trivia questions",
      "Six different categories to test your knowledge",
      "Track your high scores and progress",
      "Completely ad-free experience",
      "Perfect for basketball fans",
      "Offline play—no internet required",
    ],
    appStoreUrl: "https://apps.apple.com/us/app/hoops-trivia-lebron-james-edition/id946326329",
    screenshots: [],
  },
  "hoops-trivia-lite": {
    name: "Hoops Trivia Lite",
    tagline: "Free LeBron James trivia",
    description: "Try the free version of the ultimate LeBron James quiz.",
    longDescription: "Get started with LeBron James trivia for free! This lite version gives you a taste of the extensive quiz experience with a selection of questions about the basketball legend. Test your knowledge and see if you have what it takes to master the full version.",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple1/v4/1b/79/66/1b7966a9-321c-c16b-82cd-e4a4f422378a/pr_source.png/200x200bb.png",
    features: [
      "Free LeBron James trivia questions",
      "Multiple categories to explore",
      "Perfect introduction to Hoops Trivia",
      "No commitment—try before you buy",
      "Offline play—no internet required",
    ],
    appStoreUrl: "https://apps.apple.com/us/app/hoops-trivia-lebron-james-edition-lite/id968168697",
    screenshots: [],
  },
};

export function generateStaticParams() {
  return Object.keys(apps).map((id) => ({ id }));
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  return params.then((resolvedParams) => {
    const app = apps[resolvedParams.id];
    if (!app) {
      return { title: "App Not Found" };
    }
    return {
      title: `${app.name} | Frozen Grape Studios`,
      description: app.description,
    };
  });
}

export default async function AppPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const app = apps[resolvedParams.id];

  if (!app) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-grid-pattern">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/#apps"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/50 hover:text-foreground transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Apps
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-6 mb-8">
                {/* App Icon */}
                <div className="relative w-24 h-24 rounded-[22%] overflow-hidden shadow-lg flex-shrink-0">
                  <Image
                    src={app.icon}
                    alt={`${app.name} app icon`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-4xl font-bold tracking-tight mb-2">{app.name}</h1>
                  <p className="text-xl text-primary font-medium">{app.tagline}</p>
                </div>
              </div>

              <p className="text-lg text-foreground/80 leading-relaxed mb-8">{app.longDescription}</p>

              <a
                href={app.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on App Store
              </a>
            </div>

            {/* Screenshot/Preview Area */}
            <div className="relative bg-black/5 dark:bg-white/5 rounded-3xl aspect-[4/5] flex items-center justify-center p-8">
               <p className="text-foreground/40 text-center text-sm">
                 App Screenshots Placement
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 border-t border-black/5 dark:border-white/5 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-12">Key Features</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {app.features.map((feature, index) => (
              <div
                key={index}
                className="card p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-medium text-foreground/90">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 border-t border-black/5 dark:border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to try {app.name}?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href={app.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download Now
            </a>
            <Link href="/contact" className="btn-secondary">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
