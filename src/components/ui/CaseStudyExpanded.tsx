"use client";

import { useState } from "react";
import { Project } from "@/types";

interface CaseStudyExpandedProps {
  project: Project;
  onClose: () => void;
}

export default function CaseStudyExpanded({
  project,
  onClose,
}: CaseStudyExpandedProps) {
  const [imgError, setImgError] = useState(false);
  const { caseStudy, liveUrl, title } = project;

  return (
    <div className="overflow-hidden pb-12 pt-2">
      {/* Hero image */}
      <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-[8px] border border-border-accent bg-bg-secondary">
        {imgError ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-6 text-center">
            <span
              className="font-display text-text-secondary"
              style={{ fontSize: "clamp(20px, 3vw, 32px)" }}
            >
              {title}
            </span>
            <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-text-dim">
              Preview
            </span>
          </div>
        ) : (
          <img
            src={project.fullImageUrl}
            alt={`${title} preview`}
            className="h-full w-full object-cover"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {/* Role / Tools / Live site */}
      <div className="mb-8 grid gap-6 border-b border-border pb-8 md:grid-cols-3">
        <div>
          <div className="mb-3 font-mono text-[12px] uppercase tracking-[0.2em] text-accent">
            // Role
          </div>
          <p className="m-0 font-body text-[15px] leading-[1.55] text-text-secondary">
            {caseStudy.role}
          </p>
        </div>
        <div>
          <div className="mb-3 font-mono text-[12px] uppercase tracking-[0.2em] text-accent">
            // Built with
          </div>
          <div className="flex flex-wrap gap-2">
            {caseStudy.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-[2px] border border-border px-2.5 py-1.5 font-mono text-[12px] text-text-secondary"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
        {liveUrl && (
          <div>
            <div className="mb-3 font-mono text-[12px] uppercase tracking-[0.2em] text-accent">
              // Live Site
            </div>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[2px] border border-border px-4 py-2 font-mono text-[13px] text-text-primary transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              Visit Site ↗
            </a>
          </div>
        )}
      </div>

      {/* The Brief */}
      <div className="mb-10 grid gap-3 md:grid-cols-[200px_1fr]">
        <div className="font-mono text-[12px] uppercase tracking-[0.2em] text-accent">
          // The Brief
        </div>
        <p
          className="m-0 max-w-[740px] font-body font-medium text-text-primary"
          style={{ fontSize: "clamp(18px, 2vw, 24px)", lineHeight: 1.5 }}
        >
          {caseStudy.brief}
        </p>
      </div>

      {/* The Approach */}
      <div className="mb-10 grid gap-3 md:grid-cols-[200px_1fr]">
        <div className="font-mono text-[12px] uppercase tracking-[0.2em] text-accent">
          // The Approach
        </div>
        <p className="m-0 max-w-[740px] font-body text-[16px] leading-[1.7] text-text-secondary">
          {caseStudy.approach}
        </p>
      </div>

      {/* The Results */}
      <div className="mb-8 grid gap-3 md:grid-cols-[200px_1fr]">
        <div className="font-mono text-[12px] uppercase tracking-[0.2em] text-accent">
          // The Results
        </div>
        <p className="m-0 max-w-[740px] font-body text-[16px] leading-[1.7] text-text-secondary">
          {caseStudy.results}
        </p>
      </div>

      {/* Metrics */}
      <div className="flex flex-wrap items-center gap-3">
        {caseStudy.metrics.map((metric) => (
          <span
            key={metric}
            className="rounded-[2px] border border-border-accent bg-accent-subtle px-3.5 py-2 font-mono text-[12px] uppercase tracking-[0.06em] text-accent"
          >
            {metric}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={onClose}
        className="mt-8 font-mono text-[12px] uppercase tracking-[0.12em] text-text-dim transition-colors duration-300 hover:text-accent"
      >
        ✕ Close case study
      </button>
    </div>
  );
}
