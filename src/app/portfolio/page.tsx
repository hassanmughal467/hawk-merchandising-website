import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { PageHero } from "@/components/marketing/PageHero";
import { PortfolioPageContent } from "@/components/portfolio/PortfolioPageContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Embroidery digitizing, vector conversion, and custom patch work—organized by category with before/after and production examples.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Portfolio"
        title="Before / after & production highlights"
        subtitle="Browse by category: embroidery digitizing (original, digitized, stitched), vector conversion, and custom patches including embroidered, PVC, woven, and chenille."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/upload"
            className="focus-ring inline-flex items-center justify-center rounded-full bg-accent-gradient px-7 py-3.5 text-base font-semibold text-white transition hover:bg-accent-gradient-hover"
          >
            Request a quote
          </Link>
          <Link
            href="/portfolio/videos"
            className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
          >
            Watch videos
          </Link>
        </div>
      </PageHero>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <Suspense
            fallback={
              <p className="text-sm text-zinc-500">Loading portfolio…</p>
            }
          >
            <PortfolioPageContent />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
