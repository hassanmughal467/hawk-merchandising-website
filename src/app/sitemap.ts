import type { MetadataRoute } from "next";
import { publicRoutes, site } from "@/lib/site";
import { lastModifiedForRoute } from "@/lib/seo/route-lastmod";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  return publicRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified: lastModifiedForRoute(path),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1
        : path.startsWith("/embroidery") ||
            path.startsWith("/vector") ||
            path.startsWith("/custom")
          ? 0.9
          : 0.7,
  }));
}
