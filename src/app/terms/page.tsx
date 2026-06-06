import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for Frozen Grape Studios apps and website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <article className="max-w-2xl mx-auto px-6 pt-28 pb-20">
      <h1 className="text-4xl font-extrabold tracking-tight">Terms of Use</h1>
      <p className="mt-2 text-sm text-[var(--muted)]">Last updated: {new Date().getFullYear()}</p>

      <div className="mt-8 space-y-5 text-[var(--ink)]/80 leading-relaxed">
        <p>
          These terms apply to the Frozen Grape Studios website and apps. By using them, you agree
          to the terms below.
        </p>

        <h2 className="text-xl font-bold text-[var(--ink)] pt-4">Use of our apps</h2>
        <p>
          Our apps are provided as-is for your personal use. App Store purchases and subscriptions
          are governed by Apple&rsquo;s terms in addition to these.
        </p>

        <h2 className="text-xl font-bold text-[var(--ink)] pt-4">Auto-renewable subscriptions</h2>
        <p>
          Daily Wisdom offers <strong>Daily Wisdom Premium</strong> as an auto-renewable
          subscription (currently $2.99 per month). Payment is charged to your Apple ID at
          confirmation of purchase. The subscription renews automatically unless auto-renew is
          turned off at least 24 hours before the end of the current period; your account is
          charged for renewal within 24 hours prior to the end of the period. You can manage or
          cancel anytime in your App Store account settings. A one-time Lifetime unlock ($19.99)
          is also available and does not auto-renew. Any unused portion of a free trial, if
          offered, is forfeited when you purchase a subscription.
        </p>
        <p className="text-sm text-[var(--muted)]">
          Note: subscription billing period is being confirmed — verify before launch.
        </p>

        <h2 className="text-xl font-bold text-[var(--ink)] pt-4">Intellectual property</h2>
        <p>
          App names, icons, and content are the property of Frozen Grape Studios unless otherwise
          noted. You may not redistribute them without permission.
        </p>

        <h2 className="text-xl font-bold text-[var(--ink)] pt-4">Liability</h2>
        <p>
          We work hard to make reliable software, but our apps and site are provided without
          warranty to the extent permitted by law.
        </p>

        <h2 className="text-xl font-bold text-[var(--ink)] pt-4">Contact</h2>
        <p>
          Questions? Email{" "}
          <a href="mailto:support@frozengrape.com" className="text-[var(--ink)] font-medium hover:underline">
            support@frozengrape.com
          </a>
          .
        </p>

        <p className="text-sm text-[var(--muted)] pt-6 border-t border-[var(--border)]">
          This is placeholder copy. Replace with your finalized terms before launch.
        </p>
      </div>
    </article>
  );
}
