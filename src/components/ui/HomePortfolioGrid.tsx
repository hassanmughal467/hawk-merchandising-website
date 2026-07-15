"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PortfolioImage } from "@/components/ui/PortfolioImage";
import { portfolioPreviewItems } from "@/lib/content/homepage";
import { fadeUp, stagger } from "@/lib/motion";

/** CMS-ready portfolio preview grid for the homepage */
export function HomePortfolioGrid() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {portfolioPreviewItems.map((item) => (
        <motion.article
          key={item.id}
          variants={fadeUp}
          className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-accent/25 hover:bg-white/[0.05]"
        >
          <PortfolioImage
            src={item.imageSrc}
            alt={item.title}
            label={item.category}
            className="aspect-[4/3]"
          />
          <div className="p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">{item.category}</p>
            <h3 className="mt-1 text-sm font-semibold text-white">{item.title}</h3>
            <p className="mt-1.5 line-clamp-2 text-xs text-zinc-500">{item.description}</p>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}
