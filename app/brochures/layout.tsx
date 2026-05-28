import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "Product Brochures & Solution Guides",
  description:
    "Download brochures for biometric access control, turnstiles, visitor management, canteen, payroll, and workforce compliance ,  PDF resources.",
  path: "/brochures",
  extraKeywords: ["workforce PDF brochure", "workforce software datasheet", "CLMS brochure download"],
});

export default function BrochuresLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd path="/brochures" />
      {children}
    </>
  );
}
