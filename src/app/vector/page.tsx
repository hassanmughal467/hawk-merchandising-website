import type { Metadata } from "next";
import Link from "next/link";
import { CTAButtons } from "@/components/marketing/CTAButtons";
import { PageHero } from "@/components/marketing/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vector Art & Conversion",
  description:
    "Raster to vector conversion, logo redraws, and screen-print ready artwork. EPS, AI, PDF, CDR with clean separations.",
};

const offerings = [
  {
    title: "Raster to vector",
    body: "Low-resolution logos and scans rebuilt as crisp line art—ready for enlargement, vinyl, or print.",
  },
  {
    title: "Screen print separations",
    body: "Spot channels, traps, and underbases coordinated with how your decorator actually produces.",
  },
  {
    title: "Embroidery-ready vectors",
    body: "When vector art feeds digitizing, we keep paths efficient so conversion to stitches stays predictable.",
  },
  {
    title: "Merch & retail packaging",
    body: "Consistent brand marks across labels, hang tags, and promo graphics with locked color systems.",
  },
];

const outputs = ["Adobe Illustrator (AI)", "EPS", "PDF", "PSD (as needed)", "CorelDRAW (CDR)"];

export default function VectorPage() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Vector"
        title="Vector art that survives printing—not just zooming in"
        subtitle={`${site.name} produces editable vector artwork for screen print, heat transfer, signage, and production digitizing workflows.`}
      />
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <CTAButtons />
        </div>
      </section>

      <section className="border-b border-white/10 bg-brand-light-gradient text-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
            Vector services
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {offerings.map((o) => (
              <div
                key={o.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                  {o.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
            Deliverable formats
          </h2>
          <ul className="mt-8 space-y-3 text-sm text-zinc-300">
            {outputs.map((line) => (
              <li key={line} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                {line}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-zinc-500">
            Not sure what you need? Upload your reference and we’ll recommend the best master format for your vendors.
          </p>
          <div className="mt-8">
            <Link href="/free-downloads" className="text-sm font-semibold text-accent hover:text-accent-hover">
              Free downloads & spec sheets →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
