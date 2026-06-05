import { site } from "@/lib/site";

type JsonLd = Record<string, unknown>;

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function buildBreadcrumbSchema(items: BreadcrumbItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function serviceBreadcrumbs(serviceName: string, servicePath: string): BreadcrumbItem[] {
  return [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: serviceName, path: servicePath },
  ];
}
