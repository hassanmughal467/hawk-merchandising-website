import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/marketing/PageHero";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent project-based pricing for embroidery digitizing and vector art—fast quotes, rush options, and volume-friendly retainers.",
};

const plans = [
  {
    name: "Digitizing",
    price: "From $39",
    detail: "Per design, based on size & complexity",
    features: [
      "12–24 hr standard turnaround",
      "Major embroidery formats",
      "Free minor edits on scope",
      "Rush available",
    ],
    href: "/upload",
    cta: "Order digitizing",
  },
  {
    name: "Vector",
    price: "From $39",
    detail: "Per artwork, based on complexity",
    features: [
      "AI / EPS / PDF / CDR outputs",
      "Separations when requested",
      "Revision rounds included",
      "Rush available",
    ],
    href: "/upload",
    cta: "Order vector",
    featured: true,
  },
  {
    name: "Custom / volume",
    price: "Let’s talk",
    detail: "Programs, retainers, and franchise rollouts",
    features: [
      "Dedicated project channel",
      "SLA-friendly scheduling",
      "Multi-SKU bundles",
      "White-label options",
    ],
    href: "/contact",
    cta: "Contact sales",
  },
];

export default function PricingPage() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Pricing"
        title="Plans that match how shops actually buy"
        subtitle="Project pricing for one-off jobs—and conversation for high-volume programs. You’ll always get a written quote before we start."
      />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((p) => (
              <article
                key={p.name}
                className={
                  p.featured
                    ? "relative rounded-2xl border-2 border-accent bg-white/[0.04] p-8 shadow-lg shadow-accent/10"
                    : "rounded-2xl border border-white/10 bg-white/[0.03] p-8"
                }
              >
                {p.featured ? (
                  <span className="absolute -top-3 left-6 rounded-full bg-brand-section-gradient px-3 py-1 text-xs font-bold text-white">
                    Popular
                  </span>
                ) : null}
                <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
                  {p.name}
                </h2>
                <p className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold text-white">
                  {p.price}
                </p>
                <p className="mt-2 text-sm text-zinc-500">{p.detail}</p>
                <ul className="mt-8 space-y-3 text-sm text-zinc-300">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-accent" aria-hidden>
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={p.href}
                  className={
                    p.featured
                      ? "focus-ring mt-10 flex w-full justify-center rounded-full bg-accent-gradient py-3 text-center text-sm font-semibold text-white hover:bg-accent-gradient-hover"
                      : "focus-ring mt-10 flex w-full justify-center rounded-full border border-white/15 py-3 text-center text-sm font-semibold text-white hover:bg-white/5"
                  }
                >
                  {p.cta}
                </Link>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-zinc-500">
            Prices shown are starting points. Final quotes depend on stitch complexity, thread changes, garment notes, and
            delivery urgency. First design free promotions may apply—see the homepage offer section.
          </p>
        </div>
      </section>
    </div>
  );
}
