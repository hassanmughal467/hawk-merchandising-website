"use client";

import { motion, useReducedMotion } from "framer-motion";
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

function Panel({
  label,
  variant = "default",
}: {
  label: string;
  variant?: "default" | "accent";
}) {
  return (
    <div
      className={cn(
        "relative aspect-[4/3] bg-gradient-to-br",
        variant === "accent"
          ? "from-zinc-700 to-zinc-900"
          : "from-zinc-800 to-zinc-950",
      )}
    >
      <span
        className={cn(
          "absolute left-3 top-3 rounded-full bg-black/60 px-2 py-1 text-xs font-semibold uppercase tracking-wide",
          variant === "accent" ? "text-accent" : "text-zinc-300",
        )}
      >
        {label}
      </span>
    </div>
  );
}

function PortfolioTile({ item }: { item: PortfolioItem }) {
  return (
    <motion.article
      variants={fadeUp}
      className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
    >
      {item.layout === "triple" ? (
        <div className="grid grid-cols-3 gap-px bg-white/10">
          <Panel label="Original" />
          <Panel label="Digitized" variant="accent" />
          <Panel label="Stitched" />
        </div>
      ) : item.layout === "before-after" ? (
        <div className="grid grid-cols-2 gap-px bg-white/10">
          <Panel label="Before" />
          <Panel label="After" variant="accent" />
        </div>
      ) : (
        <Panel label={item.subcategory} variant="accent" />
      )}
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
