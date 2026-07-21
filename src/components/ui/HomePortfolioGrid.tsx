"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PortfolioImage } from "@/components/ui/PortfolioImage";
import { PortfolioLightboxModal } from "@/components/ui/PortfolioLightboxModal";
import { portfolioPreviewItems, type PortfolioPreviewItem } from "@/lib/content/homepage";
import { fadeUp, stagger } from "@/lib/motion";

/** CMS-ready portfolio preview grid for the homepage */
export function HomePortfolioGrid() {
  const reduce = useReducedMotion();
  const [selectedItem, setSelectedItem] = useState<PortfolioPreviewItem | null>(null);

  return (
    <>
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
            <button
              type="button"
              onClick={() => setSelectedItem(item)}
              className="focus-ring block w-full cursor-pointer text-left"
              aria-label={`View ${item.title} — ${item.category}`}
            >
              <div className="relative">
                <PortfolioImage
                  src={item.imageSrc}
                  alt={item.title}
                  label={item.category}
                  className="aspect-[4/3] transition duration-300 group-hover:scale-[1.02]"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/35 group-hover:opacity-100">
                  <span className="rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                    View project
                  </span>
                </span>
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">{item.category}</p>
                <h3 className="mt-1 text-sm font-semibold text-white">{item.title}</h3>
                <p className="mt-1.5 line-clamp-2 text-xs text-zinc-500">{item.description}</p>
              </div>
            </button>
          </motion.article>
        ))}
      </motion.div>

      <PortfolioLightboxModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  );
}
