import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Labour Management Software | InOps Solutions",
  description:
    "InOps Labour Management Software – streamline workforce management, optimize productivity, and gain insights into labor costs and staffing.",
};

export default function LabourManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
