"use client";

import { useCallback, useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { cn } from "@/lib/cn";
import { trackFreeTrialSubmit } from "@/lib/analytics-events";
import {
  freeTrialFileFormatOptions,
  freeTrialServiceOptions,
} from "@/lib/content/free-trial";

type FieldErrors = Partial<
  Record<
    "name" | "email" | "company" | "country" | "service" | "fileFormat" | "file" | "notes",
    string
  >
>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ALLOWED_FILE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".pdf", ".ai", ".eps", ".svg", ".zip"];
const UNSUPPORTED_FILE_TYPE_ERROR =
  "Unsupported file type. Please upload PNG, JPG, PDF, AI, EPS, SVG, or ZIP.";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

type UtmFields = Record<(typeof UTM_KEYS)[number], string>;

function emptyUtm(): UtmFields {
  return {
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  };
}

function hasAllowedExtension(filename: string): boolean {
  const lower = filename.toLowerCase();
  return ALLOWED_FILE_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

const inputClass =
  "focus-ring mt-2 w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-zinc-600";

/**
 * Free-trial form — rendered in the server HTML (no Suspense / "Loading form…" gate).
 * UTM values are filled from the URL after mount into hidden fields.
 */
export function FreeTrialForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [service, setService] = useState<string>(freeTrialServiceOptions[0]);
  const [fileFormat, setFileFormat] = useState<string>(freeTrialFileFormatOptions[0]);
  const [notes, setNotes] = useState("");
  const [file, setFile] = useState<File | null>(null);
  /** Honeypot — real users never see this (company is a real field on this form). */
  const [website, setWebsite] = useState("");
  const [utm, setUtm] = useState<UtmFields>(emptyUtm);
  const [dragOver, setDragOver] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [success, setSuccess] = useState<{ referenceId: string } | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const next = emptyUtm();
    for (const key of UTM_KEYS) {
      next[key] = params.get(key)?.trim() ?? "";
    }
    setUtm(next);
  }, []);

  const validate = useCallback((): boolean => {
    const next: FieldErrors = {};
    if (name.trim().length < 2) next.name = "Enter your full name.";
    if (!emailRe.test(email.trim())) next.email = "Enter a valid email address.";
    if (company.trim().length < 2) next.company = "Enter your company name.";
    if (country.trim().length < 2) next.country = "Enter your country.";
    if (!service) next.service = "Select a service.";
    if (!fileFormat) next.fileFormat = "Select a required file format.";
    if (!file) next.file = "Upload your artwork.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }, [name, email, company, country, service, fileFormat, file]);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files?.[0];
    if (!f) return;
    if (!hasAllowedExtension(f.name)) {
      setErrors((prev) => ({ ...prev, file: UNSUPPORTED_FILE_TYPE_ERROR }));
      return;
    }
    setErrors((prev) => ({ ...prev, file: undefined }));
    setFile(f);
  }, []);

  const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (!hasAllowedExtension(f.name)) {
      setErrors((prev) => ({ ...prev, file: UNSUPPORTED_FILE_TYPE_ERROR }));
      e.target.value = "";
      return;
    }
    setErrors((prev) => ({ ...prev, file: undefined }));
    setFile(f);
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(null);

    if (website.trim()) {
      setSuccess({ referenceId: "HMK-OK" });
      return;
    }

    if (!validate()) return;

    setLoading(true);
    try {
      const fd = new FormData();
      fd.set("intent", "free-trial");
      fd.set("name", name.trim());
      fd.set("email", email.trim());
      fd.set("company", company.trim());
      fd.set("country", country.trim());
      fd.set("service", service);
      fd.set("fileFormat", fileFormat);
      fd.set("notes", notes.trim());
      fd.set("instructions", notes.trim());
      fd.set("website", website);
      for (const key of UTM_KEYS) {
        if (utm[key]) fd.set(key, utm[key]);
      }
      if (file) fd.set("file", file);

      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const data = (await res.json()) as { ok?: boolean; referenceId?: string; error?: string };

      if (!res.ok || !data.ok) {
        setErrors({ file: data.error ?? "Something went wrong. Please try again." });
        return;
      }

      // Task 14 conversion — fires GA4 free_trial_submit + Meta Lead when helpers exist.
      trackFreeTrialSubmit({
        ...(utm.utm_source ? { utm_source: utm.utm_source } : {}),
        ...(utm.utm_medium ? { utm_medium: utm.utm_medium } : {}),
      });

      setSuccess({ referenceId: data.referenceId ?? "HMK-OK" });
      setName("");
      setEmail("");
      setCompany("");
      setCountry("");
      setService(freeTrialServiceOptions[0]);
      setFileFormat(freeTrialFileFormatOptions[0]);
      setNotes("");
      setFile(null);
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div
        className="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-8 text-center"
        role="status"
      >
        <Logo variant="light" size="sm" href={null} className="mx-auto h-10 w-auto" />
        <p className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold text-white">
          Free trial request received
        </p>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300">
          Reference:{" "}
          <span className="font-mono font-semibold text-emerald-300">{success.referenceId}</span>
        </p>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          A specialist will review your artwork and reply with next steps for your free trial.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      {/* Honeypot — do not rename without updating /api/upload free-trial path */}
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="free-trial-website">Website</label>
        <input
          type="text"
          id="free-trial-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      {UTM_KEYS.map((key) => (
        <input key={key} type="hidden" name={key} value={utm[key]} readOnly />
      ))}
      <input type="hidden" name="intent" value="free-trial" readOnly />

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input
            className={cn(inputClass, errors.name ? "border-red-500/50" : "border-white/10")}
            name="name"
            placeholder="Jane Cooper"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            required
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            className={cn(inputClass, errors.email ? "border-red-500/50" : "border-white/10")}
            name="email"
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            inputMode="email"
            required
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Company" error={errors.company}>
          <input
            className={cn(inputClass, errors.company ? "border-red-500/50" : "border-white/10")}
            name="company"
            placeholder="Your embroidery shop or brand"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            autoComplete="organization"
            required
          />
        </Field>
        <Field label="Country" error={errors.country}>
          <input
            className={cn(inputClass, errors.country ? "border-red-500/50" : "border-white/10")}
            name="country"
            placeholder="United States"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            autoComplete="country-name"
            required
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Service" error={errors.service}>
          <select
            className={cn(inputClass, errors.service ? "border-red-500/50" : "border-white/10")}
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            {freeTrialServiceOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-zinc-950">
                {opt}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Required file format" error={errors.fileFormat}>
          <select
            className={cn(inputClass, errors.fileFormat ? "border-red-500/50" : "border-white/10")}
            name="fileFormat"
            value={fileFormat}
            onChange={(e) => setFileFormat(e.target.value)}
            required
          >
            {freeTrialFileFormatOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-zinc-950">
                {opt}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Artwork upload" error={errors.file}>
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={onDrop}
          className={cn(
            "focus-ring mt-2 rounded-2xl border border-dashed px-4 py-10 text-center transition",
            dragOver ? "border-accent/60 bg-accent/5" : "border-white/15 bg-white/[0.02]",
            errors.file ? "border-red-500/40" : "",
          )}
        >
          <input
            type="file"
            className="hidden"
            id="free-trial-file"
            name="file"
            onChange={onFileChange}
            accept=".png,.jpg,.jpeg,.pdf,.ai,.eps,.svg,.zip"
            required
          />
          <label htmlFor="free-trial-file" className="cursor-pointer">
            <p className="text-sm font-semibold text-white">
              Drag &amp; drop your file here, or{" "}
              <span className="text-accent underline-offset-4 hover:underline">browse</span>
            </p>
            <p className="mt-2 text-xs text-zinc-500">
              PNG, JPG, PDF, AI, EPS, SVG, ZIP • up to 10MB
            </p>
          </label>
          {file ? (
            <p className="mt-4 text-xs font-mono text-zinc-300">
              Selected: {file.name} ({Math.max(1, Math.round(file.size / 1024))} KB)
            </p>
          ) : null}
        </div>
      </Field>

      <Field label="Notes" error={errors.notes}>
        <textarea
          className={cn(inputClass, "min-h-[120px]", "border-white/10")}
          name="notes"
          placeholder="Garment type, size/placement, thread preferences, deadline, or anything else we should know."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </Field>

      <button
        type="submit"
        disabled={loading}
        className="focus-ring inline-flex w-full items-center justify-center rounded-full bg-accent-gradient px-8 py-3.5 text-base font-semibold text-white transition hover:bg-accent-gradient-hover disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Submitting…" : "Start free trial"}
      </button>
    </form>
  );
}

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
      <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{label}</label>
      {children}
      {error ? <p className="mt-2 text-xs text-red-400">{error}</p> : null}
    </div>
  );
}
