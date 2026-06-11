"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SewOutImage } from "@/components/ui/SewOutImage";
import { machineSewOutServiceBlock } from "@/lib/content/sew-out";
import { fadeUp } from "@/lib/motion";

export function MachineSewOutServiceBlock() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="grid gap-8 lg:grid-cols-12 lg:items-center"
        >
          <div className="lg:col-span-5">
            <SewOutImage
              src={machineSewOutServiceBlock.image}
              alt={machineSewOutServiceBlock.imageAlt}
              label="Machine Sew-Out Sample"
              showApprovedBadge
            />
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {machineSewOutServiceBlock.heading}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
              {machineSewOutServiceBlock.text}
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {["Stitch Quality Verified", "Density Checked", "Production Ready", "Optional on Request"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-zinc-300">
                    <span className="text-accent">✓</span>
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
