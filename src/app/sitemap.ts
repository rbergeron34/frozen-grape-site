import type { MetadataRoute } from "next";
import { APPS } from "@/lib/apps";
import { SITE_URL } from "@/lib/studio";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/contact", "/support", "/legal", "/privacy", "/terms"].map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.6,
    })
  );

  const appRoutes = APPS.map((app) => ({
    url: `${SITE_URL}/apps/${app.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Per-app legal pages (bespoke paths like /guidinglight/* come from app.legal).
  const legalRoutes = APPS.flatMap((app) =>
    app.legal ? [app.legal.privacy, app.legal.terms] : []
  ).map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }));

  return [...staticRoutes, ...appRoutes, ...legalRoutes];
}
