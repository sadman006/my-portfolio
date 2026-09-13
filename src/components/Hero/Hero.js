// "use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
            Frontend Developer with 1+ years of hands-on experience building
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

        <motion.div
          variants={item}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#071525] px-8 pb-8 pt-10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]"
        >
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

            <div className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(34,211,238,0.08),transparent_35%)]" />
          </div>

          {/* Profile image area */}
          <div className="relative flex justify-center">
            {/* Outer decorative rings */}
            <div className="absolute top-1/2 h-[340px] w-[340px] -translate-y-1/2 rounded-full border border-cyan-300/10" />

            <div className="absolute top-1/2 h-[310px] w-[310px] -translate-y-1/2 rounded-full border border-cyan-300/10 shadow-[0_0_60px_rgba(34,211,238,0.08)]" />

            <div className="absolute top-1/2 h-[285px] w-[285px] -translate-y-1/2 rounded-full bg-cyan-400/5 blur-xl" />

            {/* Image */}
            <div className="relative z-10 h-64 w-64 overflow-hidden rounded-full border border-white/10 bg-[#dce4e5] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] sm:h-72 sm:w-72">
              <Image
                src="/1.png"
                alt="Sadman Ahmed Alvi"
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Bottom information */}
          <div className="relative z-10 mt-10 text-center">
            <p className="font-mono text-[18px] font-medium uppercase tracking-[0.28em] text-cyan-300/70">
              Frontend Developer
            </p>

            <p className="mt-3 font-mono text-[14px] uppercase tracking-[0.22em] text-white/40">
              Open for Contract
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
