import Link from "next/link";

// Sample apps data - you can update this with your actual apps
const apps = [
  {
    id: "app-one",
    name: "App One",
    tagline: "Your first amazing app",
    description: "A brief description of what this app does and why users love it.",
    icon: "/app-icon-placeholder.png",
    color: "from-purple-500 to-pink-500",
    appStoreUrl: "#",
  },
  {
    id: "app-two",
    name: "App Two",
    tagline: "Another great creation",
    description: "A brief description of what this app does and why users love it.",
    icon: "/app-icon-placeholder.png",
    color: "from-cyan-500 to-blue-500",
    appStoreUrl: "#",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 gradient-bg opacity-90" />

        {/* Floating shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Frozen Grape
            <span className="block text-2xl md:text-3xl font-normal mt-2 text-white/80">
              Studios
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Crafting beautiful iOS apps that make your digital life simpler,
            smarter, and more enjoyable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#apps" className="bg-white text-grape font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-lg">
              Explore Our Apps
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-grape transition-all">
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Our Apps</span>
            </h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              Each app is crafted with attention to detail, focusing on user experience
              and solving real problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {apps.map((app) => (
              <Link
                key={app.id}
                href={`/apps/${app.id}`}
                className="group"
              >
                <div className="bg-white dark:bg-white/5 rounded-3xl p-8 card-hover border border-foreground/5">
                  <div className="flex items-start gap-6">
                    {/* App Icon Placeholder */}
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <span className="text-white text-3xl font-bold">
                        {app.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-grape transition-colors">
                        {app.name}
                      </h3>
                      <p className="text-grape font-medium mb-3">{app.tagline}</p>
                      <p className="text-foreground/60">{app.description}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm text-foreground/40">Available on the App Store</span>
                    <span className="text-grape group-hover:translate-x-2 transition-transform inline-block">
                      Learn more &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-foreground/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">About the Studio</span>
              </h2>
              <p className="text-foreground/70 text-lg mb-6">
                Frozen Grape Studios is an indie iOS development studio focused on
                creating apps that are both beautiful and functional. We believe
                great software should feel intuitive and bring joy to everyday tasks.
              </p>
              <p className="text-foreground/70 text-lg mb-8">
                Every app we build starts with a simple question: &quot;How can we make
                this better?&quot; From there, we obsess over the details until we have
                something we&apos;re proud to share with the world.
              </p>
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text">2+</div>
                  <div className="text-foreground/60">Apps</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text">iOS</div>
                  <div className="text-foreground/60">Platform</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text">100%</div>
                  <div className="text-foreground/60">Passion</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl gradient-bg opacity-20" />
              <div className="absolute inset-4 rounded-2xl bg-white dark:bg-foreground/10 shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl gradient-bg flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">FG</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Frozen Grape Studios</h3>
                  <p className="text-foreground/60">Indie iOS Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Have an idea? <span className="gradient-text">Let&apos;s talk.</span>
          </h2>
          <p className="text-foreground/60 text-lg mb-8 max-w-2xl mx-auto">
            Whether you have questions about our apps, feedback, or just want to say hi,
            we&apos;d love to hear from you.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
