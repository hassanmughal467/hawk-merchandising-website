"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { fadeUp, stagger } from "@/lib/motion";

type HomepageQuoteSectionProps = {
  id?: string;
};

export function HomepageQuoteSection({ id = "quote" }: HomepageQuoteSectionProps) {
  const reduce = useReducedMotion();

  return (
    <section id={id} className="border-b border-white/10 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid gap-12 lg:grid-cols-12 lg:items-start"
        >
          <div className="lg:col-span-5">
            <motion.h2
              variants={fadeUp}
              className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Get a free quote today
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-zinc-400">
              Share your artwork, garment type, and deadline—we respond same business day on most requests.
              First-time clients can request a free sample digitizing.
            </motion.p>
            <motion.ul variants={fadeUp} className="mt-6 space-y-3 text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <span className="text-accent">✓</span> 24-hour standard turnaround
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">✓</span> Same-day rush available
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">✓</span> Unlimited reasonable revisions
              </li>
            </motion.ul>
            <motion.div variants={fadeUp} className="mt-8">
              <Link
                href="/upload"
                className="focus-ring text-sm font-semibold text-accent hover:text-accent-hover"
              >
                Prefer to upload files directly? Go to upload →
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:col-span-7"
          >
            <QuoteForm source="homepage" showFileUpload />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
