import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { APPS, getApp } from "@/lib/apps";
import { AppScreen } from "../../components/showcase/screens";

export function generateStaticParams() {
  return APPS.map((a) => ({ id: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const app = getApp(id);
  if (!app) return { title: "App not found" };
  return {
    title: app.name,
    description: app.description,
    alternates: { canonical: `/apps/${app.slug}` },
    openGraph: { title: `${app.name} · Frozen Grape`, description: app.description },
  };
}

function Stars({ rating, count, accent }: { rating: number; count: number; accent: string }) {
  if (count === 0) {
    return <span className="text-sm text-[var(--muted)]">Not yet rated</span>;
  }
  const filled = Math.round(rating);
  return (
    <div className="flex items-center gap-1" aria-label={`${rating.toFixed(1)} out of 5, ${count} ratings`}>
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <svg
            key={s}
            className="w-4 h-4"
            viewBox="0 0 20 20"
            fill={s <= filled ? accent : "var(--border)"}
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-sm text-[var(--muted)] ml-1">
        {rating.toFixed(1)} · {count} {count === 1 ? "rating" : "ratings"}
      </span>
    </div>
  );
}

function AppStoreButton({ url, label = "Download on the App Store" }: { url: string; label?: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      {label}
    </a>
  );
}

export default async function AppPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const app = getApp(id);
  if (!app) notFound();

  const live = app.status === "live" && app.appStoreUrl;

  return (
    <div
      className="pt-28"
      style={{ ["--accent" as string]: app.accent, ["--tint" as string]: app.tint }}
    >
      <section className="px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/#apps"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--ink)] transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to apps
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-5 mb-7">
                <div
                  className="relative w-[88px] h-[88px] rounded-[22%] overflow-hidden shrink-0 shadow-lg ring-1 ring-black/5 grid place-items-center"
                  style={{ background: app.iconBg }}
                >
                  {app.icon ? (
                    <Image src={app.icon} alt={`${app.name} icon`} fill sizes="88px" className="object-cover" />
                  ) : (
                    <span className="text-4xl" style={{ color: app.accent }}>
                      {app.fallbackGlyph}
                    </span>
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                    {app.category}
                    {!live && <span className="soon-tag">Coming soon</span>}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-1">{app.name}</h1>
                  <p className="text-[var(--muted)] font-medium">{app.tagline}</p>
                  {live && (
                    <div className="mt-2">
                      <Stars rating={app.rating} count={app.ratingsCount} accent={app.accent} />
                    </div>
                  )}
                </div>
              </div>

              <p className="text-lg text-[var(--ink)]/80 leading-relaxed mb-4">{app.longDescription}</p>

              {app.usesAI && (
                <p className="mb-7 text-sm text-[var(--muted)]">
                  {app.aiNote ?? "Uses AI features."}{" "}
                  <Link href={app.legal?.privacy ?? "/privacy"} className="underline hover:text-[var(--ink)]">
                    How we handle AI &amp; your data
                  </Link>
                  .
                </p>
              )}

              <div className="flex gap-3 flex-wrap items-center">
                {live ? (
                  <AppStoreButton url={app.appStoreUrl!} />
                ) : (
                  <Link href="/#notify" className="btn btn-dark">
                    Get notified →
                  </Link>
                )}
                {app.landingPath && (
                  <Link href={app.landingPath} className="btn btn-ghost">
                    Explore {app.name} →
                  </Link>
                )}
              </div>

              {live && (
                <div className="mt-8 grid grid-cols-4 gap-2 text-center max-w-md">
                  {[
                    ["Price", app.price],
                    ["Age", app.ageRating],
                    ["Size", app.size],
                    ["Rating", app.ratingsCount > 0 ? app.rating.toFixed(1) : "—"],
                  ].map(([label, value]) => (
                    <div key={label} className="p-3 rounded-xl bg-[var(--ink)]/[0.04]">
                      <div className="text-[10px] text-[var(--muted)] uppercase tracking-wider mb-1">{label}</div>
                      <div className="font-semibold text-sm">{value}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* preview phone */}
            <div className="flex justify-center">
              <div className="m-phone">
                <div className="m-screen">
                  <AppScreen app={app} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* features */}
      <section className="py-20 px-6 mt-16 border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold tracking-tight mb-10">Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {app.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg)]">
                <span
                  className="w-6 h-6 rounded-lg grid place-items-center shrink-0 mt-0.5 text-xs font-bold"
                  style={{ background: app.tint, color: app.accent }}
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span className="text-[var(--ink)]/80">{feature}</span>
              </div>
            ))}
          </div>

          {app.inAppPurchases && app.inAppPurchases.length > 0 && (
            <div className="mt-12">
              <h3 className="font-bold mb-4">In-app purchases</h3>
              <div className="space-y-2 max-w-md">
                {app.inAppPurchases.map((p) => (
                  <div key={p.name} className="flex items-center justify-between p-3 rounded-xl bg-[var(--ink)]/[0.04]">
                    <span className="text-[var(--ink)]/80">{p.name}</span>
                    <span className="font-medium text-[var(--accent)]">{p.price}</span>
                  </div>
                ))}
              </div>
              {app.subscription && (
                <p className="mt-4 text-sm text-[var(--muted)] max-w-2xl">
                  {app.subscription.name} is an auto-renewing subscription ({app.subscription.price}{" "}
                  {app.subscription.period}). It renews unless cancelled at least 24h before the
                  period ends; manage it in your App Store account settings.{" "}
                  {app.subscription.note}{" "}
                  <Link href={app.legal?.terms ?? "/terms"} className="underline hover:text-[var(--ink)]">
                    Subscription terms
                  </Link>
                  .
                </p>
              )}
            </div>
          )}

          {app.whatsNew && (
            <div className="mt-12">
              <h3 className="font-bold mb-1">What&rsquo;s new</h3>
              <div className="text-sm text-[var(--muted)] mb-3">
                Version {app.whatsNew.version} · {app.whatsNew.date}
              </div>
              <p className="text-[var(--ink)]/80 max-w-2xl">{app.whatsNew.notes}</p>
            </div>
          )}

          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-sm border-t border-[var(--border)] pt-8">
            <div>
              <div className="text-[var(--muted)] mb-1">Developer</div>
              <div className="text-[var(--ink)]/80">{app.developer}</div>
            </div>
            <div>
              <div className="text-[var(--muted)] mb-1">Compatibility</div>
              <div className="text-[var(--ink)]/80">{app.platforms.join(", ")}</div>
            </div>
            <div>
              <div className="text-[var(--muted)] mb-1">Privacy</div>
              <div className="text-[var(--ink)]/80">{app.privacyInfo}</div>
              {app.legal && (
                <div className="mt-1 flex gap-3">
                  <Link href={app.legal.privacy} className="underline hover:text-[var(--ink)]">
                    Privacy Policy
                  </Link>
                  <Link href={app.legal.terms} className="underline hover:text-[var(--ink)]">
                    Terms
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-2xl font-extrabold mb-6">
          {live ? `Ready to try ${app.name}?` : `${app.name} is on the way.`}
        </h2>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          {live ? (
            <AppStoreButton url={app.appStoreUrl!} label="Download now" />
          ) : (
            <Link href="/#notify" className="btn btn-dark">
              Get notified
            </Link>
          )}
          <Link href={`/support#${app.slug}`} className="btn btn-ghost">
            Support
          </Link>
        </div>
      </section>
    </div>
  );
}
