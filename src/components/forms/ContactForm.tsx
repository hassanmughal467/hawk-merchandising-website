"use client";

import { QuoteForm } from "@/components/forms/QuoteForm";

type ContactFormProps = {
  showFileUpload?: boolean;
};

export function ContactForm({ showFileUpload = true }: ContactFormProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
        Send us a message
      </h2>
      <p className="mt-2 text-sm text-zinc-400">
        Include your deadline and garment details—we respond same business day on most requests.
      </p>
      <div className="mt-6">
        <QuoteForm source="contact" showFileUpload={showFileUpload} />
      </div>
    </div>
  );
}
