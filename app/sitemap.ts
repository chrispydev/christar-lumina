import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://christarlumina.com",
      lastModified: new Date()
    },
    {
      url: "https://christarlumina.com/blog",
      lastModified: new Date()
    }
  ];
}
