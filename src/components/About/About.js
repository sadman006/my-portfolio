"use client";
import Reveal from "@/components/Reveal/Reveal";

const education = [
  {
    stage: "SCHOOL",
    name: "Cumilla Zilla School",
    location: "Cumilla, Bangladesh",
  },
  {
    stage: "COLLEGE",
    name: "Cumilla Government College",
    location: "Cumilla, Bangladesh",
  },
  {
    stage: "UNIVERSITY",
    name: "B.Sc. in Computer Science & Engineering",
    location: "American International University-Bangladesh (AIUB)",
  },
];

export default function About() {
  return (
    <section id="about" className="section-divider py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <Reveal className="mb-12 flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Experience &amp; Education
          </h2>
          {/* <span className="font-mono text-[13px] text-blue-deep">
            01 — BACKGROUND
          </span> */}
        </Reveal>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal delay={0.05} className="space-y-4 text-ink-soft">
            <p>
              I&apos;m a frontend developer who enjoys turning ideas and designs
              into interfaces people actually enjoy using. Over the past year at{" "}
              <strong className="font-semibold text-ink">
                Singularity Limited
              </strong>
              , I&apos;ve worked as part of a professional development team on
              live client projects — writing production React code, translating
              designs into responsive layouts, and learning how real-world
              frontend engineering works beyond tutorials.
            </p>
            <p>
              I&apos;m comfortable across the modern React ecosystem — component
              architecture, state management, routing with Next.js, and styling
              with Tailwind CSS — and I care about writing code that&apos;s easy
              for a team to read and maintain, not just code that works.
            </p>
            <p>
              I&apos;m currently looking for a full-time frontend role where I
              can keep growing as an engineer and take on more ownership.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative border-l border-line-strong pl-7">
              {education.map((edu, i) => (
                <div
                  key={edu.name}
                  className={`relative ${i !== education.length - 1 ? "pb-8" : ""}`}
                >
                  <span className="absolute -left-[34px] top-1 h-[11px] w-[11px] rounded-full border-2 border-blue bg-paper" />
                  <div className="mb-1 font-mono text-xs text-blue-deep">
                    {edu.stage}
                  </div>
                  <h3 className="font-display text-lg font-semibold">
                    {edu.name}
                  </h3>
                  <div className="mt-0.5 text-sm text-ink-soft">
                    {edu.location}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
