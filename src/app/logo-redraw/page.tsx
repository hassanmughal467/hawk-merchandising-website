import { ServicePageShell } from "@/components/marketing/ServicePageShell";
import { getServicePage } from "@/lib/content/service-pages";
import { buildServicePageMetadata } from "@/lib/seo/metadata";

const content = getServicePage("logo-redraw");

export const metadata = buildServicePageMetadata(content);

export default function LogoRedrawPage() {
  return <ServicePageShell content={content} />;
}
