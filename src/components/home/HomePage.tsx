import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { CTASection } from "@/components/sections/CTASection";
import { ClientSuccessSection } from "@/components/sections/ClientSuccessSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FastTurnaroundSection } from "@/components/sections/FastTurnaroundSection";
import { GoogleReviewsSection } from "@/components/sections/GoogleReviewsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HomepageQuoteSection } from "@/components/sections/HomepageQuoteSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { MidPageCTASection } from "@/components/sections/MidPageCTASection";
import { PortalPromoSection } from "@/components/sections/PortalPromoSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { VideosPreviewSection } from "@/components/sections/VideosPreviewSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { getFAQPreview } from "@/lib/content/faq";
import type { ReviewsData } from "@/lib/content/reviews";

type HomePageProps = {
  reviewsData: ReviewsData;
};

export function HomePage({ reviewsData }: HomePageProps) {
  const faqPreview = getFAQPreview(5);

  return (
    <>
      <HeroSection />
      <TrustBar />
      <BeforeAfterSection />
      <PortfolioSection />
      <StatsSection />
      <IndustriesSection />
      <WhyChooseSection />
      <MidPageCTASection />
      <VideosPreviewSection />
      <FastTurnaroundSection />
      <GoogleReviewsSection data={reviewsData} />
      <ClientSuccessSection />
      <MidPageCTASection variant="dark" />
      <FAQSection
        items={faqPreview}
        title="Common questions"
        showViewAll
        variant="light"
        id="faq-preview"
      />
      <PortalPromoSection />
      <HomepageQuoteSection />
      <CTASection />
    </>
  );
}
