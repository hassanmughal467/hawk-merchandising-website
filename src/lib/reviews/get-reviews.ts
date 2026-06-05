import type { Review, ReviewsData } from "@/lib/content/reviews";
import { mockReviewsData } from "@/lib/content/reviews";

type GooglePlaceReview = {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
};

type GooglePlaceDetailsResponse = {
  status: string;
  result?: {
    rating?: number;
    user_ratings_total?: number;
    reviews?: GooglePlaceReview[];
    url?: string;
  };
  error_message?: string;
};

const STAR_MAP: Record<string, 1 | 2 | 3 | 4 | 5> = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
};

/**
 * Single entry point for review data.
 *
 * Uses Google Places Details API when credentials are configured.
 * Falls back to curated static data in `src/lib/content/reviews.ts`.
 */
export async function getReviews(): Promise<ReviewsData> {
  const apiKey =
    process.env.GOOGLE_PLACES_API_KEY ??
    process.env.GOOGLE_BUSINESS_PROFILE_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (apiKey && placeId) {
    try {
      return await fetchGooglePlaceReviews(apiKey, placeId);
    } catch (error) {
      console.error("[getReviews] Google Places API failed, using static data:", error);
    }
  }

  return mockReviewsData;
}

async function fetchGooglePlaceReviews(
  apiKey: string,
  placeId: string,
): Promise<ReviewsData> {
  const fields = ["rating", "user_ratings_total", "reviews", "url"].join(",");
  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("fields", fields);
  url.searchParams.set("key", apiKey);

  const response = await fetch(url.toString(), {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Places API HTTP ${response.status}`);
  }

  const data = (await response.json()) as GooglePlaceDetailsResponse;

  if (data.status !== "OK" || !data.result) {
    throw new Error(data.error_message ?? `Places API status: ${data.status}`);
  }

  const { rating, user_ratings_total, reviews = [], url: mapsUrl } = data.result;

  const mappedReviews: Review[] = reviews.map((review, index) => ({
    id: `google-${review.time}-${index}`,
    reviewerName: review.author_name,
    rating: clampRating(review.rating),
    reviewText: review.text,
    date: new Date(review.time * 1000).toISOString().slice(0, 10),
    dateDisplay: review.relative_time_description,
    source: "google" as const,
  }));

  return {
    summary: {
      averageRating: rating ?? mockReviewsData.summary.averageRating,
      totalReviewCount:
        user_ratings_total ?? mockReviewsData.summary.totalReviewCount,
      profileUrl: mapsUrl ?? mockReviewsData.summary.profileUrl,
      placeId,
    },
    reviews: mappedReviews.length > 0 ? mappedReviews : mockReviewsData.reviews,
  };
}

function clampRating(value: number): 1 | 2 | 3 | 4 | 5 {
  const rounded = Math.round(value) as 1 | 2 | 3 | 4 | 5;
  if (rounded < 1) return 1;
  if (rounded > 5) return 5;
  return rounded;
}

/** Map Google Business Profile API starRating enum to 1–5 */
export function mapStarRating(starRating: string): 1 | 2 | 3 | 4 | 5 {
  return STAR_MAP[starRating] ?? 5;
}
