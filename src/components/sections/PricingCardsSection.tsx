"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SewOutImage } from "@/components/ui/SewOutImage";
import {
  pricingPlans,
  pricingSectionSubtitle,
  pricingSectionTitle,
} from "@/lib/content/pricing";
import { pricingConfidenceBlock } from "@/lib/content/sew-out";
import { fadeUp, stagger } from "@/lib/motion";

type PricingCardsSectionProps = {
  showHeader?: boolean;
  showConfidenceBlock?: boolean;
};

export function PricingCardsSection({
  showHeader = true,
  showConfidenceBlock = true,
}: PricingCardsSectionProps) {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {showHeader ? (
          <motion.div
            initial={reduce ? false : "hidden"}
            whileInView={reduce ? undefined : "visible"}
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              {pricingSectionTitle}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-zinc-400">
              {pricingSectionSubtitle}
            </motion.p>
          </motion.div>
        ) : null}

        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 ${showHeader ? "mt-14" : ""}`}
        >
          {pricingPlans.map((plan) => (
            <motion.article
              key={plan.id}
              variants={fadeUp}
              className={
                plan.featured
                  ? "relative flex flex-col rounded-2xl border-2 border-accent bg-white/[0.04] p-6 shadow-lg shadow-accent/10 xl:col-span-1"
                  : "flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              }
            >
              {plan.featured ? (
                <span className="absolute -top-3 left-6 rounded-full bg-brand-section-gradient px-3 py-1 text-xs font-bold text-white">
                  Most Popular
                </span>
              ) : null}
              <h3 className="font-[family-name:var(--font-display)] text-base font-semibold uppercase tracking-wide text-white">
                {plan.name}
              </h3>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                {plan.priceLabel}
              </p>
              {plan.price ? (
                <p className="mt-1 font-[family-name:var(--font-display)] text-3xl font-semibold text-accent">
                  {plan.price}
                </p>
              ) : null}
              <ul className="mt-6 flex-1 space-y-2.5 text-sm text-zinc-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-accent" aria-hidden>
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className={
                  plan.featured
                    ? "focus-ring mt-8 flex w-full justify-center rounded-full bg-accent-gradient py-3 text-center text-sm font-semibold text-white hover:bg-accent-gradient-hover"
                    : "focus-ring mt-8 flex w-full justify-center rounded-full border border-white/15 py-3 text-center text-sm font-semibold text-white hover:bg-white/5"
                }
              >
                {plan.cta}
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {showConfidenceBlock ? (
          <motion.div
            initial={reduce ? false : "hidden"}
            whileInView={reduce ? undefined : "visible"}
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mx-auto mt-14 overflow-hidden rounded-3xl border border-accent/20 bg-accent/5"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[240px] lg:min-h-[320px]">
                <SewOutImage
                  src={pricingConfidenceBlock.image}
                  alt={pricingConfidenceBlock.imageAlt}
                  label={pricingConfidenceBlock.label}
                  aspectClassName="aspect-[4/3] lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                  showApprovedBadge
                  className="h-full rounded-none"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white sm:text-2xl">
                  {pricingConfidenceBlock.heading}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {pricingConfidenceBlock.text}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {["Quality Tested", "Production Ready"].map((badge) => (
                    <li
                      key={badge}
                      className="inline-flex items-center gap-1 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent"
                    >
                      ✓ {badge}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ) : null}

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-zinc-500">
          Prices shown are starting points. Final quotes depend on stitch complexity, thread changes,
          garment notes, and delivery urgency. Upload your artwork for an accurate estimate.
        </p>
      </div>
    </section>
  );
}
