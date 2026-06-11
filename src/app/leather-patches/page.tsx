import { ServicePageShell } from "@/components/marketing/ServicePageShell";
import { getServicePage } from "@/lib/content/service-pages";
import { buildServicePageMetadata } from "@/lib/seo/metadata";

const content = getServicePage("leather-patches");

export const metadata = buildServicePageMetadata(content);

export default function LeatherPatchesPage() {
  return <ServicePageShell content={content} />;
}
