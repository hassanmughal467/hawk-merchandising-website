"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { HomePortfolioGrid } from "@/components/ui/HomePortfolioGrid";
import { fadeUp } from "@/lib/motion";

export function PortfolioSection() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-white/10 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div className="max-w-2xl">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
              Recent Work
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              A curated selection of embroidery digitizing, cap work, patches, vector art, and
              promotional branding — the quality your clients expect.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
          >
            View full portfolio
          </Link>
        </motion.div>

        <div className="mt-12">
          <HomePortfolioGrid />
        </div>
      </div>
    </section>
  );
}
