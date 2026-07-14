"use client";

import { motion, useReducedMotion } from "framer-motion";
import { trustBarItems } from "@/lib/content/trust";
import { fadeUp } from "@/lib/motion";

export function TrustBar() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-label="Trust indicators"
      className="border-b border-zinc-200 bg-white text-zinc-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-secondary">
            Trusted Worldwide
          </p>
          <ul className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {trustBarItems.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-2 text-sm font-medium text-zinc-600"
              >
                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M5 12.5L10 17.5L19 7.5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {item.label}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
