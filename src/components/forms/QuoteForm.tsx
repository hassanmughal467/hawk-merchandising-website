"use client";

import { useCallback, useState } from "react";
import { ConversionLink } from "@/components/analytics/ConversionLink";
import { serviceOptions } from "@/lib/site";
import { cn } from "@/lib/cn";
import {
  CONVERSION_EVENTS,
  trackContactFormSubmit,
  trackQuoteRequest,
} from "@/lib/analytics-events";

type FieldErrors = Partial<Record<"name" | "email" | "whatsapp" | "service" | "message" | "file", string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type QuoteFormProps = {
  source?: string;
  showFileUpload?: boolean;
  compact?: boolean;
  defaultService?: string;
  className?: string;
};

export function QuoteForm({
  source = "website",
  showFileUpload = false,
  compact = false,
  defaultService,
  className = "",
}: QuoteFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [service, setService] = useState(defaultService ?? serviceOptions[0]);
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [success, setSuccess] = useState<{ referenceId: string } | null>(null);

  const validate = useCallback((): boolean => {
    const next: FieldErrors = {};
    if (name.trim().length < 2) next.name = "Enter your full name.";
    if (!emailRe.test(email.trim())) next.email = "Enter a valid email address.";
    if (whatsapp.trim().length < 8) next.whatsapp = "Enter a WhatsApp number we can reach you on.";
    if (!service) next.service = "Select a service.";
    if (message.trim().length < 10) next.message = "Tell us about your project (min. 10 characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  }, [name, email, whatsapp, service, message]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const body = new FormData();
      body.set("name", name.trim());
      body.set("email", email.trim());
      body.set("whatsapp", whatsapp.trim());
      body.set("service", service);
      body.set("message", message.trim());
      body.set("source", source);
      if (file) body.set("file", file);

      const res = await fetch("/api/contact", { method: "POST", body });
      const data = (await res.json()) as { referenceId?: string; error?: string };
      if (!res.ok) throw new Error(data.error ?? "Submission failed");
      if (source === "contact") {
        trackContactFormSubmit(source);
      } else {
        trackQuoteRequest(source);
      }
      setSuccess({ referenceId: data.referenceId ?? "HMK-QUOTE" });
    } catch {
      setErrors({ message: "Something went wrong. Please try again or contact us on WhatsApp." });
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className={cn("rounded-2xl border border-accent/30 bg-accent/10 p-6 text-center", className)}>
        <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
          Quote request received
        </p>
        <p className="mt-3 text-sm text-zinc-300">
          Reference: <span className="font-mono text-accent">{success.referenceId}</span>
        </p>
        <p className="mt-2 text-sm text-zinc-400">
          We will respond same business day on most requests.
        </p>
        <ConversionLink
          href="/upload"
          event={CONVERSION_EVENTS.UPLOAD_ARTWORK_CLICK}
          eventParams={{ location: "quote_success" }}
          className="focus-ring mt-6 inline-flex rounded-full bg-accent-gradient px-6 py-2.5 text-sm font-semibold text-white"
        >
          Upload artwork now
        </ConversionLink>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("space-y-4", className)} noValidate>
      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <Field label="Full name" error={errors.name}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            autoComplete="name"
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            autoComplete="email"
          />
        </Field>
      </div>

      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <Field label="WhatsApp" error={errors.whatsapp}>
          <input
            type="tel"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className={inputClass}
            autoComplete="tel"
          />
        </Field>
        <Field label="Service" error={errors.service}>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={inputClass}
          >
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Project details" error={errors.message}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={compact ? 3 : 4}
          className={cn(inputClass, "resize-y")}
          placeholder="Garment type, placement, deadline, thread colors..."
        />
      </Field>

      {showFileUpload ? (
        <Field label="Artwork file (optional)" error={errors.file}>
          <input
            type="file"
            accept=".ai,.eps,.pdf,.png,.jpg,.jpeg,.dst,.pes,.zip"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            className="block w-full text-sm text-zinc-300 file:mr-4 file:rounded-full file:border-0 file:bg-accent-gradient file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
          />
        </Field>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="focus-ring w-full rounded-full bg-accent-gradient px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-gradient-hover disabled:opacity-60 sm:w-auto"
      >
        {loading ? "Sending..." : "Get free quote"}
      </button>
    </form>
  );
}

const inputClass =
  "focus-ring w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-500">
        {label}
      </label>
      {children}
      {error ? <p className="mt-1.5 text-xs text-red-400">{error}</p> : null}
    </div>
  );
}
