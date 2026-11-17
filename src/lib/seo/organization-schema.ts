import { site } from "@/lib/site";

type JsonLd = Record<string, unknown>;

function postalAddress(
  parts: {
    streetAddress: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode: string;
    addressCountry: string;
  },
): JsonLd {
  return {
    "@type": "PostalAddress",
    streetAddress: parts.streetAddress,
    addressLocality: parts.addressLocality,
    ...(parts.addressRegion ? { addressRegion: parts.addressRegion } : {}),
    postalCode: parts.postalCode,
    addressCountry: parts.addressCountry,
  };
}

export function buildOrganizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}${site.logo.src}`,
    description: site.description,
    email: site.email,
    foundingDate: site.foundingDate,
    telephone: [site.phoneUs, site.phoneUk],
    address: [postalAddress(site.addressUsParts), postalAddress(site.addressUkParts)],
    sameAs: [`https://wa.me/${site.whatsappE164}`],
  };
}

export function buildWebSiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: `${site.url}${site.logo.src}`,
    },
  };
}

export function buildLocalBusinessSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    image: `${site.url}${site.logo.src}`,
    url: site.url,
    telephone: site.phoneUs,
    email: site.email,
    description: site.description,
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    address: postalAddress(site.addressUsParts),
    areaServed: ["US", "GB", "CA", "AU", "Worldwide"],
  };
}
