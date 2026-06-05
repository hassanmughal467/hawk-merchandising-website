import type { Metadata } from "next";
import { ServicePageShell } from "@/components/marketing/ServicePageShell";
import { getServicePage } from "@/lib/content/service-pages";

const content = getServicePage("embroidery-digitizing");

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
};

export default function EmbroideryDigitizingPage() {
  return <ServicePageShell content={content} />;
}
