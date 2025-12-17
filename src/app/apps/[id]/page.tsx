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
  "app-one": {
    name: "App One",
    tagline: "Your first amazing app",
    description: "A brief description of what this app does and why users love it.",
    longDescription: "App One is designed to help you accomplish your goals with ease. With a beautiful interface and powerful features, it's the perfect companion for your daily tasks. Whether you're at home or on the go, App One adapts to your workflow and helps you stay productive.",
    color: "from-purple-500 to-pink-500",
    features: [
      "Intuitive and beautiful interface",
      "Syncs across all your devices",
      "Dark mode support",
      "Widget for quick access",
      "Privacy focused - your data stays yours",
    ],
    appStoreUrl: "#",
    screenshots: [],
  },
  "app-two": {
    name: "App Two",
    tagline: "Another great creation",
    description: "A brief description of what this app does and why users love it.",
    longDescription: "App Two revolutionizes the way you interact with your digital world. Built with the latest technologies and designed with user experience in mind, it delivers a seamless experience that feels native and natural.",
    color: "from-cyan-500 to-blue-500",
    features: [
      "Lightning fast performance",
      "Customizable themes",
      "Smart notifications",
      "Offline support",
      "Regular updates with new features",
    ],
    appStoreUrl: "#",
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
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/#apps"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-grape transition-colors mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Apps
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* App Icon */}
              <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${app.color} flex items-center justify-center shadow-2xl mb-8`}>
                <span className="text-white text-6xl font-bold">
                  {app.name.charAt(0)}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">{app.name}</h1>
              <p className="text-xl text-grape font-medium mb-6">{app.tagline}</p>
              <p className="text-foreground/70 text-lg mb-8">{app.longDescription}</p>

              <a
                href={app.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on the App Store
              </a>
            </div>

            {/* Screenshot/Preview Area */}
            <div className="relative">
              <div className={`aspect-[9/16] max-w-xs mx-auto rounded-3xl bg-gradient-to-br ${app.color} opacity-20`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white dark:bg-foreground/10 rounded-3xl shadow-2xl p-8 text-center max-w-xs">
                  <p className="text-foreground/60">
                    Add your app screenshots here to showcase your app in action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-foreground/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Features</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {app.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-foreground/5"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center mb-4`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to try <span className="gradient-text">{app.name}</span>?
          </h2>
          <p className="text-foreground/60 text-lg mb-8">
            Download now and see why users love it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={app.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download Now
            </a>
            <Link href="/contact" className="btn-secondary">
              Have Questions?
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
