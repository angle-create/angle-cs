import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  // Cloudflare Pages用の設定
  experimental: {
    runtime: "edge",
  },
};

export default nextConfig;
