import Link from "next/link";
import { FEATURED_APPS } from "@/lib/apps";
import { AppShowcase } from "./components/showcase/AppShowcase";
import { NotifyForm } from "./components/NotifyForm";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <header className="hero min-h-[90vh] flex flex-col justify-center items-center text-center px-6 pt-[150px] pb-10">
        <span className="text-[13px] font-semibold text-[var(--muted)] px-3.5 py-1.5 border border-[var(--border)] rounded-full bg-[var(--surface)] mb-7">
          Indie iOS studio · Austin
        </span>
        <h1 className="font-extrabold tracking-[-0.035em] leading-[1.05] text-[clamp(38px,6vw,66px)] max-w-[15ch]">
          Small iOS apps, thoughtfully made.
        </h1>
        <p className="mt-5 max-w-[50ch] text-[var(--muted)] text-[clamp(16px,1.6vw,19px)]">
          Frozen Grape is a tiny app studio building simple tools for mornings, reflection,
          running, photos, and play.
        </p>
        <div className="mt-8 flex gap-3 flex-wrap justify-center">
          <Link href="#apps" className="btn btn-dark">
            See the apps
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Get in touch
          </Link>
        </div>
        <div className="mt-16 text-xs tracking-[0.18em] uppercase text-[var(--muted)] flex flex-col items-center gap-2.5">
          <span>Scroll to explore</span>
          <span className="hero-ln" />
        </div>
      </header>

      {/* Apps showcase (pinned phone on desktop, static list on mobile/reduced-motion) */}
      <AppShowcase />

      {/* Studio */}
      <section
        id="studio"
        className="max-w-[1000px] mx-auto mt-10 px-6 py-[90px] text-center border-t border-[var(--border)]"
      >
        <h2 className="font-extrabold tracking-[-0.03em] text-[clamp(28px,3.4vw,40px)]">
          Built independently in Austin.
        </h2>
        <div className="mt-5 mx-auto max-w-[52ch] text-[var(--muted)] text-lg space-y-4">
          <p>
            Frozen Grape is a small, independent shop. We build the software we want to use
            ourselves — and we don&rsquo;t chase trends or engagement metrics.
          </p>
          <p>
            We believe software should be quiet, reliable, and respectful of your attention.
          </p>
        </div>

        <div className="mt-10 mx-auto max-w-md grid grid-cols-2 gap-8 border-t border-[var(--border)] pt-8">
          <div>
            <div className="font-extrabold text-3xl tracking-tight text-[var(--ink)]">100%</div>
            <div className="text-xs uppercase tracking-wider text-[var(--muted)] mt-1">
              Independent
            </div>
          </div>
          <div>
            <div className="font-extrabold text-3xl tracking-tight text-[var(--ink)]">iOS</div>
            <div className="text-xs uppercase tracking-wider text-[var(--muted)] mt-1">Focused</div>
          </div>
        </div>

        <figure className="mt-10 mx-auto max-w-xl rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm">
          <blockquote className="text-lg font-medium italic text-[var(--ink)]">
            &ldquo;The details are not the details. They make the design.&rdquo;
          </blockquote>
          <figcaption className="not-italic text-sm text-[var(--muted)] mt-3">
            — Charles Eames
          </figcaption>
        </figure>

        <div className="mt-10 flex gap-2.5 justify-center flex-wrap">
          {FEATURED_APPS.map((app) => (
            <Link key={app.slug} href={`/apps/${app.slug}`} className="studio-link">
              {app.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Notify */}
      <section
        id="notify"
        className="max-w-[1000px] mx-auto px-6 pb-[90px] text-center scroll-mt-24"
      >
        <h2 className="font-extrabold tracking-[-0.03em] text-[clamp(24px,3vw,32px)]">
          New apps, now and then.
        </h2>
        <p className="mt-3 mx-auto max-w-[42ch] text-[var(--muted)]">
          An email when something new ships. Nothing else — no newsletters, no noise.
        </p>
        <NotifyForm />
      </section>
    </>
  );
}
