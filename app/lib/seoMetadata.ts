import type { Metadata } from "next";
import {
  SITE_NAME,
  TWITTER_HANDLE,
  absoluteUrl,
  defaultOgImageUrl,
  getSiteUrl,
  KEYWORDS_BASE,
  KEYWORDS_BRAND,
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
  /** Set false for internal/utility routes. Defaults to true. */
  index?: boolean;
};

const defaultRobots: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
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
  index = true,
}: RouteMetaInput): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  const og = defaultOgImageUrl();
  const keywords = [
    ...(includeBrandKeywords ? KEYWORDS_BASE : KEYWORDS_WITHOUT_BRAND),
    ...extraKeywords,
  ];
  const canonicalAbsolute = absoluteUrl(canonical);
  const siteUrl = getSiteUrl();

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    authors: [{ name: SITE_NAME, url: siteUrl }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    robots: index ? defaultRobots : { index: false, follow: false, googleBot: { index: false, follow: false } },
    openGraph: {
      type: "website",
      title,
      description,
      url: canonicalAbsolute,
      siteName: SITE_NAME,
      locale: "en_IN",
      images: [
        {
          url: og,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title,
      description,
      images: [{ url: og, alt: title }],
    },
  };
}
