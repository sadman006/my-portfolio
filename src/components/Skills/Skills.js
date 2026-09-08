"use client";
// import Reveal from "@/components/Reveal/Reveal";
import Reveal from "@/components/Reveal/Reveal";

const groups = [
  {
    title: "core / framework",
    items: [
      { name: "JavaScript (ES6+)", tag: "JS" },
      { name: "React.js", tag: "REACT" },
      { name: "Next.js", tag: "SSR" },
    ],
  },
  {
    title: "styling & markup",
    items: [
      { name: "HTML5", tag: "MARKUP" },
      { name: "CSS3", tag: "CSS" },
      { name: "Tailwind CSS", tag: "UTIL" },
    ],
  },
  {
    title: "tools & workflow",
    items: [
      { name: "Git & GitHub", tag: "VCS" },
      { name: "REST APIs", tag: "DATA" },
      { name: "Responsive UI", tag: "RWD" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-divider py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <Reveal className="mb-12 flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Skills
          </h2>
          <span className="font-mono text-[13px] text-blue-deep">
            02 — STACK
          </span>
        </Reveal>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line-strong bg-line-strong sm:grid-cols-3">
          {groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.08} className="bg-panel p-7">
              <h3 className="mb-4 border-b border-line pb-3 font-mono text-[13px] font-normal text-blue-deep">
                {group.title}
              </h3>
              <ul className="space-y-0">
                {group.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between border-b border-dashed border-line py-2 text-[15px] last:border-b-0"
                  >
                    <span>{skill.name}</span>
                    <span className="font-mono text-[11px] text-ink-soft">
                      {skill.tag}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
