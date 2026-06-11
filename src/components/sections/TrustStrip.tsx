"use client";

import { motion, useReducedMotion } from "framer-motion";
import { trustStripItems } from "@/lib/content/trust-strip";
import { fadeUp } from "@/lib/motion";

type TrustStripProps = {
  variant?: "light" | "dark";
};

export function TrustStrip({ variant = "dark" }: TrustStripProps) {
  const reduce = useReducedMotion();
  const isLight = variant === "light";

  return (
    <section
      aria-label="Trust indicators"
      className={
        isLight
          ? "border-b border-zinc-200 bg-white text-zinc-950"
          : "border-b border-white/10 bg-zinc-950 text-white"
      }
    >
      <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
        <motion.ul
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          {trustStripItems.map((item) => (
            <li
              key={item.label}
              className={`flex items-center gap-2 text-xs font-medium sm:text-sm ${
                isLight ? "text-zinc-600" : "text-zinc-300"
              }`}
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
        </motion.ul>
      </div>
    </section>
  );
}
