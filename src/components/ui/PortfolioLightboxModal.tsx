"use client";

import Image from "next/image";
import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ConversionLink } from "@/components/analytics/ConversionLink";
import type { PortfolioPreviewItem } from "@/lib/content/homepage";
import { CONVERSION_EVENTS } from "@/lib/analytics-events";
import { site } from "@/lib/site";

type PortfolioLightboxModalProps = {
  item: PortfolioPreviewItem | null;
  onClose: () => void;
};

function buildQuoteHref(item: PortfolioPreviewItem) {
  const params = new URLSearchParams({
    intent: "sample",
    ref: "portfolio",
    project: item.title,
  });
  return `/upload?${params.toString()}`;
}

function buildUploadHref(item: PortfolioPreviewItem) {
  const params = new URLSearchParams({
    ref: "portfolio",
    project: item.title,
  });
  return `/upload?${params.toString()}`;
}

function buildWhatsAppHref(item: PortfolioPreviewItem) {
  const message = `Hi ${site.name} — I'd like a quote for work similar to "${item.title}" (${item.category}).`;
  return `https://wa.me/${site.whatsappE164}?text=${encodeURIComponent(message)}`;
}

export function PortfolioLightboxModal({ item, onClose }: PortfolioLightboxModalProps) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!item) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [item, onClose]);

  const conversionParams = item
    ? { location: "portfolio_lightbox", project: item.title, category: item.category }
    : undefined;

  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          key={item.id}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="portfolio-lightbox-title"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            aria-label="Close portfolio preview"
          />

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-2xl shadow-black/50 lg:max-h-[88vh] lg:flex-row"
          >
            <button
              type="button"
              onClick={onClose}
              className="focus-ring absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-zinc-300 backdrop-blur-sm transition hover:border-white/25 hover:text-white"
              aria-label="Close"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="relative min-h-[240px] flex-1 bg-zinc-950 lg:min-h-0">
              <div className="relative aspect-[4/3] h-full min-h-[240px] w-full lg:absolute lg:inset-0 lg:aspect-auto lg:min-h-0">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-contain p-4 sm:p-6"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
              </div>
            </div>

            <div className="flex w-full flex-col border-t border-white/10 bg-surface-elevated/95 p-6 sm:p-8 lg:max-w-md lg:border-l lg:border-t-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">{item.category}</p>
              <h2
                id="portfolio-lightbox-title"
                className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white"
              >
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.description}</p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm font-semibold text-white">Want results like this?</p>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
                  Get a free quote or upload your artwork — we&apos;ll match the quality and turnaround
                  your clients expect.
                </p>

                <div className="mt-5 flex flex-col gap-3">
                  <ConversionLink
                    href={buildQuoteHref(item)}
                    event={CONVERSION_EVENTS.QUOTE_BUTTON_CLICK}
                    eventParams={conversionParams}
                    onClick={onClose}
                    className="focus-ring inline-flex items-center justify-center rounded-full bg-accent-gradient px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-gradient-hover"
                  >
                    Get Free Quote
                  </ConversionLink>
                  <ConversionLink
                    href={buildUploadHref(item)}
                    event={CONVERSION_EVENTS.UPLOAD_ARTWORK_CLICK}
                    eventParams={conversionParams}
                    onClick={onClose}
                    className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
                  >
                    Upload Artwork
                  </ConversionLink>
                  <ConversionLink
                    href={buildWhatsAppHref(item)}
                    event={CONVERSION_EVENTS.WHATSAPP_CLICK}
                    eventParams={conversionParams}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-6 py-3.5 text-sm font-semibold text-[#25D366] transition hover:bg-[#25D366]/20"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
                      <path d="M16.003 3C9.374 3 4 8.373 4 15c0 2.344.664 4.53 1.813 6.383L4.07 28.092l6.908-1.698A11.86 11.86 0 0 0 16.003 27C22.627 27 28 21.627 28 15S22.627 3 16.003 3zm0 21.2c-1.928 0-3.73-.506-5.291-1.387l-.38-.226-3.95.972.998-3.84-.248-.396A8.8 8.8 0 0 1 7.2 15c0-4.855 3.947-8.8 8.803-8.8 4.855 0 8.797 3.945 8.797 8.8 0 4.855-3.942 8.8-8.797 8.8z" />
                    </svg>
                    Chat on WhatsApp
                  </ConversionLink>
                </div>
              </div>

              <p className="mt-4 text-xs text-zinc-600">
                Free quote · 3–4 hour standard turnaround · Rush available
              </p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
