import ProductSchemaInjector from "@/app/components/ProductSchemaInjector";
import SecondaryPageJsonLd from "@/app/components/SecondaryPageJsonLd";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

const PAGE_TITLE = "Biometric Access Control | Face Readers & Turnstiles";
const PAGE_DESCRIPTION =
  "Biometric access control for enterprise: face and fingerprint readers, turnstiles, card readers, and attendance integration for Indian industrial sites.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/face",
  extraKeywords: ["face recognition access control India", "turnstile biometric", "industrial access control"],
});

export default function BiometricAccessControlLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SecondaryPageJsonLd path="/face" title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <ProductSchemaInjector path="/face" />
      {children}
    </>
  );
}
