import { PageHero } from "@/components/marketing/PageHero";
import { PricingCardsSection } from "@/components/sections/PricingCardsSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { pricingSectionSubtitle, pricingSectionTitle } from "@/lib/content/pricing";
import { turnaround } from "@/lib/content/turnaround";

import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Pricing — Embroidery Digitizing Services",
  description: `Simple, transparent pricing for embroidery digitizing services with ${turnaround}, and professional vector art conversion. Embroidery from $4 flat rate with sew-out available on request.`,
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
