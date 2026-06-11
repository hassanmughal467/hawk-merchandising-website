import type { FAQItem } from "@/lib/content/faq";
import { getFAQItemsByTopic } from "@/lib/content/faq";
import { turnaroundTimes } from "@/lib/content/turnaround";
import { industriesServed } from "@/lib/content/trust";
import { services } from "@/lib/site";

export const digitizingServiceSlugs = [
  "embroidery-digitizing",
  "cap-digitizing",
  "3d-puff-digitizing",
  "jacket-back-digitizing",
] as const;

export function isDigitizingService(slug: string): boolean {
  return (digitizingServiceSlugs as readonly string[]).includes(slug);
}

export const defaultTurnaround = {
  fastest: turnaroundTimes.fastest,
  standard: turnaroundTimes.standard,
  rush: turnaroundTimes.rush,
  note: turnaroundTimes.note,
} as const;

export const serviceFaqTopics: Record<string, string[]> = {
  "embroidery-digitizing": ["digitizing", "turnaround-times", "rush-orders", "file-formats"],
  "cap-digitizing": ["digitizing", "turnaround-times", "rush-orders", "file-formats"],
  "3d-puff-digitizing": ["digitizing", "turnaround-times", "rush-orders", "file-formats"],
  "jacket-back-digitizing": ["digitizing", "turnaround-times", "rush-orders", "file-formats"],
  "vector-art-conversion": ["vector-artwork", "file-formats", "pricing", "turnaround-times"],
  "logo-redraw": ["vector-artwork", "file-formats", "pricing", "turnaround-times"],
  "custom-patches": ["custom-patches", "pricing", "turnaround-times", "file-formats"],
  "woven-patches": ["custom-patches", "turnaround-times", "pricing", "file-formats"],
  "pvc-patches": ["custom-patches", "vector-artwork", "turnaround-times", "file-formats"],
  "chenille-patches": ["custom-patches", "turnaround-times", "pricing", "file-formats"],
  "leather-patches": ["custom-patches", "vector-artwork", "turnaround-times", "file-formats"],
};

export function getServiceFAQItems(slug: string): FAQItem[] {
  const topics = serviceFaqTopics[slug] ?? ["pricing", "turnaround-times"];
  return topics.flatMap((topicId) => getFAQItemsByTopic(topicId)).slice(0, 6);
}

export function getRelatedServices(currentPath: string, count = 3) {
  return services.filter((s) => s.href !== currentPath).slice(0, count);
}

export const serviceIndustries = industriesServed;

export const serviceBenefits = [
  {
    title: "Hand-crafted production files",
    body: "Every job is manually digitized or vectorized—no generic auto-fill that breaks on your floor.",
  },
  {
    title: "Dedicated account support",
    body: "Direct communication with specialists who understand your machines, fabrics, and deadlines.",
  },
  {
    title: "Unlimited reasonable revisions",
    body: "We adjust until your sample runs correctly without surprise fees on standard production tweaks.",
  },
  {
    title: "Global delivery",
    body: "US and UK phone lines, WhatsApp, email, and client portal access for worldwide partners.",
  },
] as const;
