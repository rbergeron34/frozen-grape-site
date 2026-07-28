import Link from "next/link";
import type { AppEntry } from "@/lib/apps";

// Showcase/list CTA. Prefers an app's bespoke branded landing page when it has
// one (LockIN, Guiding Light), otherwise the restyled /apps/[slug] detail page (which links
// onward to the App Store). Coming-soon apps without a landing page point at
// the notify form instead.
export function AppCta({ app, className = "" }: { app: AppEntry; className?: string }) {
  if (app.landingPath) {
    return (
      <Link href={app.landingPath} className={`btn btn-dark ${className}`}>
        Explore {app.name} →
      </Link>
    );
  }
  if (app.status === "coming-soon") {
    return (
      <Link href="/#notify" className={`btn btn-ghost ${className}`}>
        Get notified →
      </Link>
    );
  }
  return (
    <Link href={`/apps/${app.slug}`} className={`btn btn-dark ${className}`}>
      View {app.name} →
    </Link>
  );
}
