"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

export function StickyQuoteBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop sticky side bar */}
      <div
        className={cn(
          "pointer-events-none fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 pr-3 transition-opacity duration-300 lg:flex",
          visible ? "opacity-100" : "opacity-0",
        )}
        aria-hidden={!visible}
      >
        <Link
          href="/upload"
          className="focus-ring pointer-events-auto rounded-l-2xl bg-accent-gradient px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/30 transition hover:bg-accent-gradient-hover [writing-mode:vertical-rl]"
        >
          Get Free Quote
        </Link>
        <a
          href={site.clientSignup.url}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring pointer-events-auto rounded-l-2xl border border-white/15 bg-surface/95 px-4 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur-xl [writing-mode:vertical-rl]"
        >
          {site.clientSignup.label}
        </a>
        <a
          href={site.clientPortal.url}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring pointer-events-auto rounded-l-2xl border border-white/15 bg-surface/95 px-4 py-3 text-xs font-semibold text-zinc-300 shadow-lg backdrop-blur-xl [writing-mode:vertical-rl]"
        >
          {site.clientPortal.label}
        </a>
      </div>

      {/* Mobile sticky bottom bar */}
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-surface/95 backdrop-blur-xl transition-transform duration-300 lg:hidden",
          visible ? "translate-y-0" : "translate-y-full",
        )}
        aria-hidden={!visible}
      >
        <div className="mx-auto flex max-w-lg items-center gap-2 px-3 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <Link
            href="/upload?intent=sample"
            className="focus-ring flex-1 rounded-full bg-accent-gradient py-3 text-center text-sm font-semibold text-white"
          >
            Free Quote
          </Link>
          <a
            href={site.clientSignup.url}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring flex-1 rounded-full border border-white/15 bg-white/5 py-3 text-center text-sm font-semibold text-white"
          >
            {site.clientSignup.label}
          </a>
        </div>
      </div>
    </>
  );
}
