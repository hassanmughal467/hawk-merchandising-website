import Link from "next/link";
import { CTAButtons } from "@/components/marketing/CTAButtons";
import { PageHero } from "@/components/marketing/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { FAQSection } from "@/components/sections/FAQSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { MachineSewOutServiceBlock } from "@/components/sections/MachineSewOutServiceBlock";
import { RelatedServicesSection } from "@/components/sections/RelatedServicesSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { TurnaroundSection } from "@/components/sections/TurnaroundSection";
import type { FAQItem } from "@/lib/content/faq";
import type { ServicePageContent } from "@/lib/content/service-pages";
import { getRelatedServices, isDigitizingService, serviceBenefits } from "@/lib/content/service-shared";

type ServiceLandingProps = {
  content: ServicePageContent;
  faqItems: FAQItem[];
};

export function ServiceLanding({ content, faqItems }: ServiceLandingProps) {
  const benefits = content.benefits ?? serviceBenefits;
  const related = getRelatedServices(content.path);

  return (
    <div className="bg-background">
      <PageHero eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle}>
        <CTAButtons className="!mt-0" />
      </PageHero>

      <TrustStrip />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
            Service overview
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-400">{content.overview}</p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-brand-light-gradient text-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
            Benefits
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {benefits.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
            What you get
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {content.features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IndustriesSection />

      {content.deliverables ? (
        <section className="border-b border-white/10 bg-zinc-950">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
              Deliverable formats
            </h2>
            <ul className="mt-10 flex flex-wrap gap-2">
              {content.deliverables.map((d) => (
                <li
                  key={d}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200"
                >
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {content.processSteps ? (
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
              Process
            </h2>
            <ol className="mt-10 grid gap-6 sm:grid-cols-3">
              {content.processSteps.map((row) => (
                <li key={row.step} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-xs font-semibold text-accent">{row.step}</p>
                  <p className="mt-3 font-semibold text-white">{row.title}</p>
                  <p className="mt-2 text-sm text-zinc-400">{row.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {isDigitizingService(content.slug) ? <MachineSewOutServiceBlock /> : null}

      <TurnaroundSection />
      <FAQSection items={faqItems} title={`${content.eyebrow} FAQ`} />
      <GuaranteeSection />

      <section className="border-b border-white/10 bg-brand-section-gradient">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Ready to start your {content.eyebrow.toLowerCase()} project?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/85">
              Upload your artwork with garment and placement notes—we respond same business day on most requests.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/upload"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-base font-semibold text-accent-secondary transition hover:bg-white/90"
              >
                Upload artwork
              </Link>
              <Link
                href="/contact"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/20"
              >
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedServicesSection services={related} />

      {content.relatedLinks ? (
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Also explore</p>
            <ul className="mt-4 flex flex-wrap gap-4">
              {content.relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-semibold text-accent hover:text-accent-hover"
                  >
                    {link.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
                Request a quote
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                Send your brief with deadline and garment details. Attach artwork for the fastest estimate.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
