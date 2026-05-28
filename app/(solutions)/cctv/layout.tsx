import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

const PAGE_TITLE = "Time & Attendance | Biometric T&A for Enterprise";
const PAGE_DESCRIPTION =
  "Biometric time and attendance for accurate shifts, overtime, and payroll-ready data. Trusted devices and software for factories, IT parks, and distributed sites.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/cctv",
  extraKeywords: ["attendance software India", "biometric T&A", "shift tracking enterprise"],
});

export default function TimeAndAttendanceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector path="/cctv" pageTitle={PAGE_TITLE} pageDescription={PAGE_DESCRIPTION} />
      {children}
    </>
  );
}
