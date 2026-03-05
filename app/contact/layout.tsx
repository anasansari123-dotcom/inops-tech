import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | InOps Solutions",
  description: "Get in touch with InOps Solutions. Location, email, phone, and contact form.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
