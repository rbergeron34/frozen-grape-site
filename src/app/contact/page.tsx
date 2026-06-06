"use client";

import { Suspense, useActionState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { submitContact, type FormState } from "../actions";

const initial: FormState = { status: "idle" };

const field =
  "w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] focus:border-[var(--accent)] outline-none transition-all";

function ContactForm() {
  const params = useSearchParams();
  const topic = params.get("topic") ?? "";
  const [state, action, pending] = useActionState(submitContact, initial);

  if (state.status === "success") {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--ink)] flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-3">Message sent</h2>
        <p className="text-[var(--muted)] mb-7">
          Thanks for reaching out. We&rsquo;ll get back to you as soon as we can.
        </p>
        <Link href="/" className="btn btn-dark mx-auto">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-6">
      {/* honeypot — visually hidden, not for humans */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] w-px h-px overflow-hidden"
      />

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block font-medium mb-2">
            Name
          </label>
          <input type="text" id="name" name="name" required className={field} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium mb-2">
            Email
          </label>
          <input type="email" id="email" name="email" required className={field} placeholder="your@email.com" />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block font-medium mb-2">
          Subject
        </label>
        <select id="subject" name="subject" required defaultValue={topic} className={field}>
          <option value="">Select a topic</option>
          <option value="general">General inquiry</option>
          <option value="support">App support</option>
          <option value="bug">Bug report</option>
          <option value="feature">Feature request</option>
          <option value="business">Business inquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={`${field} resize-none`}
          placeholder="Tell us what's on your mind..."
        />
      </div>

      {state.status === "error" && state.message && (
        <p role="alert" className="text-sm text-red-600">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="btn btn-dark w-full py-3.5 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-28 px-6">
      <section className="max-w-2xl mx-auto text-center py-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Get in touch</h1>
        <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">
          A question about one of our apps, a bug to report, or a feature to request — we&rsquo;d
          love to hear from you.
        </p>
      </section>

      <section className="max-w-2xl mx-auto pb-8">
        <div className="rounded-3xl p-8 md:p-10 border border-[var(--border)] bg-[var(--surface)] shadow-sm">
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </div>

        <div className="mt-10 text-center text-[var(--muted)]">
          <p className="mb-2">Prefer email? Reach us directly at</p>
          <a href="mailto:support@frozengrape.com" className="font-medium text-[var(--ink)] hover:underline">
            support@frozengrape.com
          </a>
        </div>
      </section>
    </div>
  );
}
