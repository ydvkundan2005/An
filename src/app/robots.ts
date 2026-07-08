import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api", "/private", "/docs/"],
      },
    ],
    sitemap: "https://aarab.vercel.app/sitemap.xml",
  };
}
