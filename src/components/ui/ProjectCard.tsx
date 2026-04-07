"use client";

import { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Project } from "@/types";
import CaseStudyExpanded from "./CaseStudyExpanded";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

interface ProjectCardProps {
  project: Project;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function ProjectCard({
  project,
  index,
  isExpanded,
  onToggle,
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const number = String(index + 1).padStart(2, "0");
  const isComingSoon = project.comingSoon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease, delay: index * 0.1 }}
      layout
      className="border-b border-border"
    >
      {/* Collapsed header */}
      <motion.div
        layout="position"
        onClick={() => !isComingSoon && onToggle()}
        className={cn(
          "group flex cursor-pointer items-center gap-8 py-10 transition-all duration-300 md:gap-12",
          isComingSoon && "cursor-default opacity-50",
          !isComingSoon && "hover:pl-4"
        )}
        role={isComingSoon ? undefined : "button"}
        tabIndex={isComingSoon ? undefined : 0}
        aria-expanded={isExpanded}
        onKeyDown={(e) => {
          if (!isComingSoon && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            onToggle();
          }
        }}
      >
        {/* Number */}
        <span className="font-mono text-[13px] tracking-[0.08em] text-accent">
          {number}
        </span>

        {/* Title + Category */}
        <div className="flex-1">
          <h3
            className={cn(
              "font-display text-[clamp(24px,3vw,36px)] leading-[1.2] tracking-[-0.02em] text-text-primary transition-colors duration-300",
              !isComingSoon && "group-hover:text-accent"
            )}
          >
            {project.title}
          </h3>
          <p className="mt-2 font-mono text-[13px] uppercase tracking-[0.08em] text-text-muted">
            {project.category}
          </p>
        </div>

        {/* Coming Soon badge or arrow */}
        {isComingSoon ? (
          <span className="border border-border px-4 py-2 font-mono text-[13px] uppercase tracking-[0.08em] text-text-muted">
            Coming Soon
          </span>
        ) : (
          <motion.div
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.3, ease }}
            className="flex h-12 w-12 items-center justify-center text-text-muted transition-colors duration-300 group-hover:text-accent"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </motion.div>
        )}
      </motion.div>

      {/* Expanded case study */}
      <AnimatePresence>
        {isExpanded && !isComingSoon && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.5, ease },
              opacity: { duration: 0.3, ease },
            }}
            className="overflow-hidden"
          >
            <div className="pb-16 pt-4">
              <CaseStudyExpanded project={project} onClose={onToggle} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
