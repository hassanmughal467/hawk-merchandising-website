export type VisualType =
  | "logo-original"
  | "digitized-result"
  | "low-res-logo"
  | "vector-art"
  | "polo-mockup"
  | "cap-mockup"
  | "cap-puff"
  | "pvc-patch"
  | "woven-patch"
  | "chenille-patch"
  | "leather-patch"
  | "jacket-back"
  | "embroidery-sample"
  | "promo-product"
  | "workwear-mockup"
  | "apron-mockup"
  | "screenshot-logo"
  | "complex-artwork";

export type HeroSlide = {
  id: string;
  title: string;
  subtitle: string;
  visuals: { type: VisualType; label: string }[];
  layout: "split" | "single";
};

export const heroSlides: HeroSlide[] = [
  {
    id: "before-after",
    title: "Before vs After Digitizing",
    subtitle: "Original artwork transformed into production-ready embroidery files",
    layout: "split",
    visuals: [
      { type: "logo-original", label: "Original Logo" },
      { type: "digitized-result", label: "Digitized Result" },
    ],
  },
  {
    id: "polo",
    title: "Embroidered Polo Shirt",
    subtitle: "Left chest logo placement — crisp edges on pique knit",
    layout: "single",
    visuals: [{ type: "polo-mockup", label: "Left Chest Logo" }],
  },
  {
    id: "cap-puff",
    title: "3D Puff Cap Embroidery",
    subtitle: "Raised foam dimension with clean satin borders",
    layout: "single",
    visuals: [{ type: "cap-puff", label: "3D Puff Embroidery" }],
  },
  {
    id: "pvc",
    title: "Custom PVC Patch",
    subtitle: "Molded rubber badge with precise color breaks",
    layout: "single",
    visuals: [{ type: "pvc-patch", label: "PVC Patch" }],
  },
  {
    id: "woven",
    title: "Woven Patch Program",
    subtitle: "Fine detail and gradients at patch scale",
    layout: "single",
    visuals: [{ type: "woven-patch", label: "Woven Patch" }],
  },
];

export type ResultBadge =
  | "Clean Stitch Path"
  | "Production Ready"
  | "Optimized Underlay"
  | "High Detail Accuracy"
  | "Fast Turnaround"
  | "Machine Tested";

export type BeforeAfterCard = {
  id: string;
  title: string;
  subtitle: string;
  service: string;
  before: { type: VisualType; label: string };
  after: { type: VisualType; label: string };
  badges: ResultBadge[];
};

export const beforeAfterShowcase: BeforeAfterCard[] = [
  {
    id: "corporate-polo",
    title: "Corporate Logo",
    subtitle: "Left Chest Polo Embroidery",
    service: "Logo Digitizing",
    before: { type: "logo-original", label: "Original JPG" },
    after: { type: "polo-mockup", label: "Embroidered Polo" },
    badges: ["Clean Stitch Path", "Production Ready", "Optimized Underlay"],
  },
  {
    id: "sports-cap-puff",
    title: "Sports Team Logo",
    subtitle: "3D Puff Cap Embroidery",
    service: "Cap Digitizing",
    before: { type: "screenshot-logo", label: "Screenshot Logo" },
    after: { type: "cap-puff", label: "3D Puff Cap" },
    badges: ["High Detail Accuracy", "Machine Tested", "Fast Turnaround"],
  },
  {
    id: "construction-workwear",
    title: "Construction Company Logo",
    subtitle: "Workwear Uniform Embroidery",
    service: "Professional Embroidery Services",
    before: { type: "low-res-logo", label: "Low-Resolution Logo" },
    after: { type: "workwear-mockup", label: "Uniform Embroidery" },
    badges: ["Optimized Underlay", "Production Ready", "Clean Stitch Path"],
  },
  {
    id: "fashion-jacket",
    title: "Fashion Brand Artwork",
    subtitle: "Jacket Back Embroidery",
    service: "Embroidery Digitizing Services",
    before: { type: "complex-artwork", label: "Complex Artwork" },
    after: { type: "jacket-back", label: "Jacket Back Result" },
    badges: ["High Detail Accuracy", "Clean Stitch Path", "Machine Tested"],
  },
  {
    id: "military-pvc",
    title: "Military Style Design",
    subtitle: "PVC Patch Production",
    service: "Custom Patch Design",
    before: { type: "logo-original", label: "PNG Artwork" },
    after: { type: "pvc-patch", label: "PVC Patch" },
    badges: ["Production Ready", "High Detail Accuracy", "Fast Turnaround"],
  },
  {
    id: "school-woven",
    title: "School Logo",
    subtitle: "Woven Patch",
    service: "Custom Patch Design",
    before: { type: "logo-original", label: "Original Logo" },
    after: { type: "woven-patch", label: "Woven Patch" },
    badges: ["High Detail Accuracy", "Production Ready", "Clean Stitch Path"],
  },
  {
    id: "restaurant-apron",
    title: "Restaurant Logo",
    subtitle: "Apron Embroidery",
    service: "Logo Digitizing",
    before: { type: "screenshot-logo", label: "Screenshot Logo" },
    after: { type: "apron-mockup", label: "Apron Embroidery" },
    badges: ["Optimized Underlay", "Machine Tested", "Fast Turnaround"],
  },
  {
    id: "promo-cap",
    title: "Promotional Brand Artwork",
    subtitle: "Embroidered Cap",
    service: "Cap Digitizing",
    before: { type: "low-res-logo", label: "Low-Resolution Logo" },
    after: { type: "cap-mockup", label: "Embroidered Cap" },
    badges: ["Clean Stitch Path", "Production Ready", "Fast Turnaround"],
  },
];

export const beforeAfterTrustStats = [
  { label: "Files Delivered", display: "50,000+" },
  { label: "Client Retention", display: "95%" },
  { label: "Countries Served", display: "25+" },
  { label: "Turnaround", display: "3–4 Hours" },
] as const;

/** Homepage portfolio preview — CMS-ready structure */
export type PortfolioPreviewItem = {
  id: string;
  title: string;
  category: string;
  visual: VisualType;
  description: string;
};

export const portfolioPreviewItems: PortfolioPreviewItem[] = [
  {
    id: "pp-01",
    title: "Corporate Polo Left Chest",
    category: "Embroidery Digitizing",
    visual: "polo-mockup",
    description: "Hand-tuned underlay for pique knit with satin borders.",
  },
  {
    id: "pp-02",
    title: "Structured Cap Logo",
    category: "Cap Digitizing",
    visual: "cap-mockup",
    description: "Curved-panel sequencing for six-panel structured caps.",
  },
  {
    id: "pp-03",
    title: "Raised Foam Cap Mark",
    category: "3D Puff",
    visual: "cap-puff",
    description: "3D puff foam with clean satin outline and density control.",
  },
  {
    id: "pp-04",
    title: "Uniform Left Chest Program",
    category: "Left Chest Logos",
    visual: "embroidery-sample",
    description: "Consistent sizing across polos, oxfords, and soft shells.",
  },
  {
    id: "pp-05",
    title: "Team Jacket Full Back",
    category: "Jacket Backs",
    visual: "jacket-back",
    description: "Large-fill sequencing with stable underlay on outerwear.",
  },
  {
    id: "pp-06",
    title: "Outdoor Brand PVC Badge",
    category: "PVC Patches",
    visual: "pvc-patch",
    description: "Layer-separated vector art for molded rubber production.",
  },
  {
    id: "pp-07",
    title: "Varsity Chenille Letter",
    category: "Chenille Patches",
    visual: "chenille-patch",
    description: "Fuzzy chenille texture with chain-stitch borders.",
  },
  {
    id: "pp-08",
    title: "Uniform Woven Shoulder Mark",
    category: "Woven Patches",
    visual: "woven-patch",
    description: "Fine type and gradient detail at woven patch scale.",
  },
  {
    id: "pp-09",
    title: "Premium Leather Deboss Patch",
    category: "Leather Patches",
    visual: "leather-patch",
    description: "Heat-deboss artwork for bags, hats, and outerwear.",
  },
  {
    id: "pp-10",
    title: "Screen Print Vector Master",
    category: "Vector Art",
    visual: "vector-art",
    description: "Clean separations with embroidery-friendly paths.",
  },
  {
    id: "pp-11",
    title: "Healthcare Uniform Program",
    category: "Corporate Uniform Logos",
    visual: "polo-mockup",
    description: "Multi-garment brand consistency for 500+ piece rollout.",
  },
  {
    id: "pp-12",
    title: "Trade Show Promo Tote",
    category: "Promotional Products",
    visual: "promo-product",
    description: "Embroidery-ready artwork for bags, towels, and event merch.",
  },
];

export type WhyChooseIcon =
  | "manager"
  | "portal"
  | "lightning"
  | "patch"
  | "globe"
  | "shield"
  | "refresh"
  | "layers"
  | "headset"
  | "machine";

export const whyChooseHawkCards = [
  {
    id: "account-manager",
    icon: "manager" as const,
    title: "Dedicated Account Manager",
    description:
      "Work with a single point of contact who understands your business, orders, and production requirements.",
  },
  {
    id: "client-portal",
    icon: "portal" as const,
    title: "Client Portal Access",
    description:
      "Manage orders, download files, track progress, and access invoices from one centralized dashboard.",
  },
  {
    id: "fast-turnaround",
    icon: "lightning" as const,
    title: "Fast Turnaround",
    description:
      "Fastest turnaround in 3–4 hours, standard delivery within 12 hours, and rush orders available in 2 hours.",
  },
  {
    id: "patch-manufacturing",
    icon: "patch" as const,
    title: "Patch Manufacturing",
    description:
      "From artwork preparation to final production, we provide complete patch solutions under one roof.",
  },
  {
    id: "global-support",
    icon: "globe" as const,
    title: "Global Support",
    description:
      "Serving embroidery shops, brands, and distributors across multiple countries with responsive support.",
  },
  {
    id: "quality-assurance",
    icon: "shield" as const,
    title: "Quality Assurance",
    description:
      "Every file undergoes manual review and quality checks to ensure flawless production results.",
  },
  {
    id: "machine-sew-out",
    icon: "machine" as const,
    title: "Machine Sew-Out Verification",
    description:
      "Verify stitch quality before production with optional sew-out samples for complete peace of mind.",
  },
  {
    id: "revision-assistance",
    icon: "refresh" as const,
    title: "Revision Assistance",
    description:
      "Need adjustments? Our team works closely with you to achieve the perfect result.",
  },
  {
    id: "production-ready",
    icon: "layers" as const,
    title: "Production Ready Files",
    description:
      "Optimized stitch paths, proper underlay, and clean sequencing for smooth machine operation.",
  },
  {
    id: "customer-support",
    icon: "headset" as const,
    title: "24/7 Customer Support",
    description:
      "Our team is available whenever you need assistance, updates, or urgent production help.",
  },
] as const;

export const processVideos = [
  {
    id: "digitizing-process",
    title: "Digitizing Process",
    description:
      "Follow a logo from artwork upload through hand digitizing, run-sheet QA, and final machine-ready file delivery.",
    duration: "2:14",
  },
  {
    id: "patch-production",
    title: "Patch Production",
    description:
      "See how embroidered, woven, PVC, and chenille patch artwork moves from approved vector to factory sample.",
    duration: "3:02",
  },
  {
    id: "client-testimonial",
    title: "Client Testimonial",
    description:
      "Hear from an embroidery shop owner on turnaround speed, file quality, and dedicated account support.",
    duration: "1:48",
  },
] as const;
