import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SUPPORT_EMAIL } from "@/lib/studio";

// This URL becomes the Support URL in App Store Connect for Guiding Light.

export const metadata: Metadata = {
  title: "Guiding Light — Support",
  description: "Get help with Guiding Light, report a problem, or contact support.",
  alternates: { canonical: "/guidinglight/support" },
};

const mail = (subject: string) => `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}`;

export default function GuidingLightSupportPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
      <div className="flex items-center gap-4">
        <Image src="/assets/apps/guiding-light/icon.png" alt="Guiding Light icon" width={72} height={72} className="rounded-2xl shadow-md" />
        <div><p className="text-sm font-bold text-[#C28A2C] uppercase tracking-wider">Guiding Light</p><h1 className="text-4xl font-extrabold tracking-tight">Support</h1></div>
      </div>
      <p className="mt-6 text-[var(--muted)] text-lg max-w-2xl">
        Guiding Light is a daily Bible journal and reflection companion. Questions about the app,
        your journal, or a purchase? We read every message.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        <a href={mail("Guiding Light support")} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--ink)] transition-colors">
          <h2 className="font-bold text-lg">Contact support</h2><p className="text-sm text-[var(--muted)] mt-1">Include your iPhone model, iOS version, and app version if you can.</p>
        </a>
        <a href={mail("Guiding Light bug report")} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--ink)] transition-colors">
          <h2 className="font-bold text-lg">Report a problem</h2><p className="text-sm text-[var(--muted)] mt-1">Tell us what you were doing — reading, journaling, listening — and what happened.</p>
        </a>
      </div>

      <section className="mt-14 space-y-5 text-[var(--ink)]/80 leading-relaxed">
        <h2 className="text-2xl font-extrabold tracking-tight text-[var(--ink)]">Quick answers</h2>
        <div><h3 className="font-bold text-[var(--ink)]">Is my journal private?</h3><p className="mt-1">Yes. Your journal is encrypted on your device and unlocked with Face ID. There is no Guiding Light account and your entries are never sent to us — we couldn&rsquo;t read them if we wanted to.</p></div>
        <div><h3 className="font-bold text-[var(--ink)]">How does the companion work?</h3><p className="mt-1">The companion asks good questions and points to verified, cited Scripture — never easy answers. It uses AI to help with reflection prompts, and the themes it notices come from your own writing, on your device.</p></div>
        <div><h3 className="font-bold text-[var(--ink)]">How do I restore Guiding Light Plus?</h3><p className="mt-1">Open the Plus paywall from Settings, then tap <strong>Restore Purchases</strong>. Use the same Apple Account that made the purchase.</p></div>
        <div><h3 className="font-bold text-[var(--ink)]">Does it work offline?</h3><p className="mt-1">Yes — all five translations are stored on your device, and audio narration is cached for offline listening.</p></div>
        <div><h3 className="font-bold text-[var(--ink)]">Is journaling paywalled?</h3><p className="mt-1">Never. Journaling, your full history, the daily verse, and export are always free — Plus adds extras, not essentials.</p></div>
      </section>

      <div className="mt-12 flex flex-wrap gap-5 text-sm">
        <Link href="/guidinglight" className="font-medium underline">Marketing page</Link>
        <Link href="/guidinglight/privacy" className="font-medium underline">Privacy Policy</Link>
        <Link href="/guidinglight/terms" className="font-medium underline">Terms of Service</Link>
      </div>
    </div>
  );
}
