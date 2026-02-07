import { destinations } from "./data";

export default function sitemap() {
  const destinationUrls = destinations.map((d) => ({
    url: `https://dexit-mauve.vercel.app/destination/${d.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://dexit-mauve.vercel.app",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: "https://dexit-mauve.vercel.app/places",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...destinationUrls,
  ];
}
