"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  portfolioVideos,
  videoCategoryLabels,
  type PortfolioVideo,
} from "@/lib/content/videos";
import { fadeUp, stagger } from "@/lib/motion";

function VideoCard({ video }: { video: PortfolioVideo }) {
  return (
    <motion.article
      variants={fadeUp}
      className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
    >
      <div className="relative aspect-video bg-gradient-to-br from-zinc-800 to-zinc-950">
        {video.embedUrl ? (
          <iframe
            src={video.embedUrl}
            title={video.title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5 text-2xl text-accent">
              ▶
            </span>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Video coming soon
            </p>
            {video.duration ? (
              <span className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-1 text-xs text-zinc-300">
                {video.duration}
              </span>
            ) : null}
          </div>
        )}
      </div>
      <div className="p-5">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">
          {videoCategoryLabels[video.category]}
        </p>
        <h3 className="mt-2 font-[family-name:var(--font-display)] text-base font-semibold text-white">
          {video.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{video.description}</p>
      </div>
    </motion.article>
  );
}

export function VideoGrid() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className="grid gap-6 md:grid-cols-2"
    >
      {portfolioVideos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </motion.div>
  );
}
