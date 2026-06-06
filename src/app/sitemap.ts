import type { MetadataRoute } from "next";
import { APPS } from "@/lib/apps";

const SITE_URL = "https://frozengrape.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/contact", "/support", "/privacy", "/terms"].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.6,
  }));

  const appRoutes = APPS.map((app) => ({
    url: `${SITE_URL}/apps/${app.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...appRoutes];
}
