"use client";

import { motion } from "framer-motion";
import { Project } from "@/types";
import Button from "./Button";

const ease = [0.16, 1, 0.3, 1] as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface CaseStudyExpandedProps {
  project: Project;
  onClose: () => void;
}

export default function CaseStudyExpanded({
  project,
  onClose,
}: CaseStudyExpandedProps) {
  const { caseStudy, liveUrl } = project;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
          },
        },
      }}
      className="relative py-8"
    >
      {/* Close button */}
      <motion.button
        variants={itemVariants}
        transition={{ duration: 0.4, ease }}
        onClick={onClose}
        className="absolute right-0 top-8 z-10 flex h-12 w-12 items-center justify-center text-text-secondary transition-colors duration-300 hover:text-accent"
        aria-label="Close case study"
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
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </motion.button>

      {/* Hero image */}
      <motion.div
        variants={itemVariants}
        transition={{ duration: 0.6, ease }}
        className="mb-12 aspect-video w-full overflow-hidden border border-border bg-bg-secondary"
      >
        {/* Desktop */}
        <img
          src={project.fullImageUrl}
          alt={`${project.title} — Desktop Preview`}
          className="hidden h-full w-full object-cover lg:block"
        />
        {/* Tablet */}
        <img
          src={project.tabletImageUrl}
          alt={`${project.title} — Tablet Preview`}
          className="hidden h-full w-full object-cover md:block lg:hidden"
        />
        {/* Mobile */}
        <img
          src={project.mobileImageUrl}
          alt={`${project.title} — Mobile Preview`}
          className="block h-full w-full object-cover md:hidden"
        />
      </motion.div>

      {/* Project overview — two columns */}
      <div className="mb-12 grid gap-12 md:grid-cols-5">
        {/* Left — The Brief */}
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.5, ease }}
          className="md:col-span-3"
        >
          <h4 className="mb-6 font-mono text-[13px] uppercase tracking-[0.08em] text-accent">
            The Brief
          </h4>
          <p className="font-body text-[16px] leading-[1.7] text-text-secondary">
            {caseStudy.brief}
          </p>
        </motion.div>

        {/* Right — Quick info */}
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.5, ease }}
          className="space-y-8 md:col-span-2"
        >
          <div>
            <h4 className="mb-3 font-mono text-[13px] uppercase tracking-[0.08em] text-accent">
              Role
            </h4>
            <p className="font-body text-[15px] leading-[1.7] text-text-secondary">
              {caseStudy.role}
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-mono text-[13px] uppercase tracking-[0.08em] text-accent">
              Tools
            </h4>
            <div className="flex flex-wrap gap-3">
              {caseStudy.tools.map((tool) => (
                <span
                  key={tool}
                  className="border border-border px-4 py-2 font-mono text-[13px] text-text-secondary"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {liveUrl && (
            <div>
              <h4 className="mb-3 font-mono text-[13px] uppercase tracking-[0.08em] text-accent">
                Live Site
              </h4>
              <Button variant="secondary" href={liveUrl}>
                Visit Site
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </Button>
            </div>
          )}
        </motion.div>
      </div>

      {/* Approach */}
      <motion.div
        variants={itemVariants}
        transition={{ duration: 0.5, ease }}
        className="mb-12"
      >
        <h4 className="mb-6 font-mono text-[13px] uppercase tracking-[0.08em] text-accent">
          The Approach
        </h4>
        <p className="max-w-3xl font-body text-[16px] leading-[1.7] text-text-secondary">
          {caseStudy.approach}
        </p>
      </motion.div>

      {/* Results */}
      <motion.div
        variants={itemVariants}
        transition={{ duration: 0.5, ease }}
        className="mb-12"
      >
        <h4 className="mb-6 font-mono text-[13px] uppercase tracking-[0.08em] text-accent">
          The Results
        </h4>
        <p className="max-w-3xl font-body text-[16px] leading-[1.7] text-text-secondary">
          {caseStudy.results}
        </p>
      </motion.div>

      {/* Metrics */}
      <motion.div
        variants={itemVariants}
        transition={{ duration: 0.5, ease }}
        className="flex flex-wrap gap-4"
      >
        {caseStudy.metrics.map((metric) => (
          <span
            key={metric}
            className="border border-accent/30 bg-accent-subtle px-5 py-2.5 font-mono text-[13px] uppercase tracking-[0.08em] text-accent"
          >
            {metric}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}
