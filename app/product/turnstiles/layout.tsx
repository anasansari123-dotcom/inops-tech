import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Turnstiles | InOps Solutions",
  description:
    "InOps tripod turnstiles: single-lane, stainless steel, smooth and silent operation. Compact design for small workspaces.",
};

export default function TurnstilesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
