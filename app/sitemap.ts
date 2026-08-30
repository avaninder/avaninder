import type { MetadataRoute } from "next";

const BASE_URL = "https://www.avaninder.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: BASE_URL, lastModified: now, priority: 1 },
    { url: `${BASE_URL}/photography`, lastModified: now, priority: 0.7 },
    { url: `${BASE_URL}/senior_project`, lastModified: now, priority: 0.5 },
  ];
}
