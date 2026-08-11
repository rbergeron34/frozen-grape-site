import type { Metadata } from "next";
import Link from "next/link";
import { LegalHeader, SupportEmail, legalH2, legalExt } from "../../components/legal";

// Bespoke policy for BrighterStart 2.0 — this URL is the Privacy Policy URL in
// App Store Connect. Source copy lives in the app repo (docs/Site/privacy.md);
// keep the two in sync if the app's behavior changes.

export const metadata: Metadata = {
  title: "BrighterStart — Privacy Policy",
  description: "How BrighterStart handles your data.",
  alternates: { canonical: "/brighterstart/privacy" },
};

export default function BrighterStartPrivacyPage() {
  return (
    <article className="max-w-2xl mx-auto px-6 pt-28 pb-20">
      <LegalHeader title="Privacy Policy" effectiveDate="August 10, 2026" appName="BrighterStart" />
      <div className="mt-8 space-y-5 text-[var(--ink)]/80 leading-relaxed border-t border-[var(--border)] pt-8">
        <h2 className={legalH2}>In one sentence</h2>
        <p>
          BrighterStart has no accounts, no analytics, no ads, and no tracking — your data stays on
          your phone and in your own iCloud, and we never see it, collect it, sell it, or share it.
        </p>

        <h2 className={legalH2}>What the app stores, and where</h2>
        <p>
          BrighterStart keeps your alarms, routines, morning and sleep logs, app blocker choices,
          and settings on your device. If your iPhone has iCloud enabled, that data syncs through
          your <em>private</em> iCloud database so it can restore to your own devices. That
          database belongs to your Apple Account; we have no access to it. Apple&rsquo;s handling
          of iCloud data is governed by{" "}
          <a
            href="https://www.apple.com/legal/privacy/"
            target="_blank"
            rel="noopener noreferrer"
            className={legalExt}
          >
            Apple&rsquo;s privacy policy
          </a>
          .
        </p>

        <h2 className={legalH2}>Apple Health (HealthKit)</h2>
        <p>
          You can optionally let BrighterStart <strong>read</strong> your sleep data from Apple
          Health. It is used for exactly one thing: overlaying your true wake times (and
          back-to-sleep mornings) on the app&rsquo;s wake rhythm chart, on your device.
          BrighterStart never writes to Health, never transmits Health data anywhere, and never
          uses it for advertising, marketing, or any purpose other than showing you your own
          sleep. Health data is never disclosed to any third party. You can revoke access at any
          time in Settings &rsaquo; Privacy &amp; Security &rsaquo; Health, and the app works
          fully without it.
        </p>

        <h2 className={legalH2}>Screen Time (the app blocker)</h2>
        <p>
          The optional evening app blocker uses Apple&rsquo;s Screen Time (Family Controls)
          framework to quiet apps you choose during your night window. Your selections and
          schedule are stored on your device and shared only with the app&rsquo;s own monitor
          extension. BrighterStart cannot see which apps you choose — Apple&rsquo;s framework
          keeps those tokens opaque even to us — and nothing about your Screen Time usage is
          transmitted anywhere. You can revoke access at any time in Settings &rsaquo; Screen
          Time.
        </p>

        <h2 className={legalH2}>Camera &amp; motion (wake-up missions)</h2>
        <p>
          The photo wake-up mission uses your camera to confirm you&rsquo;re up, and the steps
          mission counts steps with your iPhone&rsquo;s motion sensors. Both are analyzed entirely
          on your device — photos are checked in the moment and never stored or uploaded, and
          step counts never leave your phone.
        </p>

        <h2 className={legalH2}>Apple Music</h2>
        <p>
          If you turn on &ldquo;wake to music,&rdquo; BrighterStart asks for access to your music
          library only to let you pick a song and play it after the alarm is dismissed. Your
          library contents are not collected or transmitted.
        </p>

        <h2 className={legalH2}>Alarms &amp; notifications</h2>
        <p>
          Alarms are scheduled through Apple&rsquo;s AlarmKit on your device. No alarm data leaves
          your phone.
        </p>

        <h2 className={legalH2}>What we collect</h2>
        <p>
          Nothing. BrighterStart contains no analytics or advertising SDKs, requires no account,
          and sends no data to us or to third parties. Because we hold no personal data about
          you, there is nothing for us to sell, share, or delete on your behalf — deleting the
          app (and its iCloud data via Settings &rsaquo; [your name] &rsaquo; iCloud) removes
          everything.
        </p>
        <p>This matches the app&rsquo;s App Store privacy label: <strong>No Data Collected</strong>.</p>

        <h2 className={legalH2}>Apple App Store &amp; diagnostics</h2>
        <p>
          Apple processes the app download under its own privacy policy. If you choose to share
          diagnostics with developers in iOS Settings, Apple may send us anonymized crash
          reports. They contain no personal information.
        </p>

        <h2 className={legalH2}>Children</h2>
        <p>
          BrighterStart is not directed at children, and collects no data from anyone, children
          included.
        </p>

        <h2 className={legalH2}>Changes to this policy</h2>
        <p>
          If a future version of the app changes any of the above — for example, if optional
          subscriptions are added — this policy will be updated first, with the effective date
          above.
        </p>

        <h2 className={legalH2}>Contact</h2>
        <p>
          Questions about privacy? Email <SupportEmail /> or visit the{" "}
          <Link href="/brighterstart/support" className={legalExt}>BrighterStart support page</Link>.
        </p>
      </div>
    </article>
  );
}
