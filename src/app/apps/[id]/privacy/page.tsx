import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { APPS, getApp } from "@/lib/apps";
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
    title: `${app.name} — Privacy Policy`,
    description: `How ${app.name} handles your data.`,
    alternates: { canonical: `/apps/${app.slug}/privacy` },
  };
}

export default async function AppPrivacyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const app = getApp(id);
  if (!app) notFound();

  const canonical = `/apps/${app.slug}/privacy`;
  if (app.legal && app.legal.privacy !== canonical) redirect(app.legal.privacy);

  const collectsNothing = app.privacyInfo === "No data collected";
  const hasPurchases =
    (app.inAppPurchases?.length ?? 0) > 0 || !!app.subscription || app.price !== "Free";

  return (
    <article className="max-w-2xl mx-auto px-6 pt-28 pb-20">
      <LegalHeader title="Privacy Policy" effectiveDate={EFFECTIVE_DATE} appName={app.name} />

      <div className="mt-8 space-y-5 text-[var(--ink)]/80 leading-relaxed border-t border-[var(--border)] pt-8">
        {app.status === "coming-soon" && (
          <p className="rounded-xl bg-[var(--ink)]/[0.04] p-4 text-sm">
            {app.name} hasn&rsquo;t launched yet. This policy describes how the first release is
            designed to behave; we&rsquo;ll finalize it at launch and update the effective date if
            anything changes.
          </p>
        )}

        <h2 id="summary" className={legalH2}>
          In one sentence
        </h2>
        <p>
          {collectsNothing
            ? `${app.name} does not collect personal data — what you do in the app stays on your device.`
            : `${app.name} is built to collect as little as possible; this page describes exactly what is and isn't handled.`}
        </p>

        <h2 id="what-we-collect" className={legalH2}>
          What we collect
        </h2>
        {collectsNothing ? (
          <>
            <p>
              We do not collect, store, or transmit personal information through {app.name}. There
              are no third-party analytics SDKs, no advertising networks, and no tracking. Your
              activity in the app stays on your device.
            </p>
            <p>
              This matches the app&rsquo;s privacy label on the App Store:{" "}
              <strong>No Data Collected</strong>.
            </p>
          </>
        ) : (
          <p>
            The app&rsquo;s App Store privacy label describes the data types it handles. We do not
            sell personal data, and we do not use advertising or cross-app tracking. Details are
            being finalized before launch — if you have questions in the meantime, email{" "}
            <SupportEmail />.
          </p>
        )}

        {app.privacyNotes?.map((note) => (
          <Fragment key={note.heading}>
            <h2 id={note.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className={legalH2}>
              {note.heading}
            </h2>
            <p>{note.body}</p>
          </Fragment>
        ))}

        {app.hasAccount && (
          <>
            <h2 id="accounts" className={legalH2}>
              Accounts &amp; data deletion
            </h2>
            <p>
              If you create an account in {app.name}, we store only what&rsquo;s needed to operate
              it. You can delete your account and its data at any time:
            </p>
            <ul className={legalUl}>
              <li>
                <strong>In the app:</strong>{" "}
                {app.accountDeletionPath ?? "Settings → Account → Delete Account"}. This permanently
                removes your account and associated data.
              </li>
              <li>
                <strong>By email:</strong> write to <SupportEmail /> from the address on your
                account and we&rsquo;ll delete it within 30 days.
              </li>
            </ul>
          </>
        )}

        {app.gameCenter && (
          <>
            <h2 id="game-center" className={legalH2}>
              Game Center
            </h2>
            <p>
              Leaderboards and achievements in {app.name} are provided by Apple&rsquo;s Game
              Center. Your Game Center nickname and scores are processed by Apple under{" "}
              <a
                href="https://www.apple.com/legal/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className={legalExt}
              >
                Apple&rsquo;s privacy policy
              </a>
              . We never receive your Game Center identity or contact information.
            </p>
          </>
        )}

        {hasPurchases && (
          <>
            <h2 id="purchases" className={legalH2}>
              Purchases
            </h2>
            <p>
              All purchases{app.subscription ? " and subscriptions" : ""} are processed by Apple
              through your Apple Account. We never see or store your payment details. Apple may
              share aggregate, anonymous sales reports with us; these contain no personal
              information.
            </p>
          </>
        )}

        <h2 id="apple" className={legalH2}>
          Apple App Store &amp; diagnostics
        </h2>
        <p>
          When you download {app.name}, Apple processes the download under its own privacy policy.
          If you&rsquo;ve opted to share diagnostics with developers in iOS Settings, Apple may
          send us anonymized crash reports. They contain no personal information.
        </p>

        <h2 id="children" className={legalH2}>
          Children
        </h2>
        <p>
          {app.name} is rated {app.ageRating} and does not knowingly collect information from
          anyone, including children. If you have a concern, contact <SupportEmail />.
        </p>

        <h2 id="changes" className={legalH2}>
          Changes to this policy
        </h2>
        <p>
          If the app&rsquo;s behavior changes, we&rsquo;ll update this policy and the effective
          date above. Material changes will be noted in the app&rsquo;s release notes.
        </p>

        <h2 id="contact" className={legalH2}>
          Contact
        </h2>
        <p>
          Questions about privacy in {app.name}? Email <SupportEmail /> — we read every message.
          You can also visit <Link href={`/support#${app.slug}`} className={legalExt}>Support</Link>{" "}
          or the studio-wide <Link href="/privacy" className={legalExt}>privacy policy</Link>.
        </p>
      </div>
    </article>
  );
}
