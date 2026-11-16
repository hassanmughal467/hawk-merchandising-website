/**
 * Review / AggregateRating JSON-LD is intentionally not emitted.
 *
 * Hard-coded reviewCount (e.g. 14) did not match live Google Business Profile
 * data. Prefer omitting aggregateRating and review until the owner confirms the
 * current Google count and dates. Organization schema without those fields
 * lives in `src/lib/seo/organization-schema.ts`.
 */

export function buildReviewsJsonLd(): null {
  return null;
}
