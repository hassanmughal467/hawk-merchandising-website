import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/marketing/PageHero";

export const metadata: Metadata = {
  title: "Stock Designs",
  description:
    "Browse curated stock embroidery and vector starter designs—customize colors and layouts for your client programs.",
};

const categories = [
  { name: "Sports & mascots", count: "Coming soon", slug: "sports" },
  { name: "Lettering & monograms", count: "Coming soon", slug: "lettering" },
  { name: "Outdoor & tactical", count: "Coming soon", slug: "outdoor" },
  { name: "Corporate badges", count: "Coming soon", slug: "corporate" },
  { name: "Seasonal & retail", count: "Coming soon", slug: "seasonal" },
  { name: "Heritage / vintage", count: "Coming soon", slug: "heritage" },
];

export default function StockDesignsPage() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Stock designs"
        title="Starter artwork you can deploy fast"
        subtitle="This page mirrors industry-standard “stock catalog” navigation. Hook it to your DAM, Shopify collection, or internal library when assets are ready."
      />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <article
                key={c.slug}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6"
              >
                <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 ring-1 ring-white/10" />
                <h2 className="mt-5 font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                  {c.name}
                </h2>
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
                  {c.count}
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex text-sm font-semibold text-accent opacity-80 transition group-hover:opacity-100"
                >
                  Notify me →
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-white/10 bg-zinc-950/60 p-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
              Need something custom instead?
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-zinc-400">
              Stock is optional—most clients start from their own brand marks. Upload what you have and we’ll
              advise the fastest path.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/upload"
                className="focus-ring inline-flex justify-center rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-white hover:bg-accent-gradient-hover"
              >
                Upload brief
              </Link>
              <Link
                href="/digitizing"
                className="focus-ring inline-flex justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5"
              >
                Digitizing services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
