"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal/Reveal";

const projects = [
  {
    tagline: "RUNNER GROUP · YADEA",
    name: "Yadea Bangladesh",
    description:
      "The official web presence for Yadea's electric scooter lineup in Bangladesh, brought to market by Runner Automobiles. Contributed as part of the frontend team building the product showcase site.",
    stack: ["React", "Tailwind CSS", "REST API", "Responsive UI"],
    icon: (
      <svg
        viewBox="0 0 220 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[220px]"
      >
        <rect x="10" y="100" width="200" height="4" fill="#CBCFC2" />
        <circle cx="60" cy="118" r="20" stroke="#2450E0" strokeWidth="4" />
        <circle cx="160" cy="118" r="20" stroke="#2450E0" strokeWidth="4" />
        <path
          d="M60 118 L95 70 H130 L150 100 H170"
          stroke="#101B24"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M95 70 L85 45 H70"
          stroke="#101B24"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M170 100 L182 84"
          stroke="#FF7A29"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M186 78 L192 90 L200 82"
          stroke="#FF7A29"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    tagline: "CG RUNNER BD · BYD",
    name: "BYD Bangladesh",
    description:
      "The Bangladesh website for BYD, the global new-energy vehicle manufacturer. Worked on frontend implementation of the site's product and brand pages as part of the development team.",
    stack: ["React", "Next.js", "Tailwind CSS", "Git & GitHub"],
    icon: (
      <svg
        viewBox="0 0 220 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[220px]"
      >
        <rect x="10" y="105" width="200" height="4" fill="#CBCFC2" />
        <path
          d="M40 105 V85 Q40 72 55 70 L80 68 L95 50 H150 L168 68 Q182 70 182 85 V105"
          stroke="#101B24"
          strokeWidth="4"
          strokeLinejoin="round"
          fill="none"
        />
        <line
          x1="30"
          y1="105"
          x2="192"
          y2="105"
          stroke="#101B24"
          strokeWidth="4"
        />
        <circle cx="68" cy="106" r="14" stroke="#2450E0" strokeWidth="4" />
        <circle cx="158" cy="106" r="14" stroke="#2450E0" strokeWidth="4" />
        <path
          d="M112 68 V50"
          stroke="#FF7A29"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M105 56 L112 45 L119 56"
          stroke="#FF7A29"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-divider py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <Reveal className="mb-12 flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Selected work
          </h2>
          <span className="font-mono text-[13px] text-blue-deep">
            04 — PROJECTS
          </span>
        </Reveal>

        <div className="space-y-7">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="grid grid-cols-1 overflow-hidden rounded-lg border border-line-strong bg-panel shadow-[0_16px_40px_-28px_rgba(16,27,36,0.4)] md:grid-cols-[0.9fr_1.1fr]"
              >
                <div className="flex min-h-50 items-center justify-center border-b border-line-strong bg-blue-tint p-8 md:min-h-60 md:border-b-0 md:border-r">
                  {project.icon}
                </div>
                <div className="p-8 sm:p-9">
                  <div className="mb-2 font-mono text-xs text-blue-deep">
                    {project.tagline}
                  </div>
                  <h3 className="mb-3 font-display text-2xl font-semibold">
                    {project.name}
                  </h3>
                  <p className="mb-5 max-w-[56ch] text-[15px] text-ink-soft">
                    {project.description}
                  </p>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="border border-line-strong px-2.5 py-1 font-mono text-xs text-ink-soft"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="border-l-2 border-amber pl-3 text-[13px] text-ink-soft">
                    Company project built at Singularity Limited — live link
                    &amp; screenshots available on request.
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
