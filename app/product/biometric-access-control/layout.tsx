import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biometric Access Control | InOps Solutions",
  description:
    "Face Reader, Fingerprint Reader, and Card Reader solutions for robust security and streamlined access management. InOps biometric access control products.",
};

export default function BiometricAccessControlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
