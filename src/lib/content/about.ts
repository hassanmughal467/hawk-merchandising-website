import { countriesServed, industriesServed } from "@/lib/content/trust";

export const companyStory = {
  headline: "Built for production floors, not just portfolios",
  paragraphs: [
    "Hawk Merchandising started with a simple observation: embroidery shops lose margin when files fail at the machine. Auto-digitized presets and unclear communication create rework, missed deadlines, and unhappy end clients.",
    "We built a team of experienced digitizers and vector artists who think in stitch behavior, fabric push, and real decorator workflows. Today we partner with embroidery shops, uniform manufacturers, apparel brands, and promotional distributors across the US, UK, and worldwide.",
    "Our goal is not the fastest file on screen—it is the file your operator runs today, with revisions until your sample is approved.",
  ],
} as const;

export const mission = {
  headline: "Our mission",
  body: "Deliver production-ready digitizing and vector artwork with transparent turnaround, dedicated support, and quality that holds up on every garment type you run.",
} as const;

export const values = [
  {
    title: "Production integrity",
    body: "Every file is reviewed against garment, fabric, and machine context—not generic defaults.",
  },
  {
    title: "Clear communication",
    body: "We ask specific questions early so your deadline stays intact and revisions stay reasonable.",
  },
  {
    title: "Account partnership",
    body: "Long-term clients get consistent digitizers, portal access, and pricing that scales with volume.",
  },
  {
    title: "Continuous improvement",
    body: "We learn from sample feedback and floor results to refine underlay, density, and sequencing rules.",
  },
] as const;

export const whyClientsStay = [
  "Predictable stitch behavior on caps, flats, jackets, and specialty fabrics",
  "Direct access to digitizers who understand your machines and thread charts",
  "Unlimited reasonable revisions until production samples are approved",
  "One partner for digitizing, vector conversion, logo redraw, and patch artwork",
  "24-hour standard turnaround with rush options when deadlines tighten",
  "Client portal for order tracking, file downloads, and invoice history",
] as const;

export const productionWorkflow = [
  {
    step: "01",
    title: "Brief & artwork intake",
    desc: "Upload artwork with garment type, placement, thread colors, and deadline via form or portal.",
  },
  {
    step: "02",
    title: "Hand production work",
    desc: "Digitizers and vector artists build files tuned to your spec—not auto-fill shortcuts.",
  },
  {
    step: "03",
    title: "QA & run-sheet review",
    desc: "Internal review against fabric, size, and machine format before files reach you.",
  },
  {
    step: "04",
    title: "Delivery & revision loop",
    desc: "Production files delivered with edits until your sample stitches correctly on the floor.",
  },
] as const;

export const supportWorkflow = [
  {
    step: "01",
    title: "Dedicated account channel",
    desc: "Email, phone, WhatsApp, or portal messaging—your preferred channel, same team.",
  },
  {
    step: "02",
    title: "Proactive clarification",
    desc: "If artwork needs a decision, we reach out with specific options—not vague delays.",
  },
  {
    step: "03",
    title: "Rush coordination",
    desc: "Same-day and 12-hour slots confirmed upfront with clear delivery windows.",
  },
  {
    step: "04",
    title: "Post-delivery support",
    desc: "Revision requests handled with production context so fixes land fast.",
  },
] as const;

export const aboutIndustries = industriesServed;
export const aboutCountries = countriesServed;
