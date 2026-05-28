import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

const PAGE_TITLE = "Contract Labour Management | Payroll, PF/ESI & Attendance";
const PAGE_DESCRIPTION =
  "Automate contract labour payroll, PF/ESI compliance, and biometric attendance for Indian manufacturers — fewer errors, faster cycles, audit-ready reporting.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/clms",
  extraKeywords: ["payroll software India", "statutory compliance payroll", "attendance payroll integration", "CLMS India"],
});

export default function PayrollSolutionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector path="/clms" pageTitle={PAGE_TITLE} pageDescription={PAGE_DESCRIPTION} />
      {children}
    </>
  );
}
