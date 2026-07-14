"use client";

import { ConversionLink } from "@/components/analytics/ConversionLink";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { CONVERSION_EVENTS } from "@/lib/analytics-events";

type MidPageCTASectionProps = {
  variant?: "dark" | "gradient";
};

export function MidPageCTASection({ variant = "gradient" }: MidPageCTASectionProps) {
  const reduce = useReducedMotion();

  return (
    <section
      className={
        variant === "dark"
          ? "border-b border-white/10 bg-zinc-950"
          : "border-b border-white/10 bg-brand-section-gradient"
      }
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex flex-col items-center gap-6 text-center"
        >
          <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Upload Your Artwork &amp; Get a Free Quote Today
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
            Share your logo, garment type, and deadline — we respond same business day with a clear
            quote and production plan.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ConversionLink
              href="/upload?intent=sample"
              event={CONVERSION_EVENTS.QUOTE_BUTTON_CLICK}
              eventParams={{ location: "mid_page_cta" }}
              className="focus-ring inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-accent-secondary transition hover:bg-white/90"
            >
              Get Free Quote
            </ConversionLink>
            <ConversionLink
              href="/upload"
              event={CONVERSION_EVENTS.UPLOAD_ARTWORK_CLICK}
              eventParams={{ location: "mid_page_cta" }}
              className="focus-ring inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/20"
            >
              Upload Artwork
            </ConversionLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
