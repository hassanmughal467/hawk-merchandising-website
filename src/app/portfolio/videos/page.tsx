import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/marketing/PageHero";
import { VideoGrid } from "@/components/ui/VideoGrid";

export const metadata: Metadata = {
  title: "Portfolio Videos",
  description:
    "Embroidery machine runs, vector before/after conversions, patch production, and customer project videos from Hawk Merchandising.",
};

export default function PortfolioVideosPage() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Videos"
        title="Production in motion"
        subtitle="Add YouTube or Vimeo embed URLs in src/lib/content/videos.ts as clips are ready. Placeholders below show layout and categories."
      >
        <Link
          href="/portfolio"
          className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
        >
          View still portfolio
        </Link>
      </PageHero>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <VideoGrid />
        </div>
      </section>
    </div>
  );
}
