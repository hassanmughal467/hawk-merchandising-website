"use client";

import { motion, useReducedMotion } from "framer-motion";
import { guaranteePoints } from "@/lib/content/trust";
import { fadeUp, stagger } from "@/lib/motion";

export function GuaranteeSection() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Our production guarantee
          </motion.h2>
          <motion.div
            variants={stagger}
            className="mt-10 grid gap-4 md:grid-cols-3"
          >
            {guaranteePoints.map((point) => (
              <motion.div
                key={point.title}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="font-semibold text-white">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{point.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
