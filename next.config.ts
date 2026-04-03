import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "museus.pa.gov.br",
      },
      {
        protocol: "https",
        hostname: "www.secult.pa.gov.br",
      },
    ],
  },
};

export default nextConfig;
