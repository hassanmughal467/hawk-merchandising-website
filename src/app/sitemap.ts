import type { MetadataRoute } from "next";
import { publicRoutes, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  return publicRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/embroidery") || path.startsWith("/vector") || path.startsWith("/custom") ? 0.9 : 0.7,
  }));
}
