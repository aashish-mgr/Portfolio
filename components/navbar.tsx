"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { socials } from "@/lib/content";
import { GithubIcon, LinkedinIcon } from "./brand-icons";

const LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const ids = ["home", "stack", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors ${
        scrolled || open
          ? "border-line bg-base/90"
          : "border-line/60 bg-base/70"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          onClick={closeMenu}
          className="font-display text-lg font-medium tracking-[-0.01em] text-ink"
        >
          Aashish <span className="italic text-gold">Magar</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => {
            const target = link.href.slice(1);
            const isActive = active === target;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition ${
                  isActive
                    ? "font-medium text-gold"
                    : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={socials.github}
            aria-label="GitHub"
            className="text-muted transition hover:text-ink"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={socials.linkedin}
            aria-label="LinkedIn"
            className="text-muted transition hover:text-ink"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink transition hover:bg-surface md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-base/95 md:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col gap-1 px-4 py-3">
              {LINKS.map((link) => {
                const target = link.href.slice(1);
                const isActive = active === target;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`rounded-md px-3 py-3 text-sm transition ${
                      isActive
                        ? "bg-surface font-medium text-gold"
                        : "text-ink hover:bg-surface"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
            <div className="flex items-center gap-5 border-t border-line/60 px-7 py-4">
              <a
                href={socials.github}
                aria-label="GitHub"
                className="text-muted transition hover:text-ink"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={socials.linkedin}
                aria-label="LinkedIn"
                className="text-muted transition hover:text-ink"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}