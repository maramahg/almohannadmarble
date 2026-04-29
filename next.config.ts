import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'almohannad.s3.eu-north-1.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
