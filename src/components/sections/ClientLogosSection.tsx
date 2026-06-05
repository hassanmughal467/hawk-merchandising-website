"use client";

import { motion, useReducedMotion } from "framer-motion";
import { clientLogos } from "@/lib/content/trust";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/cn";

export function ClientLogosSection() {
  const reduce = useReducedMotion();
  const permitted = clientLogos.filter((l) => l.permitted);

  return (
    <section className="border-b border-white/10 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Clients &amp; partners
          </p>
          <p className="mx-auto mt-3 max-w-xl text-center text-xs text-zinc-600">
            Shown with permission. Add logo images to{" "}
            <code className="text-zinc-500">/public/images/clients/</code> when brand guidelines allow.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {permitted.map((logo) => (
              <div
                key={logo.name}
                className={cn(
                  "flex h-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-2 text-center text-[10px] font-semibold uppercase tracking-wide text-zinc-400",
                )}
              >
                {logo.name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
