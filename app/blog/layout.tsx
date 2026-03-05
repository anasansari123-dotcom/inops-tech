import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | InOps Solutions",
  description: "Insights on access control, biometric attendance, workforce management, and HR technology.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
