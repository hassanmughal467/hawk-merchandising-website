"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { whyChooseHawkCards, type WhyChooseIcon } from "@/lib/content/homepage";
import { fadeUp, stagger } from "@/lib/motion";

const featureIcons: Record<WhyChooseIcon, ReactNode> = {
  manager: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 20c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 8.5l1.5 1.5L22 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  portal: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 9h18" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="7" cy="6.5" r="0.75" fill="currentColor" />
      <circle cx="9.5" cy="6.5" r="0.75" fill="currentColor" />
      <rect x="6" y="12" width="5" height="3" rx="0.5" stroke="currentColor" strokeWidth="1" />
      <path d="M14 13h5M14 16h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  lightning: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M13 2L4 14h7l-1 8 10-14h-7l0-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  patch: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 4h12l2 4v12l-2 4H6l-2-4V8l2-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 10h6M9 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  globe: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  shield: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  refresh: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 12a8 8 0 0 1 13.5-5.7L20 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 5v3h-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 12a8 8 0 0 1-13.5 5.7L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 19v-3h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  layers: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M3 12l9 5 9-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M3 17l9 5 9-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  headset: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="2" y="14" width="4" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="18" y="14" width="4" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 20h3a3 3 0 0 0 3-3v-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

export function WhyChooseSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-zinc-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-accent-secondary/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-accent"
          >
            Why Choose Hawk
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Why Global Brands Choose Hawk
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-zinc-400">
            More than a digitizing company. We help embroidery shops, apparel brands, promotional
            product companies and distributors scale with reliable production support and
            world-class service.
          </motion.p>
        </motion.div>

        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyChooseHawkCards.map((card) => (
            <motion.div
              key={card.id}
              variants={fadeUp}
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-black/20 backdrop-blur-xl transition duration-300 hover:border-accent/30 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3 text-accent ring-1 ring-accent/20 transition group-hover:bg-accent/15 group-hover:ring-accent/40">
                {featureIcons[card.icon]}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                {card.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mt-16 rounded-3xl border border-white/10 bg-brand-section-gradient p-8 text-center shadow-2xl shadow-accent-secondary/20 sm:p-10"
        >
          <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Ready to Work With a Reliable Production Partner?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
            Upload your artwork today and discover why businesses worldwide trust Hawk for
            digitizing, vector art, patches, and promotional products.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/upload?intent=sample"
              className="focus-ring inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-accent-secondary transition hover:bg-white/90 sm:w-auto"
            >
              Get Free Quote
            </Link>
            <Link
              href="/upload"
              className="focus-ring inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/20 sm:w-auto"
            >
              Upload Artwork
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
