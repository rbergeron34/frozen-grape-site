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
  description: "Crafting intuitive and beautiful iOS experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Navigation - Clean, solid border */}
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-black/5 dark:border-white/10">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center transition-transform group-hover:scale-105">
                <span className="font-bold text-sm tracking-tighter">FG</span>
              </div>
              <span className="font-bold text-lg tracking-tight">Frozen Grape</span>
            </Link>
            
            <div className="flex items-center gap-6">
              <Link href="/#apps" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                Apps
              </Link>
              <Link href="/contact" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer - Simple, minimal */}
        <footer className="border-t border-black/5 dark:border-white/5 mt-24">
          <div className="max-w-5xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center">
                   <span className="text-primary font-bold text-xs">FG</span>
                </div>
                <span className="font-semibold text-sm">Frozen Grape Studios</span>
              </div>
              
              <div className="flex gap-6 text-sm text-foreground/60">
                <Link href="#" className="hover:text-foreground transition-colors">Twitter</Link>
                <Link href="#" className="hover:text-foreground transition-colors">GitHub</Link>
                <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
              </div>

              <p className="text-xs text-foreground/40">
                &copy; {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
