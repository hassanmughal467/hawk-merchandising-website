import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/digitizing", destination: "/embroidery-digitizing", permanent: true },
      { source: "/digitizing/:path*", destination: "/embroidery-digitizing", permanent: true },
      { source: "/vector", destination: "/vector-art-conversion", permanent: true },
      { source: "/patches", destination: "/custom-patches", permanent: true },
    ];
  },
};

export default nextConfig;
