import { ServicePageShell } from "@/components/marketing/ServicePageShell";
import { getServicePage } from "@/lib/content/service-pages";
import { buildServicePageMetadata } from "@/lib/seo/metadata";

const content = getServicePage("cap-digitizing");

export const metadata = buildServicePageMetadata(content);

export default function CapDigitizingPage() {
  return <ServicePageShell content={content} />;
}
