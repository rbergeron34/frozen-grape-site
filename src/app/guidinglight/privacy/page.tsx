import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guiding Light — Privacy Policy",
  description:
    "How Guiding Light protects your journal: end-to-end encryption on device, no analytics, no ads, and a Local-only mode.",
  alternates: { canonical: "/guidinglight/privacy" },
};

import { LEGAL_ENTITY, SUPPORT_EMAIL } from "@/lib/studio";

const EFFECTIVE_DATE = "July 5, 2026";

function SupportEmail() {
  return (
    <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[var(--ink)] font-medium hover:underline">
      {SUPPORT_EMAIL}
    </a>
  );
}

const h2 = "text-xl font-bold text-[var(--ink)] pt-4 scroll-mt-24";
const h3 = "text-lg font-bold text-[var(--ink)] pt-2 scroll-mt-24";
const ul = "list-disc pl-5 space-y-2";
const ext = "text-[var(--ink)] font-medium hover:underline";

export default function GuidingLightPrivacyPage() {
  return (
    <article className="max-w-2xl mx-auto px-6 pt-28 pb-20">
      <h1 className="text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
      <div className="mt-4 text-sm text-[var(--muted)] space-y-1">
        <p>
          <strong className="text-[var(--ink)]">Effective:</strong> {EFFECTIVE_DATE}
        </p>
        <p>
          <strong className="text-[var(--ink)]">App:</strong> Guiding Light
        </p>
        <p>
          <strong className="text-[var(--ink)]">Developer:</strong> {LEGAL_ENTITY}{" "}
          (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;)
        </p>
        <p>
          <strong className="text-[var(--ink)]">Contact:</strong> <SupportEmail />
        </p>
      </div>

      <div className="mt-8 space-y-5 text-[var(--ink)]/80 leading-relaxed border-t border-[var(--border)] pt-8">
        <h2 id="in-one-sentence" className={h2}>
          In one sentence
        </h2>
        <p>Guiding Light is built so we can&rsquo;t read your journal entries, and we don&rsquo;t try.</p>

        <h2 id="in-a-few-more" className={h2}>
          In a few more
        </h2>
        <p>
          Your journal entries are encrypted on your iPhone with a key only you hold. We don&rsquo;t
          have a copy of that key. We don&rsquo;t run analytics on what you write. We don&rsquo;t
          sell your data. We don&rsquo;t show you ads. The few moments when something does leave
          your device — when you ask the reflective companion for a question, when you download
          narrated audio — we explain below.
        </p>

        <h2 id="what-stays-on-your-device" className={h2}>
          What stays on your device
        </h2>
        <ul className={ul}>
          <li>
            <strong>Journal entries.</strong> Encrypted with AES-256-GCM. The encryption key lives
            in your iPhone&rsquo;s Keychain, gated behind Face ID, Touch ID, or your device
            passcode. The key is bound to this device and never leaves it — not to iCloud, not to
            us, not to anywhere.
          </li>
          <li>
            <strong>Encrypted &ldquo;looking back&rdquo; reflections</strong> you write when
            marking a prayer answered. Same encryption.
          </li>
          <li>
            <strong>Audio downloads.</strong> Once an audio narration is on your phone, it stays
            there and plays without contacting us. You control which translations and voices are
            downloaded.
          </li>
          <li>
            <strong>Your master key.</strong> We can&rsquo;t read your entries. Neither can anyone
            else with our cooperation, including in response to a legal request, because we
            don&rsquo;t have access. If you lose your device and key, your encrypted entries
            cannot be recovered.
          </li>
        </ul>

        <h2 id="what-is-not-encrypted-on-your-device" className={h2}>
          What is <em>not</em> encrypted on your device
        </h2>
        <p>
          A few pieces of metadata stay in plaintext on your phone so the app can function without
          unlocking on every screen:
        </p>
        <ul className={ul}>
          <li>The date and time of each entry</li>
          <li>
            Which &ldquo;mode&rdquo; the entry was written under (e.g., Prayer Journal, Gratitude)
          </li>
          <li>The character count</li>
          <li>
            Detected theme tags (e.g., &ldquo;anxiety&rdquo;, &ldquo;gratitude&rdquo;) — extracted
            by simple keyword matching on this device, never sent anywhere
          </li>
          <li>Whether the entry has been marked as an answered prayer, and when</li>
        </ul>
        <p>
          These never leave your device either, but they aren&rsquo;t behind the encryption
          boundary.
        </p>

        <h2 id="what-we-collect" className={h2}>
          What we collect
        </h2>
        <p>
          <strong>Effectively nothing about you, individually.</strong> No accounts in V1.0. No
          usernames. No analytics SDKs (no Mixpanel, no Amplitude, no Firebase Analytics, no
          Segment, no Sentry-with-user-attribution, no Google).
        </p>
        <p>
          The only data ever sent off your device, and only when you take the corresponding
          action, is described in &ldquo;Third-party services&rdquo; below.
        </p>

        <h2 id="third-party-services" className={h2}>
          Third-party services
        </h2>

        <h3 id="anthropic--reflective-companion" className={h3}>
          Anthropic — reflective companion
        </h3>
        <p>
          When you write a journal entry and Guiding Light shows you a reflective question or
          related scripture, the text of that entry is sent to Anthropic&rsquo;s Claude API to
          generate the question. This is the only time the plaintext of an entry leaves your
          device.
        </p>
        <p>
          Per Anthropic&rsquo;s API terms in effect as of {EFFECTIVE_DATE}, API submissions are{" "}
          <strong>not used to train Anthropic&rsquo;s models</strong>. Anthropic retains data only
          for limited periods for abuse-detection and safety purposes. You can read their policy
          at{" "}
          <a
            href="https://www.anthropic.com/legal/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className={ext}
          >
            https://www.anthropic.com/legal/privacy
          </a>
          .
        </p>
        <p>
          You can opt out of the reflective companion at any time by turning on{" "}
          <strong>Local-only mode</strong> in Settings → Privacy. When Local-only mode is on, no
          entry text is ever sent to Anthropic, full stop. You&rsquo;ll see a small
          &ldquo;Local-only mode&rdquo; notice in place of the reflective companion&rsquo;s
          questions.
        </p>

        <h3 id="openai--audio-narration-premium-voices" className={h3}>
          OpenAI — audio narration (premium voices)
        </h3>
        <p>
          Premium narrated audio of public-domain Bible translations (WEB, KJV) is generated on
          demand using OpenAI&rsquo;s text-to-speech API (<code>gpt-4o-mini-tts</code>). When you
          tap play on a passage in a premium voice for the first time, the passage text is sent to
          OpenAI, the audio it returns is cached on your device, and every replay from that point
          on is offline. Free-tier narration is rendered entirely on your device by Apple&rsquo;s
          built-in speech synthesizer and involves no network call at all.
        </p>
        <p>
          <strong>No journal content is ever sent to OpenAI</strong> — only the public-domain
          scripture text being narrated. Per OpenAI&rsquo;s API terms in effect as of{" "}
          {EFFECTIVE_DATE}, API submissions are not used to train their models. You can read their
          policy at{" "}
          <a
            href="https://openai.com/policies/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className={ext}
          >
            https://openai.com/policies/privacy-policy
          </a>
          .
        </p>
        <p>
          (In a future release we plan to migrate premium narration to ElevenLabs, with audio
          generated once on our servers and bundled into a downloadable audio library — at that
          point no narration request will originate from your device at all. The local-playback
          promise is unchanged either way: we never see what you listen to.)
        </p>

        <h3 id="apple--app-store-and-device-services" className={h3}>
          Apple — App Store and device services
        </h3>
        <p>
          When you install Guiding Light, Apple processes your purchase and download under{" "}
          <a
            href="https://www.apple.com/legal/privacy/"
            target="_blank"
            rel="noopener noreferrer"
            className={ext}
          >
            Apple&rsquo;s privacy policy
          </a>
          . We receive only the aggregate, anonymous App Store reports Apple provides to all
          developers (downloads, crashes, country breakdowns). These reports never include who you
          are or what you wrote.
        </p>
        <p>
          If you choose to share crash logs with developers in your iOS Settings, Apple may send
          us anonymized crash diagnostics. These contain no journal content and no personally
          identifying information.
        </p>

        <h3 id="no-one-else" className={h3}>
          No one else
        </h3>
        <p>
          We do not use any other third-party services that receive your data. No ad networks, no
          CRM, no marketing tools, no behavioral analytics.
        </p>

        <h2 id="local-only-mode" className={h2}>
          Local-only mode
        </h2>
        <p>You can turn on Local-only mode in Settings → Privacy. When Local-only mode is on:</p>
        <ul className={ul}>
          <li>Reflective companion is disabled (no entry text leaves your device for AI)</li>
          <li>No future cloud-sync feature will be enabled on your account</li>
        </ul>
        <p>
          The app remains fully usable in Local-only mode. You give up AI-generated reflective
          questions; you keep everything else.
        </p>

        <h2 id="what-we-never-do" className={h2}>
          What we never do
        </h2>
        <ul className={ul}>
          <li>We do not sell, rent, or trade your data with anyone.</li>
          <li>We do not show you advertising, in-app or otherwise.</li>
          <li>We do not build a profile of you for targeting purposes.</li>
          <li>
            We do not transcribe voice journaling to any third-party speech-to-text service. Voice
            transcription, when added, will be on-device only.
          </li>
          <li>
            We do not pre-fetch or &ldquo;warm up&rdquo; your journal in the background.
            Decryption happens only when you open an entry.
          </li>
          <li>We do not include your journal content in crash reports.</li>
        </ul>

        <h2 id="children" className={h2}>
          Children
        </h2>
        <p>
          Guiding Light is intended for users <strong>age 13 and older</strong>. We do not
          knowingly collect any information from children under 13. If you believe a child under
          13 has used the app, contact us at <SupportEmail /> and we will work to address it.
          Because we don&rsquo;t have accounts or server-side data in V1.0, there is generally no
          information to delete — but we will help.
        </p>

        <h2 id="your-data-is-yours" className={h2}>
          Your data is yours
        </h2>
        <ul className={ul}>
          <li>
            <strong>Export.</strong> Settings → Privacy → &ldquo;Export as Markdown&rdquo; or
            &ldquo;Export as JSON&rdquo; produces a complete copy of your decrypted entries to
            your iPhone&rsquo;s share sheet. We never see the export.
          </li>
          <li>
            <strong>Delete.</strong> Settings → Privacy → &ldquo;Delete all entries&rdquo;
            permanently removes every journal entry from this device. Because the entries are
            encrypted with a device-only key, deletion is final — there is no backup we can
            restore from.
          </li>
          <li>
            <strong>Uninstall.</strong> Deleting Guiding Light from your iPhone removes all of its
            data, including the master key in the Keychain. After uninstall, encrypted entries on
            the device cannot be recovered.
          </li>
        </ul>

        <h2 id="legal-requests" className={h2}>
          Legal requests
        </h2>
        <p>
          If we are presented with a valid legal request for journal content, we can only provide
          what we have, which is <strong>nothing</strong> — we hold no copy of your entries, no
          key to decrypt them, and no server-side store of your activity. If you have asked the
          reflective companion a question, Anthropic may have retained that submission per their
          own retention policy; in that case, the request should be directed to Anthropic, not us.
        </p>

        <h2 id="international-users" className={h2}>
          International users
        </h2>
        <p>
          Guiding Light is operated from Texas, United States. If you use the app from another
          country, you understand that the app may transmit data (such as a Claude API request)
          across borders to the United States. Where the GDPR, UK GDPR, or comparable law applies
          to you, you have the rights described in those laws (access, rectification, erasure,
          restriction, portability, objection). Because we hold almost no data about individual
          users, most requests will be a matter of confirming that we have nothing to act on.
        </p>
        <p>
          To exercise these rights, contact <SupportEmail />.
        </p>

        <h2 id="changes-to-this-policy" className={h2}>
          Changes to this policy
        </h2>
        <p>
          We will update this policy when the app&rsquo;s behaviour changes — for example, when
          cloud sync ships in a future version. We will note the new effective date at the top
          and, where the change is material, surface a notice inside the app the next time you
          open it. Continued use after a change means you accept it; if you don&rsquo;t, you can
          uninstall the app and export your data first.
        </p>

        <h2 id="contact" className={h2}>
          Contact
        </h2>
        <p>Questions or concerns about this policy:</p>
        <p>
          <strong>{LEGAL_ENTITY}</strong>
          <br />
          <SupportEmail />
        </p>
        <p>We read every email.</p>
      </div>
    </article>
  );
}
