import Link from "next/link";

// Sample apps data - you can update this with your actual apps
const apps = [
  {
    id: "daily-wisdom",
    name: "Daily Wisdom: Proverbs",
    tagline: "Start your day with wisdom",
    description: "A clean, distraction-free way to read and reflect on the Book of Proverbs. Daily inspiration for your spiritual journey.",
    icon: "bg-purple-900", 
    appStoreUrl: "https://apps.apple.com/us/app/daily-wisdom-book-of-proverbs/id977329614",
  }
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

          <div className="grid md:grid-cols-2 gap-6">
            {apps.map((app) => (
              <Link
                key={app.id}
                href={`/apps/${app.id}`}
                className="card block p-6 group no-underline"
              >
                <div className="flex items-start gap-5">
                  <div className={`w-16 h-16 rounded-2xl ${app.icon} flex-shrink-0 shadow-sm flex items-center justify-center text-white font-bold text-xl`}>
                    {app.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                      {app.name}
                    </h3>
                    <p className="text-sm font-medium text-primary mb-2">{app.tagline}</p>
                    <p className="text-foreground/70 leading-relaxed text-sm">
                      {app.description}
                    </p>
                  </div>
                </div>
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
