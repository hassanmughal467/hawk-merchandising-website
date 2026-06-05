import Link from "next/link";
import { PageHero } from "@/components/marketing/PageHero";
import { CTAButtons } from "@/components/marketing/CTAButtons";
import { FAQSection } from "@/components/sections/FAQSection";
import { RelatedServicesSection } from "@/components/sections/RelatedServicesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { getFAQPreview } from "@/lib/content/faq";

type LandingPageTemplateProps = {
  eyebrow: string;
  title: string;
  description: string;
  relatedServices: { href: string; label: string; description?: string }[];
};

/** Reusable template for future industry/country landing pages — no routes wired yet */
export function LandingPageTemplate({
  eyebrow,
  title,
  description,
  relatedServices,
}: LandingPageTemplateProps) {
  const faqPreview = getFAQPreview(4);
  const services = relatedServices.map((s) => ({
    href: s.href,
    title: s.label,
    description: s.description ?? "Production-ready digitizing and vector artwork from Hawk Merchandising.",
  }));

  return (
    <div className="bg-background">
      <PageHero eyebrow={eyebrow} title={title} subtitle={description}>
        <CTAButtons className="!mt-0" />
      </PageHero>
      <WhyChooseSection />
      <StatsSection />
      <RelatedServicesSection services={services} title="Recommended services" />
      <FAQSection items={faqPreview} variant="light" showViewAll />
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">Ready to start?</h2>
            <p className="mt-3 text-sm text-zinc-400">Upload artwork or contact our team for a same-day response.</p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/upload"
                className="focus-ring rounded-full bg-accent-gradient px-7 py-3 text-sm font-semibold text-white"
              >
                Upload artwork
              </Link>
              <Link
                href="/contact"
                className="focus-ring rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
