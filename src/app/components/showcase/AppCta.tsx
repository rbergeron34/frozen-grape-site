import Link from "next/link";
import type { AppEntry } from "@/lib/apps";

// Showcase/list CTA. Per product decision, links to the restyled /apps/[slug]
// detail page (which links onward to the App Store). Coming-soon apps show a
// static badge instead.
export function AppCta({ app, className = "" }: { app: AppEntry; className?: string }) {
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
