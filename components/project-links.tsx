"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CircleAlert } from "lucide-react";
import type { Project } from "@/lib/content";
import { GithubIcon } from "./brand-icons";

export function ProjectLinks({ project }: { project: Project }) {
  const [toast, setToast] = useState(false);

  const hasLive = project.live && project.live !== "#";

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(false), 2600);
    return () => clearTimeout(timer);
  }, [toast]);

  function handleLive(event: React.MouseEvent<HTMLAnchorElement>) {
    if (!hasLive) {
      event.preventDefault();
      setToast(true);
    }
  }

  return (
    <>
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
        <a
          href={project.github}
          className="inline-flex items-center gap-1.5 text-sm text-teal transition hover:text-teal/80"
        >
          <GithubIcon size={15} />
          GitHub
        </a>
        <a
          href={project.live}
          onClick={handleLive}
          className={`inline-flex items-center gap-1.5 text-sm transition ${
            hasLive
              ? "text-muted hover:text-ink"
              : "cursor-pointer text-faint"
          }`}
        >
          <ArrowUpRight size={15} aria-hidden />
          Live
        </a>
      </div>

      <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-6">
        <AnimatePresence>
          {toast && (
            <motion.div
              role="status"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 font-mono text-xs text-ink shadow-lg shadow-black/30"
            >
              <CircleAlert size={14} className="text-gold" aria-hidden />
              Live demo not available yet
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}