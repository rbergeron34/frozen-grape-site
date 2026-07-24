import type { Metadata } from "next";
import Link from "next/link";
import { APPS } from "@/lib/apps";
import { STUDIO_NAME } from "@/lib/studio";
import { LegalHeader, SupportEmail, legalH2, legalUl, legalExt } from "../components/legal";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Frozen Grape handles your data — on this website and across our apps.",
  alternates: { canonical: "/privacy" },
};

const EFFECTIVE_DATE = "July 13, 2026";

export default function PrivacyPage() {
  return (
    <article className="max-w-2xl mx-auto px-6 pt-28 pb-20">
      <LegalHeader title="Privacy Policy" effectiveDate={EFFECTIVE_DATE} />

      <div className="mt-8 space-y-5 text-[var(--ink)]/80 leading-relaxed border-t border-[var(--border)] pt-8">
        <p>
          {STUDIO_NAME} builds small iOS apps and this website. We&rsquo;re designed to be quiet
          and respectful of your attention — and that extends to your data. This policy covers the{" "}
          <strong>frozengrape.app website</strong>; each app has its own policy, linked below.
        </p>

        <h2 id="website" className={legalH2}>
          This website
        </h2>
        <ul className={legalUl}>
          <li>
            <strong>No cookies, no trackers.</strong> This site sets no cookies and runs no
            advertising or cross-site tracking scripts.
          </li>
          <li>
            <strong>Hosting logs.</strong> Our hosting provider keeps standard, short-lived server
            logs (IP address, request path) for security and reliability, as all web hosts do.
          </li>
        </ul>

        <h2 id="contact-form" className={legalH2}>
          Contact form
        </h2>
        <p>
          If you write to us through the <Link href="/contact" className={legalExt}>contact form</Link>,
          the name, email address, and message you provide are delivered to our support inbox via
          our email provider (Resend) and used only to respond to you. We don&rsquo;t add you to
          any list.
        </p>

        <h2 id="notify-list" className={legalH2}>
          Launch-notification list
        </h2>
        <p>
          If you sign up to be notified about an upcoming app, we store your email address with
          our email provider (Resend) and use it only to tell you about that launch. Every email
          includes an unsubscribe link, and you can also ask us to remove you at any time at{" "}
          <SupportEmail />.
        </p>

        <h2 id="our-apps" className={legalH2}>
          Our apps
        </h2>
        <p>
          Most of our apps collect no personal data and work entirely offline. Each app has its
          own privacy policy describing exactly what it does and doesn&rsquo;t handle:
        </p>
        <ul className={legalUl}>
          {APPS.map((app) => (
            <li key={app.slug}>
              <Link href={app.legal?.privacy ?? "/privacy"} className={legalExt}>
                {app.name}
              </Link>{" "}
              — {app.privacyInfo}
              {app.status === "coming-soon" ? " (coming soon)" : ""}
            </li>
          ))}
        </ul>
        <p>We do not sell personal data. We never have.</p>

        <h2 id="your-rights" className={legalH2}>
          Your rights
        </h2>
        <p>
          You can ask us what we hold about you, ask us to correct it, or ask us to delete it —
          email <SupportEmail />. Because we hold almost nothing, most requests are a matter of
          confirming there&rsquo;s nothing to act on. For in-app account deletion, see{" "}
          <Link href="/support#account" className={legalExt}>
            account &amp; data deletion
          </Link>
          .
        </p>

        <h2 id="changes" className={legalH2}>
          Changes
        </h2>
        <p>
          If our practices change, we&rsquo;ll update this policy and the effective date above.
        </p>

        <h2 id="contact" className={legalH2}>
          Contact
        </h2>
        <p>
          Questions about privacy? Email <SupportEmail />. We read every message.
        </p>
      </div>
    </article>
  );
}
