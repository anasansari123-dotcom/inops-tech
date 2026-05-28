import type { MetadataRoute } from "next";
import { blogPosts } from "@/app/lib/blogPosts";
import { SCHEMA_SITE_NAV_PAGES, getSiteUrl } from "@/app/lib/site";

const siteUrl = getSiteUrl();

type ChangeFreq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

/** Paths Google should treat as primary sitelink candidates (below homepage). */
const SITELINK_PATHS = new Set<string>(SCHEMA_SITE_NAV_PAGES.map((p) => p.path));

const routes: { path: string; priority: number; changeFrequency: ChangeFreq }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.55, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.5, changeFrequency: "weekly" },
  { path: "/brochures", priority: 0.45, changeFrequency: "monthly" },
  { path: "/face", priority: 0.8, changeFrequency: "monthly" },
  { path: "/turnstiles", priority: 0.65, changeFrequency: "monthly" },
  { path: "/accessories", priority: 0.6, changeFrequency: "monthly" },
  { path: "/cctv", priority: 0.6, changeFrequency: "monthly" },
  { path: "/canteen-and-visitor", priority: 0.6, changeFrequency: "monthly" },
  { path: "/clms", priority: 0.85, changeFrequency: "monthly" },
  { path: "/hris", priority: 0.7, changeFrequency: "monthly" },
  { path: "/mobile-app", priority: 0.6, changeFrequency: "monthly" },
  { path: "/enterprise-solution", priority: 0.6, changeFrequency: "monthly" },
  { path: "/ewa", priority: 0.85, changeFrequency: "monthly" },
  { path: "/visitor-management", priority: 0.6, changeFrequency: "monthly" },
  { path: "/fixed-asset-management", priority: 0.55, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
];

/** Boost sitemap priority for declared sitelink targets. */
function priorityFor(path: string, base: number): number {
  if (path === "/") return 1;
  return SITELINK_PATHS.has(path) ? Math.max(base, 0.8) : base;
}

const blogRoutes = blogPosts.map((post) => ({
  path: `/blog/${post.slug}`,
  priority: 0.4,
  changeFrequency: "monthly" as ChangeFreq,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [...routes, ...blogRoutes].map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority: priorityFor(path, priority),
  }));
}
