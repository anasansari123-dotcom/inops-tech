"use client";

import { useRef, useState } from "react";

export default function TiltCard({
  children,
  className = "",
  maxTilt = 10,
  scaleOnHover = 1.02,
  liftZ = 24,
}: {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scaleOnHover?: number;
  liftZ?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: -y * maxTilt,
      y: x * maxTilt,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, active: false });
  };

  const scale = tilt.active ? scaleOnHover : 1;
  const translateZ = tilt.active ? liftZ : 0;
  const rotateX = tilt.x;
  const rotateY = tilt.y;
  const transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`;

  // Dynamic shadow: deeper and offset when tilted for 3D depth
  const shadowX = Math.round(rotateY * 2);
  const shadowY = Math.round(rotateX * 2) + (tilt.active ? 12 : 8);
  const shadowBlur = tilt.active ? 32 : 20;
  const shadowSpread = tilt.active ? -4 : -2;
  const boxShadow = `0 ${shadowY}px ${shadowBlur}px ${shadowSpread}px rgba(0,0,0,0.12), ${shadowX}px 0 ${shadowBlur * 0.6}px ${shadowSpread}px rgba(0,0,0,0.08)`;

  return (
    <div
      ref={ref}
      className={`preserve-3d ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        boxShadow,
        transition: tilt.active
          ? "transform 0.12s ease-out, box-shadow 0.2s ease-out"
          : "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
