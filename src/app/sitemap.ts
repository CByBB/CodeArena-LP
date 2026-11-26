import type { MetadataRoute } from "next";
import { SITE_UPDATED_AT, SITE_URL } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = SITE_UPDATED_AT;

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [`${SITE_URL}/top-landscape.png`, `${SITE_URL}/top.png`],
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/contribute`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
  ];
}
