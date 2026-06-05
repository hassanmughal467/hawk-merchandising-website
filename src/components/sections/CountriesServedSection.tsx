"use client";

import { motion, useReducedMotion } from "framer-motion";
import { countriesServed } from "@/lib/content/trust";
import { fadeUp, stagger } from "@/lib/motion";

type CountriesServedSectionProps = {
  variant?: "dark" | "light";
  showHeading?: boolean;
};

export function CountriesServedSection({
  variant = "dark",
  showHeading = true,
}: CountriesServedSectionProps) {
  const reduce = useReducedMotion();
  const isLight = variant === "light";

  return (
    <section
      className={
        isLight
          ? "border-b border-zinc-200 bg-brand-light-gradient text-zinc-950"
          : "border-b border-white/10 bg-background"
      }
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {showHeading ? (
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
              Countries we serve
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className={`mt-4 text-base leading-relaxed ${isLight ? "text-zinc-600" : "text-zinc-400"}`}
            >
              US and UK contact lines, WhatsApp support, and client portal access for partners worldwide.
            </motion.p>
          </motion.div>
        ) : null}

        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${showHeading ? "mt-12" : ""}`}
        >
          {countriesServed.map((country) => (
            <motion.div
              key={country.name}
              variants={fadeUp}
              className={
                isLight
                  ? "rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
                  : "rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              }
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden>
                  {country.flag}
                </span>
                <h3 className={`font-semibold ${isLight ? "text-zinc-950" : "text-white"}`}>
                  {country.name}
                </h3>
              </div>
              <p className={`mt-2 text-sm ${isLight ? "text-zinc-600" : "text-zinc-400"}`}>
                {country.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
