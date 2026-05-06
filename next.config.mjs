/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repo = "AI-Suits-Landingpage";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  // Allow extra time for Google Fonts fetch during static export
  staticPageGenerationTimeout: 300,
};

export default nextConfig;
