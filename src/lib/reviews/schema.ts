import type { ReviewsData } from "@/lib/content/reviews";
import { site } from "@/lib/site";

type JsonLd = Record<string, unknown>;

export function buildReviewsJsonLd(data: ReviewsData): JsonLd {
  const { summary, reviews } = data;

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
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.reviewerName,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: review.reviewText,
      datePublished: review.date,
      publisher: {
        "@type": "Organization",
        name: "Google",
      },
    })),
  };
}
