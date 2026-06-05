"use client";

import { motion, useReducedMotion } from "framer-motion";
import { industriesServed } from "@/lib/content/trust";
import { fadeUp, stagger } from "@/lib/motion";

export function IndustriesSection() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-white/10 bg-zinc-950">
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
            Industries we serve
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-zinc-400">
            From single-head shops to national programs—same production discipline on every file.
          </motion.p>
        </motion.div>

        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {industriesServed.map((industry) => (
            <motion.div
              key={industry.name}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <h3 className="font-semibold text-white">{industry.name}</h3>
              <p className="mt-2 text-sm text-zinc-400">{industry.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
