import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/tieuphung-portfolio" : "",
  assetPrefix: isProd ? "/tieuphung-portfolio/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/tieuphung-portfolio" : "",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;