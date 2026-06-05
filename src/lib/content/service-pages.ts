export type ServiceFeature = {
  title: string;
  body: string;
};

export type ServicePageContent = {
  slug: string;
  path: string;
  metadata: { title: string; description: string };
  eyebrow: string;
  title: string;
  subtitle: string;
  features: ServiceFeature[];
  deliverables?: string[];
  processSteps?: { step: string; title: string; desc: string }[];
  relatedLinks?: { href: string; label: string }[];
  portfolioCategory?: "embroidery-digitizing" | "vector-conversion" | "custom-patches";
};

export const servicePages: Record<string, ServicePageContent> = {
  "embroidery-digitizing": {
    slug: "embroidery-digitizing",
    path: "/embroidery-digitizing",
    metadata: {
      title: "Embroidery Digitizing Services",
      description:
        "Professional embroidery digitizing for logos, caps, jacket backs, towels, and appliqué. Hand-tuned DST, PES, and major machine formats with 24-hour turnaround.",
    },
    eyebrow: "Embroidery Digitizing",
    title: "Hand-digitized embroidery files for serious production",
    subtitle:
      "Hawk Merchandising converts your artwork into stitch-ready files tuned for your garment, fabric, and machine—not generic auto-fill presets.",
    features: [
      {
        title: "Logo & left-chest digitizing",
        body: "Brand marks with production-grade underlay, crisp edges, and trims that keep your operators moving.",
      },
      {
        title: "Cap & hat digitizing",
        body: "Curved-panel friendly sequencing, density control, and registration that survives real cap frames.",
      },
      {
        title: "Jacket back & large runs",
        body: "Large fills, gradients, and detail that scales—without excessive stitch counts or unstable areas.",
      },
      {
        title: "Towel & specialty fabrics",
        body: "Looped textures and lofty goods digitized to reduce push-through and thread breaks.",
      },
      {
        title: "Appliqué & puff options",
        body: "When your brief calls for dimension, we engineer paths and offsets for clean results on the machine.",
      },
    ],
    deliverables: ["DST", "PES", "EXP", "JEF", "VP3", "HUS", "XXX", "EMB", "More on request"],
    processSteps: [
      { step: "01", title: "Upload & brief", desc: "Artwork, garment, placement, and deadline." },
      { step: "02", title: "Digitize & QA", desc: "Hand work + run-sheet checks against your spec." },
      { step: "03", title: "Deliver & revise", desc: "Files plus edits until it runs right in production." },
    ],
    relatedLinks: [
      { href: "/portfolio?category=embroidery-digitizing", label: "View digitizing portfolio" },
      { href: "/portfolio/videos", label: "Watch production videos" },
    ],
    portfolioCategory: "embroidery-digitizing",
  },
  "vector-art-conversion": {
    slug: "vector-art-conversion",
    path: "/vector-art-conversion",
    metadata: {
      title: "Vector Art Conversion",
      description:
        "Raster to vector conversion, screen-print separations, and embroidery-ready vector artwork. EPS, AI, PDF, and CDR delivery.",
    },
    eyebrow: "Vector Art Conversion",
    title: "Vector art that survives printing—not just zooming in",
    subtitle:
      "Editable vector artwork for screen print, heat transfer, signage, and production digitizing workflows.",
    features: [
      {
        title: "Raster to vector",
        body: "Low-resolution logos and scans rebuilt as crisp line art—ready for enlargement, vinyl, or print.",
      },
      {
        title: "Screen print separations",
        body: "Spot channels, traps, and underbases coordinated with how your decorator actually produces.",
      },
      {
        title: "Embroidery-ready vectors",
        body: "When vector art feeds digitizing, we keep paths efficient so conversion to stitches stays predictable.",
      },
      {
        title: "Merch & retail packaging",
        body: "Consistent brand marks across labels, hang tags, and promo graphics with locked color systems.",
      },
    ],
    deliverables: [
      "Adobe Illustrator (AI)",
      "EPS",
      "PDF",
      "PSD (as needed)",
      "CorelDRAW (CDR)",
    ],
    relatedLinks: [
      { href: "/portfolio?category=vector-conversion", label: "Before / after vector work" },
      { href: "/logo-redraw", label: "Logo redraw services" },
    ],
    portfolioCategory: "vector-conversion",
  },
  "custom-patches": {
    slug: "custom-patches",
    path: "/custom-patches",
    metadata: {
      title: "Custom Patches",
      description:
        "Custom embroidered, woven, PVC, and chenille patch artwork—borders, color breaks, and factory-ready files for your patch vendor.",
    },
    eyebrow: "Custom Patches",
    title: "Patch programs engineered for manufacturing",
    subtitle:
      "Patch artwork with borders, sew allowances, and color systems aligned to how your factory actually builds.",
    features: [
      {
        title: "Embroidered patches",
        body: "Classic thread depth and texture—ideal for uniforms, headwear, and retail merch with a traditional look.",
      },
      {
        title: "Woven & chenille patches",
        body: "Fine detail, gradients, and texture when embroidery thread cannot hold the fidelity you need.",
      },
      {
        title: "PVC / rubber badges",
        body: "Molded-style branding with vector-ready art and color breaks suited to vendor specs.",
      },
      {
        title: "Heat-seal & merrow borders",
        body: "Border styles and backing options documented so your vendor quotes and samples stay accurate.",
      },
    ],
    relatedLinks: [
      { href: "/woven-patches", label: "Woven patches" },
      { href: "/pvc-patches", label: "PVC patches" },
      { href: "/portfolio?category=custom-patches", label: "Patch portfolio" },
    ],
    portfolioCategory: "custom-patches",
  },
  "woven-patches": {
    slug: "woven-patches",
    path: "/woven-patches",
    metadata: {
      title: "Woven Patches",
      description:
        "Woven patch artwork with fine detail, gradients, and factory-ready color breaks for uniform and retail programs.",
    },
    eyebrow: "Woven Patches",
    title: "Woven patches for detail embroidery cannot match",
    subtitle:
      "When thread count limits your logo, woven construction delivers crisp type, gradients, and small elements at patch scale.",
    features: [
      {
        title: "Fine text & micro detail",
        body: "Small type, thin lines, and complex marks reproduced with weave clarity—not heavy stitch stacks.",
      },
      {
        title: "Gradient & photographic elements",
        body: "Smooth blends and multi-tone artwork prepared with realistic color breaks for your woven vendor.",
      },
      {
        title: "Uniform & team programs",
        body: "Consistent sizing and color systems across name badges, shoulder marks, and chest patches.",
      },
    ],
    relatedLinks: [
      { href: "/custom-patches", label: "All patch types" },
      { href: "/portfolio?category=custom-patches", label: "Woven patch examples" },
    ],
    portfolioCategory: "custom-patches",
  },
  "pvc-patches": {
    slug: "pvc-patches",
    path: "/pvc-patches",
    metadata: {
      title: "PVC Patches",
      description:
        "PVC and rubber-style patch artwork with clean color breaks, layer structure, and vendor-ready vector files.",
    },
    eyebrow: "PVC Patches",
    title: "PVC patches with production-aware artwork",
    subtitle:
      "Molded patch programs need precise color breaks and layer separation—we deliver vector masters your PVC factory can run.",
    features: [
      {
        title: "Color break planning",
        body: "Each mold layer mapped with clear separations so sampling and production stay predictable.",
      },
      {
        title: "3D-style dimension",
        body: "Raised elements, bevels, and outline weights designed within your vendor's molding limits.",
      },
      {
        title: "Outdoor & tactical brands",
        body: "Durable marks for bags, hats, and gear where PVC outlasts traditional thread on harsh use.",
      },
    ],
    deliverables: ["AI / EPS vector", "PDF proof", "Pantone or thread-matched colors", "Size spec sheet"],
    relatedLinks: [
      { href: "/vector-art-conversion", label: "Vector art conversion" },
      { href: "/portfolio/videos", label: "Patch production videos" },
    ],
    portfolioCategory: "custom-patches",
  },
  "logo-redraw": {
    slug: "logo-redraw",
    path: "/logo-redraw",
    metadata: {
      title: "Logo Redraw Services",
      description:
        "Professional logo redraw and cleanup for print, embroidery, patches, and digital—rebuild blurry or outdated artwork as crisp masters.",
    },
    eyebrow: "Logo Redraw",
    title: "Logo redraws that unify every vendor",
    subtitle:
      "One accurate master logo for embroidery, screen print, patches, and promo—so your brand looks the same everywhere.",
    features: [
      {
        title: "Low-resolution rescue",
        body: "Blurry scans, faxed logos, and social-media grabs rebuilt as sharp vector art.",
      },
      {
        title: "Brand consistency",
        body: "Stroke weights, clear space, and color systems locked for multi-vendor production.",
      },
      {
        title: "Embroidery & patch ready",
        body: "Redraws consider stitch behavior and patch borders—not just how the mark looks on screen.",
      },
      {
        title: "Rebrand support",
        body: "Update legacy marks for new seasons while preserving recognition and trademark shapes.",
      },
    ],
    deliverables: ["AI / EPS master", "PDF proof", "PNG exports", "Optional digitizing handoff"],
    relatedLinks: [
      { href: "/vector-art-conversion", label: "Vector conversion" },
      { href: "/embroidery-digitizing", label: "Embroidery digitizing" },
    ],
    portfolioCategory: "vector-conversion",
  },
};

export function getServicePage(slug: keyof typeof servicePages): ServicePageContent {
  return servicePages[slug];
}
