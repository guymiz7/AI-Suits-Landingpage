import type { MetadataRoute } from "next";

const SITE_URL = "https://guymiz7.github.io/AI-Suits-Landingpage";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
