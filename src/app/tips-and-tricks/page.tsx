import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/marketing/PageHero";

export const metadata: Metadata = {
  title: "Tips & Tricks",
  description:
    "Practical embroidery digitizing and vector artwork tips for decorators—from file prep to production pitfalls.",
};

const tips = [
  {
    title: "Send the highest-resolution source you have",
    body: "Vector-first when possible. For raster, avoid aggressive JPG compression; PNG or TIFF preserves edges better for conversion.",
  },
  {
    title: "Specify garment and stabilizer",
    body: "The same design behaves differently on fleece vs performance polyester. Stabilizer choice changes underlay strategy.",
  },
  {
    title: "Call out thread brand when it matters",
    body: "If you’re locked to a manufacturer’s palette, say so early—we can map colors and avoid costly re-sew tests.",
  },
  {
    title: "Keep small text simple",
    body: "Serifs and ultra-thin strokes may need compensation. When in doubt, share a photo of the intended final size.",
  },
  {
    title: "Package variants in one brief",
    body: "Left chest + cap + jacket back in one ticket reduces conflicting interpretations across separate orders.",
  },
  {
    title: "Plan for sew-out proofing on new programs",
    body: "First-time garment + first-time digitizing is the riskiest combo. Budget one test sew when stakes are high.",
  },
  {
    title: "Vector separations: label your Pantones",
    body: "If brand guidelines specify coated vs uncoated, include both—or specify which system your printer uses.",
  },
  {
    title: "Rush jobs: share your in-hoop deadline",
    body: "We’ll tell you honestly if quality drops when time is too tight—better than a file that fails on-press.",
  },
];

export default function TipsAndTricksPage() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Tips & tricks"
        title="Production wisdom, without the fluff"
        subtitle="Short, actionable guidance for teams that live in stitches and separations—updated as we learn alongside your jobs."
      />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-4 md:grid-cols-2">
            {tips.map((t) => (
              <article
                key={t.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h2 className="font-[family-name:var(--font-display)] text-base font-semibold text-white">
                  {t.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{t.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-zinc-950/50 p-8 sm:flex-row sm:items-center">
            <div>
              <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                Want this as a PDF for your floor?
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Ask us to bundle these tips with the free downloads pack.
              </p>
            </div>
            <Link
              href="/free-downloads"
              className="focus-ring inline-flex rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-white hover:bg-accent-gradient-hover"
            >
              Free downloads
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
