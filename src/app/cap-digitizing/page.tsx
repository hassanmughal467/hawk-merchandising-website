import type { Metadata } from "next";
import { ServicePageShell } from "@/components/marketing/ServicePageShell";
import { getServicePage } from "@/lib/content/service-pages";

const content = getServicePage("cap-digitizing");

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
};

export default function CapDigitizingPage() {
  return <ServicePageShell content={content} />;
}
