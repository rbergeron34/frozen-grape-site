import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guiding Light — Terms of Service",
  description:
    "Terms of Service for Guiding Light, a private Christian journaling and devotional app for iPhone.",
  alternates: { canonical: "/guidinglight/terms" },
};

const EFFECTIVE_DATE = "July 5, 2026";
const SUPPORT_EMAIL = "support@frozengrape.app";

function SupportEmail() {
  return (
    <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[var(--ink)] font-medium hover:underline">
      {SUPPORT_EMAIL}
    </a>
  );
}

const h2 = "text-xl font-bold text-[var(--ink)] pt-4 scroll-mt-24";
const ul = "list-disc pl-5 space-y-2";
const ext = "text-[var(--ink)] font-medium hover:underline";

export default function GuidingLightTermsPage() {
  return (
    <article className="max-w-2xl mx-auto px-6 pt-28 pb-20">
      <h1 className="text-4xl font-extrabold tracking-tight">Terms of Service</h1>
      <div className="mt-4 text-sm text-[var(--muted)] space-y-1">
        <p>
          <strong className="text-[var(--ink)]">Effective:</strong> {EFFECTIVE_DATE}
        </p>
        <p>
          <strong className="text-[var(--ink)]">App:</strong> Guiding Light
        </p>
        <p>
          <strong className="text-[var(--ink)]">Developer:</strong> Bergy Media
          (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;)
        </p>
        <p>
          <strong className="text-[var(--ink)]">Contact:</strong> <SupportEmail />
        </p>
      </div>

      <div className="mt-8 space-y-5 text-[var(--ink)]/80 leading-relaxed border-t border-[var(--border)] pt-8">
        <h2 id="1-welcome" className={h2}>
          1. Welcome
        </h2>
        <p>
          These Terms govern your use of Guiding Light, a private Christian journaling and
          devotional app for iPhone. By installing or using the app, you agree to these Terms. If
          you don&rsquo;t agree, please don&rsquo;t use the app.
        </p>
        <p>
          These Terms are intended to be plainly readable. Where defined terms appear (e.g.,
          &ldquo;the App,&rdquo; &ldquo;the reflective companion&rdquo;), they mean what the
          surrounding context makes clear. We are not a law firm, and these Terms have not been
          written like a contract for lawyers — they have been written for you.
        </p>

        <h2 id="2-the-app-at-a-glance" className={h2}>
          2. The app at a glance
        </h2>
        <p>Guiding Light is:</p>
        <ul className={ul}>
          <li>
            A private journaling space whose entries are encrypted on your iPhone and never
            visible to us
          </li>
          <li>
            A daily-verse companion drawing from public-domain Bible translations bundled with the
            app
          </li>
          <li>
            A &ldquo;reflective companion&rdquo; that asks honest questions about what
            you&rsquo;ve written — backed by Anthropic&rsquo;s Claude API
          </li>
          <li>Optionally, a narrated audio reader for public-domain scripture</li>
        </ul>
        <p>What Guiding Light is not:</p>
        <ul className={ul}>
          <li>An AI pastor</li>
          <li>A counselor, therapist, or medical professional</li>
          <li>A crisis hotline</li>
          <li>A substitute for in-person Christian community</li>
          <li>
            A scripture-translation engine — every verse it shows is retrieved from a bundled
            translation file, never generated
          </li>
        </ul>

        <h2 id="3-your-account-and-data" className={h2}>
          3. Your account and data
        </h2>
        <p>
          There are no accounts in version 1.0. Your data lives on your iPhone, encrypted with a
          key only you hold. Future versions may offer optional cloud sync; if and when they do,
          these Terms will be updated to describe how that works, and use of that feature will be
          opt-in.
        </p>
        <p>
          You are responsible for keeping your device secure. If you lose your iPhone, the
          encrypted entries on it cannot be recovered by us; that&rsquo;s a feature, not a bug.
        </p>

        <h2 id="4-acceptable-use" className={h2}>
          4. Acceptable use
        </h2>
        <p>While using Guiding Light, please don&rsquo;t:</p>
        <ul className={ul}>
          <li>Use the app to harass, defame, or threaten anyone</li>
          <li>
            Attempt to break the app&rsquo;s encryption or extract data belonging to other users
            (there is no other user data on the device, but principle matters)
          </li>
          <li>Reverse-engineer the app for the purpose of circumventing its security</li>
          <li>
            Use the reflective companion to generate content that violates Anthropic&rsquo;s{" "}
            <a
              href="https://www.anthropic.com/legal/aup"
              target="_blank"
              rel="noopener noreferrer"
              className={ext}
            >
              usage policies
            </a>
          </li>
          <li>
            Use any third-party translation text the app loads (when applicable in future
            versions) outside the bounds of that translation&rsquo;s copyright
          </li>
        </ul>
        <p>
          Reasonable, prayerful, personal use — including the kinds of hard, painful, doubting,
          joyful, confused, grateful things you might write in a journal — is what the app is for.
        </p>

        <h2 id="5-the-reflective-companion-is-not-a-counselor" className={h2}>
          5. The reflective companion is not a counselor
        </h2>
        <p>
          Guiding Light&rsquo;s reflective companion offers questions, not answers. It is a
          software feature, not a person, not a pastor, and not a clinical or mental-health
          professional. It cannot replace the care of someone who knows you.
        </p>
        <p>
          <strong>If you are in crisis</strong> — including thoughts of self-harm, ongoing abuse,
          or a recent loss you can&rsquo;t carry — please reach out to a real person. The app will
          surface a region-appropriate referral when it detects crisis language:
        </p>
        <ul className={ul}>
          <li>
            <strong>United States / Canada</strong>: call or text <strong>988</strong> anytime.
          </li>
          <li>
            <strong>United Kingdom / Ireland</strong>: call <strong>Samaritans on 116 123</strong>{" "}
            anytime, free.
          </li>
          <li>
            <strong>Australia</strong>: call <strong>Lifeline on 13 11 14</strong> anytime.
          </li>
          <li>
            <strong>New Zealand</strong>: call or text <strong>1737</strong> anytime, free.
          </li>
          <li>
            <strong>Other regions</strong>:{" "}
            <a
              href="https://findahelpline.com"
              target="_blank"
              rel="noopener noreferrer"
              className={ext}
            >
              findahelpline.com
            </a>{" "}
            lists 24-hour lines by country.
          </li>
        </ul>
        <p>
          Please don&rsquo;t wait for the app to notice. Reach out to someone who can hear you.
        </p>
        <p>
          <strong>The reflective companion is not infallible.</strong> It can phrase questions
          awkwardly, miss context, or surface a scripture that doesn&rsquo;t fit your moment.
          We&rsquo;ve built safeguards — every quoted verse is retrieved from a bundled
          translation rather than generated, contested interpretations are flagged where the model
          recognises them, the app is constrained from speaking as God or claiming divine
          authority — but software can still get things wrong. Treat its suggestions with the same
          discernment you would any other source.
        </p>

        <h2 id="6-scripture" className={h2}>
          6. Scripture
        </h2>
        <p>
          The app ships with the World English Bible (WEB) and King James Version (KJV), both in
          the public domain. Other translations may become available in future versions; each will
          be governed by its own licensing terms, which we will surface in the app.
        </p>
        <p>
          Every verse the app displays is retrieved from a bundled translation file. The
          reflective companion may suggest a citation (for example, &ldquo;Philippians
          4:6&rdquo;), but the verse text you see is always retrieved by the app, not produced by
          AI. If a citation can&rsquo;t be resolved, the app declines to show it.
        </p>

        <h2 id="7-audio" className={h2}>
          7. Audio
        </h2>
        <p>
          When narrated audio is available for a scripture passage, it is rendered by AI
          text-to-speech and cached on your device. Free-tier narration is produced on-device by
          Apple&rsquo;s built-in speech synthesizer. Premium narration is produced on first play
          by OpenAI&rsquo;s text-to-speech API (<code>gpt-4o-mini-tts</code>) and cached locally
          for offline replay. The cached audio is yours to listen to on your device; please
          don&rsquo;t redistribute it. (In a future release premium narration will be
          pre-generated on our servers using ElevenLabs and bundled into a downloadable library.)
        </p>
        <p>
          Narration is only ever made for public-domain translations (WEB, KJV). We do not produce
          AI-narrated audio of copyrighted translations.
        </p>

        <h2 id="8-your-content" className={h2}>
          8. Your content
        </h2>
        <p>
          The entries you write are yours. We don&rsquo;t claim any rights to them, we can&rsquo;t
          read them, and we never use them for any purpose. If a future version of the app
          introduces a sharing feature, it will be opt-in per share, not a blanket licence.
        </p>
        <p>
          The app&rsquo;s source code, design, copy, brand, and logo — including the dove mark and
          the typographic system — remain the intellectual property of Bergy Media. You&rsquo;re
          welcome to take inspiration from the app, of course; please don&rsquo;t clone the brand
          wholesale.
        </p>

        <h2 id="9-updates-and-changes" className={h2}>
          9. Updates and changes
        </h2>
        <p>
          We update the app to fix bugs, add features, and respond to changes in iOS,
          Anthropic&rsquo;s API, scripture licensing, and our own product thinking. Updates may
          add, change, or remove features. We will note material changes in the App Store update
          notes.
        </p>
        <p>
          We may update these Terms over time. The effective date at the top will change, and
          we&rsquo;ll surface a notice inside the app the next time you open it for any material
          change. Continued use after a change means you accept it.
        </p>

        <h2 id="10-disclaimers" className={h2}>
          10. Disclaimers
        </h2>
        <p>
          Guiding Light is provided <strong>&ldquo;as is.&rdquo;</strong> We do not warrant that
          the app will be uninterrupted, error-free, or fit for any particular purpose. We do not
          warrant that the reflective companion will respond to every entry, that audio narration
          will be available for every passage, or that future features will arrive on any
          particular timeline.
        </p>
        <p>
          To the maximum extent permitted by law,{" "}
          <strong>Bergy Media disclaims all warranties</strong>, express or implied, including
          warranties of merchantability, fitness for a particular purpose, and non-infringement.
        </p>

        <h2 id="11-limitation-of-liability" className={h2}>
          11. Limitation of liability
        </h2>
        <p>
          To the maximum extent permitted by law, Bergy Media&rsquo;s total liability arising out
          of or relating to your use of Guiding Light will not exceed the greater of (a) the
          amount you paid for the app in the twelve months preceding the claim, or (b) USD $50. We
          will not be liable for indirect, incidental, consequential, or punitive damages,
          including lost data, lost opportunities, or emotional distress.
        </p>
        <p>
          This limitation is not intended to exclude liability that cannot be excluded under
          applicable law (for example, in some jurisdictions, liability for gross negligence or
          fraud cannot be limited). Where law restricts these terms, they apply to the maximum
          extent permitted.
        </p>

        <h2 id="12-indemnification" className={h2}>
          12. Indemnification
        </h2>
        <p>
          You agree to indemnify and hold Bergy Media harmless from any claim, damage, or expense
          arising out of your misuse of the app or your violation of these Terms or applicable
          law. This clause is intended for serious abuse cases (e.g., using the app to attack
          someone) and is not meant to apply to ordinary, prayerful use.
        </p>

        <h2 id="13-governing-law-and-disputes" className={h2}>
          13. Governing law and disputes
        </h2>
        <p>
          These Terms are governed by the laws of the State of Texas, United States, without
          regard to its conflict-of-laws principles. You and Bergy Media agree that any dispute
          will be resolved in the courts located in the State of Texas, United States, except
          where local consumer-protection law requires otherwise.
        </p>
        <p>
          If you live in the EU, UK, or another jurisdiction with mandatory consumer-protection
          rules, those rules apply on top of these Terms; nothing here removes them.
        </p>

        <h2 id="14-termination" className={h2}>
          14. Termination
        </h2>
        <p>
          You can stop using Guiding Light at any time by deleting it from your device. We can
          suspend or terminate access to the app if you materially violate these Terms — for
          example, by attempting to break its encryption, abusing the reflective companion to
          generate harmful content, or attacking other users.
        </p>
        <p>Sections 5, 6, 8, 10, 11, 12, and 13 survive termination.</p>

        <h2 id="15-apple-app-store-terms" className={h2}>
          15. Apple App Store terms
        </h2>
        <p>
          You are also bound by the{" "}
          <a
            href="https://www.apple.com/legal/internet-services/itunes/"
            target="_blank"
            rel="noopener noreferrer"
            className={ext}
          >
            Apple Media Services Terms
          </a>{" "}
          that govern downloading apps from the App Store. To the extent those terms conflict with
          these, the Apple terms control for the App Store-specific aspects (purchasing, refunds,
          etc.).
        </p>
        <p>
          Apple is not a party to these Terms. Apple has no obligation to provide support for the
          app. Any claim that the app fails to conform to applicable warranties may be referred to
          Apple, and Apple may refund the purchase price; beyond that, Apple has no other warranty
          obligation. We, not Apple, are responsible for addressing claims about the app.
        </p>

        <h2 id="16-contact" className={h2}>
          16. Contact
        </h2>
        <p>Questions about these Terms:</p>
        <p>
          <strong>Bergy Media</strong>
          <br />
          <SupportEmail />
        </p>
        <p>We read every email.</p>
      </div>
    </article>
  );
}
