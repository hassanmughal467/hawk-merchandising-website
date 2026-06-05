import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/marketing/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { CountriesServedSection } from "@/components/sections/CountriesServedSection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import {
  companyStory,
  mission,
  productionWorkflow,
  supportWorkflow,
  values,
  whyClientsStay,
} from "@/lib/content/about";
import { getAllFAQItems } from "@/lib/content/faq";
import { buildFAQSchema } from "@/lib/seo/faq-schema";
import { buildBreadcrumbSchema } from "@/lib/seo/breadcrumb-schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hawk Merchandising bridges embroidery craft with modern production workflows—fast turnaround, consistent quality, global delivery.",
};

export default function AboutPage() {
  const faqItems = getAllFAQItems().slice(0, 6);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className="bg-background">
      <JsonLdScript data={[buildBreadcrumbSchema(breadcrumbs), buildFAQSchema(faqItems)]} />

      <PageHero
        eyebrow="About"
        title="Built for shops that cannot afford rework"
        subtitle={`${site.name} partners with embroidery businesses, apparel brands, and print shops that need reliable digitizing and vector art—without drama at the machine.`}
      />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
            {companyStory.headline}
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-zinc-400">
            {companyStory.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-brand-light-gradient text-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
            {mission.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-700">{mission.body}</p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <h3 className="font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
                Why clients stay with Hawk
              </h2>
            </div>
            <ul className="space-y-3 text-sm leading-relaxed text-zinc-400 lg:col-span-7">
              {whyClientsStay.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CountriesServedSection variant="light" />
      <IndustriesSection />

      <section className="border-b border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
            Production workflow
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {productionWorkflow.map((step) => (
              <li key={step.step} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs font-semibold text-accent">{step.step}</p>
                <p className="mt-3 font-semibold text-white">{step.title}</p>
                <p className="mt-2 text-sm text-zinc-400">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
            Support workflow
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {supportWorkflow.map((step) => (
              <li key={step.step} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs font-semibold text-accent">{step.step}</p>
                <p className="mt-3 font-semibold text-white">{step.title}</p>
                <p className="mt-2 text-sm text-zinc-400">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FAQSection items={faqItems} id="faq" />

      <section className="border-b border-white/10 bg-brand-light-gradient text-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
              Start your next production file with Hawk
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              Upload artwork or contact our team—24-hour standard turnaround with rush options available.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/upload"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-accent-gradient px-7 py-3.5 text-base font-semibold text-white transition hover:bg-accent-gradient-hover"
              >
                Upload a design
              </Link>
              <Link
                href="/contact"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-7 py-3.5 text-base font-semibold text-zinc-900 transition hover:border-zinc-400"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
