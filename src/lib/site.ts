export const site = {
  name: "Hawk Merchandising",
  tagline: "Digitizing & vector art for global brands",
  description:
    "Premium embroidery digitizing and vector art for embroidery businesses, apparel brands, and print shops. Fast turnaround, consistent quality, worldwide delivery.",
  url: "https://www.hawkmerchandising.com",
  logo: {
    src: "/images/hawk-merchandising-logo.png",
    alt: "Hawk Merchandising",
    width: 1024,
    height: 1024,
    icon: {
      src: "/images/hawk-merchandising-icon.png",
      width: 1024,
      height: 593,
    },
    light: {
      src: "/images/hawk-merchandising-logo-light.png",
      width: 1024,
      height: 1024,
    },
  },
  email: "info@hawkmerchandising.com",
  phoneUs: "+1 929-299-1866",
  phoneUk: "+44 20 3026 5676",
  whatsappE164: "19292991866",
  addressUs: "Torry Pine Lane, Durham, NC 27713, USA",
  addressUk: "22 Wenlock Rd, London N1 7GU, UK",
} as const;

export const services = [
  {
    title: "Logo Digitizing",
    description:
      "Crisp left-chest and brand marks tuned for production—clean trims, stable stitch counts, and files ready for your machines.",
    href: "/digitizing#logo",
  },
  {
    title: "Cap Digitizing",
    description:
      "Structured for curved panels—balanced density, minimal puckering, and cap-friendly underlay strategies.",
    href: "/digitizing#cap",
  },
  {
    title: "Jacket Back Digitizing",
    description:
      "Large-format embroidery with bold coverage, smooth blends, and detail that holds at scale.",
    href: "/digitizing#jacket-back",
  },
  {
    title: "Vector Conversion",
    description:
      "Print-ready EPS, AI, PDF, and CDR with clean nodes, consistent strokes, and separations when you need them.",
    href: "/vector",
  },
  {
    title: "Custom Patches",
    description:
      "Merrowed or laser-cut patch artwork with production-aware borders and colorways for retail-quality results.",
    href: "/patches",
  },
] as const;

export const serviceOptions = [
  "Logo Digitizing",
  "Cap Digitizing",
  "Jacket Back Digitizing",
  "Vector Conversion",
  "Custom Patches",
  "Promotional Products",
  "Stock Design Inquiry",
  "Other / Not sure",
] as const;

/** Primary navigation (always visible on desktop; full list on mobile) */
export const navPrimary = [
  { href: "/", label: "Home" },
  { href: "/digitizing", label: "Digitizing" },
  { href: "/vector", label: "Vector" },
  { href: "/patches", label: "Patches" },
  { href: "/promotional-products", label: "Promotional" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/services", label: "All Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/** Resources dropdown (reference-style: awards, downloads, tips, stock) */
export const navResources = [
  { href: "/awards", label: "Awards" },
  { href: "/free-downloads", label: "Free Downloads" },
  { href: "/tips-and-tricks", label: "Tips & Tricks" },
  { href: "/stock-designs", label: "Stock Designs" },
] as const;

/** Footer-only shortcuts */
export const navLegal = [
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
] as const;
