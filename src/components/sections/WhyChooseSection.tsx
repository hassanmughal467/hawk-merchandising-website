"use client";

import { motion, useReducedMotion } from "framer-motion";
import { whyChooseHawk } from "@/lib/content/trust";
import { fadeUp, stagger } from "@/lib/motion";

export function WhyChooseSection() {
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
            Why choose Hawk Merchandising
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-zinc-600">
            We compete on trust—consistent quality, clear communication, and files your floor can run today.
          </motion.p>
        </motion.div>

        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyChooseHawk.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{item.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
