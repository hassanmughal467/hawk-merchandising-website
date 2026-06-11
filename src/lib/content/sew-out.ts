export const sewOutImages = {
  hero: "/images/sew-out/sew-out-hero.png",
  artworkBefore: "/images/sew-out/sew-out-artwork-before.png",
  leftChest: "/images/sew-out/sew-out-left-chest.png",
  cap: "/images/sew-out/sew-out-cap.png",
  jacketBack: "/images/sew-out/sew-out-jacket-back.png",
  smallText: "/images/sew-out/sew-out-small-text.png",
  puff3d: "/images/sew-out/sew-out-3d-puff.png",
} as const;

export const heroQualityCard = {
  title: "Machine Sew-Out Verification Available",
  description:
    "Need extra confidence before production? We can provide a machine sew-out sample to verify stitch quality, density, underlay, and overall embroidery performance.",
  badges: ["Quality Tested", "Production Ready"] as const,
  image: sewOutImages.hero,
  imageAlt: "Machine sew-out sample showing embroidered logo on stabilizer backing",
} as const;

export const sewOutWorkflow = {
  title: "From Artwork to Verified Production",
  subtitle: "Machine Sew-Out Verification Workflow",
  caption: "Artwork → Digitizing → Sew-Out Verification → Production",
  before: {
    label: "Customer Logo Artwork",
    image: sewOutImages.artworkBefore,
    imageAlt: "Customer logo artwork submitted for embroidery digitizing",
  },
  after: {
    label: "Actual Embroidered Sew-Out Sample",
    image: sewOutImages.hero,
    imageAlt: "Actual machine sew-out sample with embroidered logo on backing",
  },
  badges: ["Quality Tested", "Production Ready", "Machine Verified"] as const,
} as const;

export const productionTestedSection = {
  title: "Every Design Is Production Tested",
  content:
    "Our digitizers create production-ready files with optimized stitch paths, proper underlay, balanced densities, and clean sequencing. Upon request, we can also provide machine sew-out samples to ensure your design performs exactly as expected before production begins.",
  image: sewOutImages.hero,
  imageAlt: "Quality verified machine sew-out sample with professional embroidery finish",
  checklist: [
    "Production Ready",
    "Optimized Stitch Path",
    "Density Checked",
    "Underlay Optimized",
    "Lettering Verified",
    "Machine Sew-Out Available",
  ] as const,
} as const;

export const machineSewOutServiceBlock = {
  heading: "Optional Machine Sew-Out Service",
  text: "For customers seeking maximum quality assurance, we can provide machine sew-out samples before production. This helps verify embroidery performance and ensures complete satisfaction before your machines begin running the final design.",
  image: sewOutImages.leftChest,
  imageAlt: "Left chest logo machine sew-out sample on embroidery backing",
} as const;

export const pricingConfidenceBlock = {
  heading: "Need Complete Confidence Before Production?",
  text: "For customers requiring additional quality verification, we can provide machine sew-out samples before production. This allows you to review stitch quality, lettering clarity, density, and overall embroidery performance before running the design on your machines.",
  image: sewOutImages.hero,
  imageAlt: "Quality verified sew-out sample showing professional embroidery finish",
  label: "Quality Verified Sew-Out Sample",
} as const;

export const sewOutPortfolioSamples = [
  {
    id: "sew-left-chest",
    title: "Left Chest Logo Sew-Out",
    image: sewOutImages.leftChest,
    imageAlt: "Left chest logo machine sew-out sample on stabilizer backing",
  },
  {
    id: "sew-cap",
    title: "Cap Logo Sew-Out",
    image: sewOutImages.cap,
    imageAlt: "Cap logo machine sew-out sample on structured cap panel",
  },
  {
    id: "sew-jacket-back",
    title: "Jacket Back Sew-Out",
    image: sewOutImages.jacketBack,
    imageAlt: "Jacket back embroidery machine sew-out sample",
  },
  {
    id: "sew-small-text",
    title: "Small Text Sew-Out",
    image: sewOutImages.smallText,
    imageAlt: "Small text embroidery sew-out close-up sample",
  },
  {
    id: "sew-3d-puff",
    title: "3D Puff Sew-Out",
    image: sewOutImages.puff3d,
    imageAlt: "3D puff embroidery machine sew-out sample",
  },
] as const;
