import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

const PAGE_TITLE = "HR Information System | Contract Labour & Compliance";
const PAGE_DESCRIPTION =
  "Contract labour management (CLMS) for Indian manufacturers: onboarding, gate compliance, biometric attendance, PF/ESI workflows, and contractor governance.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/hris",
  extraKeywords: ["CLMS India", "contract labour compliance", "contractor workforce software"],
});

export default function LabourManagementLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector path="/hris" pageTitle={PAGE_TITLE} pageDescription={PAGE_DESCRIPTION} />
      {children}
    </>
  );
}
