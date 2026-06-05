import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/marketing/PageHero";
import { PortfolioGrid } from "@/components/ui/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected before/after highlights from digitizing and vector projects—clarity, edge quality, and stitch discipline.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Portfolio"
        title="Before / after highlights"
        subtitle="Placeholder tiles below demonstrate layout and performance. Swap these for real project photography when you are ready."
      >
        <Link
          href="/upload"
          className="focus-ring inline-flex items-center justify-center rounded-full bg-accent-gradient px-7 py-3.5 text-base font-semibold text-white transition hover:bg-accent-gradient-hover"
        >
          Request a quote
        </Link>
      </PageHero>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <PortfolioGrid />
        </div>
      </section>
    </div>
  );
}
