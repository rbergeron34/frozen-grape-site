import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getApp } from "@/lib/apps";

const app = getApp("hoopstrivia2")!;

export const metadata: Metadata = {
  title: `${app.name} — ${app.tagline}`,
  description: app.description,
  alternates: { canonical: "/hoopstrivia2" },
  openGraph: {
    type: "website",
    url: "/hoopstrivia2",
    title: `${app.name} — ${app.tagline}`,
    description: app.description,
    images: [{ url: "/hoopstrivia2/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${app.name} — ${app.tagline}`,
    description: app.description,
    images: ["/hoopstrivia2/opengraph-image"],
  },
};

export default function HoopsTrivia2Page() {
  return (
    <div className="bg-[#fff3da] text-[#101820] pt-28 pb-20">
      <section className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <Image src={app.icon} alt="Hoops Trivia 2.0 mascot icon" width={64} height={64} priority className="rounded-2xl" />
            <div>
              <p className="font-extrabold text-[#1152b8]">{app.name}</p>
              <span className="soon-tag mt-1">Coming soon</span>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Know the game.<br /><span className="text-[#1152b8]">Build your court.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#53564f]">
            Roll through the neighborhood. Turn your basketball knowledge into rewards.
            Build your home court, scout players and choose your five.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#notify" className="btn btn-dark">Get notified →</Link>
            <Link href="/apps/hoopstrivia2" className="btn btn-ghost">Game details</Link>
          </div>
          <p className="mt-4 text-sm text-[#626052]">In development for iPhone &amp; iPad.</p>
        </div>
        <figure className="flex flex-col items-center gap-4">
          <div className="m-phone"><div className="m-screen">
            <Image src="/assets/apps/hoopstrivia2/screen-1.png" alt={app.screen.kind === "image" ? app.screen.alt : ""} fill sizes="(max-width: 767px) 248px, 352px" priority className="object-cover" />
          </div></div>
          <figcaption className="max-w-xs text-center text-xs leading-relaxed text-[#626052]">
            Development preview. The final game may change.
          </figcaption>
        </figure>
      </section>

      <section className="max-w-5xl mx-auto px-6 mt-20">
        <h2 className="text-3xl font-extrabold tracking-tight">Every turn brings something.</h2>
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {app.showcaseFeatures.map((feature) => (
            <div key={feature.title} className="border-t-2 border-[#1152b8] pt-5">
              <h3 className="font-bold text-lg">{feature.title}</h3>
              <p className="mt-2 text-[#53564f] leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
        <nav className="mt-16 flex flex-wrap gap-5 text-sm font-medium underline" aria-label="Hoops Trivia 2.0 links">
          <Link href="/hoopstrivia2/support">Support</Link>
          <Link href={app.legal!.privacy}>Privacy</Link>
          <Link href={app.legal!.terms}>Terms</Link>
          <Link href="/apps/hoops-trivia">Original Hoops Trivia</Link>
        </nav>
      </section>
    </div>
  );
}
