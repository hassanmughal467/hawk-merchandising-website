import { site } from "@/lib/site";

type JsonLd = Record<string, unknown>;

export function buildOrganizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}${site.logo.src}`,
    description: site.description,
    email: site.email,
    telephone: [site.phoneUs, site.phoneUk],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: site.addressUs,
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: site.addressUk,
        addressCountry: "GB",
      },
    ],
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
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressUs,
      addressLocality: "Durham",
      addressRegion: "NC",
      postalCode: "27713",
      addressCountry: "US",
    },
    areaServed: ["US", "GB", "CA", "AU", "Worldwide"],
  };
}
