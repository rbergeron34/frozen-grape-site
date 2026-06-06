"use server";

import { Resend } from "resend";

export type FormState = { status: "idle" | "success" | "error"; message?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

const SUBJECT_LABELS: Record<string, string> = {
  general: "General inquiry",
  support: "App support",
  bug: "Bug report",
  feature: "Feature request",
  business: "Business inquiry",
};

export async function submitContact(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  // Honeypot — bots fill hidden fields. Pretend success without sending.
  if ((formData.get("company") as string)?.trim()) {
    return { status: "success" };
  }

  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const subject = (formData.get("subject") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !subject || !message) {
    return { status: "error", message: "Please fill in every field." };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const resend = getResend();
  if (!resend) {
    return {
      status: "error",
      message: "Messaging isn’t configured yet. Please email us directly for now.",
    };
  }

  const to = process.env.CONTACT_TO_EMAIL ?? "support@frozengrape.com";
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";
  const label = SUBJECT_LABELS[subject] ?? subject;

  try {
    const { error } = await resend.emails.send({
      from: `Frozen Grape Site <${from}>`,
      to,
      replyTo: email,
      subject: `[Frozen Grape] ${label} — ${name}`,
      text: `From: ${name} <${email}>\nTopic: ${label}\n\n${message}`,
    });
    if (error) {
      return { status: "error", message: "Something went wrong sending your message. Please try email." };
    }
    return { status: "success" };
  } catch {
    return { status: "error", message: "Something went wrong sending your message. Please try email." };
  }
}

export async function subscribeNotify(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  if ((formData.get("company") as string)?.trim()) {
    return { status: "success" };
  }

  const email = (formData.get("email") as string)?.trim();
  if (!email || !EMAIL_RE.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const resend = getResend();
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!resend || !audienceId) {
    return {
      status: "error",
      message: "Signups aren’t open just yet. Please check back soon.",
    };
  }

  try {
    const { error } = await resend.contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    });
    // Treat "already a contact" as success — idempotent from the visitor's view.
    if (error && !/exist/i.test(error.message ?? "")) {
      return { status: "error", message: "Couldn’t add you right now. Please try again later." };
    }
    return { status: "success" };
  } catch {
    return { status: "error", message: "Couldn’t add you right now. Please try again later." };
  }
}
