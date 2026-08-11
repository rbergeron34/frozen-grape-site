import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SUPPORT_EMAIL } from "@/lib/studio";

// This URL is the Support URL in App Store Connect for Daily Proverb.

export const metadata: Metadata = {
  title: "Daily Proverb — Support",
  description: "Get help with Daily Proverb, report a problem, or contact support.",
  alternates: { canonical: "/dailyproverb/support" },
};

const mail = (subject: string) => `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}`;

export default function DailyProverbSupportPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
      <div className="flex items-center gap-4">
        <Image src="/assets/apps/daily-proverb/icon.png" alt="Daily Proverb icon" width={72} height={72} className="rounded-2xl shadow-md" />
        <div><p className="text-sm font-bold text-[#6FA382] uppercase tracking-wider">Daily Proverb</p><h1 className="text-4xl font-extrabold tracking-tight">Support</h1></div>
      </div>
      <p className="mt-6 text-[var(--muted)] text-lg max-w-2xl">
        Need a hand with a verse, your journal, or a purchase? We read every message.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        <a href={mail("Daily Proverb support")} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--ink)] transition-colors">
          <h2 className="font-bold text-lg">Contact support</h2><p className="text-sm text-[var(--muted)] mt-1">Include your iPhone model, iOS version, and app version if you can.</p>
        </a>
        <a href={mail("Daily Proverb bug report")} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--ink)] transition-colors">
          <h2 className="font-bold text-lg">Report a problem</h2><p className="text-sm text-[var(--muted)] mt-1">Tell us where it happened — Today, Browse, Journal, or a widget — and what went wrong.</p>
        </a>
      </div>

      <section className="mt-14 space-y-5 text-[var(--ink)]/80 leading-relaxed">
        <h2 className="text-2xl font-extrabold tracking-tight text-[var(--ink)]">Quick answers</h2>
        <div><h3 className="font-bold text-[var(--ink)]">How do I restore Premium?</h3><p className="mt-1">Open the Premium paywall from Settings, then tap <strong>Restore Purchases</strong>. Use the same Apple Account that made the purchase. Monthly and annual plans include a 3-day free trial.</p></div>
        <div><h3 className="font-bold text-[var(--ink)]">Where are my favorites and journal notes?</h3><p className="mt-1">They&rsquo;re stored in your private iCloud database and sync across your devices signed into the same Apple Account. There is no Daily Proverb account, and we can&rsquo;t read your notes.</p></div>
        <div><h3 className="font-bold text-[var(--ink)]">How do reminders work?</h3><p className="mt-1">You can schedule up to three daily reminders in Settings. They&rsquo;re local notifications on your device — nothing about your reading is sent anywhere.</p></div>
        <div><h3 className="font-bold text-[var(--ink)]">Which translations are included?</h3><p className="mt-1">NIV is free. KJV, NLT, and ESV unlock with Premium.</p></div>
        <div><h3 className="font-bold text-[var(--ink)]">How do streaks work?</h3><p className="mt-1">Reading today&rsquo;s proverb keeps your streak going. It&rsquo;s a gentle nudge, not a guilt trip — your history and journal are never locked behind a streak.</p></div>
      </section>

      <div className="mt-12 flex flex-wrap gap-5 text-sm">
        <Link href="/dailyproverb" className="font-medium underline">Marketing page</Link>
        <Link href="/apps/daily-proverb/privacy" className="font-medium underline">Privacy Policy</Link>
        <Link href="/apps/daily-proverb/terms" className="font-medium underline">Terms of Use</Link>
      </div>
    </div>
  );
}
