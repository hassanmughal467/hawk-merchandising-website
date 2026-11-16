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

export default async function Page() {
  const reviewsData = await getReviews();
  const faqPreview = getFAQPreview(5);
  const faqJsonLd = buildFAQSchema(faqPreview);

  return (
    <>
      {/* Review/AggregateRating JSON-LD omitted until Google count is owner-confirmed (brief task 7). */}
      <JsonLdScript data={[buildWebSiteSchema(), faqJsonLd]} />
      <HomePage reviewsData={reviewsData} />
    </>
  );
}
