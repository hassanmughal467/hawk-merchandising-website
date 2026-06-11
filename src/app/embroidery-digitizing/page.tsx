import { ServicePageShell } from "@/components/marketing/ServicePageShell";
import { getServicePage } from "@/lib/content/service-pages";
import { buildServicePageMetadata } from "@/lib/seo/metadata";

const content = getServicePage("embroidery-digitizing");

export const metadata = buildServicePageMetadata(content);

export default function EmbroideryDigitizingPage() {
  return <ServicePageShell content={content} />;
}
