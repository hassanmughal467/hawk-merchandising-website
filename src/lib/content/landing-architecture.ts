import { countriesServed, industriesServed } from "@/lib/content/trust";
import { services } from "@/lib/site";

/** Content architecture for future industry landing pages — no routes added yet */
export const industryLandingPages = industriesServed.map((industry) => ({
  slug: industry.name.toLowerCase().replace(/\s+/g, "-"),
  name: industry.name,
  headline: `${industry.name} — production-ready digitizing & vector art`,
  description: industry.detail,
  relatedServices: services.slice(0, 4).map((s) => ({ href: s.href, label: s.title })),
}));

/** Content architecture for future country landing pages — no routes added yet */
export const countryLandingPages = countriesServed.map((country) => ({
  slug: country.name.toLowerCase().replace(/\s+/g, "-"),
  name: country.name,
  headline: `Embroidery digitizing & vector art for ${country.name}`,
  description: country.detail,
  relatedServices: services.slice(0, 3).map((s) => ({ href: s.href, label: s.title })),
}));
