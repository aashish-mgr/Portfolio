import { Github, Linkedin } from "lucide-react";
import { socials } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-surface/50">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-12 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-xl font-medium text-ink">
            Aashu Lopchan
          </p>
          <p className="mt-1 font-mono text-xs text-faint">
            data analysis · full-stack web
          </p>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <a
            href="#projects"
            className="text-muted transition hover:text-ink"
          >
            Projects
          </a>
          <a href="#stack" className="text-muted transition hover:text-ink">
            Stack
          </a>
          <a
            href="#contact"
            className="text-muted transition hover:text-ink"
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href={socials.github}
            aria-label="GitHub"
            className="text-muted transition hover:text-ink"
          >
            <Github size={18} />
          </a>
          <a
            href={socials.linkedin}
            aria-label="LinkedIn"
            className="text-muted transition hover:text-ink"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-faint">
            © 2026 Aashu Lopchan
          </p>
          <p className="font-mono text-xs text-faint">
            built with Next.js · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}