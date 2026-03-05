"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function GradientMeshBackground() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 120]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -80]);
  const y3 = useTransform(scrollY, [0, 600], [0, 60]);
  const meshY = useTransform(scrollY, [0, 500], [0, 40]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient mesh - parallax */}
      <motion.div
        className="absolute inset-0 gradient-mesh bg-[var(--background)]"
        style={{ y: meshY }}
      />
      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-dot-grid-light opacity-60" />
      {/* Floating orbs with parallax + gentle float */}
      <motion.div
        className="absolute left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px]"
        style={{ y: y1 }}
        animate={{
          x: [0, 15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: [0.65, 0, 0.35, 1] }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[10%] h-[400px] w-[400px] rounded-full bg-teal-500/15 blur-[100px]"
        style={{ y: y2 }}
        animate={{
          x: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: [0.65, 0, 0.35, 1] }}
      />
      <motion.div
        className="absolute right-[30%] top-[50%] h-[300px] w-[300px] rounded-full bg-sky-500/10 blur-[80px]"
        style={{ y: y3 }}
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: [0.65, 0, 0.35, 1] }}
      />
      <div className="noise-overlay absolute inset-0" />
    </div>
  );
}
