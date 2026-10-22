import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://samuelmaucaille.dev",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
