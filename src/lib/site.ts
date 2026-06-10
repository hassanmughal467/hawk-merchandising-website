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
  businessHours: "Monday–Friday, 8:00 AM – 6:00 PM ET",
  responseTime: "Same business day for most requests",
  clientPortal: {
    url: "https://admin.hawkmerchandising.com/",
    label: "Login",
  },
  clientSignup: {
    url: "https://admin.hawkmerchandising.com/auth/register",
    label: "Signup",
  },
} as const;

export const services = [
  {
    title: "Embroidery Digitizing",
    description:
      "Hand-tuned DST and machine files for logos, caps, jacket backs, and specialty fabrics—built for your floor.",
    href: "/embroidery-digitizing",
  },
  {
    title: "Vector Art Conversion",
    description:
      "Raster to vector with print-ready EPS, AI, PDF, and CDR—clean separations and embroidery-friendly paths.",
    href: "/vector-art-conversion",
  },
  {
    title: "Logo Redraw",
    description:
      "Rebuild blurry or outdated marks into one crisp master for embroidery, print, patches, and promo.",
    href: "/logo-redraw",
  },
  {
    title: "Custom Patches",
    description:
      "Embroidered, woven, PVC, and chenille patch artwork with borders and color breaks your factory expects.",
    href: "/custom-patches",
  },
  {
    title: "Woven Patches",
    description:
      "Fine detail and gradients when thread cannot hold the fidelity—woven artwork ready for sampling.",
    href: "/woven-patches",
  },
  {
    title: "PVC Patches",
    description:
      "Molded-style badges with production-aware color breaks and layer structure for PVC vendors.",
    href: "/pvc-patches",
  },
] as const;

export const serviceOptions = [
  "Embroidery Digitizing",
  "Vector Art Conversion",
  "Logo Redraw",
  "Custom Patches",
  "Woven Patches",
  "PVC Patches",
  "Promotional Products",
  "Stock Design Inquiry",
  "Other / Not sure",
] as const;

/** Primary navigation (always visible on desktop; full list on mobile) */
export const navPrimary = [
  { href: "/", label: "Home" },
  { href: "/embroidery-digitizing", label: "Digitizing" },
  { href: "/vector-art-conversion", label: "Vector" },
  { href: "/custom-patches", label: "Patches" },
  { href: "/promotional-products", label: "Promotional" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/services", label: "All Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/** SEO service pages (footer & sitemap) */
export const seoServicePages = [
  { href: "/embroidery-digitizing", label: "Embroidery Digitizing" },
  { href: "/vector-art-conversion", label: "Vector Art Conversion" },
  { href: "/logo-redraw", label: "Logo Redraw" },
  { href: "/custom-patches", label: "Custom Patches" },
  { href: "/woven-patches", label: "Woven Patches" },
  { href: "/pvc-patches", label: "PVC Patches" },
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
