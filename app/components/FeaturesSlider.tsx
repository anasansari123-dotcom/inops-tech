"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const slides = [
  {
    title: "Transform Contract Labour Management With Smart Automation",
    features: [
      "Automated Alerts & Escalations — timely email notifications for compliance.",
      "Self-Service Contractor Portal — onboard, verify, and manage workers independently.",
      "Multi-Language Support — seamless workforce communication.",
      "e-KYC & Digital Documentation — paperless onboarding with Aadhaar, PAN, bank verification.",
      "Seamless ERP & Payroll Integration — sync with HRMS, ERP, and payroll systems.",
      "PF & ESIC Compliance — auto-tracks contributions and statutory submissions.",
      "Secure Cloud-Based Storage — encrypted, high-availability workforce records.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
  },
  {
    title: "Real-Time Visibility & Control Across Your Workforce",
    features: [
      "Live dashboards for attendance and deployment.",
      "Biometric & geo-tagged check-in/out.",
      "Automated wage calculations.",
      "Compliance-ready audit reports.",
      "Smart shift & workforce allocation tools.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
];

export default function FeaturesSlider() {
  const [current, setCurrent] = useState(0);

  const goNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const slide = slides[current];

  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-slate-800 rounded-2xl shadow-xl border border-slate-600 overflow-hidden">

          {/* MAIN FLEX LAYOUT - fly-in: text from left, image from right */}
          <div className="flex flex-col md:flex-row items-stretch">

            {/* LEFT CONTENT - flies in from left */}
            <motion.div
              className="flex-1 p-8 lg:p-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, ease: smoothEase }}
            >
              <motion.h2
                className="text-2xl lg:text-3xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, ease: smoothEase, delay: 0.05 }}
              >
                {slide.title}
              </motion.h2>

              <motion.ul
                className="mt-6 space-y-4"
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
                  },
                }}
              >
                {slide.features.map((text, i) => (
                  <motion.li
                    key={i}
                    className="flex gap-3"
                    variants={{
                      hidden: { opacity: 0, x: -16 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.5, ease: smoothEase }}
                  >
                    <motion.span
                      className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold"
                      animate={{ y: [-5, 5] }}
                      transition={{
                        duration: 3.2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: [0.65, 0, 0.35, 1],
                        delay: i * 0.08,
                      }}
                    >
                      ✓
                    </motion.span>
                    <span className="text-slate-300 text-sm lg:text-base leading-relaxed">
                      {text}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* RIGHT IMAGE - flies in from right */}
            <motion.div
              className="w-full md:w-[320px] flex-shrink-0 bg-slate-700/50 border-t md:border-t-0 md:border-l border-slate-600 p-4 flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, ease: smoothEase, delay: 0.15 }}
            >
              <div className="relative w-full h-[180px] rounded-xl overflow-hidden shadow-md">
                {/* Browser bar */}
                <div className="absolute top-0 left-0 right-0 h-7 bg-slate-600 flex items-center px-3 gap-2 z-10">
                  <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                </div>

                <Image
                  src={slide.imageUrl}
                  alt="Dashboard Preview"
                  fill
                  className="object-cover pt-7"
                />
              </div>
            </motion.div>

          </div>

          {/* NAVIGATION */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 bg-slate-50">

            {/* Dots */}
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-8 bg-cyan-600"
                      : "w-2 bg-slate-300"
                  }`}
                />
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={goPrev}
                className="h-9 w-9 rounded-full border border-slate-500 bg-slate-700 text-slate-300 hover:bg-cyan-500/20 hover:text-cyan-300 transition"
              >
                ‹
              </button>
              <button
                onClick={goNext}
                className="h-9 w-9 rounded-full border border-slate-500 bg-slate-700 text-slate-300 hover:bg-cyan-500/20 hover:text-cyan-300 transition"
              >
                ›
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}