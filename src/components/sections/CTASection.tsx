"use client";

import { ConversionLink } from "@/components/analytics/ConversionLink";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";
import { fadeUp } from "@/lib/motion";
import { CONVERSION_EVENTS } from "@/lib/analytics-events";

export function CTASection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-brand-dark-gradient">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(9,198,249,0.2),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-white/10 bg-brand-section-gradient p-8 shadow-lg shadow-accent-secondary/20 backdrop-blur sm:p-10 lg:flex-row lg:items-center"
        >
          <div className="max-w-xl">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Upload Your Artwork &amp; Get a Free Quote Today
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
              Tell us your garment, placement, and deadline — we&apos;ll return a quote and a plan
              that fits your production schedule. Same-day rush available.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <ConversionLink
              href="/upload?intent=sample"
              event={CONVERSION_EVENTS.QUOTE_BUTTON_CLICK}
              eventParams={{ location: "cta_section" }}
              className="focus-ring inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-accent-secondary transition hover:bg-white/90"
            >
              Get free quote
            </ConversionLink>
            <ConversionLink
              href="/upload"
              event={CONVERSION_EVENTS.UPLOAD_ARTWORK_CLICK}
              eventParams={{ location: "cta_section" }}
              className="focus-ring inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/20"
            >
              Upload artwork
            </ConversionLink>
            <ConversionLink
              href={site.clientPortal.url}
              event={CONVERSION_EVENTS.LOGIN}
              eventParams={{ location: "cta_section" }}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/20"
            >
              Client login
            </ConversionLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
