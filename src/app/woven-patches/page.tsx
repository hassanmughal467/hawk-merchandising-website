import { ServicePageShell } from "@/components/marketing/ServicePageShell";
import { getServicePage } from "@/lib/content/service-pages";
import { buildServicePageMetadata } from "@/lib/seo/metadata";

const content = getServicePage("woven-patches");

export const metadata = buildServicePageMetadata(content);

export default function WovenPatchesPage() {
  return <ServicePageShell content={content} />;
}
