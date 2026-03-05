"use client";

import Image from "next/image";

const modules = [
  {
    title: "Time, Attendance & Leave",
    description: "Accurate tracking of employee hours and leave for better productivity and compliance.",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
  },
  {
    title: "KYE - Employee Verification",
    description: "Next-Gen CLMs through AI for document verification, challans, records, with smart reporting & analytics.",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
  },
  {
    title: "Visitor Management",
    description: "Secure visitor tracking with seamless check-in/out processes.",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
  {
    title: "Contractor & Payroll",
    description: "End-to-end contractor lifecycle and payroll processing with statutory compliance.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
  },
  {
    title: "Compliance & Reporting",
    description: "Automated PF, ESIC, and labour law reporting with audit-ready documentation.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    title: "Access Control & Security",
    description: "Biometric and card-based access control with real-time monitoring.",
    imageUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80",
  },
  {
    title: "Shift & Roster Management",
    description: "Plan shifts, manage rosters, and handle overtime with ease.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
  },
  {
    title: "Analytics & Dashboards",
    description: "Real-time insights and reports for workforce and compliance metrics.",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
  },
];

function ModuleCard({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
}) {
  return (
    <div className="module-card group w-[300px] flex-shrink-0 overflow-hidden rounded-2xl border border-slate-600/80 bg-slate-800 shadow-depth transition hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-depth-lg sm:w-[340px]">
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl bg-slate-200">
        <Image
          src={imageUrl}
          alt=""
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="340px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="border-t border-slate-100 p-6">
        <h3 className="text-lg font-bold text-slate-100">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
      </div>
    </div>
  );
}

export default function ModulesSlider() {
  return (
    <section id="solutions" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-white bg-grid-pattern opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center">
          <span className="section-badge">Solutions</span>
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Modules
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            End-to-end tools for time, compliance, and workforce management
          </p>
        </div>
        <div className="hover-pause relative mt-12 overflow-hidden">
          <div
            className="flex w-max gap-6 animate-marquee-slow md:gap-8"
            style={{ willChange: "transform" }}
          >
            {[...modules, ...modules].map((mod, i) => (
              <ModuleCard
                key={`${mod.title}-${i}`}
                title={mod.title}
                description={mod.description}
                imageUrl={mod.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
