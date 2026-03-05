"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import GradientMeshBackground from "./components/GradientMeshBackground";
import FloatingElements from "./components/FloatingElements";
import { FadeUp, StaggerContainer, StaggerItem } from "./components/MotionSection";
import { AnimatedSection, AnimatedHeading, AnimatedParagraph, AnimatedCardGrid, AnimatedCardItem } from "./components/AnimatedSection";
import FeaturesSlider from "./components/FeaturesSlider";
import ModulesSlider from "./components/ModulesSlider";
import IndustriesSlider from "./components/IndustriesSlider";
import BrandsSlider from "./components/BrandsSlider";
import ContactForm from "./components/ContactForm";
import TiltCard from "./components/TiltCard";
import SectionFade from "./components/SectionFade";

const whyCards = [
  {
    icon: "chart",
    title: "Data-Driven Decision Making",
    text: "Leverage real-time analytics and AI-driven insights to optimize workforce productivity and operational efficiency. AI-driven attendance monitoring, geo-tagging, and facial recognition ensure accurate contractor management.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
  },
  {
    icon: "lock",
    title: "Security & Compliance First",
    text: "We ensure high security and compliance with regulatory standards, making workforce tracking seamless while maintaining legal transparency.",
    imageUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&q=80",
  },
  {
    icon: "gear",
    title: "Scalable & Customizable",
    text: "Our solutions cater to businesses of all sizes—whether you need on-premise, cloud, or hybrid deployment, InOps adapts to your needs.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
  },
  {
    icon: "integration",
    title: "Advanced Hardware & Software Integration",
    text: "Seamlessly integrate our biometric devices, access control, and attendance tracking with HRMS, payroll, and ERP systems.",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
  },
  {
    icon: "doc",
    title: "End-to-End Compliance Automation",
    text: "Streamline contractor onboarding, payroll, attendance, and compliance reporting—all in one platform.",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen text-slate-100">
      <GradientMeshBackground />
      <FloatingElements />

      {/* Hero */}
      <SectionFade>
      <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
        {/* Background: subtle pattern + gradient blob */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_-20%,rgba(6,182,212,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_100%,rgba(14,165,233,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[length:64px_64px] bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)]" />
        <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center px-6 pt-8 lg:flex-row lg:gap-20 lg:px-12 lg:pt-12">
          <motion.div
            className="flex flex-1 flex-col justify-center py-12 text-center lg:py-16 lg:text-left"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
          >
            <FadeUp delay={0}>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                Contract Labour Management
              </span>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
                Turn Compliance into{" "}
                <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Opportunity</span>
                <br className="hidden sm:block" />
                {" "}with Smart CLMS
              </h1>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-300 lg:mx-0">
                One platform for attendance, payroll, compliance, and access control. Trusted by enterprises for workforce management.
              </p>
            </FadeUp>
            <FadeUp delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <Link
                  href="#contact"
                  className="group inline-flex items-center justify-center rounded-xl bg-cyan-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-700 hover:shadow-cyan-500/30"
                >
                  Get In Touch
                  <svg className="ml-2 h-5 w-5 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="#solutions"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-slate-500 bg-slate-800 px-7 py-3.5 text-base font-semibold text-slate-200 shadow-sm transition hover:border-cyan-400 hover:bg-slate-700 hover:text-white"
                >
                  Our Solutions
                </Link>
              </div>
            </FadeUp>
          </motion.div>
          <motion.div
            className="relative w-full max-w-lg flex-shrink-0 lg:max-w-xl"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1], delay: 0.22 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-400/20 to-teal-400/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-slate-600/80 bg-slate-800 shadow-2xl shadow-black/30 ring-1 ring-slate-600/60">
                <div className="aspect-[4/3] sm:aspect-[5/4]">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=85"
                    alt="Team collaboration and workforce management"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 560px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                </div>
                <div className="flex items-center justify-between gap-4 border-t border-slate-600/80 bg-slate-800/80 px-5 py-4 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-100">Compliance-ready</p>
                      <p className="text-xs text-slate-400">PF, ESIC & labour laws</p>
                    </div>
                  </div>
                  <div className="hidden rounded-lg bg-slate-700 px-3 py-1.5 text-xs font-medium text-slate-300 shadow-sm sm:block">
                    InOps CLMS
                  </div>
                </div>
              </div>
              <div className="absolute -right-2 -top-2 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-600 bg-slate-800 shadow-lg sm:-right-4 sm:-top-4 sm:h-16 sm:w-16">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&q=80"
                  alt=""
                  width={64}
                  height={64}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      </SectionFade>

      {/* Why Inops - scroll animations */}
      <AnimatedSection id="about" className="relative py-24 lg:py-32">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300">Why choose us</span>
            <AnimatedHeading as="h2" className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Why Inops?
            </AnimatedHeading>
            <AnimatedParagraph className="mx-auto mt-4 max-w-xl text-slate-300">
              Trusted by enterprises for compliance and workforce management
            </AnimatedParagraph>
          </div>
          <AnimatedCardGrid className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {whyCards.map((card, index) => {
              const directions: Array<"left" | "right" | "bottom" | "top"> = ["left", "right", "bottom", "top", "left"];
              return (
                <AnimatedCardItem
                  key={card.title}
                  direction={directions[index % 4]}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-600/60 bg-slate-800/80 shadow-lg shadow-black/20 backdrop-blur-sm transition hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  <div className="relative h-32 flex-shrink-0 overflow-hidden bg-slate-200">
                    <Image
                      src={card.imageUrl}
                      alt=""
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                    <motion.div
                      className="absolute bottom-2 left-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-cyan-600 shadow-sm"
                      animate={{ y: [-5, 5] }}
                      transition={{ duration: 3.2, repeat: Infinity, repeatType: "reverse", ease: [0.65, 0, 0.35, 1] }}
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                        {card.icon === "chart" && <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />}
                        {card.icon === "lock" && <><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></>}
                        {card.icon === "gear" && <><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></>}
                        {card.icon === "integration" && <path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />}
                        {card.icon === "doc" && <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />}
                      </svg>
                    </motion.div>
                  </div>
                  <div className="flex flex-1 flex-col border-t border-slate-600/60 p-4">
                    <h3 className="text-base font-bold leading-tight text-slate-100">{card.title}</h3>
                    <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-slate-400">{card.text}</p>
                  </div>
                </AnimatedCardItem>
              );
            })}
          </AnimatedCardGrid>
        </div>
      </AnimatedSection>

      <SectionFade><FeaturesSlider /></SectionFade>
      <SectionFade><ModulesSlider /></SectionFade>

      {/* Smart Contract Labour - 3D split panel with fly-in */}
      <SectionFade>
      <section className="grid min-h-[min(100vh,44rem)] grid-cols-1 lg:grid-cols-2">
        <motion.div
          className="relative min-h-[28rem] bg-slate-900 lg:min-h-0"
          style={{ boxShadow: "inset -20px 0 60px -20px rgba(0,0,0,0.3)" }}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1] }}
        >
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80" alt="Worker at access control" fill className="object-cover" sizes="50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/70" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-12">
            <div className="relative h-full w-full max-w-sm">
              <svg className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2" preserveAspectRatio="none">
                <line x1="50%" y1="50%" x2="78%" y2="22%" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeDasharray="8 6" />
                <line x1="50%" y1="50%" x2="72%" y2="78%" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeDasharray="8 6" />
              </svg>
              <div className="absolute right-0 top-0 flex h-24 w-24 items-center justify-center rounded-full border-2 border-white/80 bg-slate-900/90 shadow-2xl lg:h-28 lg:w-28">
                <div className="text-center text-[10px] font-medium text-white lg:text-xs">
                  <span className="block">12:02:49</span>
                  <span className="block text-white/80">2024-02-28 Thu</span>
                </div>
              </div>
              <div className="absolute bottom-0 right-2 flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/80 bg-slate-800/80 shadow-xl lg:h-24 lg:w-24">
                <svg className="h-10 w-10 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                  <rect x="2" y="10" width="6" height="8" rx="1" /><rect x="16" y="10" width="6" height="8" rx="1" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center bg-slate-900 px-8 py-16 lg:px-14 lg:py-24"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1], delay: 0.12 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-300"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
          >
            Hardware + Software
          </motion.span>
          <motion.h2
            className="mt-4 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.28 }}
          >
            Smart Contract Labour Management With Integrated Hardware
          </motion.h2>
          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.36 }}
          >
            Manage your contract workforce efficiently with our software that seamlessly integrates with biometric hardware—including face, card, and fingerprint readers. Track real-time attendance, manage shifts, and generate contractor-wise reports—all from a single platform.
          </motion.p>
          <motion.div
            className="mt-10 flex gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500" />
            <div className="h-1 w-8 rounded-full bg-cyan-500/50" />
          </motion.div>
        </motion.div>
      </section>
      </SectionFade>

      {/* Scroll to top */}
      <motion.a
        href="#"
        className="btn-glow fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-600 to-teal-600 text-white transition hover:from-cyan-500 hover:to-teal-500"
        aria-label="Scroll to top"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.a>

      <SectionFade><IndustriesSlider /></SectionFade>

      {/* No More Ghost Employees - image left (flies from right), text right (flies from left) */}
      <SectionFade>
      <section className="relative">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 lg:flex-row lg:gap-20 lg:px-12">
          <motion.div
            className="relative flex-shrink-0 lg:order-1"
            initial={{ opacity: 0, x: 80 }}   
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1] }}
          >
            <TiltCard className="block">
              <div className="relative aspect-square w-80 overflow-hidden lg:w-[28rem]">
                <Image src="/Ghost employees.png" alt="Worker at biometric gate" fill className="object-cover object-center" sizes="(max-width: 1024px) 320px, 448px" />
              </div>
            </TiltCard>
          </motion.div>
          <motion.div
            className="flex flex-1 flex-col justify-center text-center lg:order-2 lg:text-left"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1], delay: 0.12 }}
          >
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
              No More Ghost Employees — Just Verified Workforce
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Eliminate ghost employees with biometric authentication, real-time tracking, and geofencing. Automated payroll and audit trails ensure accurate records, prevent fraud, and keep your workforce fully compliant.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link href="#contact" className="btn-glow inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 px-8 py-4 text-base font-semibold text-white transition hover:from-cyan-500 hover:to-teal-500">
                  Start A Project
                </Link>
              </motion.div>
              <a href="tel:08027745220" className="flex items-center gap-3 rounded-full border-2 border-cyan-400/60 bg-cyan-50/50 px-5 py-3 text-cyan-700 transition hover:border-cyan-500 hover:bg-cyan-50" aria-label="Call us">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </span>
                <span className="font-semibold">Call Us: 08027745220</span>
              </a>
              <span className="text-sm text-slate-400">For any question</span>
            </div>
          </motion.div>
        </div>
      </section>
      </SectionFade>

      {/* Prevent Pilferage - text left (flies from right), image right (flies from left) */}
      <SectionFade>
      <section className="relative">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 lg:flex-row lg:gap-20 lg:px-12">
          <motion.div
            className="flex flex-1 flex-col justify-center text-center lg:text-left"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1] }}
          >
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
              Prevent Pilferage With Smart Access Control
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Ensure only authorized personnel access your premises with real-time movement tracking and intelligent, contract-based entry rules. Our system helps prevent pilferage, reduce theft, and eliminate misuse of resources.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link href="#contact" className="btn-glow inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 px-8 py-4 text-base font-semibold text-white transition hover:from-cyan-500 hover:to-teal-500">
                  Start A Project
                </Link>
              </motion.div>
              <a href="tel:08027745220" className="flex items-center gap-3 rounded-full border-2 border-cyan-400/60 bg-cyan-50/50 px-5 py-3 text-cyan-700 transition hover:border-cyan-500 hover:bg-cyan-50" aria-label="Call us">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-cyan-600"><svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></span>
                <span className="font-semibold">Call Us: 08027745220</span>
              </a>
              <span className="text-sm text-slate-400">For any question</span>
            </div>
          </motion.div>
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1], delay: 0.12 }}
          >
            <TiltCard className="block">
              <div className="relative aspect-square w-80 overflow-hidden lg:w-[28rem]">
                <Image src="/Pilferage.png" alt="Worker with tablet" fill className="object-cover object-center" sizes="(max-width: 1024px) 320px, 448px" />
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </section>
      </SectionFade>

      {/* Driving ESG - image left (flies from right), text right (flies from left) */}
      <SectionFade>
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 lg:flex-row lg:gap-20 lg:px-12">
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1] }}
          >
            <TiltCard className="block">
              <div className="relative aspect-square w-80 overflow-hidden lg:w-[28rem]">
                <Image src="/ESG-Aligned Compliance.png" alt="Workers reviewing documents" fill className="object-cover object-center" sizes="(max-width: 1024px) 320px, 448px" />
              </div>
            </TiltCard>
          </motion.div>
          <motion.div
            className="flex flex-1 flex-col justify-center text-center lg:text-left"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1], delay: 0.12 }}
          >
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
              Driving ESG-Aligned Compliance
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Stay aligned with region-specific compliance norms and labor laws while fostering a safe and transparent workplace. The system supports ethical labor practices and reinforces the Social and Governance pillars of your ESG commitments.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link href="#contact" className="btn-glow inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 px-8 py-4 text-base font-semibold text-white transition hover:from-cyan-500 hover:to-teal-500">
                  Start A Project
                </Link>
              </motion.div>
              <a href="tel:08027745220" className="flex items-center gap-3 rounded-full border-2 border-cyan-400/60 bg-slate-800 px-5 py-3 text-cyan-300 transition hover:border-cyan-400 hover:bg-slate-700" aria-label="Call us">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300"><svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></span>
                <span className="font-semibold">Call Us: 08027745220</span>
              </a>
              <span className="text-sm text-slate-400">For any question</span>
            </div>
          </motion.div>
        </div>
      </section>
      </SectionFade>

      <SectionFade><BrandsSlider /></SectionFade>

      {/* Contact */}
      <SectionFade id="contact" className="relative py-24 lg:py-32">
        <div className="relative mx-auto max-w-3xl px-6 lg:px-12">
          <FadeUp className="rounded-3xl border border-slate-600/60 bg-slate-800/80 p-8 shadow-xl shadow-black/20 backdrop-blur-sm lg:p-12">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300">Get in touch</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Have Any Questions?</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Tell us about your workforce and compliance needs. We’ll help you find the right solution.
              </p>
            </div>
            <FadeUp delay={0.1} className="mt-8">
              <ContactForm />
            </FadeUp>
          </FadeUp>
        </div>
      </SectionFade>
    </div>
  );
}
