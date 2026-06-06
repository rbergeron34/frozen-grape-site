import type { Metadata } from "next";
import Link from "next/link";
import { APPS } from "@/lib/apps";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with Frozen Grape apps — contact, bug reports, feature requests, and account deletion.",
  alternates: { canonical: "/support" },
};

const accountApps = APPS.filter((a) => a.hasAccount);

export default function SupportPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
      <h1 className="text-4xl font-extrabold tracking-tight">Support</h1>
      <p className="mt-3 text-[var(--muted)] text-lg max-w-2xl">
        We&rsquo;re a small studio and we read every message. Here&rsquo;s how to get help.
      </p>

      {/* paths */}
      <div className="mt-8 grid sm:grid-cols-3 gap-3">
        <Link
          href="/contact?topic=support"
          className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 hover:border-[var(--ink)] transition-colors"
        >
          <div className="font-bold">Contact support</div>
          <p className="text-sm text-[var(--muted)] mt-1">Questions about any app.</p>
        </Link>
        <Link
          href="/contact?topic=bug"
          className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 hover:border-[var(--ink)] transition-colors"
        >
          <div className="font-bold">Report a bug</div>
          <p className="text-sm text-[var(--muted)] mt-1">Something not working right.</p>
        </Link>
        <Link
          href="/contact?topic=feature"
          className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 hover:border-[var(--ink)] transition-colors"
        >
          <div className="font-bold">Request a feature</div>
          <p className="text-sm text-[var(--muted)] mt-1">Tell us what you&rsquo;d like to see.</p>
        </Link>
      </div>

      <p className="mt-6 text-[var(--muted)]">
        Prefer email? Reach us at{" "}
        <a href="mailto:support@frozengrape.com" className="text-[var(--ink)] font-medium hover:underline">
          support@frozengrape.com
        </a>
        .
      </p>

      {/* per-app help */}
      <h2 className="text-2xl font-extrabold tracking-tight mt-14 mb-5">Help by app</h2>
      <div className="space-y-4">
        {APPS.map((app) => (
          <div
            key={app.slug}
            id={app.slug}
            className="scroll-mt-24 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
          >
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h3 className="font-bold text-lg">{app.name}</h3>
              <Link href={`/apps/${app.slug}`} className="text-sm text-[var(--muted)] hover:text-[var(--ink)]">
                App details →
              </Link>
            </div>
            {/* EDITABLE — replace with real per-app help once written */}
            <p className="text-[var(--ink)]/80 mt-2">
              {app.status === "coming-soon"
                ? `${app.name} isn't out yet. Questions in the meantime? Email support and we'll help.`
                : `For help with ${app.name}, email support with your device and iOS version and we'll get back to you.`}
            </p>
          </div>
        ))}
      </div>

      {/* account & data deletion */}
      {accountApps.length > 0 && (
        <>
          <h2 className="text-2xl font-extrabold tracking-tight mt-14 mb-3">
            Account &amp; data deletion
          </h2>
          <p className="text-[var(--ink)]/80 max-w-2xl">
            You can delete your account and associated data at any time. These apps support
            accounts: {accountApps.map((a) => a.name).join(", ")}.
          </p>
          <ul className="mt-4 space-y-3 text-[var(--ink)]/80 max-w-2xl">
            <li className="flex gap-3">
              <span className="font-bold text-[var(--ink)]">In the app:</span>
              <span>
                Open the app and go to{" "}
                <span className="font-medium">
                  {accountApps[0]?.accountDeletionPath ?? "Settings → Account → Delete Account"}
                </span>
                . This permanently removes your account and its data.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-[var(--ink)]">By email:</span>
              <span>
                Email{" "}
                <a href="mailto:support@frozengrape.com" className="font-medium hover:underline">
                  support@frozengrape.com
                </a>{" "}
                from the address on your account and we&rsquo;ll delete it within 30 days.
              </span>
            </li>
          </ul>
          <p className="mt-4 text-sm text-[var(--muted)] border-t border-[var(--border)] pt-4">
            Note: exact in-app steps are being finalized per app — confirm before launch.
          </p>
        </>
      )}
    </div>
  );
}
