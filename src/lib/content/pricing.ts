import { unlimitedRevisions } from "@/lib/content/offer";
import { patchesTurnaround, turnaround } from "@/lib/content/turnaround";

/**
 * Website-only pricing. Do not reuse these rates in social widgets,
 * share cards, or copy meant for social profiles.
 */
export const websitePricing = {
  embroideryUpTo5: {
    name: 'Embroidery designs up to 5"',
    rate: "$4 flat rate",
  },
  embroidery5to12: {
    name: 'Embroidery designs from 5" to 12"',
    rate: "$8 flat rate",
  },
  simpleVector: {
    name: "Simple vector art",
    rate: "$4 flat rate",
  },
  complexVector: {
    name: "Complex vector art",
    rate: "Quoted based on detail",
  },
  qualityLine:
    "Our low price never compromises quality, and a sew-out is available on request.",
} as const;

export type PricingPlan = {
  id: string;
  name: string;
  /** Full rate string shown on the card (e.g. "$4 flat rate"). */
  rate: string;
  features: readonly string[];
  href: string;
  cta: string;
  featured?: boolean;
};

export const pricingSectionTitle = "Simple & Transparent Pricing" as const;

export const pricingSectionSubtitle =
  `Professional digitizing and vector art services with ${turnaround} and reliable quality.` as const;

export const pricingPlans: readonly PricingPlan[] = [
  {
    id: "embroidery-up-to-5",
    name: websitePricing.embroideryUpTo5.name,
    rate: websitePricing.embroideryUpTo5.rate,
    features: [
      "Production Ready File",
      "DST, EMB, PES & More",
      unlimitedRevisions,
      "Quality Checked",
      "Machine Sew-Out Available",
    ],
    href: "/free-trial",
    cta: "Get Started",
  },
  {
    id: "embroidery-5-to-12",
    name: websitePricing.embroidery5to12.name,
    rate: websitePricing.embroidery5to12.rate,
    features: [
      "Large Design Optimization",
      "Clean Stitch Path",
      "Production Ready",
      "Quality Checked",
      "Machine Sew-Out Available",
    ],
    href: "/free-trial",
    cta: "Get Started",
  },
  {
    id: "simple-vector",
    name: websitePricing.simpleVector.name,
    rate: websitePricing.simpleVector.rate,
    features: [
      "Clean Vector Conversion",
      "AI, EPS, SVG, PDF",
      "Print Ready Files",
      "Fast Delivery",
      "Unlimited Scalability",
    ],
    href: "/free-trial",
    cta: "Get Started",
  },
  {
    id: "complex-vector",
    name: websitePricing.complexVector.name,
    rate: websitePricing.complexVector.rate,
    features: [
      "Detailed Artwork Recreation",
      "Complex Logo Redraw",
      "Manual Vector Tracing",
      "High Accuracy",
      "Professional Output",
    ],
    href: "/contact",
    cta: "Request Quote",
  },
  {
    id: "custom-projects",
    name: "Custom Projects",
    rate: "Custom quote",
    featured: true,
    features: [
      "Patches",
      patchesTurnaround,
      "Bulk Orders",
      "Promotional Products",
      "Branding Projects",
      "Enterprise Solutions",
    ],
    href: "/contact",
    cta: "Request Quote",
  },
] as const;

/** @deprecated Import pricingConfidenceBlock from sew-out.ts */
export const pricingConfidenceHeading = "Need Complete Confidence Before Production?" as const;

/** @deprecated Import pricingConfidenceBlock from sew-out.ts */
export const pricingConfidenceText =
  "For customers requiring additional quality verification, we can provide machine sew-out samples before production. This allows you to review stitch quality, lettering clarity, density, and overall embroidery performance before running the design on your machines." as const;
