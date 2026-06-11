import { ServicePageShell } from "@/components/marketing/ServicePageShell";
import { getServicePage } from "@/lib/content/service-pages";
import { buildServicePageMetadata } from "@/lib/seo/metadata";

const content = getServicePage("vector-art-conversion");

export const metadata = buildServicePageMetadata(content);

export default function VectorArtConversionPage() {
  return <ServicePageShell content={content} />;
}
