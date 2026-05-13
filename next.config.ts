import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/tieuphung-portfolio",
  assetPrefix: "/tieuphung-portfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;