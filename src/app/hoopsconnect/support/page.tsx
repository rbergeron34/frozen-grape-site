import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SUPPORT_EMAIL } from "@/lib/studio";

export const metadata: Metadata = {
  title: "Hoops Slate — Support",
  description: "Get help with Hoops Slate, report a problem, or contact support.",
  alternates: { canonical: "/hoopsconnect/support" },
};

const mail = (subject: string) => `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}`;

export default function HoopsSupportPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
      <div className="flex items-center gap-4">
        <Image src="/assets/apps/hoops-connect/icon.png" alt="Hoops Slate icon" width={72} height={72} className="rounded-2xl shadow-md" />
        <div><p className="text-sm font-bold text-[#D2742E] uppercase tracking-wider">Hoops Slate</p><h1 className="text-4xl font-extrabold tracking-tight">Support</h1></div>
      </div>
      <p className="mt-6 text-[var(--muted)] text-lg max-w-2xl">Need a hand with a puzzle, purchase, or app issue? We read every message.</p>

      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        <a href={mail("Hoops Slate support")} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--ink)] transition-colors">
          <h2 className="font-bold text-lg">Contact support</h2><p className="text-sm text-[var(--muted)] mt-1">Include your iPhone model, iOS version, and app version if you can.</p>
        </a>
        <a href={mail("Hoops Slate bug report")} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--ink)] transition-colors">
          <h2 className="font-bold text-lg">Report a problem</h2><p className="text-sm text-[var(--muted)] mt-1">Tell us which game you were playing and what happened.</p>
        </a>
      </div>

      <section className="mt-14 space-y-5 text-[var(--ink)]/80 leading-relaxed">
        <h2 className="text-2xl font-extrabold tracking-tight text-[var(--ink)]">Quick answers</h2>
        <div><h3 className="font-bold text-[var(--ink)]">How do I restore Hoops Slate Pro?</h3><p className="mt-1">Open the Pro paywall from the Archive, then tap <strong>Restore Purchases</strong> in the top bar. Use the same Apple Account that made the purchase.</p></div>
        <div><h3 className="font-bold text-[var(--ink)]">Where is my progress stored?</h3><p className="mt-1">Your results, streaks, settings, and Box Score stay locally on your iPhone. Hoops Slate has no account or cloud service.</p></div>
        <div><h3 className="font-bold text-[var(--ink)]">When does a new slate arrive?</h3><p className="mt-1">A fresh set of five puzzles becomes available every day at midnight on your device.</p></div>
        <div><h3 className="font-bold text-[var(--ink)]">Can I replay an older slate?</h3><p className="mt-1">Hoops Slate Pro unlocks the rolling 30-day puzzle archive.</p></div>
      </section>

      <div className="mt-12 flex flex-wrap gap-5 text-sm">
        <Link href="/hoopsconnect" className="font-medium underline">Marketing page</Link>
        <Link href="/hoopsconnect/privacy" className="font-medium underline">Privacy Policy</Link>
        <Link href="/hoopsconnect/terms" className="font-medium underline">Terms of Use</Link>
      </div>
    </div>
  );
}
