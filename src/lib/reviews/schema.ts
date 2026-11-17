import type { ReviewsData } from "@/lib/content/reviews";
import { site } from "@/lib/site";

type JsonLd = Record<string, unknown>;

/**
 * Organization JSON-LD with AggregateRating only.
 * Owner-confirmed: ratingValue 5.0, reviewCount 14.
 * Individual `review` entries are omitted — several quote dates are unverified.
 */
export function buildReviewsJsonLd(data: ReviewsData): JsonLd {
  const { summary } = data;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: summary.averageRating.toFixed(1),
      reviewCount: summary.totalReviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  };
}
