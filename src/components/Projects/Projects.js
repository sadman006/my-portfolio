"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import Reveal from "@/components/Reveal/Reveal";

import "swiper/css";

const projects = [
  {
    tagline: "RUNNER GROUP · YADEA",
    name: "Yadea Bangladesh",
    image: "/yadea.jpg",
    description:
      "The official web presence for Yadea's electric scooter lineup in Bangladesh, brought to market by Runner Automobiles.",
    stack: ["React", "Tailwind CSS", "REST API", "Responsive UI"],
    liveUrl: "#",
    detailsUrl: "#",
  },
  {
    tagline: "CG RUNNER BD · BYD",
    name: "BYD Bangladesh",
    image: "/byd.jpg",
    description:
      "The Bangladesh website for BYD, the global new-energy vehicle manufacturer.",
    stack: ["React", "Next.js", "Tailwind CSS", "Git & GitHub"],
    liveUrl: "#",
    detailsUrl: "#",
  },
  {
    tagline: "PERSONAL PROJECT",
    name: "Riro BD",
    image: "/riro.jpg",
    description:
      "A modern responsive web experience focused on clean UI and smooth interactions.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    detailsUrl: "#",
  },
  {
    tagline: "PERSONAL PROJECT",
    name: "Project Four",
    image: "/p.jpg",
    description:
      "A clean and scalable web application built with modern frontend technologies.",
    stack: ["React", "JavaScript", "API"],
    liveUrl: "#",
    detailsUrl: "#",
  },
  {
    tagline: "PERSONAL PROJECT",
    name: "Project Five",
    image: "/projects/project-5.jpg",
    description:
      "A responsive digital product with a focus on performance and user experience.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    detailsUrl: "#",
  },
];

export default function Projects() {
  const swiperRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section id="projects" className="section-divider py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header */}
        <Reveal className="mb-12 text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Projects
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-lg leading-6 text-ink-soft">
            A selection of projects I have worked on, combining thoughtful
            design, clean code and modern web technologies.
          </p>
        </Reveal>

        {/* Projects Slider */}
        <Reveal>
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;

              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="projects-swiper"
          >
            {projects.map((project, i) => (
              <SwiperSlide key={project.name}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.05,
                  }}
                  whileHover={{ y: -6 }}
                  className="group relative h-120 overflow-hidden rounded-xl bg-panel shadow-[0_20px_50px_-30px_rgba(16,27,36,0.5)]"
                >
                  {/* Project Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={800}
                      height={800}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent" />
                  </div>

                  {/* Glass Content Card */}
                  <div className="absolute inset-x-4 bottom-4">
                    <div className="rounded-xl bg-white/5 p-5 shadow-2xl backdrop-blur-xl">
                      {/* Tagline */}
                      <div className="mb-2 font-mono text-[10px] tracking-wider text-white/70">
                        {project.tagline}
                      </div>

                      {/* Name */}
                      <h3 className="mb-2 font-display text-xl font-semibold text-white">
                        {project.name}
                      </h3>

                      {/* Description */}
                      <p className="mb-4 line-clamp-2 text-xs leading-5 text-white/75">
                        {project.description}
                      </p>

                      {/* Tools */}
                      <div className="mb-5 flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-white/15 bg-white/10 px-2 py-1 font-mono text-[10px] text-white/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-2">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 rounded-md bg-white text-black px-3 py-2 text-center text-xs font-medium text-ink transition hover:bg-white/90"
                        >
                          Live Demo
                        </a>

                        <a
                          href={project.detailsUrl}
                          className="flex-1 rounded-md border border-white/25 bg-white/10 px-3 py-2 text-center text-xs font-medium text-white transition hover:bg-white/20"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bottom Arrows */}
          <div className="mt-10 flex items-center justify-center gap-8">
            <button
              type="button"
              aria-label="Previous projects"
              disabled={isBeginning}
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex h-11 w-11 cursor-pointer hover:bg-white hover:text-black items-center justify-center rounded-full border border-line-strong bg-panel text-ink transition-all duration-200 hover:border-blue-deep hover:bg-blue-tint"
            >
              <FiArrowLeft size={19} strokeWidth={1.8} />
            </button>

            <button
              type="button"
              aria-label="Next projects"
              disabled={isEnd}
              onClick={() => swiperRef.current?.slideNext()}
              className="flex h-11 w-11 cursor-pointer hover:bg-white hover:text-black items-center justify-center rounded-full border border-line-strong bg-panel text-ink transition-all duration-200 hover:border-blue-deep hover:bg-blue-tint"
            >
              <FiArrowRight size={19} strokeWidth={1.8} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
