"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const directions = ["left", "right", "top", "bottom"] as const;

function isLikelyHeroSection(el: Element): boolean {
  const cls = el.getAttribute("class") || "";
  if (/relative/.test(cls) && /min-h-\[(?:88vh|280px|300px|320px|340px|360px|380px|400px)\]/.test(cls)) {
    return true;
  }
  const p = el.parentElement;
  if (p?.classList.contains("min-h-screen") && p.firstElementChild === el) {
    return true;
  }
  return false;
}

export default function ScrollRevealEnhancer() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let teardown: (() => void) | undefined;
    let idleId: number | undefined;

    const run = () => {
      if (cancelled) return;

      const main = document.querySelector("main");
      if (!main) return;

      const sections = Array.from(main.querySelectorAll("section")).filter(
        (el) => !el.classList.contains("no-site-reveal") && !isLikelyHeroSection(el),
      );

      let ioIndex = 0;
      const cleanups: Array<() => void> = [];
      const imgs: HTMLImageElement[] = [];

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const t = entry.target as HTMLElement;
            t.classList.add("site-reveal-visible");
            io.unobserve(t);
          });
        },
        { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
      );

      sections.forEach((el, i) => {
        const html = el as HTMLElement;
        html.setAttribute("data-site-reveal-from", directions[i % 4]);
        html.classList.add("site-reveal-pending");
        html.style.transitionDelay = `${Math.min(ioIndex * 0.05, 0.45)}s`;
        ioIndex += 1;
        io.observe(html);

        cleanups.push(() => {
          io.unobserve(html);
          html.classList.remove("site-reveal-pending", "site-reveal-visible");
          html.removeAttribute("data-site-reveal-from");
          html.style.transitionDelay = "";
        });
      });

      main.querySelectorAll("section img").forEach((node) => {
        const img = node as HTMLImageElement;
        if (img.closest("[data-no-site-hover]")) return;
        if (img.getAttribute("alt") === "") return;
        img.classList.add("site-img-hover");
        imgs.push(img);
      });

      teardown = () => {
        io.disconnect();
        cleanups.forEach((fn) => fn());
        imgs.forEach((img) => img.classList.remove("site-img-hover"));
      };
    };

    const scheduleIdle =
      typeof requestIdleCallback === "function"
        ? (cb: () => void) => requestIdleCallback(cb, { timeout: 3000 })
        : (cb: () => void) => window.setTimeout(cb, 1500);

    const cancelIdle =
      typeof cancelIdleCallback === "function"
        ? (id: number) => cancelIdleCallback(id)
        : (id: number) => window.clearTimeout(id);

    idleId = scheduleIdle(run) as number;

    return () => {
      cancelled = true;
      if (idleId !== undefined) cancelIdle(idleId);
      teardown?.();
    };
  }, [pathname]);

  return null;
}
