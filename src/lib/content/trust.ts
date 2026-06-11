export const whyBusinessesChooseHawk = [
  {
    title: "Fast Turnaround",
    body: "Standard 24-hour delivery on most jobs, with same-day and 12-hour rush when your deadline cannot wait.",
    icon: "clock",
  },
  {
    title: "Production Ready Files",
    body: "Hand-tuned stitch paths, underlay, and trims built for real garments and machines—not auto-fill presets.",
    icon: "file",
  },
  {
    title: "Dedicated Support",
    body: "Direct access to digitizers and account support who understand caps, flats, jackets, and patch programs.",
    icon: "support",
  },
  {
    title: "Competitive Pricing",
    body: "Transparent rates with volume-friendly programs—no surprise fees on reasonable production revisions.",
    icon: "pricing",
  },
  {
    title: "Global Service",
    body: "US and UK contact lines, WhatsApp support, and files delivered in the formats your vendors expect worldwide.",
    icon: "globe",
  },
  {
    title: "Quality Assurance",
    body: "Every file passes run-sheet review against your garment, fabric, and machine spec before delivery.",
    icon: "shield",
  },
] as const;

/** @deprecated Use whyBusinessesChooseHawk */
export const whyChooseHawk = whyBusinessesChooseHawk.map(({ title, body }) => ({ title, body }));

export const trustBarItems = [
  { label: "Secure File Handling" },
  { label: "Fast Turnaround" },
  { label: "Professional Quality" },
  { label: "Dedicated Support" },
  { label: "Global Delivery" },
] as const;

export const siteStatistics = [
  { label: "Production files delivered", value: 50000, suffix: "+" },
  { label: "Client retention rate", value: 95, suffix: "%" },
  { label: "Countries served", value: 25, suffix: "+" },
  { label: "Average turnaround", value: 0, suffix: "", displayText: "12–24 hrs" },
] as const;

export const industriesServed = [
  {
    name: "Embroidery Shops",
    detail: "Caps, flats, jackets, and specialty fabrics for single-head and multi-head floors.",
  },
  {
    name: "Apparel Brands",
    detail: "Seasonal collections, merch drops, and scalable masters for embroidery-ready production.",
  },
  {
    name: "Uniform Manufacturers",
    detail: "Left-chest logos, name badges, and multi-garment programs with consistent brand output.",
  },
  {
    name: "Promotional Product Companies",
    detail: "Multi-SKU runs, distributor deadlines, and artwork that survives real decorator workflows.",
  },
  {
    name: "Sports Teams",
    detail: "Cap programs, jacket backs, and chenille marks with consistent sizing across team orders.",
  },
  {
    name: "Schools & Universities",
    detail: "Varsity patches, uniform logos, and spirit wear artwork for campus and alumni programs.",
  },
  {
    name: "Corporate Merchandise",
    detail: "Brand-consistent left-chest and full-back embroidery for employee and client gifting.",
  },
  {
    name: "Government Contractors",
    detail: "Secure file handling, spec-compliant artwork, and reliable turnaround for contract programs.",
  },
] as const;

export const countriesServed = [
  {
    name: "USA",
    detail: "Durham, NC headquarters with dedicated US phone support and rush options for domestic shops.",
    flag: "🇺🇸",
  },
  {
    name: "UK",
    detail: "London contact line and UK-friendly delivery windows for European embroidery and apparel programs.",
    flag: "🇬🇧",
  },
  {
    name: "Canada",
    detail: "Cross-border artwork delivery with formats and communication tuned for Canadian decorators.",
    flag: "🇨🇦",
  },
  {
    name: "Australia",
    detail: "Remote-friendly workflows with clear turnaround windows for APAC embroidery and uniform suppliers.",
    flag: "🇦🇺",
  },
  {
    name: "International Clients",
    detail: "WhatsApp, email, and portal access for global brands, distributors, and production partners.",
    flag: "🌍",
  },
] as const;

export const fastTurnaround = {
  headline: "How we deliver on deadline",
  standard: "24 hours",
  rush: "Same-day / 12-hour rush on request",
  steps: [
    { step: "01", title: "Upload & brief", desc: "Artwork, garment, placement, thread colors, and deadline." },
    { step: "02", title: "Digitize & QA", desc: "Hand work plus run-sheet review against your machine and fabric." },
    { step: "03", title: "Deliver & revise", desc: "Production files with edits until your sample is approved." },
  ],
} as const;

export const guaranteePoints = [
  {
    title: "Revision until it runs",
    body: "Reasonable production edits are included—we adjust until your sample stitches correctly on the floor.",
  },
  {
    title: "Clear communication",
    body: "If artwork needs a decision, we ask specific questions early so your deadline stays intact.",
  },
  {
    title: "Format compatibility",
    body: "Files delivered in the machine and vector formats your vendors and operators actually use.",
  },
] as const;

/** Architecture for real case studies — replace `ready: false` entries when assets are approved */
export const clientSuccessStories = [
  {
    id: "embroidery-shop-scale",
    industry: "Embroidery Shop",
    headline: "Cap program scaled without rework",
    summary:
      "A multi-head shop needed consistent cap files across a 40-logo program. Hawk delivered production-ready DST with unified underlay rules—sample approval in one run.",
    metrics: ["40-logo cap program", "Single-run sample approval", "24-hour file delivery"],
    service: "Embroidery Digitizing",
    ready: false,
  },
  {
    id: "uniform-brand-consistency",
    industry: "Uniform Manufacturer",
    headline: "Brand consistency across garment types",
    summary:
      "A uniform supplier required one master mark adapted for polos, jackets, and workwear. Vector redraw plus digitizing kept stitch behavior predictable across fabrics.",
    metrics: ["3 garment types", "One brand master", "Reduced revision cycles"],
    service: "Logo Redraw & Digitizing",
    ready: false,
  },
  {
    id: "promo-distributor-rush",
    industry: "Promotional Products",
    headline: "Rush turnaround for distributor deadline",
    summary:
      "A promo distributor faced a same-day client deadline. Rush digitizing and direct WhatsApp coordination delivered stitch-ready files before the production window closed.",
    metrics: ["Same-day rush delivery", "Direct account support", "Production on schedule"],
    service: "Embroidery Digitizing",
    ready: false,
  },
] as const;

/** Replace placeholder names with permitted client logo images in /public/images/clients/ */
export const clientLogos = [
  { name: "Atlas Apparel", permitted: true },
  { name: "Northline Embroidery", permitted: true },
  { name: "Meridian Promo", permitted: true },
  { name: "Vertex Sports", permitted: true },
  { name: "Ironwood Uniforms", permitted: true },
  { name: "Harbor Brands", permitted: true },
  { name: "Summit Stitch", permitted: false },
  { name: "Coastal Caps", permitted: false },
] as const;
