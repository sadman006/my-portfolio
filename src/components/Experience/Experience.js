"use client";

import Reveal from "@/components/Reveal/Reveal";

const highlights = [
  "Developed and maintained responsive user-facing features for live client websites using React.js.",
  "Translated design files into clean, reusable, component-based interfaces with Tailwind CSS.",
  "Integrated REST APIs to display dynamic content and work with real application data.",
  "Collaborated with senior developers and designers using Git and GitHub in a team-based workflow.",
  "Debugged responsive and cross-browser issues while improving code quality and maintainability.",
];

export default function Experience() {
  return (
    <section id="experience" className="section-divider py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* EXPERIENCE */}
          <div>
            <Reveal className="mb-6">
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                Experience
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="rounded-md border border-line-strong bg-panel p-6 sm:p-7">
                <h3 className="font-display text-xl font-semibold sm:text-2xl">
                  Frontend Developer
                </h3>

                <div className="mt-1 text-[15px] font-semibold text-blue-deep">
                  Singularity Limited{" "}
                  <span className="text-emerald-400">(2025 — Present)</span>
                </div>

                <ul className="mt-5 space-y-3">
                  {highlights.map((line) => (
                    <li
                      key={line}
                      className="flex gap-2 text-[14px] leading-5 text-ink-soft"
                    >
                      <span className="shrink-0 text-blue">✓</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* EDUCATION */}
          <div>
            <Reveal className="mb-6">
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                Education History
              </h2>
            </Reveal>

            <div className="space-y-5">
              {/* University */}
              <Reveal delay={0.05}>
                <div className="rounded-md border border-line-strong bg-panel p-6 sm:p-7">
                  <h3 className="font-display text-xl font-semibold sm:text-2xl">
                    B.Sc in Computer Science & Engineering
                  </h3>

                  <div className="mt-1 text-[15px] font-semibold text-blue-deep">
                    American International University Bangladesh (AIUB){" "}
                    <span className="text-emerald-400">
                      <br />
                      (2020 — 2024)
                    </span>
                  </div>

                  <p className="mt-4 text-[14px] leading-5 text-ink-soft">
                    Completed My Bachelor of Science in Computer Science &
                    Engineering at American International University Bangladesh
                    - AIUB
                  </p>
                </div>
              </Reveal>

              {/* School & College */}
              <Reveal delay={0.1}>
                <div className="rounded-md border border-line-strong bg-panel p-6 sm:p-7">
                  <h3 className="font-display text-xl font-semibold sm:text-2xl">
                    School & College
                  </h3>

                  <div className="mt-4 space-y-5">
                    {/* School */}
                    <div>
                      <h4 className="text-[16px] text-gray-200 font-semibold">
                        Cumilla Zilla School, Cumilla{" "}
                        <span className="text-emerald-400">(2012 — 2017)</span>
                      </h4>

                      {/* <div className="mt-1 text-[14px] font-semibold text-blue-deep">
                        Cumilla, Bangladesh{" "}
                        <span className="text-emerald-400"></span>
                      </div> */}

                      <p className="mt-2 text-[14px] leading-5 text-ink-soft">
                        Completed Secondary School Education.
                      </p>
                    </div>

                    {/* College */}
                    <div className="border-t border-line pt-5">
                      <h4 className="text-[16px] font-semibold">
                        Cumilla Government College, Cumilla{" "}
                        <span className="text-emerald-400">(2017 — 2019)</span>
                      </h4>
                      <p className="mt-2 text-[14px] leading-5 text-ink-soft">
                        Completed Higher Secondary Education.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
