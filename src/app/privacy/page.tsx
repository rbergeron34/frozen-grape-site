import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Frozen Grape Studios handles your data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="max-w-2xl mx-auto px-6 pt-28 pb-20">
      <h1 className="text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-[var(--muted)]">Last updated: {new Date().getFullYear()}</p>

      <div className="mt-8 space-y-5 text-[var(--ink)]/80 leading-relaxed">
        <p>
          Frozen Grape Studios builds small iOS apps and this website. We are designed to be
          quiet and respectful of your attention — and that extends to your data.
        </p>

        <h2 className="text-xl font-bold text-[var(--ink)] pt-4">Our apps</h2>
        <p>
          Most of our apps collect no personal data and work entirely offline. Where an app does
          collect or process data, its specific behavior is described on its App Store privacy
          label. We do not sell personal data.
        </p>

        <h2 className="text-xl font-bold text-[var(--ink)] pt-4">This website</h2>
        <p>
          This site uses privacy-respecting, cookie-free analytics to understand aggregate traffic.
          It does not track you across other sites. If you contact us through the form, we use the
          details you provide only to respond to you.
        </p>

        <h2 className="text-xl font-bold text-[var(--ink)] pt-4">AI features</h2>
        <p>
          One app, <strong>Guiding Light</strong>, uses AI to help generate reflection prompts and
          related writing support. We do not use your personal reflections or journal entries to
          train AI models.
        </p>
        <p className="text-sm text-[var(--muted)]">
          Note (to confirm before launch): describe exactly what the AI does and whether any input
          is processed on-device or sent to a third-party provider. If text is sent to a provider,
          name them and link their data policy here.
        </p>

        <h2 className="text-xl font-bold text-[var(--ink)] pt-4">Contact</h2>
        <p>
          Questions about privacy? Email{" "}
          <a href="mailto:support@frozengrape.app" className="text-[var(--ink)] font-medium hover:underline">
            support@frozengrape.app
          </a>
          .
        </p>

        <p className="text-sm text-[var(--muted)] pt-6 border-t border-[var(--border)]">
          This is placeholder copy. Replace with your finalized privacy policy before launch — the
          App Store requires an accurate privacy URL per app.
        </p>
      </div>
    </article>
  );
}
