"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReviewsData } from "@/lib/content/reviews";
import { GoogleReviews } from "@/components/ui/GoogleReviews";
import { fadeUp, stagger } from "@/lib/motion";

type GoogleReviewsSectionProps = {
  data: ReviewsData;
};

export function GoogleReviewsSection({ data }: GoogleReviewsSectionProps) {
  const reduce = useReducedMotion();

  return (
    <section
      className="border-b border-white/10 bg-background"
      aria-labelledby="google-reviews-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500"
          >
            Google Reviews
          </motion.p>

          <motion.div variants={fadeUp} className="mt-4">
            <GoogleReviews data={data} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
