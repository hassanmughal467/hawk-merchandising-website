import type { Metadata } from "next";
import { ServiceLanding } from "@/components/marketing/ServiceLanding";
import { getServicePage } from "@/lib/content/service-pages";

const content = getServicePage("embroidery-digitizing");

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
};

export default function EmbroideryDigitizingPage() {
  return <ServiceLanding content={content} />;
}
