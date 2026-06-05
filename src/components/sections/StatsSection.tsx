"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { siteStatistics } from "@/lib/content/trust";
import { fadeUp, stagger } from "@/lib/motion";

function AnimatedCounter({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix: string;
  active: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!active) return;
    if (reduce) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, reduce, value]);

  return (
    <span>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="border-b border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {siteStatistics.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
            >
              <p className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-accent">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} active={inView} />
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
