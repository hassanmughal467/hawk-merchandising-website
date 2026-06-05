export const whyChooseHawk = [
  {
    title: "Production-first digitizing",
    body: "Every file is hand-tuned for real garments and machines—not auto-fill presets that break on the floor.",
  },
  {
    title: "Dedicated account support",
    body: "Direct communication with digitizers who understand caps, flats, jackets, and patch programs.",
  },
  {
    title: "Unlimited revisions",
    body: "We adjust until your sample runs right. No nickel-and-diming on reasonable production tweaks.",
  },
  {
    title: "Global delivery",
    body: "US and UK contact lines, WhatsApp support, and files delivered in the formats your vendors expect.",
  },
  {
    title: "Transparent turnaround",
    body: "Standard 24-hour delivery on most jobs—with rush options when your client deadline is tight.",
  },
  {
    title: "One partner, full pipeline",
    body: "Digitizing, vector conversion, logo redraw, and patch artwork under one roof for consistent brand output.",
  },
] as const;

export const fastTurnaround = {
  headline: "Fast turnaround without cutting corners",
  standard: "24 hours",
  rush: "Same-day / 12-hour rush on request",
  steps: [
    { step: "01", title: "Upload & brief", desc: "Artwork, garment, placement, thread colors, and deadline." },
    { step: "02", title: "Digitize & QA", desc: "Hand work plus run-sheet review against your machine and fabric." },
    { step: "03", title: "Deliver & revise", desc: "Production files with edits until your sample is approved." },
  ],
} as const;

export const industriesServed = [
  { name: "Embroidery shops", detail: "Caps, flats, jackets, and specialty fabrics" },
  { name: "Apparel brands", detail: "Seasonal collections and uniform programs" },
  { name: "Promotional distributors", detail: "Multi-SKU runs with consistent brand marks" },
  { name: "Screen print & decorators", detail: "Vector separations and embroidery-ready masters" },
  { name: "Sports & teams", detail: "League marks, numbers, and fan merch" },
  { name: "Corporate uniforms", detail: "Left-chest logos and name-badge programs" },
  { name: "Workwear & safety", detail: "High-visibility and durable garment placements" },
  { name: "E-commerce merch", detail: "Fast samples and scalable production files" },
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
