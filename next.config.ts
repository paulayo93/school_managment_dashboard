import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{protocol: 'https', hostname: "images.pixels.com"}],
  },
};

export default nextConfig;
