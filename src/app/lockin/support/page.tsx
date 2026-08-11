import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SUPPORT_EMAIL } from "@/lib/studio";

// This URL becomes the Support URL in App Store Connect for LockIN.

export const metadata: Metadata = {
  title: "LockIN — Support",
  description: "Get help with LockIN, report a problem, or contact support.",
  alternates: { canonical: "/lockin/support" },
};

const mail = (subject: string) => `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}`;

export default function LockInSupportPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
      <div className="flex items-center gap-4">
        <Image src="/assets/apps/lockin/icon.png" alt="LockIN icon" width={72} height={72} className="rounded-2xl shadow-md" />
        <div><p className="text-sm font-bold text-[#65A30D] uppercase tracking-wider">LockIN</p><h1 className="text-4xl font-extrabold tracking-tight">Support</h1></div>
      </div>
      <p className="mt-6 text-[var(--muted)] text-lg max-w-2xl">
        LockIN is a Zone 2&ndash;first running coach for iPhone and Apple Watch. Questions about
        zones, your data, or a purchase? We read every message.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        <a href={mail("LockIN support")} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--ink)] transition-colors">
          <h2 className="font-bold text-lg">Contact support</h2><p className="text-sm text-[var(--muted)] mt-1">Include your iPhone and Apple Watch models plus OS versions if you can.</p>
        </a>
        <a href={mail("LockIN bug report")} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--ink)] transition-colors">
          <h2 className="font-bold text-lg">Report a problem</h2><p className="text-sm text-[var(--muted)] mt-1">Tell us what happened — before a run, mid-run, or reviewing one after.</p>
        </a>
      </div>

      <section className="mt-14 space-y-5 text-[var(--ink)]/80 leading-relaxed">
        <h2 className="text-2xl font-extrabold tracking-tight text-[var(--ink)]">Quick answers</h2>
        <div><h3 className="font-bold text-[var(--ink)]">Do I need an Apple Watch?</h3><p className="mt-1">Live heart-rate coaching is built around Apple Watch — the watch app coaches on your wrist and mirrors live to your iPhone.</p></div>
        <div><h3 className="font-bold text-[var(--ink)]">How are my zones set?</h3><p className="mt-1">LockIN calibrates a personal easy-effort band with three calibration methods, and you can always override it manually in Settings.</p></div>
        <div><h3 className="font-bold text-[var(--ink)]">What health data does LockIN use?</h3><p className="mt-1">With your permission it reads heart rate and workout history from Apple Health to coach and calibrate, and saves each run back as a workout. Everything stays in Apple Health and on your device — LockIN has no servers. See the <Link href="/apps/lockin/privacy" className="font-medium underline">privacy policy</Link>.</p></div>
        <div><h3 className="font-bold text-[var(--ink)]">Is location required?</h3><p className="mt-1">No — GPS routes and pace are optional. Heart-rate coaching works fully without location access.</p></div>
        <div><h3 className="font-bold text-[var(--ink)]">How do I restore LockIN Premium?</h3><p className="mt-1">Open the Premium paywall from Settings, then tap <strong>Restore Purchases</strong>. Use the same Apple Account that made the purchase.</p></div>
      </section>

      <div className="mt-12 flex flex-wrap gap-5 text-sm">
        <Link href="/lockin" className="font-medium underline">Marketing page</Link>
        <Link href="/apps/lockin/privacy" className="font-medium underline">Privacy Policy</Link>
        <Link href="/apps/lockin/terms" className="font-medium underline">Terms of Use</Link>
      </div>
    </div>
  );
}
