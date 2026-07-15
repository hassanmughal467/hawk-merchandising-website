"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PlaceholderVisual } from "@/components/ui/PlaceholderVisual";
import { PortfolioImage } from "@/components/ui/PortfolioImage";
import { beforeAfterShowcase } from "@/lib/content/homepage";
import { fadeUp, stagger } from "@/lib/motion";

function ShowcasePanel({
  panel,
  alt,
}: {
  panel: { type?: string; label: string; imageSrc?: string };
  alt: string;
}) {
  if (panel.imageSrc) {
    return (
      <PortfolioImage
        src={panel.imageSrc}
        alt={alt}
        label={panel.label}
        className="h-full"
      />
    );
  }

  return (
    <PlaceholderVisual
      type={panel.type as Parameters<typeof PlaceholderVisual>[0]["type"]}
      label={panel.label}
      className="h-full"
    />
  );
}

export function BeforeAfterSection() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            See the Difference Professional Digitizing Makes
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-zinc-400">
            Real-world transformations from artwork to production-ready embroidery, vector art, and
            custom patches.
          </motion.p>
        </motion.div>

        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {beforeAfterShowcase.map((card) => (
            <motion.article
              key={card.id}
              variants={fadeUp}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-accent/30 hover:bg-white/[0.05]"
            >
              <div className="relative grid grid-cols-[1fr_auto_1fr] items-stretch gap-0">
                <div className="aspect-[4/3]">
                  <ShowcasePanel panel={card.before} alt={`${card.title} — before`} />
                </div>
                <div className="flex items-center justify-center bg-white/5 px-2">
                  <span className="text-lg font-bold text-accent" aria-hidden>
                    →
                  </span>
                </div>
                <div className="aspect-[4/3]">
                  <ShowcasePanel panel={card.after} alt={`${card.title} — after`} />
                </div>
              </div>
              <div className="border-t border-white/10 p-4">
                <h3 className="text-sm font-semibold text-white">{card.title}</h3>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
