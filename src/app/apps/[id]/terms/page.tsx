import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { APPS, getApp } from "@/lib/apps";
import { GOVERNING_LAW_STATE, LEGAL_ENTITY } from "@/lib/studio";
import { LegalHeader, SupportEmail, legalH2, legalUl, legalExt } from "../../../components/legal";

// Generated from each app's data flags in src/lib/apps.ts.
// Apps with bespoke legal pages (Guiding Light) redirect there instead.

const EFFECTIVE_DATE = "July 23, 2026";

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
    title: `${app.name} — Terms of Use`,
    description: `Terms of use for ${app.name}.`,
    alternates: { canonical: `/apps/${app.slug}/terms` },
  };
}

export default async function AppTermsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const app = getApp(id);
  if (!app) notFound();

  const canonical = `/apps/${app.slug}/terms`;
  if (app.legal && app.legal.terms !== canonical) redirect(app.legal.terms);

  const hasIap = (app.inAppPurchases?.length ?? 0) > 0 || !!app.subscription;
  const isPaid = app.price !== "Free";

  return (
    <article className="max-w-2xl mx-auto px-6 pt-28 pb-20">
      <LegalHeader title="Terms of Use" effectiveDate={EFFECTIVE_DATE} appName={app.name} />

      <div className="mt-8 space-y-5 text-[var(--ink)]/80 leading-relaxed border-t border-[var(--border)] pt-8">
        <h2 id="agreement" className={legalH2}>
          Agreement
        </h2>
        <p>
          These terms govern your use of {app.name}. By installing or using the app, you agree to
          them. They&rsquo;re written to be plainly readable — if anything is unclear, ask us at{" "}
          <SupportEmail />.
        </p>

        <h2 id="license" className={legalH2}>
          License
        </h2>
        <p>
          We grant you a personal, non-exclusive, non-transferable license to use {app.name} on
          Apple devices you own or control, as permitted by the App Store terms. Your use is also
          governed by Apple&rsquo;s standard{" "}
          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            target="_blank"
            rel="noopener noreferrer"
            className={legalExt}
          >
            Licensed Application End User License Agreement
          </a>
          .
        </p>

        {(isPaid || hasIap) && (
          <>
            <h2 id="purchases" className={legalH2}>
              Purchases{app.subscription ? " & subscriptions" : ""}
            </h2>
            {isPaid && (
              <p>
                {app.name} is a paid app ({app.price}). Payment is charged to your Apple Account at
                purchase; refunds are handled by Apple under App Store policies.
              </p>
            )}
            {hasIap && !app.subscription && (
              <p>
                Optional in-app purchases are processed by Apple. Purchases are tied to your Apple
                Account and can be restored on new devices via &ldquo;Restore Purchases.&rdquo;
              </p>
            )}
            {app.subscription && (
              <>
                <p>
                  {app.name} offers <strong>{app.subscription.name}</strong> as an auto-renewable
                  subscription ({app.subscription.price} {app.subscription.period}). Payment is
                  charged to your Apple Account at confirmation of purchase. The subscription
                  renews automatically unless auto-renew is turned off at least 24 hours before the
                  end of the current period; your account is charged for renewal within 24 hours
                  prior to the end of the period. You can manage or cancel anytime in your App
                  Store account settings. Any unused portion of a free trial, if offered, is
                  forfeited when you purchase a subscription.
                </p>
                {app.subscription.note && <p>{app.subscription.note}</p>}
              </>
            )}
          </>
        )}

        {app.disclaimers && app.disclaimers.length > 0 && (
          <>
            <h2 id="disclaimers" className={legalH2}>
              Important disclaimers
            </h2>
            <ul className={legalUl}>
              {app.disclaimers.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </>
        )}

        <h2 id="acceptable-use" className={legalH2}>
          Acceptable use
        </h2>
        <p>
          Don&rsquo;t misuse the app: no reverse-engineering except where the law allows it, no
          reselling or redistributing the app or its content, and no using the app in a way that
          breaks the law or infringes others&rsquo; rights.
        </p>

        <h2 id="ip" className={legalH2}>
          Intellectual property
        </h2>
        <p>
          The app, its name, icon, design, and content are the property of {LEGAL_ENTITY} unless
          otherwise noted, and are protected by applicable intellectual-property laws.
        </p>

        <h2 id="warranty" className={legalH2}>
          No warranty &amp; limitation of liability
        </h2>
        <p>
          {app.name} is provided &ldquo;as is,&rdquo; without warranties of any kind, to the
          maximum extent permitted by law. To the same extent, {LEGAL_ENTITY}&rsquo;s total
          liability for any claim related to the app is limited to the amount you paid for it in
          the twelve months before the claim arose.
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
          We may update these terms as the app evolves. The effective date above will change when
          we do, and continued use after a change means you accept it.
        </p>

        <h2 id="contact" className={legalH2}>
          Contact
        </h2>
        <p>
          Questions? Email <SupportEmail /> or visit{" "}
          <Link href={`/support#${app.slug}`} className={legalExt}>
            Support
          </Link>
          . The studio-wide <Link href="/terms" className={legalExt}>terms of use</Link> cover this
          website.
        </p>
      </div>
    </article>
  );
}
