"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { PlaceholderVisual } from "@/components/ui/PlaceholderVisual";
import { heroSlides } from "@/lib/content/homepage";
import { cn } from "@/lib/cn";

export function HeroImageSlider() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const total = heroSlides.length;

  const goTo = useCallback(
    (index: number) => setActive((index + total) % total),
    [total],
  );

  useEffect(() => {
    if (reduce) return;
    const timer = setInterval(() => goTo(active + 1), 5000);
    return () => clearInterval(timer);
  }, [active, goTo, reduce]);

  const slide = heroSlides[active];

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/40">
        <div className="relative aspect-[4/3] sm:aspect-[5/4]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={reduce ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {slide.layout === "split" ? (
                <div className="grid h-full grid-cols-2 gap-px bg-white/10">
                  {slide.visuals.map((v) => (
                    <PlaceholderVisual key={v.label} type={v.type} label={v.label} className="h-full" />
                  ))}
                </div>
              ) : (
                <PlaceholderVisual type={slide.visuals[0].type} label={slide.visuals[0].label} className="h-full" />
              )}
            </motion.div>
          </AnimatePresence>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 pt-12">
            <p className="text-sm font-semibold text-white">{slide.title}</p>
            <p className="mt-0.5 text-xs text-zinc-300">{slide.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show slide ${i + 1}: ${s.title}`}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              i === active ? "w-8 bg-accent" : "w-2 bg-white/20 hover:bg-white/40",
            )}
          />
        ))}
      </div>
    </div>
  );
}
