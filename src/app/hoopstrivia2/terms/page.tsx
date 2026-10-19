import type { Metadata } from "next";
import Link from "next/link";
import { LegalHeader, SupportEmail, legalExt, legalH2 } from "../../components/legal";

// Mirrors release/website-content/hoopstrivia2/terms.md in the Hoops Trivia (New) app repo.
export const metadata: Metadata = {
  title: "Hoops Trivia 2.0 — Terms",
  description: "Pre-launch terms information for Hoops Trivia 2.0.",
  alternates: { canonical: "/hoopstrivia2/terms" },
};

export default function HoopsTrivia2TermsPage() {
  return (
    <article className="max-w-2xl mx-auto px-6 pt-28 pb-20">
      <LegalHeader title="Terms of Use" effectiveDate="October 18, 2026" appName="Hoops Trivia 2.0" />
      <div className="mt-8 space-y-5 text-[var(--ink)]/80 leading-relaxed border-t border-[var(--border)] pt-8">
        <p>Hoops Trivia 2.0 is in development. Preview images and descriptions show work in progress; features, availability and purchase options may change before release.</p>
        <h2 id="license" className={legalH2}>App license</h2>
        <p>The App Store release will use Apple&rsquo;s <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer" className={legalExt}>Standard End User License Agreement</a>. Any additional game-specific terms and purchase details will be published before launch.</p>
        <h2 id="independence" className={legalH2}>Independent game</h2>
        <p>Hoops Trivia 2.0 is not affiliated with, endorsed by, or sponsored by the NBA or any team, league, or player.</p>
        <h2 id="contact" className={legalH2}>Questions</h2>
        <p>Email <SupportEmail /> or visit <Link href="/hoopstrivia2/support" className={legalExt}>support</Link>. <Link href="/hoopstrivia2" className={legalExt}>Return to the game page</Link>.</p>
      </div>
    </article>
  );
}
