import { HomePage } from "@/components/home/HomePage";
import { getReviews } from "@/lib/reviews/get-reviews";
import { buildReviewsJsonLd } from "@/lib/reviews/schema";

export default async function Page() {
  const reviewsData = await getReviews();
  const reviewsJsonLd = buildReviewsJsonLd(reviewsData);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />
      <HomePage reviewsData={reviewsData} />
    </>
  );
}
