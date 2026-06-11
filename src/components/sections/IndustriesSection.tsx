"use client";

import { motion, useReducedMotion } from "framer-motion";
import { industriesServed } from "@/lib/content/trust";
import { fadeUp, stagger } from "@/lib/motion";

const industryIcons: Record<string, React.ReactNode> = {
  "Embroidery Shops": (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  "Apparel Brands": (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M8 4l-2 4v12h12V8l-2-4H8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8 4h8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  "Uniform Manufacturers": (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="6" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 6V4h8v2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 10v6M9 13h6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  "Promotional Product Companies": (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 8h16v10H4z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 8V6h8v2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 12v2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  "Sports Teams": (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 3c2 3 2 15 0 18M3 12c3-2 15-2 18 0" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  "Schools & Universities": (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3L2 8l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6 11v5c0 2 3 4 6 4s6-2 6-4v-5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  "Corporate Merchandise": (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 7V5h8v2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 11h18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  "Government Contractors": (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 20V8l8-5 8 5v12H4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="9" y="13" width="6" height="7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
};

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
            Industries We Serve
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-zinc-400">
            From single-head shops to national programs — same production discipline on every file.
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
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-accent/30 hover:bg-white/[0.05]"
            >
              <div className="mb-3 inline-flex rounded-xl bg-accent/10 p-2.5 text-accent transition group-hover:bg-accent/20">
                {industryIcons[industry.name]}
              </div>
              <h3 className="font-semibold text-white">{industry.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{industry.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
