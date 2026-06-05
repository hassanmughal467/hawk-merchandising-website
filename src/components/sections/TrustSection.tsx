"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

const stats = [
  { label: "Designs delivered", value: "5000+" },
  { label: "Turnaround", value: "24 hours" },
  { label: "Reach", value: "Global clients" },
];

const logos = ["Atlas", "Northline", "Meridian", "Vertex", "Ironwood", "Harbor"];

export function TrustSection() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-white/10 bg-brand-light-gradient text-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid gap-10 lg:grid-cols-12 lg:items-center"
        >
          <div className="lg:col-span-5">
            <motion.h2
              variants={fadeUp}
              className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Trusted by shops that ship daily
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-zinc-600">
              From boutique embroidery houses to national apparel programs—our files are built
              for real machines, real garments, and real deadlines.
            </motion.p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <p className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight">
                  {s.value}
                </p>
                <p className="mt-2 text-sm font-medium text-zinc-600">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mt-12"
        >
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Brands &amp; partners
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {logos.map((name) => (
              <div
                key={name}
                className="flex h-14 items-center justify-center rounded-xl border border-zinc-200 bg-white text-xs font-semibold tracking-wide text-zinc-400"
              >
                {name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
