// "use client";

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
        <div className="orb animate-blob-slow absolute right-[-8%] top-[8%] h-72 w-72 bg-amber/25 sm:h-104 sm:w-104" />
        <div className="orb animate-blob absolute bottom-[-15%] left-[20%] h-64 w-64 bg-blue/10" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid max-w-5xl grid-cols-1 gap-14 px-6 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16"
      >
        <div>
          <motion.h1
            variants={item}
            className="font-display text-[42px] font-semibold leading-[1.05] sm:text-5xl"
          >
            Sadman Ahmed Alvi
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-3 items-center gap-3 text-[13px] tracking-wide text-emerald-500"
          >
            <span className="h-px w-9" />
            FRONTEND DEVELOPER & UI Enthusiast· BASED IN BANGLADESH
          </motion.div>

          <motion.p
            variants={item}
            className="mt-4 font-display text-lg font-medium text-ink-soft sm:text-xl"
          >
            I build modern, scalable, and user-focused web experiences with
            React and Next.js.
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-[52ch] text-ink-soft">
            Frontend Developer with 1.5+ years of hands-on experience building
            production-ready applications. I specialize in React, Next.js,
            responsive UI development, and API integration — transforming ideas
            and designs into clean, performant, and maintainable web
            experiences.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex items-center gap-5">
            <a
              href="mailto:sadmanahmedalvi3287@gmail.com"
              className="inline-flex items-center hover:bg-white hover:text-black rounded-lg border border-line-strong px-5 py-2.75 text-sm font-medium text-ink transition-all hover:border-ink hover:bg-panel"
            >
              Hire Me
            </a>

            <a
              href="/cv.pdf"
              download="Sadman-Ahmed-Alvi-CV.pdf"
              className="text-sm font-medium hover:bg-white hover:text-black text-ink-soft border border-line-strong rounded-lg px-5 py-2.75 underline-offset-4 transition-colors hover:text-ink"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        {/* <motion.div
          variants={item}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="overflow-hidden rounded-lg border border-line-strong bg-panel shadow-[0_20px_50px_-25px_rgba(16,27,36,0.35)]"
        >
          <div className="flex items-center gap-2 border-b border-line bg-blue-tint px-4 py-2.75">
            <span className="h-2.25 w-2.25 rounded-full bg-[#E4664B]" />
            <span className="h-2.25 w-2.25 rounded-full bg-[#E8B84B]" />
            <span className="h-2.25 w-2.25 rounded-full bg-[#5FB86E]" />
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
        </motion.div> */}
      </motion.div>
    </section>
  );
}
