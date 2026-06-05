import type { FAQItem } from "@/lib/content/faq";

type JsonLd = Record<string, unknown>;

export function buildFAQSchema(items: FAQItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
