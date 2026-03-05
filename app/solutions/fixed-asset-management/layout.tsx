import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fixed Asset Management | InOps Solutions",
  description:
    "InOps Fixed Asset Management (FAM) – simplify and streamline the management of your organization's valuable assets with comprehensive tracking and maintenance.",
};

export default function FixedAssetManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
