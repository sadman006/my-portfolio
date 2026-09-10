"use client";

import Reveal from "@/components/Reveal/Reveal";

import {
  SiNodedotjs,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiHtml5,
  SiGit,
  SiGithub,
  SiPostman,
  SiNpm,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";

const skills = [
  {
    name: "Node.js",
    icon: SiNodedotjs,
    level: "EXPERTISE",
    color: "#339933",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    level: "EXPERTISE",
    color: "#F7DF1E",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    level: "EXPERTISE",
    color: "#ffffff",
  },
  {
    name: "React.js",
    icon: SiReact,
    level: "EXPERTISE",
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    level: "EXPERTISE",
    color: "#3178C6",
  },
  {
    name: "CSS3",
    icon: DiCss3,
    level: "EXPERTISE",
    color: "#1572B6",
  },
  {
    name: "HTML5",
    icon: SiHtml5,
    level: "EXPERTISE",
    color: "#E34F26",
  },
  {
    name: "VS Code",
    icon: BiLogoVisualStudio,
    level: "EXPERTISE",
    color: "#007ACC",
  },
  {
    name: "Git",
    icon: SiGit,
    level: "EXPERTISE",
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    level: "EXPERTISE",
    color: "#ffffff",
  },
  {
    name: "Postman",
    icon: SiPostman,
    level: "EXPERTISE",
    color: "#FF6C37",
  },
  {
    name: "NPM",
    icon: SiNpm,
    level: "EXPERTISE",
    color: "#CB3837",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-divider py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Heading */}
        <Reveal className="mb-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              SKILLS & TECHNOLOGIES
            </h2>
          </div>
        </Reveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <Reveal key={skill.name} delay={index * 0.05}>
                <div
                  className="
                    group relative overflow-hidden
                    flex flex-col items-center justify-center
                    min-h-[190px]
                    rounded-xl
                    
                    bg-gray-800
                    px-5 py-6
                    text-center
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-blue-deep/50
                    hover:shadow-[0_12px_35px_rgba(0,0,0,0.18)]
                  "
                >
                  {/* Top accent */}
                  <div
                    className="
                      absolute left-0 top-0
                      h-0.5 w-0
                      bg-blue-deep
                      transition-all duration-300
                      group-hover:w-full
                    "
                  />

                  {/* Icon */}
                  <div
                    className="
                      mb-5 flex h-16 w-16
                      items-center justify-center
                      rounded-2xl
                      bg-gradient-to-b from-[#2F4F4F]/25
                      
                      transition-all duration-300
                      group-hover:scale-110
                    "
                  >
                    <Icon
                      style={{ color: skill.color }}
                      className="
                        h-10 w-10
                        transition-transform duration-300
                      "
                    />
                  </div>

                  {/* Skill Name */}
                  <h3 className="mb-2 text-[15px] font-semibold">
                    {skill.name}
                  </h3>

                  {/* Level */}
                  <p
                    className="
                      font-mono
                      text-[9px]
                      font-medium
                      tracking-[0.28em]
                      text-ink-soft
                    "
                  >
                    {skill.level}
                  </p>

                  {/* Background number */}
                  {/* <span
                    className="
                      pointer-events-none
                      absolute -bottom-4 -right-1
                      font-mono text-5xl font-bold
                      text-white/2.5
                      transition-all duration-300
                      group-hover:text-blue-deep/[0.06]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span> */}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
