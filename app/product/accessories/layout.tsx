import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessories | InOps Solutions",
  description:
    "InOps access control accessories: Wireless Exit Button and Exit Push Button for request-to-exit and access control systems.",
};

export default function AccessoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
