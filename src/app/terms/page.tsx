import { ConversionLink } from "@/components/analytics/ConversionLink";
import { PageHero } from "@/components/marketing/PageHero";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { site } from "@/lib/site";
import { CONVERSION_EVENTS } from "@/lib/analytics-events";

export const metadata = buildPageMetadata({
  title: "Terms & Conditions",
  description: `Terms and conditions for using ${site.name} digitizing and vector services.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="Placeholder legal content—have qualified counsel review before publishing."
      />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-3xl space-y-8 px-4 py-14 text-sm leading-relaxed text-zinc-400 sm:px-6 lg:px-8 lg:py-20">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
              1. Services
            </h2>
            <p className="mt-3">
              {site.name} provides creative production services including embroidery digitizing, vector artwork, and
              related consulting. Deliverables are digital files unless otherwise agreed in writing.
            </p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
              2. Client materials
            </h2>
            <p className="mt-3">
              You represent that you have rights to submit artwork for processing. You retain ownership of your trademarks
              and logos; we claim no ownership over your marks.
            </p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
              3. Revisions
            </h2>
            <p className="mt-3">
              Revision policies are defined per quote. Minor edits to achieve the agreed scope are included as stated in your
              project confirmation.
            </p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
              4. Payment
            </h2>
            <p className="mt-3">
              Payment terms (prepay, net, invoice) are confirmed before work begins. Late payments may pause active projects.
            </p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
              5. Liability
            </h2>
            <p className="mt-3">
              Digital services are provided for production use. Always conduct sew-outs and print proofs for critical
              programs. To the maximum extent permitted by law, liability is limited to fees paid for the affected deliverable.
            </p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
              6. Contact
            </h2>
            <p className="mt-3">
              Questions about these terms:{" "}
              <ConversionLink
                href={`mailto:${site.email}`}
                event={CONVERSION_EVENTS.EMAIL_CLICK}
                eventParams={{ location: "terms_page" }}
                className="font-semibold text-accent hover:underline"
              >
                {site.email}
              </ConversionLink>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
