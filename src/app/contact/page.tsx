"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate form submission - replace with actual form handling
    // You can integrate with Formspree, Netlify Forms, or your own API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // For now, just show success (implement actual submission later)
    setStatus("sent");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Get in Touch</span>
          </h1>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Have a question about one of our apps? Want to report a bug or request a feature?
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-8 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-white/5 rounded-3xl p-8 md:p-12 border border-foreground/5 shadow-lg">
            {status === "sent" ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-bg flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
                <p className="text-foreground/60 mb-8">
                  Thanks for reaching out. We&apos;ll get back to you as soon as possible.
                </p>
                <Link href="/" className="btn-primary">
                  Back to Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-background focus:border-grape focus:ring-2 focus:ring-grape/20 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-background focus:border-grape focus:ring-2 focus:ring-grape/20 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-background focus:border-grape focus:ring-2 focus:ring-grape/20 outline-none transition-all"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">App Support</option>
                    <option value="bug">Bug Report</option>
                    <option value="feature">Feature Request</option>
                    <option value="business">Business Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-background focus:border-grape focus:ring-2 focus:ring-grape/20 outline-none transition-all resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Alternative Contact */}
          <div className="mt-12 text-center">
            <p className="text-foreground/60 mb-4">
              Prefer email? Reach us directly at:
            </p>
            <a
              href="mailto:hello@frozengrape.studio"
              className="text-grape hover:text-grape-dark transition-colors font-medium"
            >
              hello@frozengrape.studio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
