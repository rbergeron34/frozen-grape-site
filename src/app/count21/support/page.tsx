import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SUPPORT_EMAIL } from "@/lib/studio";

// This URL becomes the Support URL in App Store Connect for Count21.
// Q&A mirrors release/website-content/support.md in the Count21 app repo.

export const metadata: Metadata = {
  title: "Count21 — Support",
  description:
    "Get help with Count21: what's free, restoring Complete, table rules, progress and hand history, or contact support.",
  alternates: { canonical: "/count21/support" },
};

const mail = (subject: string) => `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}`;

const QA: { q: string; a: React.ReactNode }[] = [
  {
    q: "What is free?",
    a: "The first two lessons, unlimited card-value drills and ten table hands are included with the free download. Count21 Complete is a single optional $14.99 purchase for the full curriculum, all five drills and unlimited table hands. There is no subscription and there are no ads.",
  },
  {
    q: "How do I restore Complete?",
    a: (
      <>
        Use the Apple Account that made the purchase. Open Count21 › Settings › <strong>Restore
        purchases</strong>. Restoration needs an internet connection. Apple handles billing and
        refund requests — see{" "}
        <a href="https://support.apple.com/billing" target="_blank" rel="noopener noreferrer" className="font-medium underline">
          Apple purchase support
        </a>
        .
      </>
    ),
  },
  {
    q: "My purchase is pending",
    a: "A purchase that needs approval (for example, Ask to Buy) does not unlock Complete yet. Once Apple confirms it, Count21 updates access automatically. You can also reopen the app or use Restore purchases after approval.",
  },
  {
    q: "How do lessons get completed?",
    a: "Score nine out of ten on a lesson check to mark that lesson complete. Ordinary drill rounds record practice without completing a lesson. Complete gives access to all five drills; the curriculum recommends a lesson order.",
  },
  {
    q: "What are the table rules?",
    a: "Six decks, dealer stands on soft 17, double after split and late surrender. Only exposed cards enter the running count. Count21 floors the true count: −7 divided by 3 becomes −3. Opening the shoe composition or enabling hints marks the hand as assisted.",
  },
  {
    q: "Where is my progress saved?",
    a: "On your device only — there is no account or cloud sync. Completed sessions and hands persist across relaunches; an unfinished hand starts over. Export your hand history before deleting data if you want to keep a copy. Deleting practice does not restart the free sample or remove Complete.",
  },
  {
    q: "Does Count21 involve real money?",
    a: "No. Count21 is an educational simulation. It does not offer real-money gambling, track live games or guarantee results. All practice cards are generated within the app, and practice works offline.",
  },
];

export default function Count21SupportPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
      <div className="flex items-center gap-4">
        <Image src="/assets/apps/count21/icon.png" alt="Count21 icon" width={72} height={72} className="rounded-2xl shadow-md" />
        <div>
          <p className="text-sm font-bold text-[#895600] uppercase tracking-wider">Count21</p>
          <h1 className="text-4xl font-extrabold tracking-tight">Support</h1>
        </div>
      </div>
      <p className="mt-6 text-[var(--muted)] text-lg max-w-2xl">
        Count21 teaches Hi-Lo counting through lessons, drills and simulated blackjack hands.
        Stuck on a lesson, a purchase or a hand that looked wrong? We read every message.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        <a href={mail("Count21 support")} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--ink)] transition-colors">
          <h2 className="font-bold text-lg">Contact support</h2>
          <p className="text-sm text-[var(--muted)] mt-1">{SUPPORT_EMAIL}</p>
        </a>
        <a href={mail("Count21 bug report")} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--ink)] transition-colors">
          <h2 className="font-bold text-lg">Report an issue</h2>
          <p className="text-sm text-[var(--muted)] mt-1">
            Include the app version, iPhone or iPad model, iOS version, the screen involved and what
            you expected. For a table issue, the shoe seed and exported hand history help. Never
            send passwords or payment details.
          </p>
        </a>
      </div>

      <section className="mt-14 space-y-5 text-[var(--ink)]/80 leading-relaxed">
        <h2 className="text-2xl font-extrabold tracking-tight text-[var(--ink)]">Quick answers</h2>
        {QA.map(({ q, a }) => (
          <div key={q}>
            <h3 className="font-bold text-[var(--ink)]">{q}</h3>
            <p className="mt-1">{a}</p>
          </div>
        ))}
      </section>

      <div className="mt-12 flex flex-wrap gap-5 text-sm">
        <Link href="/count21" className="font-medium underline">Count21 home</Link>
        <Link href="/count21/privacy" className="font-medium underline">Privacy Policy</Link>
        <Link href="/apps/count21/terms" className="font-medium underline">Terms of Use</Link>
        <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer" className="font-medium underline">Apple Standard EULA</a>
      </div>
    </div>
  );
}
