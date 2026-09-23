"use client";

import { useActionState } from "react";
import { subscribeNotify, type FormState } from "../actions";
import { Pip } from "./brand/Pip";
import styles from "./NotifyForm.module.css";

const initial: FormState = { status: "idle" };

export function NotifyForm() {
  const [state, action, pending] = useActionState(subscribeNotify, initial);

  if (state.status === "success") {
    return (
      <div className={styles.success} role="status">
        <Pip pose="happy" className={styles.happy} sizes="58px" />
        <div><strong>You&rsquo;re on the list.</strong><p>We&rsquo;ll be in touch when something new launches.</p></div>
      </div>
    );
  }

  return (
    <form action={action} className="mt-2 flex flex-col items-center gap-2">
      <div className="flex w-full max-w-md gap-2">
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[9999px] w-px h-px overflow-hidden"
        />
        <label htmlFor="notify-email" className="sr-only">
          Email address
        </label>
        <input
          id="notify-email"
          type="email"
          name="email"
          required
          placeholder="you@email.com"
          className="flex-1 px-4 py-3 rounded-full border border-[var(--border)] bg-[var(--surface)] focus:border-[var(--accent)] outline-none transition-all"
        />
        <button type="submit" disabled={pending} className="btn btn-dark disabled:opacity-50">
          {pending ? "…" : "Notify me"}
        </button>
      </div>
      {state.status === "error" && state.message && (
        <p role="alert" className="text-sm text-red-600">
          {state.message}
        </p>
      )}
    </form>
  );
}
