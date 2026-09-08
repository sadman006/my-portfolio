import Reveal from "@/components/Reveal/Reveal.js";

export default function Contact() {
  return (
    <section id="contact" className="section-divider py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <Reveal>
          <div className="rounded-lg border border-line-strong bg-panel px-6 py-14 text-center sm:px-12">
            <h2 className="mb-4 font-display text-3xl font-semibold sm:text-4xl">
              Let&apos;s work together
            </h2>
            <p className="mx-auto mb-8 max-w-[48ch] text-ink-soft">
              I&apos;m open to full-time frontend developer roles. Feel free to
              reach out — I&apos;ll usually reply within a day.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="mailto:sadmanahmedalvi3287@gmail.com"
                className="inline-flex items-center gap-2 border border-ink bg-ink px-5 py-[11px] text-sm font-medium text-paper transition-colors hover:bg-blue-deep hover:border-blue-deep"
              >
                sadmanahmedalvi3287@gmail.com
              </a>
              <a
                href="https://github.com/sadman006"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-line-strong px-5 py-[11px] text-sm font-medium transition-colors hover:border-blue hover:text-blue-deep"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sadman-ahmed-alvi-184939331"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-line-strong px-5 py-[11px] text-sm font-medium transition-colors hover:border-blue hover:text-blue-deep"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
