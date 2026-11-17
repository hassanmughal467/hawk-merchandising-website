import { PageHero } from "@/components/marketing/PageHero";
import { PricingCardsSection } from "@/components/sections/PricingCardsSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import {
  pricingSectionSubtitle,
  pricingSectionTitle,
  websitePricing,
} from "@/lib/content/pricing";

import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Pricing — Embroidery Digitizing Services",
  description: `${websitePricing.embroideryUpTo5.name}: ${websitePricing.embroideryUpTo5.rate}. ${websitePricing.embroidery5to12.name}: ${websitePricing.embroidery5to12.rate}. ${websitePricing.simpleVector.name}: ${websitePricing.simpleVector.rate}. ${websitePricing.complexVector.name}: ${websitePricing.complexVector.rate}. ${websitePricing.qualityLine}`,
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Pricing"
        title={pricingSectionTitle}
        subtitle={pricingSectionSubtitle}
      />

      <TrustStrip />
      <PricingCardsSection showHeader={false} />
    </div>
  );
}
