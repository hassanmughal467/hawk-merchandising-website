import { PageHero } from "@/components/marketing/PageHero";
import { PricingCardsSection } from "@/components/sections/PricingCardsSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { pricingSectionSubtitle, pricingSectionTitle } from "@/lib/content/pricing";

import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Pricing — Embroidery Digitizing Services",
  description:
    "Simple, transparent pricing for embroidery digitizing services, fast turnaround digitizing, rush embroidery digitizing, and professional vector art conversion. Starting at $5 with machine sew-out services available.",
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
