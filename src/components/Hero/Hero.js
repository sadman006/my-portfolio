"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28">
      {/* animated aesthetic backdrop — replaces the old grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="orb animate-blob absolute -left-24 top-[-10%] h-72 w-72 bg-blue-tint sm:h-96 sm:w-96" />
        <div className="orb animate-blob-slow absolute right-[-8%] top-[8%] h-72 w-72 bg-amber/25 sm:h-[26rem] sm:w-[26rem]" />
        <div className="orb animate-blob absolute bottom-[-15%] left-[20%] h-64 w-64 bg-blue/10" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid max-w-5xl grid-cols-1 gap-14 px-6 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16"
      >
        <div>
          <motion.div
            variants={item}
            className="mb-6 flex items-center gap-3 text-[13px] tracking-wide text-blue-deep"
          >
            <span className="h-px w-9 text-blue-500" />
            FRONTEND DEVELOPER & UI Enthusiast· BASED IN BANGLADESH
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-[42px] font-semibold leading-[1.05] sm:text-6xl"
          >
            Sadman Ahmed
            <br />
            Alvi
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 font-display text-lg font-medium text-ink-soft sm:text-xl"
          >
            I build fast, clean, and reliable interfaces with React.
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-[52ch] text-ink-soft">
            Over a year of hands-on experience building production interfaces as
            a Frontend Developer Trainee at Singularity Limited — turning
            designs into responsive, component-driven React applications.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <a
              href="mailto:sadmanahmedalvi3287@gmail.com"
              className="inline-flex text-white bg-green-600 hover:bg-green-700 hover:border-gray-200 items-center gap-2 border border-ink bg-ink px-5 py-[11px] text-sm font-medium text-paper rounded-lg transition-colors "
            >
              Get in touch
            </a>
            <a
              href="https://github.com/sadman006"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-white bg-black items-center gap-2 rounded-lg border border-line-strong px-5 py-[11px] text-sm font-medium transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/sadman-ahmed-alvi-184939331"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-white bg-blue-500 hover:bg-blue-700 rounded-lg items-center gap-2 border border-line-strong px-5 py-[11px] text-sm font-medium transition-colors hover:border-blue hover:text-blue-deep"
            >
              LinkedIn ↗
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="overflow-hidden rounded-lg border border-line-strong bg-panel shadow-[0_20px_50px_-25px_rgba(16,27,36,0.35)]"
        >
          <div className="flex items-center gap-2 border-b border-line bg-blue-tint px-4 py-[11px]">
            <span className="h-[9px] w-[9px] rounded-full bg-[#E4664B]" />
            <span className="h-[9px] w-[9px] rounded-full bg-[#E8B84B]" />
            <span className="h-[9px] w-[9px] rounded-full bg-[#5FB86E]" />
            <span className="ml-2 font-mono text-xs text-ink-soft">
              profile.jsx
            </span>
          </div>
          <pre className="overflow-x-auto px-5 py-6 font-mono text-[13px] leading-[1.75] text-ink">
            {`const developer = {
  name: `}
            <span className="text-[#B5541F]">
              &quot;Sadman Ahmed Alvi&quot;
            </span>
            {`,
  role: `}
            <span className="text-[#B5541F]">
              &quot;Frontend Developer&quot;
            </span>
            {`,
  company: `}
            <span className="text-[#B5541F]">
              &quot;Singularity Limited&quot;
            </span>
            {`,
  experience: `}
            <span className="text-[#B5541F]">
              &quot;1+ year (Trainee)&quot;
            </span>
            {`,
  stack: [`}
            <span className="text-[#B5541F]">&quot;React&quot;</span>
            {`, `}
            <span className="text-[#B5541F]">&quot;Next.js&quot;</span>
            {`, `}
            <span className="text-[#B5541F]">&quot;Tailwind&quot;</span>
            {`],
  `}
            <span className="italic text-ink-soft">{"// currently"}</span>
            {`
  openToWork: `}
            <span className="text-blue-deep">true</span>
            {`,
};`}
          </pre>
        </motion.div>
      </motion.div>
    </section>
  );
}
