"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

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
          className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-white/10 bg-brand-section-gradient p-8 shadow-lg shadow-accent-secondary/20 backdrop-blur sm:flex-row sm:items-center sm:p-10"
        >
          <div className="max-w-xl">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
              Upload your design and get started today
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Tell us your garment, placement, and deadline—we’ll return a quote and a plan that fits
              your production schedule.
            </p>
          </div>
          <Link
            href="/upload"
            className="focus-ring inline-flex w-full shrink-0 items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-accent-secondary transition hover:bg-white/90 sm:w-auto"
          >
            Start upload
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
