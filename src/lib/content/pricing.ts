export type PricingPlan = {
  id: string;
  name: string;
  priceLabel: string;
  price: string | null;
  features: readonly string[];
  href: string;
  cta: string;
  featured?: boolean;
};

export const pricingSectionTitle = "Simple & Transparent Pricing" as const;

export const pricingSectionSubtitle =
  "Professional digitizing and vector art services with fast turnaround and reliable quality." as const;

export const pricingPlans: readonly PricingPlan[] = [
  {
    id: "left-chest",
    name: "Left Chest Digitizing",
    priceLabel: "Starting at",
    price: "$5",
    features: [
      "Production Ready File",
      "DST, EMB, PES & More",
      "Free Minor Revisions",
      "Quality Checked",
      "Machine Sew-Out Available",
    ],
    href: "/upload",
    cta: "Get Started",
  },
  {
    id: "jacket-back",
    name: "Jacket Back Digitizing",
    priceLabel: "Starting at",
    price: "$8",
    features: [
      "Large Design Optimization",
      "Clean Stitch Path",
      "Production Ready",
      "Quality Checked",
      "Machine Sew-Out Available",
    ],
    href: "/upload",
    cta: "Get Started",
  },
  {
    id: "simple-vector",
    name: "Simple Vector Art",
    priceLabel: "Starting at",
    price: "$5",
    features: [
      "Clean Vector Conversion",
      "AI, EPS, SVG, PDF",
      "Print Ready Files",
      "Fast Delivery",
      "Unlimited Scalability",
    ],
    href: "/upload",
    cta: "Get Started",
  },
  {
    id: "complex-vector",
    name: "Complex Vector Art",
    priceLabel: "Custom Quote",
    price: null,
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
    priceLabel: "Custom Pricing",
    price: null,
    featured: true,
    features: [
      "Patches",
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
