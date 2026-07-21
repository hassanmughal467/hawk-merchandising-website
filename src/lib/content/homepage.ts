import { portfolioSrc } from "@/lib/content/portfolio-assets";

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
  visuals: { type?: VisualType; label: string; imageSrc?: string }[];
  layout: "split" | "single";
};

export const heroSlides: HeroSlide[] = [
  {
    id: "before-after",
    title: "Before vs After Digitizing",
    subtitle: "Original artwork transformed into production-ready embroidery files",
    layout: "single",
    visuals: [
      {
        label: "Before & After",
        imageSrc: portfolioSrc("BEFORE AND AFTER DIGITIZING.png"),
      },
    ],
  },
  {
    id: "polo",
    title: "Embroidered Polo Shirt",
    subtitle: "Left chest logo placement — crisp edges on pique knit",
    layout: "single",
    visuals: [
      {
        label: "Left Chest Logo",
        imageSrc: portfolioSrc("Corporate Polo Left Chest.jpeg"),
      },
    ],
  },
  {
    id: "cap-puff",
    title: "3D Puff Cap Embroidery",
    subtitle: "Raised foam dimension with clean satin borders",
    layout: "single",
    visuals: [
      {
        label: "3D Puff Embroidery",
        imageSrc: portfolioSrc("3D puff cap embroidery.png"),
      },
    ],
  },
  {
    id: "pvc",
    title: "Custom PVC Patch",
    subtitle: "Molded rubber badge with precise color breaks",
    layout: "single",
    visuals: [
      {
        label: "PVC Patch",
        imageSrc: portfolioSrc("custom PVC patch.png"),
      },
    ],
  },
  {
    id: "woven",
    title: "Woven Patch Program",
    subtitle: "Fine detail and gradients at patch scale",
    layout: "single",
    visuals: [
      {
        label: "Woven Patch",
        imageSrc: portfolioSrc("woven patch program.png"),
      },
    ],
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
  before: { type?: VisualType; label: string; imageSrc?: string };
  after: { type?: VisualType; label: string; imageSrc?: string };
  badges: ResultBadge[];
};

export const beforeAfterShowcase: BeforeAfterCard[] = [
  {
    id: "corporate-polo",
    title: "Corporate Logo",
    subtitle: "Left Chest Polo Embroidery",
    service: "Logo Digitizing",
    before: { label: "Original JPG", imageSrc: portfolioSrc("corporate logo before.jpg") },
    after: { label: "Digitized Result", imageSrc: portfolioSrc("corporate after logo.jpg") },
    badges: ["Clean Stitch Path", "Production Ready", "Optimized Underlay"],
  },
  {
    id: "sports-cap-puff",
    title: "Sports Team Logo",
    subtitle: "3D Puff Cap Embroidery",
    service: "Cap Digitizing",
    before: { label: "Original Logo", imageSrc: portfolioSrc("Sports Team Logo .png") },
    after: { label: "Digitized Result", imageSrc: portfolioSrc("Sports Team Logo after.png") },
    badges: ["High Detail Accuracy", "Machine Tested", "Fast Turnaround"],
  },
  {
    id: "construction-workwear",
    title: "Construction Company Logo",
    subtitle: "Workwear Uniform Embroidery",
    service: "Professional Embroidery Services",
    before: { label: "Low-Resolution Logo", imageSrc: portfolioSrc("contruction campany before.png") },
    after: { label: "Digitized Result", imageSrc: portfolioSrc("contruction logo after.png") },
    badges: ["Optimized Underlay", "Production Ready", "Clean Stitch Path"],
  },
  {
    id: "fashion-jacket",
    title: "Fashion Brand Artwork",
    subtitle: "Jacket Back Embroidery",
    service: "Embroidery Digitizing Services",
    before: { label: "Complex Artwork", imageSrc: portfolioSrc("Fashion Brand Artwork before.jpg") },
    after: { label: "Digitized Result", imageSrc: portfolioSrc("Fashion Brand Artwork after.png") },
    badges: ["High Detail Accuracy", "Clean Stitch Path", "Machine Tested"],
  },
  {
    id: "military-pvc",
    title: "Military Style Design",
    subtitle: "PVC Patch Production",
    service: "Custom Patch Design",
    before: { label: "PNG Artwork", imageSrc: portfolioSrc("Military Style Design before.png") },
    after: { label: "Digitized Result", imageSrc: portfolioSrc("Military Style Design after.png") },
    badges: ["Production Ready", "High Detail Accuracy", "Fast Turnaround"],
  },
  {
    id: "school-woven",
    title: "School Logo",
    subtitle: "Woven Patch",
    service: "Custom Patch Design",
    before: { label: "Original Logo", imageSrc: portfolioSrc("School Logo before.png") },
    after: { label: "Digitized Result", imageSrc: portfolioSrc("School Logo after.jpg") },
    badges: ["High Detail Accuracy", "Production Ready", "Clean Stitch Path"],
  },
  {
    id: "restaurant-apron",
    title: "Restaurant Logo",
    subtitle: "Apron Embroidery",
    service: "Logo Digitizing",
    before: { label: "Screenshot Logo", imageSrc: portfolioSrc("Restaurant Logo before.jpg") },
    after: { label: "Digitized Result", imageSrc: portfolioSrc("Restaurant Logo after.png") },
    badges: ["Optimized Underlay", "Machine Tested", "Fast Turnaround"],
  },
  {
    id: "promo-cap",
    title: "Promotional Brand Artwork",
    subtitle: "Embroidered Cap",
    service: "Cap Digitizing",
    before: { label: "Low-Resolution Logo", imageSrc: portfolioSrc("Promotional Brand Artwork before.JPG") },
    after: { label: "Digitized Result", imageSrc: portfolioSrc("Promotional Brand Artwork after.png") },
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
  visual?: VisualType;
  imageSrc: string;
  description: string;
};

export const portfolioPreviewItems: PortfolioPreviewItem[] = [
  {
    id: "pp-01",
    title: "Corporate Polo Left Chest",
    category: "Embroidery Digitizing",
    imageSrc: portfolioSrc("Corporate Polo Left Chest.jpeg"),
    description: "Hand-tuned underlay for pique knit with satin borders.",
  },
  {
    id: "pp-02",
    title: "Structured Cap Logo",
    category: "Cap Digitizing",
    imageSrc: portfolioSrc("Structured Cap Logo.png"),
    description: "Curved-panel sequencing for six-panel structured caps.",
  },
  {
    id: "pp-03",
    title: "Raised Foam Cap Mark",
    category: "3D Puff",
    imageSrc: portfolioSrc("Raised Foam Cap Mark.png"),
    description: "3D puff foam with clean satin outline and density control.",
  },
  {
    id: "pp-04",
    title: "Uniform Left Chest Program",
    category: "Left Chest Logos",
    imageSrc: portfolioSrc("Uniform Left Chest Program.png"),
    description: "Consistent sizing across polos, oxfords, and soft shells.",
  },
  {
    id: "pp-05",
    title: "Team Jacket Full Back",
    category: "Jacket Backs",
    imageSrc: portfolioSrc("Team Jacket Full Back.png"),
    description: "Large-fill sequencing with stable underlay on outerwear.",
  },
  {
    id: "pp-06",
    title: "Outdoor Brand PVC Badge",
    category: "PVC Patches",
    imageSrc: portfolioSrc("Outdoor Brand PVC Badge.png"),
    description: "Layer-separated vector art for molded rubber production.",
  },
  {
    id: "pp-07",
    title: "Varsity Chenille Letter",
    category: "Chenille Patches",
    imageSrc: portfolioSrc("Varsity Chenille Letter.png"),
    description: "Fuzzy chenille texture with chain-stitch borders.",
  },
  {
    id: "pp-08",
    title: "Uniform Woven Shoulder Mark",
    category: "Woven Patches",
    imageSrc: portfolioSrc("Uniform Woven Shoulder Mark.jpeg"),
    description: "Fine type and gradient detail at woven patch scale.",
  },
  {
    id: "pp-09",
    title: "Premium Leather Deboss Patch",
    category: "Leather Patches",
    imageSrc: portfolioSrc("Premium Leather Deboss Patch.png"),
    description: "Heat-deboss artwork for bags, hats, and outerwear.",
  },
  {
    id: "pp-10",
    title: "Screen Print Vector Master",
    category: "Vector Art",
    imageSrc: portfolioSrc("Screen Print Vector Master.jpeg"),
    description: "Clean separations with embroidery-friendly paths.",
  },
  {
    id: "pp-11",
    title: "Healthcare Uniform Program",
    category: "Corporate Uniform Logos",
    imageSrc: portfolioSrc("Healthcare Uniform Program.jfif"),
    description: "Multi-garment brand consistency for 500+ piece rollout.",
  },
  {
    id: "pp-12",
    title: "Trade Show Promo Tote",
    category: "Promotional Products",
    imageSrc: portfolioSrc("Trade Show Promo Tote.png"),
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
    src: portfolioSrc("Digitizing Process.mp4"),
  },
  {
    id: "patch-production",
    title: "Patch Production",
    description:
      "See how embroidered, woven, PVC, and chenille patch artwork moves from approved vector to factory sample.",
    duration: "3:02",
    src: portfolioSrc("Patch Production.mp4"),
  },
  {
    id: "client-testimonial",
    title: "Client Testimonial",
    description:
      "Hear from an embroidery shop owner on turnaround speed, file quality, and dedicated account support.",
    duration: "1:48",
    src: portfolioSrc("Customer project — corporate uniform program.mp4"),
  },
] as const;
