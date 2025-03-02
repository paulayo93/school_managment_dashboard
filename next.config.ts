import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{hostname: "images.pixels.com"}],
  },
};

export default nextConfig;
