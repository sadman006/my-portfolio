"use client";

const links = [
  { href: "#hero", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky shadow top-0 z-50 border-b border-slate-700/70 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <a
          href="#"
          className="flex items-center gap-2 font-display text-[17px] font-semibold"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-blue" />
          Sadman Ahmed Alvi
        </a>
        <nav className="hidden gap-8 text-sm text-ink-soft sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-1 transition-colors hover:text-blue-deep"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-blue transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
