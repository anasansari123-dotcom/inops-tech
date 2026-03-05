import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | InOps Solutions",
  description: "About InOps Solutions – Empowering business digitalization with dedicated partnership, end-to-end automation, and excellence in technology.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
