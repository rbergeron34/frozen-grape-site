import Link from "next/link";
import { notFound } from "next/navigation";

// Apps data - keep in sync with home page or move to a shared file
const apps: Record<string, {
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  color: string;
  features: string[];
  appStoreUrl: string;
  screenshots: string[];
}> = {
  "daily-wisdom": {
    name: "Daily Wisdom: Proverbs",
    tagline: "Start your day with wisdom",
    description: "A clean, distraction-free way to read and reflect on the Book of Proverbs.",
    longDescription: "Start each day with a carefully selected proverb from the Book of Proverbs, designed to inspire and guide your spiritual journey. Daily Wisdom offers a clean, distraction-free reading experience, allowing you to reflect on timeless biblical truths that provide practical wisdom for modern life. Whether you're seeking guidance, meditation, or a habit of scripture reading, this app serves as your daily companion for spiritual growth.",
    color: "bg-purple-900",
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
  }
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
                <div className={`w-24 h-24 rounded-2xl ${app.color} flex items-center justify-center shadow-lg text-white`}>
                   <span className="text-4xl font-bold">{app.name.charAt(0)}</span>
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
