import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frozen Grape Studios | iOS App Development",
  description: "We create beautiful, intuitive iOS apps that make your life easier. Discover our collection of apps designed with care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 glass">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">FG</span>
                </div>
                <span className="font-bold text-xl">Frozen Grape</span>
              </Link>
              <div className="flex items-center gap-8">
                <Link href="/" className="hover:text-grape transition-colors font-medium">
                  Home
                </Link>
                <Link href="/#apps" className="hover:text-grape transition-colors font-medium">
                  Apps
                </Link>
                <Link href="/contact" className="btn-primary text-sm">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-foreground/5 mt-20">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">FG</span>
                  </div>
                  <span className="font-bold text-xl">Frozen Grape</span>
                </div>
                <p className="text-foreground/60">
                  Creating beautiful iOS apps that make your digital life better.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <div className="flex flex-col gap-2">
                  <Link href="/" className="text-foreground/60 hover:text-grape transition-colors">
                    Home
                  </Link>
                  <Link href="/#apps" className="text-foreground/60 hover:text-grape transition-colors">
                    Our Apps
                  </Link>
                  <Link href="/contact" className="text-foreground/60 hover:text-grape transition-colors">
                    Contact
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-4">Connect</h4>
                <div className="flex flex-col gap-2">
                  <a href="#" className="text-foreground/60 hover:text-grape transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="text-foreground/60 hover:text-grape transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-foreground/10 mt-8 pt-8 text-center text-foreground/40">
              <p>&copy; {new Date().getFullYear()} Frozen Grape Studios. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
