import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { APPS } from "@/lib/apps";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://frozengrape.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Frozen Grape — Small iOS apps, thoughtfully made.",
    template: "%s · Frozen Grape",
  },
  description:
    "Frozen Grape is a tiny iOS studio building simple, quiet tools for routines, reflection, and games.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Frozen Grape Studios",
    title: "Frozen Grape — Small iOS apps, thoughtfully made.",
    description:
      "A tiny iOS studio building simple, quiet tools for routines, reflection, and games.",
    // image auto-wired from src/app/opengraph-image.png
  },
  twitter: {
    card: "summary_large_image",
    title: "Frozen Grape — Small iOS apps, thoughtfully made.",
    description:
      "A tiny iOS studio building simple, quiet tools for routines, reflection, and games.",
    // image auto-wired from src/app/twitter-image.png
  },
};

function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#org`,
        name: "Frozen Grape Studios",
        url: SITE_URL,
        description: "An independent iOS studio building small, thoughtful apps.",
      },
      {
        "@type": "ItemList",
        name: "Frozen Grape apps",
        itemListElement: APPS.map((app, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "SoftwareApplication",
            name: app.name,
            applicationCategory: app.category,
            operatingSystem: "iOS",
            offers: { "@type": "Offer", price: app.price === "Free" ? "0" : app.price.replace("$", "") },
            ...(app.appStoreUrl ? { url: app.appStoreUrl } : {}),
          },
        })),
      },
    ],
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} antialiased min-h-screen flex flex-col`}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>

        <nav className="fixed top-3 inset-x-3 sm:inset-x-6 z-50 flex items-center justify-between px-5 sm:px-6 py-3 rounded-full bg-white/70 backdrop-blur-xl border border-[var(--border)] shadow-[0_12px_40px_rgba(31,20,54,0.06)]">
          <Link href="/" className="flex items-center" aria-label="Frozen Grape Studios — home">
            <Image
              src="/brand/logo-wordmark.png"
              alt="Frozen Grape Studios"
              width={131}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium text-[var(--muted)]">
            <Link href="/#apps" className="hover:text-[var(--ink)] transition-colors">
              Apps
            </Link>
            <Link href="/#studio" className="hover:text-[var(--ink)] transition-colors">
              Studio
            </Link>
            <Link href="/contact" className="hover:text-[var(--ink)] transition-colors">
              Contact
            </Link>
          </div>
        </nav>

        <main id="main" className="flex-grow">
          {children}
        </main>

        <footer className="site-footer w-full px-6 py-9 mt-10 text-[13px] text-[var(--muted)]">
          <div className="max-w-5xl mx-auto w-full flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 font-bold tracking-tight text-[var(--ink)]">
            <span className="inline-block w-2 h-2 rounded-full bg-[var(--grape)]" />
            Frozen Grape
          </Link>
          <div className="flex gap-5">
            <Link href="/#apps" className="hover:text-[var(--ink)] transition-colors">
              Apps
            </Link>
            <Link href="/support" className="hover:text-[var(--ink)] transition-colors">
              Support
            </Link>
            <Link href="/privacy" className="hover:text-[var(--ink)] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[var(--ink)] transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-[var(--ink)] transition-colors">
              Contact
            </Link>
          </div>
          <span>© {new Date().getFullYear()} Frozen Grape Studios</span>
          </div>
        </footer>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
        />
      </body>
    </html>
  );
}
