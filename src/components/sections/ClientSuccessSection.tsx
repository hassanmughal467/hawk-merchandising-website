"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { clientSuccessStories } from "@/lib/content/trust";
import { fadeUp, stagger } from "@/lib/motion";

export function ClientSuccessSection() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-white/10 bg-brand-light-gradient text-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Client success stories
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-zinc-600">
            Real production outcomes from embroidery shops, uniform programs, and promotional distributors.
          </motion.p>
        </motion.div>

        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-12 grid gap-6 lg:grid-cols-3"
        >
          {clientSuccessStories.map((story) => (
            <motion.article
              key={story.id}
              variants={fadeUp}
              className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-secondary">
                {story.industry}
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-semibold">
                {story.headline}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">{story.summary}</p>
              <ul className="mt-4 space-y-2">
                {story.metrics.map((metric) => (
                  <li key={metric} className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    {metric}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-zinc-500">
                Service: {story.service}
                {!story.ready ? " · Full case study coming soon" : null}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="focus-ring inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-400"
          >
            View portfolio work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
