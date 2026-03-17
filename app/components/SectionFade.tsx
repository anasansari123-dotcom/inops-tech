"use client";

import { motion } from "framer-motion";

type SectionFadeProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  /** "default" = fade only; "3d" = perspective + rotateX entrance */
  effect?: "default" | "3d";
};

export default function SectionFade({
  children,
  id,
  className = "",
  effect = "default",
}: SectionFadeProps) {
  const Component = id ? motion.section : motion.div;
  const is3d = effect === "3d";
  return (
    <Component
      {...(id ? { id } : {})}
      className={className}
      initial={
        is3d
          ? { opacity: 0, y: 48, rotateX: 14 }
          : { opacity: 0.9 }
      }
      whileInView={
        is3d
          ? { opacity: 1, y: 0, rotateX: 0 }
          : { opacity: 1 }
      }
      viewport={{ once: true, amount: 0.08 }}
      transition={{
        duration: is3d ? 0.9 : 0.85,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={
        is3d
          ? { transformStyle: "preserve-3d", perspective: "1200px" }
          : undefined
      }
    >
      {children}
    </Component>
  );
}
