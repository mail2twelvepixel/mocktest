import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/mocktest',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
