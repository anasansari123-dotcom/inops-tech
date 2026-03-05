"use client";

import { motion } from "framer-motion";

type SectionFadeProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

export default function SectionFade({
  children,
  id,
  className = "",
}: SectionFadeProps) {
  const Component = id ? motion.section : motion.div;
  return (
    <Component
      {...(id ? { id } : {})}
      className={className}
      initial={{ opacity: 0.9 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </Component>
  );
}
