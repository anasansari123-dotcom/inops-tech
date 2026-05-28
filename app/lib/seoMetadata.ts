import type { Metadata } from "next";
import {
  defaultOgImageUrl,
  KEYWORDS_BASE,
  KEYWORDS_BRAND,
  SITE_NAME,
} from "@/app/lib/site";

type RouteMetaInput = {
  title: string;
  description: string;
  path: string;
  extraKeywords?: string[];
  /**
   * When false (default), omits "InOps" / "InOps Solutions" from meta keywords so inner pages
   * do not compete with the homepage on navigational brand queries.
   */
  includeBrandKeywords?: boolean;
};

const KEYWORDS_WITHOUT_BRAND = KEYWORDS_BASE.filter(
  (k) => !(KEYWORDS_BRAND as readonly string[]).includes(k),
);

/**
 * Per-route metadata with canonical URL, OG/Twitter, and keyword list (includes global + route terms).
 */
export function routeMetadata({
  title,
  description,
  path,
  extraKeywords = [],
  includeBrandKeywords = false,
}: RouteMetaInput): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  const og = defaultOgImageUrl();
  const keywords = [
    ...(includeBrandKeywords ? KEYWORDS_BASE : KEYWORDS_WITHOUT_BRAND),
    ...extraKeywords,
  ];

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      type: "website",
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_IN",
      images: [{ url: og, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [og],
    },
  };
}
