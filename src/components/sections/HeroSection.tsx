"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/brand/Logo";
import { site } from "@/lib/site";
import { fadeUp } from "@/lib/motion";

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-brand-dark-gradient">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-accent-secondary/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(9,198,249,0.14),transparent_45%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
        <motion.div
          initial={reduce ? false : "hidden"}
          animate={reduce ? undefined : "visible"}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <Logo variant="full" size="lg" href={null} className="h-16 w-auto sm:h-20" priority />

          <div className="mt-6 flex flex-wrap gap-2">
            {["Same-day options", "24-hour turnaround", "Dedicated account support"].map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent"
              >
                {badge}
              </span>
            ))}
          </div>

          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Fast, Accurate Digitizing &amp; Vector Art for Global Brands
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400 sm:text-xl">
            Get premium embroidery digitizing with 12–24 hour turnaround—hand-tuned files,
            consistent quality, and a team that understands production.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/upload?intent=sample"
              className="focus-ring inline-flex items-center justify-center rounded-full bg-accent-gradient px-7 py-3.5 text-base font-semibold text-white transition hover:bg-accent-gradient-hover"
            >
              Get Free Quote
            </Link>
            <a
              href={site.clientSignup.url}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
            >
              {site.clientSignup.label}
            </a>
            <a
              href={site.clientPortal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-zinc-200 transition hover:border-white/25 hover:bg-white/10"
            >
              {site.clientPortal.label}
            </a>
          </div>

          <dl className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { k: "Turnaround", v: "12–24 hrs" },
              { k: "Formats", v: "DST • PES • EXP + more" },
              { k: "Support", v: "Dedicated accounts" },
            ].map((row) => (
              <div
                key={row.k}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
              >
                <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  {row.k}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-zinc-100">{row.v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
