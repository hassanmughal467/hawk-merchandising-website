import type { Metadata } from "next";
import Link from "next/link";
import { CTAButtons } from "@/components/marketing/CTAButtons";
import { PageHero } from "@/components/marketing/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Promotional Products",
  description:
    "Creative promotional products and custom giveaways with artwork support—digitizing, vector, and production-ready files.",
};

const categories = [
  {
    title: "Headwear & bags",
    body: "Caps, beanies, totes, and backpacks with embroidery or print-ready separations.",
  },
  {
    title: "Apparel programs",
    body: "Polos, jackets, and workwear bundles with consistent marks across placements.",
  },
  {
    title: "Hard goods & tech",
    body: "Drinkware, journals, tools—when decoration changes, we adapt files to each process.",
  },
  {
    title: "Event & retail kits",
    body: "Kitting-friendly SKUs with colorways and size breaks managed in one project thread.",
  },
];

export default function PromotionalProductsPage() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Promotional products"
        title="Merch that reinforces your brand—without production surprises"
        subtitle={`${site.name} supports promo distributors and in-house merch teams with artwork that travels cleanly from concept to decorator.`}
      />
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <CTAButtons />
        </div>
      </section>

      <section className="border-b border-white/10 bg-brand-light-gradient text-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
            Where we plug in
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {categories.map((c) => (
              <div key={c.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-8 sm:p-10">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
              One brief, many decorators
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-zinc-400">
              Share your program once—we can output embroidery digitizing, vector separations, and patch-ready art in
              parallel, aligned to each vendor’s requirements.
            </p>
            <Link href="/pricing" className="mt-8 inline-block text-sm font-semibold text-accent hover:text-accent-hover">
              See pricing →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
