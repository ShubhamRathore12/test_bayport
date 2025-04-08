import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      "images.unsplash.com",
      "ds5e5and3r3r0.cloudfront.net",
      "i.ibb.co",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
};

export default nextConfig;
