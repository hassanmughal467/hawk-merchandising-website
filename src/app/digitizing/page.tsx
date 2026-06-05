import type { Metadata } from "next";
import Link from "next/link";
import { CTAButtons } from "@/components/marketing/CTAButtons";
import { PageHero } from "@/components/marketing/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Embroidery Digitizing",
  description:
    "Custom embroidery digitizing for logos, caps, jacket backs, and more. Hand-tuned files, fast turnaround, major machine formats.",
};

const specialties = [
  {
    id: "logo",
    title: "Logo & left-chest digitizing",
    body: "Brand marks with production-grade underlay, crisp edges, and trims that keep your operators moving.",
  },
  {
    id: "cap",
    title: "Cap & hat digitizing",
    body: "Curved-panel friendly sequencing, density control, and registration that survives real cap frames.",
  },
  {
    id: "jacket-back",
    title: "Jacket back & large runs",
    body: "Large fills, gradients, and detail that scales—without excessive stitch counts or unstable areas.",
  },
  {
    id: "towel",
    title: "Towel & specialty fabrics",
    body: "Looped textures and lofty goods digitized to reduce push-through and thread breaks.",
  },
  {
    id: "applique",
    title: "Appliqué & puff options",
    body: "When your brief calls for dimension, we engineer paths and offsets for clean results on the machine.",
  },
];

const formats = ["DST", "PES", "EXP", "JEF", "VP3", "HUS", "XXX", "EMB", "More on request"];

export default function DigitizingPage() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Digitizing"
        title="Hand-digitized embroidery files for serious production"
        subtitle={`${site.name} converts your artwork into stitch-ready files tuned for your garment, fabric, and machine—not generic auto-fill presets.`}
      />
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <CTAButtons />
        </div>
      </section>

      <section className="border-b border-white/10 bg-brand-light-gradient text-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
            What we digitize
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600">
            Every category below is approached with the same rule: would we run this on our own floor?
          </p>
          <div className="mt-12 space-y-16">
            {specialties.map((s) => (
              <div key={s.id} id={s.id} className="scroll-mt-28 lg:grid lg:grid-cols-12 lg:gap-10">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold lg:col-span-4">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 lg:col-span-8 lg:mt-0">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
            Machine formats
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-zinc-400">
            Delivered in the format your floor expects. Tell us your machine brand and we’ll match it.
          </p>
          <ul className="mt-10 flex flex-wrap gap-2">
            {formats.map((f) => (
              <li
                key={f}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
            Process
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { step: "01", title: "Upload & brief", desc: "Artwork, garment, placement, and deadline." },
              { step: "02", title: "Digitize & QA", desc: "Hand work + run-sheet checks against your spec." },
              { step: "03", title: "Deliver & revise", desc: "Files plus edits until it runs right in production." },
            ].map((row) => (
              <li key={row.step} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs font-semibold text-accent">{row.step}</p>
                <p className="mt-3 font-semibold text-white">{row.title}</p>
                <p className="mt-2 text-sm text-zinc-400">{row.desc}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12">
            <Link
              href="/services"
              className="text-sm font-semibold text-accent hover:text-accent-hover"
            >
              View full service overview →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
