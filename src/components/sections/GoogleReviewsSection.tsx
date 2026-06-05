"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { googleReviews, googleReviewsSummary } from "@/lib/content/testimonials";
import { fadeUp, stagger } from "@/lib/motion";
import { cn } from "@/lib/cn";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "text-lg",
            i < Math.floor(rating) ? "text-amber-400" : "text-zinc-600",
          )}
          aria-hidden
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function GoogleReviewsSection() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-white/10 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between"
        >
          <div className="max-w-md">
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Google Reviews
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Rated by production teams worldwide
            </motion.h2>
            <motion.div variants={fadeUp} className="mt-6 flex items-center gap-4">
              <StarRating rating={googleReviewsSummary.rating} />
              <p className="text-sm text-zinc-400">
                <span className="font-semibold text-white">{googleReviewsSummary.rating}</span> ·{" "}
                {googleReviewsSummary.count}+ reviews
              </p>
            </motion.div>
            <motion.p variants={fadeUp} className="mt-4 text-sm leading-relaxed text-zinc-500">
              Replace sample reviews with your live Google Business Profile widget when ready.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-6">
              <Link
                href={googleReviewsSummary.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring text-sm font-semibold text-accent hover:text-accent-hover"
              >
                View on Google →
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={stagger}
            className="grid flex-1 gap-3 sm:grid-cols-2"
          >
            {googleReviews.map((review) => (
              <motion.div
                key={review.author}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-white">{review.author}</p>
                  <span className="text-xs text-amber-400" aria-hidden>
                    {"★".repeat(review.rating)}
                  </span>
                </div>
                <p className="mt-1 text-[10px] uppercase tracking-wide text-zinc-600">{review.date}</p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{review.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
