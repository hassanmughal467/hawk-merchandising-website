import { ServicePageShell } from "@/components/marketing/ServicePageShell";
import { getServicePage } from "@/lib/content/service-pages";
import { buildServicePageMetadata } from "@/lib/seo/metadata";

const content = getServicePage("jacket-back-digitizing");

export const metadata = buildServicePageMetadata(content);

export default function JacketBackDigitizingPage() {
  return <ServicePageShell content={content} />;
}
