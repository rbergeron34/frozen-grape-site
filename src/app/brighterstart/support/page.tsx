import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SUPPORT_EMAIL } from "@/lib/studio";

// This URL is the Support URL in App Store Connect for BrighterStart 2.0.

export const metadata: Metadata = {
  title: "BrighterStart — Support",
  description: "Get help with BrighterStart, report a problem, or contact support.",
  alternates: { canonical: "/brighterstart/support" },
};

const mail = (subject: string) => `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}`;

export default function BrighterStartSupportPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
      <div className="flex items-center gap-4">
        <Image src="/assets/apps/brighterstart/icon.png" alt="BrighterStart icon" width={72} height={72} className="rounded-2xl shadow-md" />
        <div><p className="text-sm font-bold text-[#FF8A3D] uppercase tracking-wider">BrighterStart</p><h1 className="text-4xl font-extrabold tracking-tight">Support</h1></div>
      </div>
      <p className="mt-6 text-[var(--muted)] text-lg max-w-2xl">
        BrighterStart is a wake-up alarm that doesn&rsquo;t stop at waking you — dismissing it
        starts a short wake-up mission, then a guided morning routine. Need a hand? We read every
        message.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        <a href={mail("BrighterStart support")} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--ink)] transition-colors">
          <h2 className="font-bold text-lg">Contact support</h2><p className="text-sm text-[var(--muted)] mt-1">Include your iPhone model, iOS version, and what you expected to happen — it makes fixes much faster.</p>
        </a>
        <a href={mail("BrighterStart bug report")} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--ink)] transition-colors">
          <h2 className="font-bold text-lg">Report a problem</h2><p className="text-sm text-[var(--muted)] mt-1">Tell us what you were doing — setting an alarm, in a mission, mid-routine — and what went wrong.</p>
        </a>
      </div>

      <section className="mt-14 space-y-5 text-[var(--ink)]/80 leading-relaxed">
        <h2 className="text-2xl font-extrabold tracking-tight text-[var(--ink)]">Quick answers</h2>
        <div><h3 className="font-bold text-[var(--ink)]">The alarm didn&rsquo;t ring.</h3><p className="mt-1">BrighterStart uses Apple&rsquo;s AlarmKit, which rings even in Silent mode and Focus. Two things can still stop any alarm: a powered-off (or dead-battery) phone, and revoking the app&rsquo;s alarm permission in Settings. The bedside screen never keeps your display on while on battery, for exactly that reason.</p></div>
        <div><h3 className="font-bold text-[var(--ink)]">How do I stop the app blocker early?</h3><p className="mt-1">Every early exit is inside BrighterStart itself — open the app and end the block from there. Finishing your morning routine lifts it automatically.</p></div>
        <div><h3 className="font-bold text-[var(--ink)]">Where is my data?</h3><p className="mt-1">On your phone, synced only to your own private iCloud. There are no accounts and nothing is sent to us — see the <Link href="/brighterstart/privacy" className="font-medium underline">privacy policy</Link>.</p></div>
        <div><h3 className="font-bold text-[var(--ink)]">What does Apple Health access do?</h3><p className="mt-1">It&rsquo;s optional and read-only: your existing sleep data overlays your true wake times on the wake rhythm chart. Nothing is written back and nothing leaves your device.</p></div>
        <div><h3 className="font-bold text-[var(--ink)]">What do I need to run it?</h3><p className="mt-1">An iPhone on iOS 26 or later. The core alarm is free, forever.</p></div>
      </section>

      <div className="mt-12 flex flex-wrap gap-5 text-sm">
        <Link href="/brighterstart" className="font-medium underline">Marketing page</Link>
        <Link href="/brighterstart/privacy" className="font-medium underline">Privacy Policy</Link>
        <Link href="/brighterstart/terms" className="font-medium underline">Terms of Use</Link>
      </div>
    </div>
  );
}
