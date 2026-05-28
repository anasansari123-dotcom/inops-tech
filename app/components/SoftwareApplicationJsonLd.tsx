import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/app/lib/site";

type Props = {
  name: string;
  description: string;
  path: string;
  pageTitle?: string;
};

export default function SoftwareApplicationJsonLd({ name, description, path }: Props) {
  const siteUrl = getSiteUrl();
  const url = absoluteUrl(path);
  const payload = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    isPartOf: { "@id": `${absoluteUrl(path)}#webpage` },
    mainEntityOfPage: { "@id": `${url}#webpage` },
    offers: {
      "@type": "Offer",
      url: absoluteUrl("/contact"),
      availability: "https://schema.org/OnlineOnly",
      seller: { "@id": `${siteUrl}/#organization` },
    },
    provider: { "@id": `${siteUrl}/#organization` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
