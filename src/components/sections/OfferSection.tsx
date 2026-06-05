"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

const bullets = [
  {
    title: "First design FREE",
    body: "Try our quality on your logo—no guesswork, no awkward first invoice.",
  },
  {
    title: "Unlimited revisions",
    body: "We refine until it runs clean—within the scope of the approved artwork.",
  },
  {
    title: "Fast delivery",
    body: "Most jobs move in 12–24 hours with clear updates from our team.",
  },
];

export function OfferSection() {
  const reduce = useReducedMotion();

  return (
    <section id="offer" className="border-b border-white/10 bg-brand-light-gradient text-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <motion.div
            initial={reduce ? false : "hidden"}
            whileInView={reduce ? undefined : "visible"}
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="lg:col-span-5"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500"
            >
              Limited-time onboarding
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Start with confidence
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-zinc-600">
              We built Hawk Merchandising for teams that need predictable outcomes: accurate files,
              fast communication, and pricing that makes sense at volume.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <Link
                href="/upload"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-accent-gradient px-7 py-3.5 text-base font-semibold text-white transition hover:bg-accent-gradient-hover"
              >
                Claim your free sample
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduce ? false : "hidden"}
            whileInView={reduce ? undefined : "visible"}
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid gap-4 lg:col-span-7"
          >
            {bullets.map((b) => (
              <motion.div
                key={b.title}
                variants={fadeUp}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <p className="font-[family-name:var(--font-display)] text-lg font-semibold">
                  {b.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{b.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
