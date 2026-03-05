import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brochures | InOps Solutions",
  description: "Download InOps product and solution brochures for access control, biometrics, visitor management, and more.",
};

export default function BrochuresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
