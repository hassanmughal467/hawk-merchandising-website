import { HomePage } from "@/components/home/HomePage";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { site } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: `${site.name} | Digitizing & Vector Art`,
  description: site.description,
  path: "/",
  absoluteTitle: true,
});
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { getFAQPreview } from "@/lib/content/faq";
import { buildFAQSchema } from "@/lib/seo/faq-schema";
import { buildWebSiteSchema } from "@/lib/seo/organization-schema";
import { getReviews } from "@/lib/reviews/get-reviews";
import { buildReviewsJsonLd } from "@/lib/reviews/schema";

export default async function Page() {
  const reviewsData = await getReviews();
  const reviewsJsonLd = buildReviewsJsonLd(reviewsData);
  const faqPreview = getFAQPreview(5);
  const faqJsonLd = buildFAQSchema(faqPreview);

  return (
    <>
      <JsonLdScript data={[buildWebSiteSchema(), reviewsJsonLd, faqJsonLd]} />
      <HomePage reviewsData={reviewsData} />
    </>
  );
}
