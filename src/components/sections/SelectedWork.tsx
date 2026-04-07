"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

const ease = [0.16, 1, 0.3, 1] as const;

export default function SelectedWork() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-10% 0px" });
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleToggle = useCallback(
    (id: string) => {
      const next = expandedId === id ? null : id;
      setExpandedId(next);
    },
    [expandedId]
  );

  useEffect(() => {
    if (expandedId) {
      const timeout = setTimeout(() => {
        const el = cardRefs.current[expandedId];
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [expandedId]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="border-t border-border bg-bg-primary"
      style={{ paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)" }}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <div ref={headerRef} className="mb-16 flex items-end justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, ease }}
            className="font-display text-[clamp(32px,5vw,56px)] leading-[1.15] tracking-[-0.02em] text-text-primary"
          >
            Selected Work
          </motion.h2>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease, delay: 0.2 }}
            className="font-mono text-[13px] uppercase tracking-[0.08em] text-accent"
          >
            {projects.length} Projects
          </motion.span>
        </div>

        {/* Project list */}
        <div className="border-t border-border">
          {projects.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => {
                cardRefs.current[project.id] = el;
              }}
            >
              <ProjectCard
                project={project}
                index={i}
                isExpanded={expandedId === project.id}
                onToggle={() => handleToggle(project.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
