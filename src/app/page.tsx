import Link from "next/link";
import Image from "next/image";

// Apps data with real App Store icons
const apps = [
  {
    id: "brighterstart",
    name: "BrighterStart",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/1a/a1/2a/1aa12a07-d6f8-c94b-ff62-1af58e0a5c69/AppIcon-0-0-1x_U007epad-0-1-85-220.png/200x200bb.png",
    appStoreUrl: "https://apps.apple.com/us/app/brighterstart/id6745766308",
  },
  {
    id: "daily-wisdom",
    name: "Daily Wisdom",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/5d/e7/45/5de7457e-ed74-f7f9-ea7d-55dee66a3d32/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/200x200bb.png",
    appStoreUrl: "https://apps.apple.com/us/app/daily-wisdom-book-of-proverbs/id977329614",
  },
  {
    id: "hoops-trivia",
    name: "Hoops Trivia",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple5/v4/95/4e/33/954e339a-3839-bf69-0004-e0bf5fb86ff9/mzl.cvpayvfg.jpg/200x200bb.png",
    appStoreUrl: "https://apps.apple.com/us/app/hoops-trivia-lebron-james-edition/id946326329",
  },
  {
    id: "hoops-trivia-lite",
    name: "Hoops Trivia Lite",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple1/v4/1b/79/66/1b7966a9-321c-c16b-82cd-e4a4f422378a/pr_source.png/200x200bb.png",
    appStoreUrl: "https://apps.apple.com/us/app/hoops-trivia-lebron-james-edition-lite/id968168697",
  },
];

export default function Home() {
  return (
    <div className="bg-grid-pattern">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Indie iOS Development Studio
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            Software with a <span className="text-primary">human touch</span>.
          </h1>
          <p className="text-xl text-foreground/60 mb-10 max-w-2xl mx-auto text-balance leading-relaxed">
            Frozen Grape Studios crafts intuitive, beautiful iOS applications designed to fit naturally into your daily life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#apps" className="btn-primary">
              View Our Apps
            </a>
            <Link href="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className="py-24 px-6 border-t border-black/5 dark:border-white/5 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Applications</h2>
            <p className="text-foreground/60 text-lg max-w-2xl">
              Tools designed with care, focusing on usability, performance, and privacy.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {apps.map((app) => (
              <Link
                key={app.id}
                href={`/apps/${app.id}`}
                className="group flex flex-col items-center text-center no-underline"
              >
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 rounded-[22%] overflow-hidden shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-200">
                  <Image
                    src={app.icon}
                    alt={`${app.name} app icon`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {app.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Simplified */}
      <section className="py-24 px-6 border-t border-black/5 dark:border-white/5 bg-grape-subtle/30">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Small team, big care.</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Frozen Grape Studios is an independent development shop. We don&apos;t chase trends or engagement metrics.
              </p>
              <p>
                We build software that we want to use ourselves. We believe that software should be quiet, reliable, and respectful of your attention.
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-black/5 dark:border-white/5 grid grid-cols-3 gap-8">
              <div>
                <div className="font-bold text-2xl text-primary">100%</div>
                <div className="text-xs uppercase tracking-wider text-foreground/50 mt-1">Independent</div>
              </div>
              <div>
                <div className="font-bold text-2xl text-primary">iOS</div>
                <div className="text-xs uppercase tracking-wider text-foreground/50 mt-1">Focused</div>
              </div>
            </div>
          </div>
          
          <div className="bg-background rounded-2xl p-8 border border-black/5 dark:border-white/5 shadow-sm">
             <blockquote className="text-lg font-medium italic mb-4">
               &quot;The details are not the details. They make the design.&quot;
             </blockquote>
             <cite className="not-italic text-sm text-foreground/50">— Charles Eames</cite>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 border-t border-black/5 dark:border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to improve your digital workflow?</h2>
          <p className="text-foreground/60 mb-8">
            Check out our apps on the App Store or get in touch if you have any questions.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Support
          </Link>
        </div>
      </section>
    </div>
  );
}
