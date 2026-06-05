import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/marketing/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hawk Merchandising bridges embroidery craft with modern production workflows—fast turnaround, consistent quality, global delivery.",
};

export default function AboutPage() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="About"
        title="Built for shops that cannot afford rework"
        subtitle={`${site.name} partners with embroidery businesses, apparel brands, and print shops that need reliable digitizing and vector art—without drama at the machine.`}
      />

      <section className="border-b border-white/10 bg-brand-light-gradient text-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
                What we optimize for
              </h2>
            </div>
            <ul className="space-y-4 text-sm leading-relaxed text-zinc-700 lg:col-span-7">
              <li>
                <span className="font-semibold text-zinc-950">Predictable stitch behavior</span> on
                real garments—not just “looks good on screen.”
              </li>
              <li>
                <span className="font-semibold text-zinc-950">Fast communication</span> with clear
                questions when artwork needs decisions.
              </li>
              <li>
                <span className="font-semibold text-zinc-950">Formats that match your floor</span>{" "}
                and your clients’ expectations.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
            Global delivery, human craft
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400">
            Our team blends experienced digitizers with disciplined QA—so you get speed without
            sacrificing the details that matter in production.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/upload"
              className="focus-ring inline-flex items-center justify-center rounded-full bg-accent-gradient px-7 py-3.5 text-base font-semibold text-white transition hover:bg-accent-gradient-hover"
            >
              Upload a design
            </Link>
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
