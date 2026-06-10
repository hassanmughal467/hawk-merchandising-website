"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { QuoteForm } from "@/components/forms/QuoteForm";

const STORAGE_KEY = "hawk-exit-intent-dismissed";

function isDismissed(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function ExitIntentModal() {
  const [open, setOpen] = useState(false);
  const dismissedRef = useRef(isDismissed());

  const dismiss = useCallback(() => {
    dismissedRef.current = true;
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (dismissedRef.current) return;

    const onMouseLeave = (e: MouseEvent) => {
      if (dismissedRef.current || isDismissed()) return;
      if (e.clientY <= 0 && window.innerWidth >= 768) {
        setOpen(true);
      }
    };

    document.addEventListener("mouseleave", onMouseLeave);
    return () => document.removeEventListener("mouseleave", onMouseLeave);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
    >
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-white/10 bg-surface p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={dismiss}
          className="focus-ring absolute right-4 top-4 rounded-lg p-2 text-zinc-400 hover:text-white"
          aria-label="Close"
        >
          ✕
        </button>

        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Before you go</p>
        <h2
          id="exit-intent-title"
          className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold text-white"
        >
          Get a free quote in minutes
        </h2>
        <p className="mt-3 text-sm text-zinc-400">
          Upload your artwork or send a quick brief—24-hour standard turnaround, same-day rush available.
        </p>

        <button
          type="button"
          onClick={dismiss}
          className="focus-ring mt-4 w-full rounded-full border border-white/15 py-2.5 text-sm font-semibold text-zinc-300 hover:border-white/25 hover:text-white"
        >
          Continue browsing
        </button>

        <div className="mt-6">
          <QuoteForm source="exit-intent" compact />
        </div>

        <div className="mt-4">
          <Link
            href="/upload?intent=sample"
            onClick={dismiss}
            className="focus-ring block w-full rounded-full bg-accent-gradient py-2.5 text-center text-sm font-semibold text-white"
          >
            Get free sample
          </Link>
        </div>
      </div>
    </div>
  );
}
