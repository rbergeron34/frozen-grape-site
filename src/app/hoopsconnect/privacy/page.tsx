import type { Metadata } from "next";
import Link from "next/link";
import { LegalHeader, SupportEmail, legalH2, legalExt } from "../../components/legal";

export const metadata: Metadata = {
  title: "Hoops Slate — Privacy Policy",
  description: "How Hoops Slate handles your data.",
  alternates: { canonical: "/hoopsconnect/privacy" },
};

export default function HoopsPrivacyPage() {
  return (
    <article className="max-w-2xl mx-auto px-6 pt-28 pb-20">
      <LegalHeader title="Privacy Policy" effectiveDate="August 8, 2026" appName="Hoops Slate" />
      <div className="mt-8 space-y-5 text-[var(--ink)]/80 leading-relaxed border-t border-[var(--border)] pt-8">
        <h2 className={legalH2}>In one sentence</h2>
        <p>Hoops Slate does not collect personal data — what you do in the app stays on your device.</p>

        <h2 className={legalH2}>What we collect</h2>
        <p>
          We do not collect, store, or transmit personal information through Hoops Slate. The app
          has no accounts, third-party analytics SDKs, advertising networks, or tracking. Your
          puzzle results, streaks, settings, and Box Score remain on your device.
        </p>
        <p>This matches the app&rsquo;s App Store privacy label: <strong>No Data Collected</strong>.</p>

        <h2 className={legalH2}>Notifications</h2>
        <p>
          If you enable daily reminders or streak warnings, iOS schedules them on your device.
          We do not receive your notification settings or activity.
        </p>

        <h2 className={legalH2}>Purchases</h2>
        <p>
          Optional purchases and subscriptions are processed by Apple through your Apple Account.
          We never see or store your payment details. Apple may provide aggregate, anonymous sales
          reports that contain no personal information.
        </p>

        <h2 className={legalH2}>Apple App Store &amp; diagnostics</h2>
        <p>
          Apple processes the app download under its own privacy policy. If you choose to share
          diagnostics with developers in iOS Settings, Apple may send us anonymized crash reports.
          For details, see <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className={legalExt}>Apple&rsquo;s privacy policy</a>.
        </p>

        <h2 className={legalH2}>Children</h2>
        <p>Hoops Slate is rated 4+ and does not knowingly collect information from anyone, including children.</p>

        <h2 className={legalH2}>Changes</h2>
        <p>If the app&rsquo;s behavior changes, we&rsquo;ll update this policy and the effective date above.</p>

        <h2 className={legalH2}>Contact</h2>
        <p>
          Questions about privacy? Email <SupportEmail /> or visit the{" "}
          <Link href="/hoopsconnect/support" className={legalExt}>Hoops Slate support page</Link>.
        </p>
      </div>
    </article>
  );
}
