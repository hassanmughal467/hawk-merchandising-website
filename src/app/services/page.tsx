import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/marketing/PageHero";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Logo digitizing, cap digitizing, jacket backs, vector conversion, and custom patches—built for production teams worldwide.",
};

const detailSections = [
  {
    id: "logo-digitizing",
    title: "Logo Digitizing",
    body: [
      "Left-chest and brand marks digitized with production-first thinking: stable underlay, sensible pull compensation, and trims that reduce thread breaks.",
      "Delivered in your required machine formats (DST, PES, EXP, and more) with notes for fabric and stabilizer when needed.",
    ],
  },
  {
    id: "cap-digitizing",
    title: "Cap Digitizing",
    body: [
      "Structured for curved panels and tighter registration—density mapped to avoid puckering while keeping logos crisp.",
      "Ideal for structured caps, trucker hats, and performance headwear programs.",
    ],
  },
  {
    id: "jacket-back",
    title: "Jacket Back Digitizing",
    body: [
      "Large designs with controlled stitch angles, smooth blends, and balanced fill strategies for outerwear materials.",
      "Great for team jackets, union programs, and retail outerwear lines.",
    ],
  },
  {
    id: "vector",
    title: "Vector Conversion",
    body: [
      "Clean vector rebuilds for screen print, heat transfer, and sign workflows—EPS, AI, PDF, and Corel-friendly outputs.",
      "Raster-to-vector with attention to traps, knockouts, and separations when your decorator needs them.",
    ],
  },
  {
    id: "patches",
    title: "Custom Patches",
    body: [
      "Merrowed, laser-cut, or heat-seal patch concepts with borders and colorways tuned for manufacturing.",
      "We align artwork to your patch vendor specs to reduce back-and-forth at sampling.",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Services"
        title="Production-grade digitizing & vector art"
        subtitle={`${site.name} helps embroidery businesses and print shops ship faster—with files that behave predictably on the machine floor.`}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/upload"
            className="focus-ring inline-flex items-center justify-center rounded-full bg-accent-gradient px-7 py-3.5 text-base font-semibold text-white transition hover:bg-accent-gradient-hover"
          >
            Start an order
          </Link>
          <Link
            href="/contact"
            className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
          >
            Talk to sales
          </Link>
        </div>
      </PageHero>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
            Core offerings
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.title} title={s.title} description={s.description} href={s.href} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
              How we work
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              Clear scope, fast confirmation, and revisions that stay aligned with your production reality.
            </p>
          </div>

          <div className="mt-14 space-y-16">
            {detailSections.map((d) => (
              <div
                key={d.id}
                id={d.id}
                className="grid gap-6 scroll-mt-28 lg:grid-cols-12 lg:gap-10"
              >
                <div className="lg:col-span-4">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
                    {d.title}
                  </h3>
                </div>
                <div className="space-y-4 text-sm leading-relaxed text-zinc-400 lg:col-span-8">
                  {d.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
