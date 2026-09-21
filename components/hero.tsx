"use client";

import { motion, MotionConfig } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { hero } from "@/lib/content";

const entrance = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1],
} as const;

export function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="home" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={entrance}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl font-medium leading-[1.06] tracking-[-0.015em] text-ink sm:text-6xl lg:text-[4.5rem]">
              Aashish{" "}
              <span className="font-display italic text-gold">Magar</span>
            </h1>
            <p className="mt-5 font-mono text-sm tracking-wide text-teal">
              {hero.tagline}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {hero.intro}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-base transition hover:bg-gold/90"
              >
                See projects
                <ArrowRight size={16} aria-hidden />
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-muted transition hover:text-ink"
              >
                Get in touch
              </a>
            </div>
            <ul className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-6 font-mono text-xs text-faint">
              <li>based in Kathmandu, Nepal</li>
              <li>open to remote work</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}