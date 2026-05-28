import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

const PAGE_TITLE = "Canteen & Visitor Management | Meals & Guest Access";
const PAGE_DESCRIPTION =
  "Digital canteen and subsidy control, biometric meal counting, payroll-linked subsidies, inventory and waste tracking, contractor vs employee pricing. Headquartered in Bengaluru.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/canteen-and-visitor",
  extraKeywords: ["canteen management India", "meal subsidy software", "corporate cafeteria system"],
});

export default function CanteenManagementLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector
        path="/canteen-and-visitor"
        pageTitle={PAGE_TITLE}
        pageDescription={PAGE_DESCRIPTION}
      />
      {children}
    </>
  );
}
