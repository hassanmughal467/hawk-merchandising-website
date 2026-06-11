import Link from "next/link";
import { CTAButtons } from "@/components/marketing/CTAButtons";
import { PageHero } from "@/components/marketing/PageHero";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { site } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Custom Patches",
  description:
    "Custom embroidered, woven, and PVC-style patch programs—artwork tuned for merrow, laser-cut, and heat-seal production.",
  path: "/patches",
  noIndex: true,
});

const types = [
  {
    title: "Embroidered patches",
    body: "Classic thread depth and texture—ideal for uniforms, headwear, and retail merch with a traditional look.",
  },
  {
    title: "Woven / sublimated patches",
    body: "Fine detail and gradients when embroidery thread can’t hold the fidelity you need.",
  },
  {
    title: "PVC / rubber badges",
    body: "Molded-style branding with vector-ready art and color breaks suited to vendor specs.",
  },
];

export default function PatchesPage() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Patches"
        title="Patch programs engineered for manufacturing"
        subtitle={`${site.name} prepares patch artwork with borders, sew allowances, and color systems aligned to how your factory actually builds.`}
      />
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <CTAButtons />
        </div>
      </section>

      <section className="border-b border-white/10 bg-brand-light-gradient text-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
            Patch types
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {types.map((t) => (
              <div key={t.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
            What we need from you
          </h2>
          <ul className="mt-8 space-y-3 text-sm text-zinc-300">
            {[
              "Target size and intended garment or product",
              "Border style (merrow, laser, overlock, none)",
              "Backing preference (sew-on, iron-on, hook/loop)",
              "Thread palette or brand colors",
              "Order volume range (affects stack-up and nesting advice)",
            ].map((line) => (
              <li key={line} className="flex gap-2">
                <span className="text-accent" aria-hidden>
                  ✓
                </span>
                {line}
              </li>
            ))}
          </ul>
          <Link href="/stock-designs" className="mt-10 inline-block text-sm font-semibold text-accent hover:text-accent-hover">
            Browse stock design starters →
          </Link>
        </div>
      </section>
    </div>
  );
}
