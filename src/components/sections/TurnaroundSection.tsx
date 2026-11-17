"use client";

import { ConversionLink } from "@/components/analytics/ConversionLink";
import { motion, useReducedMotion } from "framer-motion";
import { defaultTurnaround } from "@/lib/content/service-shared";
import { fadeUp, stagger } from "@/lib/motion";
import { CONVERSION_EVENTS } from "@/lib/analytics-events";

type TurnaroundSectionProps = {
  claim?: string;
  note?: string;
};

export function TurnaroundSection({
  claim = defaultTurnaround.claim,
  note = defaultTurnaround.note,
}: TurnaroundSectionProps) {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid gap-10 lg:grid-cols-12 lg:items-start"
        >
          <div className="lg:col-span-5">
            <motion.h2
              variants={fadeUp}
              className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Turnaround
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-sm leading-relaxed text-zinc-400">
              {note}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <ConversionLink
                href="/upload?intent=sample"
                event={CONVERSION_EVENTS.QUOTE_BUTTON_CLICK}
                eventParams={{ location: "turnaround_section" }}
                className="focus-ring inline-flex items-center justify-center rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-gradient-hover"
              >
                Upload for a quote
              </ConversionLink>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Standard</p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-accent">
                {claim}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
