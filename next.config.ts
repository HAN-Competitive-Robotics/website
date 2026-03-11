import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export
  output: "export",

  // Output directory
  distDir: "out",

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Trailing slash for cleaner URLs
  trailingSlash: true,
};

export default nextConfig;
