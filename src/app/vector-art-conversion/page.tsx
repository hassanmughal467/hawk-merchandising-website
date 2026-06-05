import type { Metadata } from "next";
import { ServicePageShell } from "@/components/marketing/ServicePageShell";
import { getServicePage } from "@/lib/content/service-pages";

const content = getServicePage("vector-art-conversion");

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
};

export default function VectorArtConversionPage() {
  return <ServicePageShell content={content} />;
}
