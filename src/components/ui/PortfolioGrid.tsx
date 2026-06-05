"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

const items = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  title: `Project ${String(i + 1).padStart(2, "0")}`,
}));

export function PortfolioGrid() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {items.map((item) => (
        <motion.article
          key={item.id}
          variants={fadeUp}
          className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
        >
          <div className="grid grid-cols-2 gap-px bg-white/10">
            <div className="relative aspect-[4/3] bg-gradient-to-br from-zinc-800 to-zinc-950">
              <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-zinc-300">
                Before
              </span>
            </div>
            <div className="relative aspect-[4/3] bg-gradient-to-br from-zinc-700 to-zinc-900">
              <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-accent">
                After
              </span>
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm font-semibold text-white">{item.title}</p>
            <p className="mt-1 text-xs text-zinc-500">Digitizing • vector cleanup • production test</p>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}
