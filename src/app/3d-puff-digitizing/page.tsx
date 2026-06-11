import { ServicePageShell } from "@/components/marketing/ServicePageShell";
import { getServicePage } from "@/lib/content/service-pages";
import { buildServicePageMetadata } from "@/lib/seo/metadata";

const content = getServicePage("3d-puff-digitizing");

export const metadata = buildServicePageMetadata(content);

export default function ThreeDPuffDigitizingPage() {
  return <ServicePageShell content={content} />;
}
