import { CTASection } from "@/components/sections/CTASection";
import { ClientLogosSection } from "@/components/sections/ClientLogosSection";
import { FastTurnaroundSection } from "@/components/sections/FastTurnaroundSection";
import { GoogleReviewsSection } from "@/components/sections/GoogleReviewsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { VideosPreviewSection } from "@/components/sections/VideosPreviewSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import type { ReviewsData } from "@/lib/content/reviews";

type HomePageProps = {
  reviewsData: ReviewsData;
};

export function HomePage({ reviewsData }: HomePageProps) {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <GoogleReviewsSection data={reviewsData} />
      <WhyChooseSection />
      <FastTurnaroundSection />
      <ServicesSection />
      <IndustriesSection />
      <OfferSection />
      <PortfolioSection />
      <VideosPreviewSection />
      <ClientLogosSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
