import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const paths = [
  "/",
  "/digitizing",
  "/vector",
  "/patches",
  "/promotional-products",
  "/portfolio",
  "/pricing",
  "/services",
  "/about",
  "/contact",
  "/upload",
  "/awards",
  "/free-downloads",
  "/tips-and-tricks",
  "/stock-designs",
  "/terms",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
