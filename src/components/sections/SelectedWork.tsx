"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import CaseStudyExpanded from "@/components/ui/CaseStudyExpanded";

export default function SelectedWork() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id="work"
      className="relative z-[5] mx-auto max-w-[1340px] px-7 pb-24 pt-10"
      style={{ scrollMarginTop: "90px" }}
    >
      <div className="mb-8 flex items-baseline justify-between border-b border-border pb-3.5">
        <h2
          data-reveal
          className="m-0 font-display font-bold tracking-[-0.02em]"
          style={{ fontSize: "clamp(28px, 4.5vw, 56px)" }}
        >
          Selected Work
        </h2>
        <span
          data-reveal
          className="font-mono text-[12px] tracking-[0.12em] text-accent"
        >
          [ 06 ]
        </span>
      </div>

      <div>
        {projects.map((project, i) => {
          const isOpen = openId === project.id;
          const num = String(i + 1).padStart(2, "0");
          return (
            <div key={project.id} className="border-b border-border">
              <button
                type="button"
                data-work
                data-reveal
                onClick={() => setOpenId(isOpen ? null : project.id)}
                aria-expanded={isOpen}
                className="group grid w-full grid-cols-[44px_1fr_auto] items-center gap-4 rounded-[3px] px-1.5 py-6 text-left transition-all duration-300 hover:bg-accent hover:px-5 sm:grid-cols-[60px_1fr_auto] sm:gap-[18px]"
              >
                <span className="font-mono text-[14px] text-accent transition-colors group-hover:text-bg-primary">
                  {num}
                </span>
                <span
                  className="font-display font-bold leading-none tracking-[-0.01em] text-text-primary transition-transform duration-300 group-hover:translate-x-2 group-hover:text-bg-primary"
                  style={{ fontSize: "clamp(20px, 3.6vw, 42px)" }}
                >
                  {project.title}
                </span>
                <span className="flex items-center justify-end gap-3 text-right font-mono text-[11px] tracking-[0.08em] text-text-dim transition-colors group-hover:text-bg-primary/70">
                  <span className="hidden sm:inline">{project.category}</span>
                  <span
                    aria-hidden="true"
                    className="font-display text-[22px] text-bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    {isOpen ? "−" : "↗"}
                  </span>
                </span>
              </button>

              {isOpen && (
                <CaseStudyExpanded
                  project={project}
                  onClose={() => setOpenId(null)}
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
