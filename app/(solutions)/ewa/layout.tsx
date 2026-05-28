import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

const PAGE_TITLE = "Earned Wage Access (EWA) | On-Demand Wages for Factory Workers";
const PAGE_DESCRIPTION =
  "Payroll-connected earned wage access (EWA) for industrial workforces: on-demand earned wages, attendance validation, and compliant controls.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/ewa",
  extraKeywords: ["earned wage access", "EWA India", "salary advance factory workers", "financial wellness"],
});

export default function EwaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector path="/ewa" pageTitle={PAGE_TITLE} pageDescription={PAGE_DESCRIPTION} />
      {children}
    </>
  );
}
