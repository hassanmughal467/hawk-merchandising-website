"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { clientPortalBenefits } from "@/lib/content/portal";
import { site } from "@/lib/site";
import { fadeUp, stagger } from "@/lib/motion";

type PortalPromoSectionProps = {
  variant?: "premium" | "compact";
};

export function PortalPromoSection({ variant = "premium" }: PortalPromoSectionProps) {
  const reduce = useReducedMotion();

  if (variant === "compact") {
    return (
      <section className="border-b border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">Client portal</p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-white">
                Track orders, download files, and manage projects online
              </p>
            </div>
            <a
              href={site.clientPortal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring shrink-0 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
            >
              {site.clientPortal.label}
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-white/10 bg-brand-section-gradient text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid gap-12 lg:grid-cols-12 lg:items-center"
        >
          <div className="lg:col-span-5">
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-white/80">
              Client portal
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Your production hub—orders, files, and invoices in one place
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-white/85">
              Existing clients get dedicated portal access to track active jobs, download production files,
              review invoices, and manage recurring programs without email back-and-forth.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.clientPortal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-accent-secondary transition hover:bg-white/90"
              >
                {site.clientPortal.label}
              </a>
              <Link
                href="/contact"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Request portal access
              </Link>
            </motion.div>
          </div>

          <motion.ul
            variants={stagger}
            className="grid gap-4 sm:grid-cols-2 lg:col-span-7"
          >
            {clientPortalBenefits.map((benefit) => (
              <motion.li
                key={benefit.title}
                variants={fadeUp}
                className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm"
              >
                <h3 className="font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85">{benefit.body}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
