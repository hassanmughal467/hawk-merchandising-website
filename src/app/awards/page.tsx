import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/marketing/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Awards & Recognition",
  description:
    "Industry recognition and quality milestones for Hawk Merchandising digitizing and vector teams.",
};

const highlights = [
  { year: "2020–2026", title: "Production excellence", detail: "Trusted by high-volume embroidery and print programs across the US, UK, and EU." },
  { year: "Ongoing", title: "Quality-first file delivery", detail: "Consistent QA checkpoints, run-sheet discipline, and revision workflows built for shops." },
  { year: "Community", title: "Decorator partnerships", detail: "Long-term relationships with apparel decorators, promo companies, and in-house embroidery teams." },
];

const milestones = [
  "5,000+ production files delivered",
  "12–24 hour standard turnaround window",
  "Global client base across apparel and promo",
  "Dedicated digitizing & vector specialists",
];

export default function AwardsPage() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Awards"
        title="Recognition rooted in production results"
        subtitle={`Competition wins are great—but ${site.name} is measured by how reliably your designs run on real jobs. Here’s how we document quality.`}
      />

      <section className="border-b border-white/10 bg-brand-light-gradient text-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
            Highlights
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {highlights.map((h) => (
              <article key={h.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-secondary">{h.year}</p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-semibold text-zinc-950">
                  {h.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{h.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
            Milestones
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {milestones.map((m) => (
              <li
                key={m}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-zinc-300"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
                {m}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-zinc-500">
            Submit portfolio links or competition entries when you want a formal case study—we’re happy to showcase
            collaboration with your approval.
          </p>
          <Link
            href="/portfolio"
            className="mt-6 inline-block text-sm font-semibold text-accent hover:text-accent-hover"
          >
            View portfolio →
          </Link>
        </div>
      </section>
    </div>
  );
}
