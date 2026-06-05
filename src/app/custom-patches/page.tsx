import type { Metadata } from "next";
import { ServiceLanding } from "@/components/marketing/ServiceLanding";
import { getServicePage } from "@/lib/content/service-pages";

const content = getServicePage("custom-patches");

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
};

export default function CustomPatchesPage() {
  return <ServiceLanding content={content} />;
}
