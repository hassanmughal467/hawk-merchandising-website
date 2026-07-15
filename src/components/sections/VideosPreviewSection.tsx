"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { processVideos } from "@/lib/content/homepage";
import { fadeUp, stagger } from "@/lib/motion";

export function VideosPreviewSection() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
            Watch Our Process
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            See how we digitize artwork, produce custom patches, and support clients worldwide —
            video builds trust faster than stills alone.
          </p>
        </motion.div>

        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-12 grid gap-5 md:grid-cols-3"
        >
          {processVideos.map((video) => (
            <motion.div
              key={video.id}
              variants={fadeUp}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-accent/25"
            >
              <div className="relative aspect-video bg-gradient-to-br from-zinc-800 to-zinc-950">
                {"src" in video && video.src ? (
                  <video
                    src={video.src}
                    controls
                    preload="metadata"
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/20 text-accent backdrop-blur-sm transition group-hover:scale-110 group-hover:bg-accent/30">
                      <svg className="ml-0.5 h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
                <span className="pointer-events-none absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-1 text-xs text-zinc-300">
                  {video.duration}
                </span>
              </div>
              <div className="p-5">
                <p className="font-[family-name:var(--font-display)] text-base font-semibold text-white">
                  {video.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mt-8 text-center"
        >
          <Link
            href="/portfolio/videos"
            className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
          >
            View all videos
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
