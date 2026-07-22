"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { serviceOptions } from "@/lib/site";
import { cn } from "@/lib/cn";
import { trackUploadArtworkSubmit } from "@/lib/analytics-events";

type FieldErrors = Partial<Record<"name" | "email" | "whatsapp" | "service" | "file", string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Keep in sync with the file input's accept attribute below.
const ALLOWED_FILE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".pdf", ".ai", ".eps", ".svg", ".zip"];
const UNSUPPORTED_FILE_TYPE_ERROR = "Unsupported file type. Please upload PNG, JPG, PDF, AI, EPS, SVG, or ZIP.";

function hasAllowedExtension(filename: string): boolean {
  const lower = filename.toLowerCase();
  return ALLOWED_FILE_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

export function UploadForm() {
  const searchParams = useSearchParams();
  const intent = searchParams.get("intent");

  const defaultInstructions = useMemo(() => {
    if (intent === "sample") {
      return "Please treat this as my free sample request. Artwork is attached.";
    }
    return "";
  }, [intent]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [service, setService] = useState<string>(serviceOptions[0]);
  const [instructions, setInstructions] = useState("");

  useEffect(() => {
    setInstructions(defaultInstructions);
  }, [defaultInstructions]);
  const [file, setFile] = useState<File | null>(null);
  const [company, setCompany] = useState(""); // honeypot — real users never see this field
  const [dragOver, setDragOver] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [success, setSuccess] = useState<{ referenceId: string } | null>(null);

  const validate = useCallback((): boolean => {
    const next: FieldErrors = {};

    if (name.trim().length < 2) next.name = "Enter your full name.";
    if (!emailRe.test(email.trim())) next.email = "Enter a valid email address.";
    if (whatsapp.trim().length < 8) next.whatsapp = "Enter a WhatsApp number we can reach you on.";
    if (!service) next.service = "Select a service.";
    if (!file) next.file = "Upload your design file.";

    setErrors(next);
    return Object.keys(next).length === 0;
  }, [name, email, whatsapp, service, file]);

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
      e.target.value = ""; // allow re-selecting the same rejected file to re-trigger validation
      return;
    }

    setErrors((prev) => ({ ...prev, file: undefined }));
    setFile(f);
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(null);

    if (company.trim()) {
      // Honeypot tripped — silently pretend success, no network call.
      setSuccess({ referenceId: "HMK-OK" });
      return;
    }

    if (!validate()) return;

    setLoading(true);
    try {
      const fd = new FormData();
      fd.set("name", name.trim());
      fd.set("email", email.trim());
      fd.set("whatsapp", whatsapp.trim());
      fd.set("service", service);
      fd.set("instructions", instructions.trim());
      fd.set("company", company);
      if (file) fd.set("file", file);

      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const data = (await res.json()) as { ok?: boolean; referenceId?: string; error?: string };

      if (!res.ok || !data.ok) {
        setErrors({ file: data.error ?? "Something went wrong. Please try again." });
        return;
      }

      trackUploadArtworkSubmit();
      setSuccess({ referenceId: data.referenceId ?? "HMK-OK" });
      setName("");
      setEmail("");
      setWhatsapp("");
      setService(serviceOptions[0]);
      setInstructions("");
      setFile(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl">
      {success ? (
        <div
          className="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-8 text-center"
          role="status"
        >
          <Logo variant="light" size="sm" href={null} className="mx-auto h-10 w-auto" />
          <p className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold text-white">
            Received — you’re in the queue
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300">
            Reference:{" "}
            <span className="font-mono font-semibold text-emerald-300">{success.referenceId}</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            A specialist will review your file and reply shortly. If you need to add anything else,
            message us on WhatsApp with your reference ID.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
            <label htmlFor="upload-company">Company</label>
            <input
              type="text"
              id="upload-company"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Name
              </label>
              <input
                className={cn(
                  "focus-ring mt-2 w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-zinc-600",
                  errors.name ? "border-red-500/50" : "border-white/10",
                )}
                placeholder="Jane Cooper"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
              {errors.name ? <p className="mt-2 text-xs text-red-400">{errors.name}</p> : null}
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Email
              </label>
              <input
                className={cn(
                  "focus-ring mt-2 w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-zinc-600",
                  errors.email ? "border-red-500/50" : "border-white/10",
                )}
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                inputMode="email"
              />
              {errors.email ? <p className="mt-2 text-xs text-red-400">{errors.email}</p> : null}
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              WhatsApp number
            </label>
            <input
              className={cn(
                "focus-ring mt-2 w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-zinc-600",
                errors.whatsapp ? "border-red-500/50" : "border-white/10",
              )}
              placeholder="+1 555 010 0199"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              autoComplete="tel"
              inputMode="tel"
            />
            {errors.whatsapp ? <p className="mt-2 text-xs text-red-400">{errors.whatsapp}</p> : null}
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Service
            </label>
            <select
              className={cn(
                "focus-ring mt-2 w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-white",
                errors.service ? "border-red-500/50" : "border-white/10",
              )}
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-zinc-950">
                  {opt}
                </option>
              ))}
            </select>
            {errors.service ? <p className="mt-2 text-xs text-red-400">{errors.service}</p> : null}
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Upload file
            </label>
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
                id="file"
                onChange={onFileChange}
                accept=".png,.jpg,.jpeg,.pdf,.ai,.eps,.svg,.zip"
              />
              <label htmlFor="file" className="cursor-pointer">
                <p className="text-sm font-semibold text-white">
                  Drag &amp; drop your file here, or{" "}
                  <span className="text-accent underline-offset-4 hover:underline">browse</span>
                </p>
                <p className="mt-2 text-xs text-zinc-500">
                  PNG, JPG, PDF, AI, EPS, SVG, ZIP • up to 25MB recommended
                </p>
              </label>
              {file ? (
                <p className="mt-4 text-xs font-mono text-zinc-300">
                  Selected: {file.name} ({Math.max(1, Math.round(file.size / 1024))} KB)
                </p>
              ) : null}
            </div>
            {errors.file ? <p className="mt-2 text-xs text-red-400">{errors.file}</p> : null}
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Instructions
            </label>
            <textarea
              className="focus-ring mt-2 min-h-[120px] w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-zinc-600"
              placeholder="Garment type, size/placement, thread preferences, deadline, and any reference photos."
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="focus-ring inline-flex w-full items-center justify-center rounded-full bg-accent-gradient px-8 py-3.5 text-base font-semibold text-white transition hover:bg-accent-gradient-hover disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Submitting…" : "Submit request"}
          </button>
        </form>
      )}
    </div>
  );
}
