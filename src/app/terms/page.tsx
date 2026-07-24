import type { Metadata } from "next";
import Link from "next/link";
import { APPS } from "@/lib/apps";
import { GOVERNING_LAW_STATE, LEGAL_ENTITY, STUDIO_NAME } from "@/lib/studio";
import { LegalHeader, SupportEmail, legalH2, legalUl, legalExt } from "../components/legal";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the Frozen Grape website and apps.",
  alternates: { canonical: "/terms" },
};

const EFFECTIVE_DATE = "July 13, 2026";

export default function TermsPage() {
  return (
    <article className="max-w-2xl mx-auto px-6 pt-28 pb-20">
      <LegalHeader title="Terms of Use" effectiveDate={EFFECTIVE_DATE} />

      <div className="mt-8 space-y-5 text-[var(--ink)]/80 leading-relaxed border-t border-[var(--border)] pt-8">
        <p>
          These terms govern your use of the <strong>frozengrape.app website</strong>. Each app
          has its own terms of use, linked below — those govern the app; these govern the site. By
          using either, you agree to the applicable terms.
        </p>

        <h2 id="apps" className={legalH2}>
          Our apps
        </h2>
        <p>
          {STUDIO_NAME} apps are provided for your personal use. App Store purchases and
          subscriptions are processed by Apple and governed by Apple&rsquo;s terms in addition to
          each app&rsquo;s own:
        </p>
        <ul className={legalUl}>
          {APPS.map((app) => (
            <li key={app.slug}>
              <Link href={app.legal?.terms ?? "/terms"} className={legalExt}>
                {app.name} — Terms of Use
              </Link>
              {app.subscription ? " (includes auto-renewable subscription terms)" : ""}
            </li>
          ))}
        </ul>

        <h2 id="site-use" className={legalH2}>
          Use of this website
        </h2>
        <p>
          You may browse and link to this site freely. Don&rsquo;t misuse it: no scraping at
          disruptive volume, no attempting to breach its security, and no using our forms to send
          spam or unlawful content.
        </p>

        <h2 id="ip" className={legalH2}>
          Intellectual property
        </h2>
        <p>
          App names, icons, artwork, and site content are the property of {LEGAL_ENTITY} unless
          otherwise noted. You may not redistribute them without permission. Third-party names
          referenced in our apps (for example, in sports trivia) belong to their respective owners
          — see each app&rsquo;s terms for its disclaimers.
        </p>

        <h2 id="warranty" className={legalH2}>
          No warranty &amp; limitation of liability
        </h2>
        <p>
          We work hard to make reliable software, but this site and our apps are provided
          &ldquo;as is,&rdquo; without warranty, to the maximum extent permitted by law. To the
          same extent, {LEGAL_ENTITY}&rsquo;s liability arising from your use of this site is
          limited to $10 or the minimum permitted by law, whichever is greater.
        </p>

        <h2 id="governing-law" className={legalH2}>
          Governing law
        </h2>
        <p>
          These terms are governed by the laws of the State of {GOVERNING_LAW_STATE}, United
          States, without regard to conflict-of-laws principles.
        </p>

        <h2 id="changes" className={legalH2}>
          Changes
        </h2>
        <p>
          We may update these terms from time to time; the effective date above will change when
          we do. Continued use after a change means you accept it.
        </p>

        <h2 id="contact" className={legalH2}>
          Contact
        </h2>
        <p>
          Questions? Email <SupportEmail />.
        </p>
      </div>
    </article>
  );
}
