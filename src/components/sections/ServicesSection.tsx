"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { fadeUp, stagger } from "@/lib/motion";
import { services } from "@/lib/site";

export function ServicesSection() {
  const reduce = useReducedMotion();

  return (
    <section id="services" className="border-b border-white/10 bg-background">
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
            Services built for production
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-zinc-400">
            Everything you need to move from artwork to stitch-ready files—without surprises at the machine.
          </motion.p>
        </motion.div>

        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.div key={s.title} variants={fadeUp}>
              <ServiceCard title={s.title} description={s.description} href={s.href} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
