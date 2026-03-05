import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canteen Management System | InOps Solutions",
  description:
    "InOps Canteen Management System – streamline canteen operations, reduce discrepancies, and elevate the dining experience for your organization.",
};

export default function CanteenManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
