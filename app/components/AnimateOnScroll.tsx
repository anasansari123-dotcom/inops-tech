"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "fade-up" | "fade" | "scale" | "slide-left" | "slide-right";

export default function AnimateOnScroll({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  delay?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
        else if (!once) setVisible(false);
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const variantClass = {
    "fade-up": "animate-in",
    fade: "animate-in-fade",
    scale: "animate-in-scale",
    "slide-left": "animate-in-left",
    "slide-right": "animate-in-right",
  }[variant];

  return (
    <div
      ref={ref}
      className={`${visible ? variantClass : "opacity-0 translate-y-8"} ${className}`}
      style={{
        animationDelay: visible ? `${delay}ms` : undefined,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
}
