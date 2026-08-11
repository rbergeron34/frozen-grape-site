import type { Metadata } from "next";
import Link from "next/link";
import { GOVERNING_LAW_STATE, LEGAL_ENTITY } from "@/lib/studio";
import { LegalHeader, SupportEmail, legalH2, legalExt } from "../../components/legal";

// Bespoke terms for BrighterStart 2.0 — the generated /apps/brighterstart/terms
// redirects here. Source copy lives in the app repo (docs/Site/terms.md);
// keep the two in sync if the app's behavior changes.

export const metadata: Metadata = {
  title: "BrighterStart — Terms of Use",
  description: "Terms of use for BrighterStart.",
  alternates: { canonical: "/brighterstart/terms" },
};

export default function BrighterStartTermsPage() {
  return (
    <article className="max-w-2xl mx-auto px-6 pt-28 pb-20">
      <LegalHeader title="Terms of Use" effectiveDate="August 10, 2026" appName="BrighterStart" />
      <div className="mt-8 space-y-5 text-[var(--ink)]/80 leading-relaxed border-t border-[var(--border)] pt-8">
        <h2 className={legalH2}>Agreement</h2>
        <p>
          These terms govern your use of BrighterStart. By downloading or using the app, you agree
          to them. They&rsquo;re written to be plainly readable — if anything is unclear, ask us at{" "}
          <SupportEmail />.
        </p>

        <h2 className={legalH2}>What BrighterStart is</h2>
        <p>
          BrighterStart is a wake-up alarm and morning routine app for personal use on your own
          Apple devices.
        </p>

        <h2 className={legalH2}>License</h2>
        <p>
          We grant you a personal, non-exclusive, non-transferable license to use BrighterStart on
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

        <h2 className={legalH2}>Not medical advice</h2>
        <p>
          The sleep coach, wake rhythm charts, and any suggestions in the app are general wellness
          information derived from your own usage. They are not medical advice, diagnosis, or
          treatment, and BrighterStart is not a medical device. It does not diagnose, treat, or
          cure ADHD, insomnia, or any other condition. If you have — or suspect you have — a sleep
          disorder or other medical condition, talk to a qualified professional.
        </p>

        <h2 className={legalH2}>Alarm reliability</h2>
        <p>
          BrighterStart is built to ring dependably, using Apple&rsquo;s alarm frameworks. But no
          app can ring on a phone that is powered off, out of battery, or where alarm permissions
          have been revoked. Please don&rsquo;t rely on BrighterStart as your only alarm in
          situations where missing a wake-up could put you or others at risk.
        </p>

        <h2 className={legalH2}>The app blocker</h2>
        <p>
          The evening app blocker is a self-management tool that you turn on, configure, and can
          end yourself from inside BrighterStart. It is not a parental control and should not be
          relied on as one.
        </p>

        <h2 className={legalH2}>Your data</h2>
        <p>
          Your data stays on your device and in your own private iCloud. See the{" "}
          <Link href="/brighterstart/privacy" className={legalExt}>Privacy Policy</Link> for
          details.
        </p>

        <h2 className={legalH2}>Price</h2>
        <p>
          The core alarm is free. If optional paid features are ever added, their terms and
          pricing will be shown before any purchase.
        </p>

        <h2 className={legalH2}>Acceptable use</h2>
        <p>
          Don&rsquo;t misuse the app: no reverse-engineering except where the law allows it, no
          reselling or redistributing the app or its content, and no using the app in a way that
          breaks the law or infringes others&rsquo; rights.
        </p>

        <h2 className={legalH2}>Intellectual property</h2>
        <p>
          The app, its name, icon, design, and content are the property of {LEGAL_ENTITY} unless
          otherwise noted, and are protected by applicable intellectual-property laws.
        </p>

        <h2 className={legalH2}>No warranty &amp; limitation of liability</h2>
        <p>
          BrighterStart is provided &ldquo;as is,&rdquo; without warranties of any kind, to the
          maximum extent permitted by law. To the same extent, {LEGAL_ENTITY} is not liable for
          any damages arising from use of the app — including, without limitation, damages from a
          missed alarm.
        </p>

        <h2 className={legalH2}>Governing law</h2>
        <p>
          These terms are governed by the laws of the State of {GOVERNING_LAW_STATE}, United
          States, without regard to conflict-of-laws principles.
        </p>

        <h2 className={legalH2}>Changes</h2>
        <p>
          These terms may be updated as the app evolves; the effective date above will change when
          they are. Continued use after a change means you accept the updated terms.
        </p>

        <h2 className={legalH2}>Contact</h2>
        <p>
          Questions? Email <SupportEmail /> or visit the{" "}
          <Link href="/brighterstart/support" className={legalExt}>BrighterStart support page</Link>.
        </p>
      </div>
    </article>
  );
}
