import type { ServicePageContent } from "@/lib/content/service-pages";
import { site } from "@/lib/site";

type JsonLd = Record<string, unknown>;

export function buildServiceSchema(content: ServicePageContent): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.metadata.title,
    description: content.metadata.description,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    areaServed: ["US", "GB", "CA", "AU", "Worldwide"],
    url: `${site.url}${content.path}`,
    serviceType: content.eyebrow,
  };
}
