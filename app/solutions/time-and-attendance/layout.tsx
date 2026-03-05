import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Time & Attendance | InOps Solutions",
  description:
    "Inopes Time & Attendance Biometric Device – streamline payroll, precise time tracking, and boost productivity. Benefits of attendance tracking software.",
};

export default function TimeAndAttendanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
