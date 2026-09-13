"use client";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
