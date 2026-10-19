import type { Metadata } from "next";
import Link from "next/link";
import { LegalHeader, SupportEmail, legalExt, legalH2 } from "../../components/legal";

// Mirrors release/website-content/hoopstrivia2/privacy.md in the Hoops Trivia (New) app repo.
export const metadata: Metadata = {
  title: "Hoops Trivia 2.0 — Privacy",
  description: "Pre-launch privacy information for Hoops Trivia 2.0.",
  alternates: { canonical: "/hoopstrivia2/privacy" },
};

export default function HoopsTrivia2PrivacyPage() {
  return (
    <article className="max-w-2xl mx-auto px-6 pt-28 pb-20">
      <LegalHeader title="Privacy" effectiveDate="October 18, 2026" appName="Hoops Trivia 2.0" />
      <div className="mt-8 space-y-5 text-[var(--ink)]/80 leading-relaxed border-t border-[var(--border)] pt-8">
        <p>Hoops Trivia 2.0 is in development and is not available for download. This page provides pre-launch information; the release privacy policy and App Store privacy label will be published before the game launches.</p>
        <h2 id="preview" className={legalH2}>Development preview</h2>
        <p>The current preview saves game progress on the device. The services and data practices of the release version are still being finalized. We are not announcing an App Store privacy label for the new game yet.</p>
        <h2 id="launch-list" className={legalH2}>Launch news</h2>
        <p>If you join the studio launch list, the <Link href="/privacy#notify-list" className={legalExt}>studio privacy policy</Link> explains how your email address is handled.</p>
        <h2 id="support" className={legalH2}>Support</h2>
        <p>If you email us, we use the information you choose to send to respond to your request. Please leave out passwords, payment details and other sensitive information.</p>
        <h2 id="contact" className={legalH2}>Contact</h2>
        <p>For privacy questions, email <SupportEmail />. <Link href="/hoopstrivia2" className={legalExt}>Return to Hoops Trivia 2.0</Link>.</p>
      </div>
    </article>
  );
}
