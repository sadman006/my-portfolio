"use client";
import Reveal from "@/components/Reveal/Reveal";
// import Reveal from "@/components/Reveal";

const highlights = [
  "Built and maintained user-facing features for live client websites using React.js, working from design files through to deployed, responsive UI.",
  "Converted static designs into reusable, component-based layouts styled with Tailwind CSS.",
  "Integrated REST APIs to render dynamic content and handle real application data.",
  "Collaborated with senior developers and designers, using Git & GitHub for version control and code reviews as part of a team workflow.",
  "Debugged cross-browser and responsiveness issues, and picked up practical habits for writing maintainable, production-grade code.",
];

export default function Experience() {
  return (
    <section id="experience" className="section-divider py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <Reveal className="mb-12 flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Experience
          </h2>
          <span className="font-mono text-[13px] text-blue-deep">
            03 — WORK
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="rounded-lg border border-line-strong bg-panel p-8 sm:p-10">
            <div className="mb-6 flex flex-wrap items-start justify-between gap-6 border-b border-line pb-6">
              <div>
                <h3 className="font-display text-xl font-semibold sm:text-2xl">
                  Frontend Developer{" "}
                  <span className="font-normal text-ink-soft">— Trainee</span>
                </h3>
                <div className="font-semibold text-blue-deep">
                  Singularity Limited
                </div>
              </div>
              <div className="text-right text-sm text-ink-soft">
                1+ year
                <br />
                On-site
              </div>
            </div>
            <ul className="space-y-3.5">
              {highlights.map((line) => (
                <li
                  key={line}
                  className="relative pl-6 text-[15px] text-ink-soft"
                >
                  <span className="absolute left-0 top-0 text-blue">→</span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
