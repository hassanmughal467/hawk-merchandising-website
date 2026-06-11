import Link from "next/link";
import { PageHero } from "@/components/marketing/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { FAQSection } from "@/components/sections/FAQSection";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { getAllFAQItems } from "@/lib/content/faq";
import { buildFAQSchema } from "@/lib/seo/faq-schema";
import { buildBreadcrumbSchema } from "@/lib/seo/breadcrumb-schema";
import { buildLocalBusinessSchema } from "@/lib/seo/organization-schema";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { site } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Contact Hawk Merchandising for quotes, rush jobs, and production questions—email, phone, or WhatsApp.",
  path: "/contact",
});

export default function ContactPage() {
  const wa = `https://wa.me/${site.whatsappE164}?text=${encodeURIComponent(
    "Hi Hawk Merchandising — I need a quote for digitizing / vector work.",
  )}`;
  const faqItems = getAllFAQItems().slice(0, 8);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="bg-background">
      <JsonLdScript
        data={[
          buildLocalBusinessSchema(),
          buildBreadcrumbSchema(breadcrumbs),
          buildFAQSchema(faqItems),
        ]}
      />

      <PageHero
        eyebrow="Contact"
        title="Let's talk production"
        subtitle="Share your deadline, garment type, and desired outcome—we'll respond with next steps."
      />

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-20">
          <div className="lg:col-span-5">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
              Direct lines
            </h2>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Email</dt>
                <dd className="mt-2">
                  <a className="text-white underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Phone (US)</dt>
                <dd className="mt-2">
                  <a className="text-white underline-offset-4 hover:underline" href={`tel:${site.phoneUs.replace(/\s/g, "")}`}>
                    {site.phoneUs}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Phone (UK)</dt>
                <dd className="mt-2">
                  <a className="text-white underline-offset-4 hover:underline" href={`tel:${site.phoneUk.replace(/\s/g, "")}`}>
                    {site.phoneUk}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">WhatsApp</dt>
                <dd className="mt-2">
                  <a className="text-white underline-offset-4 hover:underline" href={wa} target="_blank" rel="noreferrer">
                    Message us on WhatsApp
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Business hours</dt>
                <dd className="mt-2 text-zinc-300">{site.businessHours}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Response time</dt>
                <dd className="mt-2 text-zinc-300">{site.responseTime}</dd>
              </div>
            </dl>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Offices</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{site.addressUs}</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{site.addressUk}</p>
            </div>

            <div className="mt-6 rounded-2xl border border-accent/30 bg-accent/10 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">Rush service</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                Same-day and 12-hour rush options available on request. Mention your deadline when you upload or
                message us on WhatsApp—we confirm feasibility before starting.
              </p>
            </div>

            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#20bd5a] sm:w-auto"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
            Our locations
          </h2>
          <p className="mt-3 text-sm text-zinc-400">
            US headquarters and UK contact office—serving clients worldwide via email, phone, WhatsApp, and client portal.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[site.addressUs, site.addressUk].map((address) => (
              <div
                key={address}
                className="flex min-h-[12rem] items-end rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-sm text-zinc-400">{address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqItems} id="faq" variant="light" />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:flex-row sm:items-center">
            <div>
              <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
                Fastest path to a quote
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Upload artwork with placement notes for the quickest estimate.
              </p>
            </div>
            <Link
              href="/upload"
              className="focus-ring shrink-0 rounded-full bg-accent-gradient px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-gradient-hover"
            >
              Go to upload
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
