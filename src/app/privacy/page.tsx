import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name} — how we handle uploads, contact details, and communications.`,
};

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
              This site may use basic analytics or logging to understand performance. You can control cookies through your
              browser.
            </p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
              Contact
            </h2>
            <p className="mt-3">
              Privacy questions:{" "}
              <a className="font-semibold text-accent hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
