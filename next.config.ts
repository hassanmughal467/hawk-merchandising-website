import type { NextConfig } from "next";
import { resourceFlags } from "./src/lib/content/resource-flags";

const nextConfig: NextConfig = {
  async redirects() {
    const featureRedirects = [
      ...(!resourceFlags.videos
        ? [
            {
              source: "/portfolio/videos",
              destination: "/portfolio",
              permanent: false,
            },
          ]
        : []),
      ...(!resourceFlags.freeDownloads
        ? [
            {
              source: "/free-downloads",
              destination: "/tips-and-tricks",
              permanent: false,
            },
          ]
        : []),
      ...(!resourceFlags.stockDesigns
        ? [
            {
              source: "/stock-designs",
              destination: "/tips-and-tricks",
              permanent: false,
            },
          ]
        : []),
    ];

    return [
      { source: "/digitizing", destination: "/embroidery-digitizing", permanent: true },
      { source: "/digitizing/:path*", destination: "/embroidery-digitizing", permanent: true },
      { source: "/vector", destination: "/vector-art-conversion", permanent: true },
      { source: "/patches", destination: "/custom-patches", permanent: true },
      ...featureRedirects,
    ];
  },
};

export default nextConfig;
