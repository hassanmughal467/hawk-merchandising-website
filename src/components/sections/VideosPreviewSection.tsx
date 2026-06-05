"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { portfolioVideos } from "@/lib/content/videos";
import { fadeUp, stagger } from "@/lib/motion";

export function VideosPreviewSection() {
  const reduce = useReducedMotion();
  const preview = portfolioVideos.slice(0, 3);

  return (
    <section className="border-b border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div className="max-w-2xl">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
              See the work in motion
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              Machine runs, before/after conversions, and patch production—video builds trust faster than stills alone.
            </p>
          </div>
          <Link
            href="/portfolio/videos"
            className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
          >
            All videos
          </Link>
        </motion.div>

        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-12 grid gap-4 md:grid-cols-3"
        >
          {preview.map((video) => (
            <motion.div
              key={video.id}
              variants={fadeUp}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
            >
              <div className="relative aspect-video bg-gradient-to-br from-zinc-800 to-zinc-950">
                <span className="absolute inset-0 flex items-center justify-center text-3xl text-accent">
                  ▶
                </span>
                {video.duration ? (
                  <span className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-1 text-xs text-zinc-300">
                    {video.duration}
                  </span>
                ) : null}
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-white">{video.title}</p>
                <p className="mt-1 line-clamp-2 text-xs text-zinc-500">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
