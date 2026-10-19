import type { Metadata } from "next";
import Link from "next/link";
import { LegalHeader, SupportEmail, legalExt, legalH2 } from "../../components/legal";

// Mirrors release/website-content/hoopstrivia2/support.md in the Hoops Trivia (New) app repo.
export const metadata: Metadata = {
  title: "Hoops Trivia 2.0 — Support",
  description: "News and support for the upcoming Hoops Trivia 2.0 basketball board game.",
  alternates: { canonical: "/hoopstrivia2/support" },
};

export default function HoopsTrivia2SupportPage() {
  return (
    <article className="max-w-2xl mx-auto px-6 pt-28 pb-20">
      <LegalHeader title="Support" effectiveDate="October 18, 2026" appName="Hoops Trivia 2.0" />
      <div className="mt-8 space-y-5 text-[var(--ink)]/80 leading-relaxed border-t border-[var(--border)] pt-8">
        <p>Hoops Trivia 2.0 is a basketball board game in development for iPhone and iPad.</p>
        <h2 className={legalH2}>When can I play?</h2>
        <p>It is coming soon. We have not announced a release date. <Link href="/#notify" className={legalExt}>Join the studio launch list</Link> for launch news.</p>
        <h2 className={legalH2}>Is this the original Hoops Trivia?</h2>
        <p>This site lists Hoops Trivia 2.0 as a new game. The <Link href="/apps/hoops-trivia" className={legalExt}>original Hoops Trivia</Link> has its own page and App Store link.</p>
        <h2 className={legalH2}>What does the preview show?</h2>
        <p>The current development build: a neighborhood board, basketball trivia, court upgrades and team play. Features and presentation may change before release.</p>
        <h2 className={legalH2}>Contact us</h2>
        <p>Email <SupportEmail /> with “Hoops Trivia 2.0” in the subject. If you are testing a preview, include your device, build version and what happened.</p>
        <p><Link href="/hoopstrivia2" className={legalExt}>Game home</Link> · <Link href="/hoopstrivia2/privacy" className={legalExt}>Privacy</Link> · <Link href="/hoopstrivia2/terms" className={legalExt}>Terms</Link></p>
      </div>
    </article>
  );
}
