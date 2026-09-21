"use client";

import { useState } from "react";
import { Check, LoaderCircle, Send } from "lucide-react";

// Replace with a real value in .env.local (NEXT_PUBLIC_FORMSPREE_FORM_ID=<your-form-id>)
const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

type Status = "idle" | "pending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("pending");

    if (!formId || formId === "yourFormId") {
      await new Promise((resolve) => setTimeout(resolve, 700));
      console.info(
        "[contact] Formspree form id not configured — simulated a successful submission."
      );
      setStatus("sent");
      form.reset();
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full rounded-md border border-line bg-elevated/40 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-faint focus:border-teal/60";

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-line bg-surface p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block font-mono text-xs text-muted">
            name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block font-mono text-xs text-muted">
            email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClasses}
          />
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block font-mono text-xs text-muted">
          message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="A project idea, a data question, or a role — I read everything."
          className={`${inputClasses} resize-y`}
        />
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "pending"}
          className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-base transition hover:bg-gold/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "pending" ? (
            <>
              Sending
              <LoaderCircle size={16} className="animate-spin" aria-hidden />
            </>
          ) : (
            <>
              Send message
              <Send size={16} aria-hidden />
            </>
          )}
        </button>
        {status === "sent" && (
          <p className="inline-flex items-center gap-2 font-mono text-xs text-teal">
            <Check size={14} aria-hidden />
            Message sent — thanks for reaching out.
          </p>
        )}
        {status === "error" && (
          <p className="font-mono text-xs text-gold">
            Something went wrong — try again, or email me directly.
          </p>
        )}
      </div>
    </form>
  );
}