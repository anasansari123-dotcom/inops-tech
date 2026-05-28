import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/app/lib/site";

/**
 * Generates /robots.txt (Robots Exclusion Standard).
 * Do not add `host` — Lighthouse flags `Host:` as an unknown/invalid directive.
 */
export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/all-pages",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
