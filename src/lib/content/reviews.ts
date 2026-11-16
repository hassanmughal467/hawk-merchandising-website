/**
 * Google Reviews — curated quotes from Hawk Merchandising's Google Business Profile.
 *
 * Do not invent a review count here. The UI shows "5.0 on Google" until the owner
 * confirms the live Google count. When GOOGLE_PLACES_API_KEY + GOOGLE_PLACE_ID are
 * set, `getReviews()` can fetch live rating, count, and review text from Places.
 *
 * Dates: show real month + year only when verified; otherwise omit (never relative
 * "X months ago" strings that go stale or disagree with Google).
 */

export type ReviewSource = "google";

export type Review = {
  id: string;
  reviewerName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  reviewText: string;
  /** ISO 8601 date (YYYY-MM-DD) when known — for sorting / machine use */
  date?: string;
  /** Display as "Month Year" when verified; omit when unknown */
  dateDisplay?: string;
  source: ReviewSource;
};

export type ReviewsSummary = {
  averageRating: number;
  /**
   * Live Google total when known from Places API.
   * Omit / null for static fallback — never invent a hard-coded count.
   */
  totalReviewCount?: number | null;
  profileUrl: string;
  /** Google Place ID — set in env or here when known */
  placeId?: string;
};

export type ReviewsData = {
  summary: ReviewsSummary;
  reviews: Review[];
};

export const reviewsSummary: ReviewsSummary = {
  averageRating: 5.0,
  totalReviewCount: null,
  profileUrl:
    "https://www.google.com/maps/search/?api=1&query=Hawk+Merchandising+Durham+NC",
  placeId: undefined,
};

/** Verified Google reviews published on hawkmerchandising.com */
export const reviews: Review[] = [
  {
    id: "gr-angela-crosbie",
    reviewerName: "Angela Crosbie",
    rating: 5,
    reviewText:
      "Excellent digitizer, fast turnaround, would definitely recommend 👍🏻",
    date: "2024-03-01",
    dateDisplay: "March 2024",
    source: "google",
  },
  {
    id: "gr-linda-kilbey",
    reviewerName: "Linda Kilbey",
    rating: 5,
    reviewText:
      "Fast turnaround for logos, no fuss, great digitising, very accommodating. I would highly recommend!",
    date: "2024-11-01",
    dateDisplay: "November 2024",
    source: "google",
  },
  {
    id: "gr-gaz-lee",
    reviewerName: "Gaz Lee",
    rating: 5,
    reviewText:
      "We have been in embroidery and printing for over 30 years and Sam from Hawk Merchandising is the best digitiser we have ever used. His attention to detail, stitch count and trims is exceptional. They are the best we have experienced in vectoring with always a quick turnaround. Hawks are always there for advice and supply logos in DST EMB files with a running sheet and image of how the logo will be.",
    source: "google",
  },
  {
    id: "gr-russell-wallace",
    reviewerName: "Russell Wallace",
    rating: 5,
    reviewText:
      "Been using Hawk for 9 months now—they've set up hundreds of logos in vector art and a lot of embroidery digitizing. Excellent quality and very fast. Often 2hr turnaround, rarely more than 8–10hrs. Sam is great to work with, fully recommend!",
    source: "google",
  },
  {
    id: "gr-brendan-rose",
    reviewerName: "Brendan Rose",
    rating: 5,
    reviewText:
      "Sam at Hawk Merchandising has been looking after our vector and digitising needs for the past 12 months. The service is amazing and no job is too hard. My business would not be the same without their services. I never do Google reviews but thought this team deserves the recognition. Highly recommended! AAA+++ service and quality of work.",
    source: "google",
  },
  {
    id: "gr-1st-workwear",
    reviewerName: "1st Workwear",
    rating: 5,
    reviewText:
      "Hawk Merchandising are a brilliant digitizer and supply us with great logos and outstanding service.",
    source: "google",
  },
];

export const mockReviewsData: ReviewsData = {
  summary: reviewsSummary,
  reviews,
};
