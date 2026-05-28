import { jsonLdScriptProps } from "@/app/lib/jsonLd";
import { absoluteUrl, getSiteUrl } from "@/app/lib/site";

type BreadcrumbItem = { name: string; path: string };

type Props = {
  path: string;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
};

/**
 * WebPage + BreadcrumbList for inner routes — signals hierarchy under the root WebSite
 * (supports grouped sitelinks vs. separate brand SERP listings).
 */
export default function SecondaryPageJsonLd({
  path,
  title,
  description,
  breadcrumbs,
}: Props) {
  const siteUrl = getSiteUrl();
  const pageUrl = absoluteUrl(path);
  const crumbs: BreadcrumbItem[] = breadcrumbs ?? [
    { name: "Home", path: "/" },
    { name: title, path },
  ];

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: title,
      description,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${siteUrl}/#website` },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: crumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.path),
      })),
    },
  ];

  return <script {...jsonLdScriptProps({ "@context": "https://schema.org", "@graph": graph })} />;
}
