import type { Metadata } from "next";
import Link from "next/link";
import { APPS } from "@/lib/apps";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Privacy policies, terms of use, and disclosures for every Frozen Grape app, all in one place.",
  alternates: { canonical: "/legal" },
};

const card =
  "rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6";
const chip =
  "inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1 text-sm font-medium hover:border-[var(--ink)] transition-colors";

export default function LegalPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
      <h1 className="text-4xl font-extrabold tracking-tight">Legal</h1>
      <p className="mt-3 text-[var(--muted)] text-lg max-w-2xl">
        Every policy for our apps and this website, in one place. Each app has its own privacy
        policy and terms; the studio-wide documents cover the website and anything an app-specific
        page doesn&rsquo;t.
      </p>

      {/* studio-wide */}
      <h2 className="text-2xl font-extrabold tracking-tight mt-12 mb-4">Studio &amp; website</h2>
      <div className="grid sm:grid-cols-2 gap-3">
        <Link href="/privacy" className={`${card} hover:border-[var(--ink)] transition-colors`}>
          <div className="font-bold">Privacy Policy</div>
          <p className="text-sm text-[var(--muted)] mt-1">
            This website, the contact form, and the launch-notification list.
          </p>
        </Link>
        <Link href="/terms" className={`${card} hover:border-[var(--ink)] transition-colors`}>
          <div className="font-bold">Terms of Use</div>
          <p className="text-sm text-[var(--muted)] mt-1">
            Use of this website and studio-wide terms.
          </p>
        </Link>
      </div>

      {/* per-app */}
      <h2 className="text-2xl font-extrabold tracking-tight mt-12 mb-4">By app</h2>
      <div className="space-y-4">
        {APPS.map((app) => (
          <div key={app.slug} className={card}>
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <h3 className="font-bold text-lg">{app.name}</h3>
                <p className="text-sm text-[var(--muted)]">
                  {app.status === "coming-soon" ? "Coming soon · " : ""}
                  {app.privacyInfo}
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Link href={app.legal?.privacy ?? "/privacy"} className={chip}>
                  Privacy Policy
                </Link>
                <Link href={app.legal?.terms ?? "/terms"} className={chip}>
                  Terms of Use
                </Link>
              </div>
            </div>
            {(app.usesAI || app.subscription || (app.disclaimers?.length ?? 0) > 0) && (
              <ul className="mt-4 space-y-2 text-sm text-[var(--ink)]/80 border-t border-[var(--border)] pt-4">
                {app.usesAI && (
                  <li>
                    <strong>AI disclosure:</strong> {app.name} uses AI features; its privacy policy
                    explains exactly what is sent, when, and how to opt out.
                  </li>
                )}
                {app.subscription && (
                  <li>
                    <strong>Subscription:</strong> {app.subscription.name} is auto-renewable (
                    {app.subscription.price} {app.subscription.period}); see the app&rsquo;s terms
                    for renewal and cancellation details.
                  </li>
                )}
                {app.disclaimers?.map((d) => (
                  <li key={d}>
                    <strong>Disclaimer:</strong> {d}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <p className="mt-10 text-[var(--muted)] text-sm border-t border-[var(--border)] pt-6">
        Need to delete an account or your data? See{" "}
        <Link href="/support#account" className="font-medium text-[var(--ink)] hover:underline">
          account &amp; data deletion
        </Link>{" "}
        on the Support page. Anything else, email{" "}
        <a href="mailto:support@frozengrape.app" className="font-medium text-[var(--ink)] hover:underline">
          support@frozengrape.app
        </a>
        .
      </p>
    </div>
  );
}
