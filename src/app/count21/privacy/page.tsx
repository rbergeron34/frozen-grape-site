import type { Metadata } from "next";
import Link from "next/link";
import { LegalHeader, SupportEmail, legalExt, legalH2, legalUl } from "../../components/legal";

// Mirrors release/website-content/privacy.md in the Count21 app repo — update both together.
// This URL is the Privacy Policy URL in App Store Connect.
const EFFECTIVE_DATE = "September 22, 2026";

export const metadata: Metadata = {
  title: "Count21 — Privacy Policy",
  description:
    "Count21 keeps your practice on your device: no account, no cloud sync, no ads, no analytics or tracking SDKs. Apple processes the optional Complete purchase.",
  alternates: { canonical: "/count21/privacy" },
};

export default function Count21PrivacyPage() {
  return (
    <article className="max-w-2xl mx-auto px-6 pt-28 pb-20">
      <LegalHeader title="Privacy Policy" effectiveDate={EFFECTIVE_DATE} appName="Count21" />

      <div className="mt-8 space-y-5 text-[var(--ink)]/80 leading-relaxed border-t border-[var(--border)] pt-8">
        <p>Count21 is a blackjack learning and practice app from Frozen Grape Studios.</p>

        <h2 id="summary" className={legalH2}>
          In short
        </h2>
        <ul className={legalUl}>
          <li>Your practice stays on your device. There is no Count21 account or cloud sync.</li>
          <li>No ads, no third-party analytics, no tracking.</li>
          <li>Apple handles the optional purchase. We never see payment details.</li>
          <li>
            App Store privacy label: <strong>Data Not Collected</strong>.
          </li>
        </ul>

        <h2 id="practice-data" className={legalH2}>
          Practice data
        </h2>
        <p>
          Count21 stores lesson progress, drill results, hand history, preferences and the number of
          sample table hands used on your device. Frozen Grape Studios does not receive this
          information. Depending on your Apple device settings, it may be included in a device
          backup managed by Apple. There is no Count21 account or cloud-sync service.
        </p>

        <h2 id="no-tracking" className={legalH2}>
          No tracking or advertising
        </h2>
        <p>
          Count21 contains no advertisements, third-party analytics or tracking SDKs. It does not
          collect your location, contacts, advertising identifier or other personal information
          for analytics or marketing.
        </p>

        <h2 id="purchases" className={legalH2}>
          Purchases
        </h2>
        <p>
          Apple processes the optional Count21 Complete purchase. Count21 reads Apple&rsquo;s signed
          transaction information to determine whether Complete is unlocked. Frozen Grape Studios
          does not receive payment card information. Apple&rsquo;s processing is governed by{" "}
          <a
            href="https://www.apple.com/legal/privacy/"
            target="_blank"
            rel="noopener noreferrer"
            className={legalExt}
          >
            Apple&rsquo;s privacy policy
          </a>
          . Purchases and restoration require access to the App Store; ordinary practice works
          offline.
        </p>

        <h2 id="export-delete" className={legalH2}>
          Exporting and deleting data
        </h2>
        <p>
          You can export a hand-history CSV using the system share sheet. You choose whether to
          share it and which destination receives it. The recipient&rsquo;s privacy terms apply
          after you share a file.
        </p>
        <p>
          <strong>Settings › Delete practice data</strong> removes saved practice results, completed
          lessons and hand history. It does not reset the free table-hand allowance or remove your
          Complete purchase. Purchase history is managed by Apple and remains associated with your
          Apple Account. Removing the app removes local app data, subject to Apple backup and
          restoration behavior.
        </p>

        <h2 id="children" className={legalH2}>
          Age rating
        </h2>
        <p>
          Count21 is rated 18+ because it simulates blackjack. It is an educational simulation with
          no real-money play and does not knowingly collect information from anyone, including
          children.
        </p>

        <h2 id="support" className={legalH2}>
          Support
        </h2>
        <p>
          If you contact Frozen Grape Studios, we use the information you choose to send to respond
          to your request. Do not include sensitive information that is unnecessary for support. We
          do not sell your information.
        </p>

        <h2 id="changes" className={legalH2}>
          Changes
        </h2>
        <p>
          If Count21&rsquo;s data practices change, this page and its effective date will be
          updated.
        </p>

        <h2 id="contact" className={legalH2}>
          Contact
        </h2>
        <p>
          Email <SupportEmail /> or visit{" "}
          <Link href="/count21/support" className={legalExt}>
            Count21 Support
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
