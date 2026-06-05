"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { fastTurnaround } from "@/lib/content/trust";
import { fadeUp, stagger } from "@/lib/motion";

export function FastTurnaroundSection() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-white/10 bg-background">
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
              {fastTurnaround.headline}
            </motion.h2>
            <motion.div variants={fadeUp} className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Standard</p>
                <p className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold text-accent">
                  {fastTurnaround.standard}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Rush</p>
                <p className="mt-2 text-sm font-medium text-zinc-300">{fastTurnaround.rush}</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8">
              <Link
                href="/upload"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-accent-gradient px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-gradient-hover"
              >
                Upload artwork
              </Link>
            </motion.div>
          </div>

          <ol className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
            {fastTurnaround.steps.map((step) => (
              <motion.li
                key={step.step}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-xs font-semibold text-accent">{step.step}</p>
                <p className="mt-3 font-semibold text-white">{step.title}</p>
                <p className="mt-2 text-sm text-zinc-400">{step.desc}</p>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
