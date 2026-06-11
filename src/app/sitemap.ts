import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const paths = [
  "/",
  "/embroidery-digitizing",
  "/cap-digitizing",
  "/3d-puff-digitizing",
  "/jacket-back-digitizing",
  "/vector-art-conversion",
  "/logo-redraw",
  "/custom-patches",
  "/woven-patches",
  "/pvc-patches",
  "/chenille-patches",
  "/leather-patches",
  "/promotional-products",
  "/portfolio",
  "/portfolio/videos",
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
    priority: path === "/" ? 1 : path.startsWith("/embroidery") || path.startsWith("/vector") || path.startsWith("/custom") ? 0.9 : 0.7,
  }));
}
