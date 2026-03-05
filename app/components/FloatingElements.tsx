"use client";

import { motion } from "framer-motion";

const shapes = [
  { size: 4, x: "15%", y: "30%", delay: 0, duration: 5 },
  { size: 3, x: "85%", y: "25%", delay: 1, duration: 6 },
  { size: 2, x: "70%", y: "70%", delay: 2, duration: 7 },
  { size: 3, x: "20%", y: "75%", delay: 0.5, duration: 5.5 },
  { size: 2, x: "50%", y: "15%", delay: 1.5, duration: 6.5 },
];

export default function FloatingElements() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-[1] overflow-hidden">
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-white/[0.06]"
          style={{
            width: s.size * 12,
            height: s.size * 12,
            left: s.x,
            top: s.y,
          }}
          animate={{
            y: [0, -12, 0],
            x: [0, 8, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: s.delay,
          }}
        />
      ))}
    </div>
  );
}
