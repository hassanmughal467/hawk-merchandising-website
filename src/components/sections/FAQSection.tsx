"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { FAQItem } from "@/lib/content/faq";
import { cn } from "@/lib/cn";
import { fadeUp, stagger } from "@/lib/motion";

type FAQSectionProps = {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  variant?: "dark" | "light";
  showViewAll?: boolean;
  id?: string;
};

export function FAQSection({
  items,
  title = "Frequently asked questions",
  subtitle = "Clear answers on turnaround, formats, pricing, and production workflows.",
  variant = "dark",
  showViewAll = false,
  id = "faq",
}: FAQSectionProps) {
  const reduce = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLight = variant === "light";

  return (
    <section
      id={id}
      className={
        isLight
          ? "border-b border-zinc-200 bg-brand-light-gradient text-zinc-950"
          : "border-b border-white/10 bg-background"
      }
    >
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="text-center font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {title}
          </motion.h2>
          {subtitle ? (
            <motion.p
              variants={fadeUp}
              className={`mt-4 text-center text-base leading-relaxed ${isLight ? "text-zinc-600" : "text-zinc-400"}`}
            >
              {subtitle}
            </motion.p>
          ) : null}

          <div className="mt-10 space-y-3">
            {items.map((item, index) => {
              const open = openIndex === index;
              return (
                <motion.div
                  key={item.question}
                  variants={fadeUp}
                  className={
                    isLight
                      ? "rounded-2xl border border-zinc-200 bg-white shadow-sm"
                      : "rounded-2xl border border-white/10 bg-white/[0.03]"
                  }
                >
                  <button
                    type="button"
                    className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? null : index)}
                  >
                    <span className="font-semibold">{item.question}</span>
                    <span
                      className={cn(
                        "shrink-0 text-accent transition-transform",
                        open && "rotate-45",
                      )}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  {open ? (
                    <div
                      className={cn(
                        "border-t px-5 py-4 text-sm leading-relaxed",
                        isLight
                          ? "border-zinc-200/80 text-zinc-600"
                          : "border-white/10 text-zinc-400",
                      )}
                    >
                      {item.answer}
                    </div>
                  ) : null}
                </motion.div>
              );
            })}
          </div>

          {showViewAll ? (
            <motion.div variants={fadeUp} className="mt-8 text-center">
              <Link
                href="/contact#faq"
                className="focus-ring text-sm font-semibold text-accent hover:text-accent-hover"
              >
                View all FAQs →
              </Link>
            </motion.div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
