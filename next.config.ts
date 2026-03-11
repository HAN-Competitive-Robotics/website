import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Trailing slash for cleaner URLs
  trailingSlash: true,
};

export default nextConfig;
