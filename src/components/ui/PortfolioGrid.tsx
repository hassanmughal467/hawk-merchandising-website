"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PortfolioImage } from "@/components/ui/PortfolioImage";
import {
  portfolioItems,
  type PortfolioCategoryId,
  type PortfolioItem,
} from "@/lib/content/portfolio";
import { fadeUp, stagger } from "@/lib/motion";
import { cn } from "@/lib/cn";

type PortfolioGridProps = {
  limit?: number;
  category?: PortfolioCategoryId;
  className?: string;
};

function PortfolioTile({ item }: { item: PortfolioItem }) {
  return (
    <motion.article
      variants={fadeUp}
      className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
    >
      <PortfolioImage
        src={item.imageSrc}
        alt={item.title}
        label={item.subcategory}
        className="aspect-[4/3]"
      />
      <div className="p-4">
        <p className="text-sm font-semibold text-white">{item.title}</p>
        <p className="mt-1 text-xs text-zinc-500">
          {item.subcategory} · {item.description}
        </p>
      </div>
    </motion.article>
  );
}

export function PortfolioGrid({ limit, category = "all", className }: PortfolioGridProps) {
  const reduce = useReducedMotion();

  const filtered =
    category === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === category);

  const items = limit ? filtered.slice(0, limit) : filtered;

  if (items.length === 0) {
    return (
      <p className="text-center text-sm text-zinc-500">
        No portfolio items in this category yet. Check back as we add more examples.
      </p>
    );
  }

  return (
    <motion.div
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}
    >
      {items.map((item) => (
        <PortfolioTile key={item.id} item={item} />
      ))}
    </motion.div>
  );
}
