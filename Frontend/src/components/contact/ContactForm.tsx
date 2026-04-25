"use client";

import { CheckCircle2, Loader2, Mail, MessageSquare, Phone, Send, Tag, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type Field = "name" | "email" | "phone" | "subject" | "message";
type FormState = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

/** Basic client-side validation. Backend will re-validate authoritatively. */
function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.phone && !/^[+\d()\-\s]{7,}$/.test(values.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!values.subject.trim()) errors.subject = "Please add a subject.";
  if (values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [serverError, setServerError] = useState<string | null>(null);

  function update(field: Field, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    setServerError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data: { success: boolean; message: string } = await res.json();

      if (!res.ok || !data.success) {
        setServerError(data.message ?? "Something went wrong. Please try again.");
      } else {
        setSuccess(true);
        setValues(initial);
        window.setTimeout(() => setSuccess(false), 5000);
      }
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          id="name"
          label="Your Name"
          icon={User}
          value={values.name}
          onChange={(v) => update("name", v)}
          error={errors.name}
          autoComplete="name"
          required
        />
        <Input
          id="email"
          type="email"
          label="Email Address"
          icon={Mail}
          value={values.email}
          onChange={(v) => update("email", v)}
          error={errors.email}
          autoComplete="email"
          required
        />
        <Input
          id="phone"
          type="tel"
          label="Phone Number"
          icon={Phone}
          value={values.phone}
          onChange={(v) => update("phone", v)}
          error={errors.phone}
          autoComplete="tel"
        />
        <Input
          id="subject"
          label="Subject"
          icon={Tag}
          value={values.subject}
          onChange={(v) => update("subject", v)}
          error={errors.subject}
          required
        />
      </div>

      <Textarea
        id="message"
        label="Your Message"
        icon={MessageSquare}
        value={values.message}
        onChange={(v) => update("message", v)}
        error={errors.message}
        required
      />

      {success ? (
        <div
          role="status"
          className="flex items-center gap-3 rounded-xl border border-accent-500/30 bg-accent-50 p-4 text-sm text-accent-700"
        >
          <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
          Thanks! Your message has been received. We&apos;ll get back to you shortly.
        </div>
      ) : null}

      {serverError ? (
        <div
          role="alert"
          className="flex items-center gap-3 rounded-xl border border-danger-300 bg-danger-50 p-4 text-sm text-danger-700"
        >
          {serverError}
        </div>
      ) : null}

      <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
        <Button href="/" variant="ghost">
          Cancel
        </Button>
        <Button type="submit" disabled={submitting}>
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" /> Send Message
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

/* ---------- field primitives ---------- */

type FieldProps = {
  id: string;
  label: string;
  icon: LucideIcon;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
};

function Input({
  id,
  label,
  icon: Icon,
  value,
  onChange,
  error,
  required,
  type = "text",
  autoComplete,
}: FieldProps & { type?: string; autoComplete?: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink-700">
        {label}
        {required ? <span className="ml-1 text-danger-500">*</span> : null}
      </label>
      <div className="relative">
        <Icon
          aria-hidden
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400"
        />
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(
            "h-11 w-full rounded-xl border bg-white pl-10 pr-3 text-sm text-ink-800 placeholder:text-ink-300 transition-colors focus:outline-none focus:ring-2",
            error
              ? "border-danger-300 focus:border-danger-400 focus:ring-danger-400/20"
              : "border-ink-200 focus:border-brand-400 focus:ring-brand-400/20",
          )}
        />
      </div>
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-danger-500">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Textarea({
  id,
  label,
  icon: Icon,
  value,
  onChange,
  error,
  required,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink-700">
        {label}
        {required ? <span className="ml-1 text-danger-500">*</span> : null}
      </label>
      <div className="relative">
        <Icon
          aria-hidden
          className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-ink-400"
        />
        <textarea
          id={id}
          name={id}
          rows={6}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(
            "w-full rounded-xl border bg-white py-3 pl-10 pr-3 text-sm text-ink-800 placeholder:text-ink-300 transition-colors focus:outline-none focus:ring-2",
            error
              ? "border-danger-300 focus:border-danger-400 focus:ring-danger-400/20"
              : "border-ink-200 focus:border-brand-400 focus:ring-brand-400/20",
          )}
        />
      </div>
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-danger-500">
          {error}
        </p>
      ) : null}
    </div>
  );
}
