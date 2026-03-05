import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payroll Solutions | InOps Solutions",
  description:
    "InOps Payroll Solutions – simplify payroll administration, enhance accuracy, and ensure compliance with comprehensive payroll software features.",
};

export default function PayrollSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
