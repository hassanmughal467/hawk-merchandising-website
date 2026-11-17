import { Fragment } from "react";
import { ConversionLink } from "@/components/analytics/ConversionLink";
import { PageHero } from "@/components/marketing/PageHero";
import { CONVERSION_EVENTS } from "@/lib/analytics-events";
import {
  LEGAL_CONTACT_EMAIL,
  type LegalSection,
} from "@/lib/content/legal";

type LegalDocumentProps = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: readonly LegalSection[];
  emailEventLocation: string;
};

function ParagraphWithEmail({
  text,
  eventLocation,
}: {
  text: string;
  eventLocation: string;
}) {
  const parts = text.split(LEGAL_CONTACT_EMAIL);

  if (parts.length === 1) {
    return <p className="mt-3">{text}</p>;
  }

  return (
    <p className="mt-3">
      {parts.map((part, index) => (
        <Fragment key={index}>
          {part}
          {index < parts.length - 1 ? (
            <ConversionLink
              href={`mailto:${LEGAL_CONTACT_EMAIL}`}
              event={CONVERSION_EVENTS.EMAIL_CLICK}
              eventParams={{ location: eventLocation }}
              className="font-semibold text-accent hover:underline"
            >
              {LEGAL_CONTACT_EMAIL}
            </ConversionLink>
          ) : null}
        </Fragment>
      ))}
    </p>
  );
}

export function LegalDocument({
  title,
  lastUpdated,
  intro,
  sections,
  emailEventLocation,
}: LegalDocumentProps) {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Legal"
        title={title}
        subtitle={`Last updated: ${lastUpdated}`}
      />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-3xl space-y-8 px-4 py-14 text-sm leading-relaxed text-zinc-400 sm:px-6 lg:px-8 lg:py-20">
          <ParagraphWithEmail text={intro} eventLocation={emailEventLocation} />

          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <ParagraphWithEmail
                  key={`${section.title}-${paragraphIndex}`}
                  text={paragraph}
                  eventLocation={emailEventLocation}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
