import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // <=== Required for shared hosting without Node.js
  }
};

export default nextConfig;