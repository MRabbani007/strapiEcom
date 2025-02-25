import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "honest-surprise-ee6d3b6dd4.strapiapp.com", // Replace with your image source domain
      },
    ],
    domains: ["strapiapp.com"], // Allow external images from these domains
  },
};

export default nextConfig;
