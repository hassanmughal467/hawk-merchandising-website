export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQTopic = {
  id: string;
  title: string;
  items: FAQItem[];
};

export const faqTopics: FAQTopic[] = [
  {
    id: "digitizing",
    title: "Digitizing",
    items: [
      {
        question: "What file formats do you deliver for embroidery?",
        answer:
          "We deliver DST, PES, EXP, JEF, VP3, HUS, XXX, EMB, and other major machine formats on request. Tell us your machine and software when you upload.",
      },
      {
        question: "Do you digitize caps and curved panels?",
        answer:
          "Yes. Cap digitizing includes curved-panel sequencing, density control, and registration tuned for real cap frames—not flat-only presets.",
      },
      {
        question: "Can you match thread colors to my chart?",
        answer:
          "Share your Madeira, Isacord, or brand thread chart in your brief. We map colors to your specified system in the digitizing notes.",
      },
    ],
  },
  {
    id: "vector-artwork",
    title: "Vector Artwork",
    items: [
      {
        question: "What vector formats do you provide?",
        answer:
          "We deliver AI, EPS, PDF, SVG, and CDR depending on your workflow. Files are editable with clean paths suitable for print and embroidery prep.",
      },
      {
        question: "Can you convert a low-resolution logo to vector?",
        answer:
          "Yes. Logo redraw and raster-to-vector conversion rebuild blurry or pixelated marks into production-ready artwork with correct color breaks.",
      },
      {
        question: "Do you prepare artwork for screen print separations?",
        answer:
          "We provide vector separations and print-ready layers when your brief specifies screen print, heat transfer, or hybrid decoration workflows.",
      },
    ],
  },
  {
    id: "custom-patches",
    title: "Custom Patches",
    items: [
      {
        question: "What patch types do you support?",
        answer:
          "We prepare artwork for embroidered, woven, PVC, and chenille patches—including borders, color breaks, and sizing your factory expects.",
      },
      {
        question: "Can you help with patch sizing and borders?",
        answer:
          "Include target size, border style (merrow, heat-cut, laser), and backing type in your upload brief. We engineer artwork to those specs.",
      },
      {
        question: "Do you provide sample-ready patch files?",
        answer:
          "Yes. We deliver production-aware patch artwork with revision support until your sample is approved by your patch vendor.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing",
    items: [
      {
        question: "How is embroidery digitizing priced?",
        answer:
          "Pricing depends on stitch complexity, size, fabric type, and turnaround. Upload your artwork for an accurate quote—first-time clients can request a free sample.",
      },
      {
        question: "Do you offer volume pricing?",
        answer:
          "Yes. Shops and distributors with recurring volume receive account pricing. Contact us or use the client portal to discuss program rates.",
      },
      {
        question: "Are revisions included?",
        answer:
          "Reasonable production revisions are included. We adjust until your sample runs correctly without nickel-and-diming on standard production tweaks.",
      },
    ],
  },
  {
    id: "turnaround-times",
    title: "Turnaround Times",
    items: [
      {
        question: "What is your standard turnaround?",
        answer:
          "Our fastest turnaround is 3–4 hours on qualifying jobs. Standard delivery is within 12 hours of confirmed artwork and brief. Complex jobs may require a quoted timeline upfront.",
      },
      {
        question: "Do you offer rush service?",
        answer:
          "Yes. Rush embroidery digitizing is available in 2 hours on request. Mention your deadline when uploading so we can confirm feasibility immediately.",
      },
      {
        question: "What affects delivery time?",
        answer:
          "Artwork quality, revision rounds, job complexity, and queue volume affect timing. Clear briefs with garment and placement details speed delivery.",
      },
    ],
  },
  {
    id: "file-formats",
    title: "File Formats",
    items: [
      {
        question: "What should I upload?",
        answer:
          "Upload AI, EPS, PDF, PNG, JPG, or your best available artwork. If quality is low, select Logo Redraw and note the intended use in your brief.",
      },
      {
        question: "Is there a maximum file size?",
        answer:
          "The upload form accepts standard design files. For very large assets, contact us via WhatsApp or email and we will provide a secure transfer option.",
      },
      {
        question: "Can you work from a photo of an existing embroidery?",
        answer:
          "Yes, though a vector source or high-resolution flat artwork produces the best result. We will advise if redraw is recommended before digitizing.",
      },
    ],
  },
  {
    id: "rush-orders",
    title: "Rush Orders",
    items: [
      {
        question: "How do I request a rush job?",
        answer:
          "Select rush in your upload brief or message us on WhatsApp with your deadline, garment type, and artwork attached. We confirm availability before starting.",
      },
      {
        question: "Is rush available on weekends?",
        answer:
          "Rush availability depends on queue and complexity. Contact us with your exact deadline—we respond quickly with yes/no and a delivery window.",
      },
      {
        question: "Does rush cost extra?",
        answer:
          "Rush jobs may carry a priority fee based on complexity and slot availability. We quote the rush rate before work begins—no surprises.",
      },
    ],
  },
];

export function getAllFAQItems(): FAQItem[] {
  return faqTopics.flatMap((topic) => topic.items);
}

export function getFAQItemsByTopic(topicId: string): FAQItem[] {
  return faqTopics.find((t) => t.id === topicId)?.items ?? [];
}

export function getFAQPreview(count = 5): FAQItem[] {
  return getAllFAQItems().slice(0, count);
}
