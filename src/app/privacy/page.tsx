import { ConversionLink } from "@/components/analytics/ConversionLink";
import { PageHero } from "@/components/marketing/PageHero";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { site } from "@/lib/site";
import { CONVERSION_EVENTS } from "@/lib/analytics-events";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name} — how we handle uploads, contact details, and communications.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Summary placeholder—replace with counsel-approved policy for GDPR/CCPA if applicable."
      />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-3xl space-y-8 px-4 py-14 text-sm leading-relaxed text-zinc-400 sm:px-6 lg:px-8 lg:py-20">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
              What we collect
            </h2>
            <p className="mt-3">
              When you submit the upload form or contact us, we collect the information you provide (name, email, phone or
              WhatsApp, files, and project notes) to deliver quotes and services.
            </p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
              How we use data
            </h2>
            <p className="mt-3">
              We use your information to respond to requests, fulfill orders, send transactional updates, and improve our
              workflows. We do not sell your personal data.
            </p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
              File storage
            </h2>
            <p className="mt-3">
              Uploaded artwork may be stored on secure infrastructure during production. Retention follows operational needs
              and your instructions where applicable.
            </p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
              Cookies & analytics
            </h2>
            <p className="mt-3">
              We use Meta Pixel and Google Analytics 4 to understand how visitors use this site. These services may set
              cookies. You can control cookies through your browser settings or opt-out tools provided by Meta and Google.
            </p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
              Contact
            </h2>
            <p className="mt-3">
              Privacy questions:{" "}
              <ConversionLink
                href={`mailto:${site.email}`}
                event={CONVERSION_EVENTS.EMAIL_CLICK}
                eventParams={{ location: "privacy_page" }}
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
