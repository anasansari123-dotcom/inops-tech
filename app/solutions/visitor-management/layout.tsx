import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visitor Management | InOps Solutions",
  description:
    "InOps Visitor Management System – revolutionize visitor tracking and security with a comprehensive suite of features for modern businesses.",
};

export default function VisitorManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
