import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 供 Dockerfile 多阶段构建使用；Vercel 托管会忽略此项影响
  output: "standalone",
};

export default nextConfig;
