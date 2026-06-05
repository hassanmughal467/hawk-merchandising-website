/**
 * Google Reviews — static fallback synced from Hawk Merchandising's live
 * Google Business Profile (14 reviews as of June 2026).
 *
 * When GOOGLE_PLACES_API_KEY + GOOGLE_PLACE_ID are set, `getReviews()` fetches
 * live rating, count, and review text from the Places API instead.
 */

export type ReviewSource = "google";

export type Review = {
  id: string;
  reviewerName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  reviewText: string;
  /** ISO 8601 date for schema.org and sorting */
  date: string;
  /** Human-readable relative or formatted date for display */
  dateDisplay: string;
  source: ReviewSource;
};

export type ReviewsSummary = {
  averageRating: number;
  totalReviewCount: number;
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
  totalReviewCount: 14,
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
    date: "2026-04-15",
    dateDisplay: "2 months ago",
    source: "google",
  },
  {
    id: "gr-linda-kilbey",
    reviewerName: "Linda Kilbey",
    rating: 5,
    reviewText:
      "Fast turnaround for logos, no fuss, great digitising, very accommodating. I would highly recommend!",
    date: "2026-03-20",
    dateDisplay: "3 months ago",
    source: "google",
  },
  {
    id: "gr-gaz-lee",
    reviewerName: "Gaz Lee",
    rating: 5,
    reviewText:
      "We have been in embroidery and printing for over 30 years and Sam from Hawk Merchandising is the best digitiser we have ever used. His attention to detail, stitch count and trims is exceptional. They are the best we have experienced in vectoring with always a quick turnaround. Hawks are always there for advice and supply logos in DST EMB files with a running sheet and image of how the logo will be.",
    date: "2026-02-10",
    dateDisplay: "4 months ago",
    source: "google",
  },
  {
    id: "gr-russell-wallace",
    reviewerName: "Russell Wallace",
    rating: 5,
    reviewText:
      "Been using Hawk for 9 months now—they've set up hundreds of logos in vector art and a lot of embroidery digitizing. Excellent quality and very fast. Often 2hr turnaround, rarely more than 8–10hrs. Sam is great to work with, fully recommend!",
    date: "2025-09-05",
    dateDisplay: "9 months ago",
    source: "google",
  },
  {
    id: "gr-brendan-rose",
    reviewerName: "Brendan Rose",
    rating: 5,
    reviewText:
      "Sam at Hawk Merchandising has been looking after our vector and digitising needs for the past 12 months. The service is amazing and no job is too hard. My business would not be the same without their services. I never do Google reviews but thought this team deserves the recognition. Highly recommended! AAA+++ service and quality of work.",
    date: "2025-06-01",
    dateDisplay: "1 year ago",
    source: "google",
  },
  {
    id: "gr-1st-workwear",
    reviewerName: "1st Workwear",
    rating: 5,
    reviewText:
      "Hawk Merchandising are a brilliant digitizer and supply us with great logos and outstanding service.",
    date: "2025-11-18",
    dateDisplay: "7 months ago",
    source: "google",
  },
];

export const mockReviewsData: ReviewsData = {
  summary: reviewsSummary,
  reviews,
};
