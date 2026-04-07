"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "I start by asking the right questions, not just what you want the site to look like, but what it needs to accomplish. From there, I create a structural blueprint designed specifically to drive results, whether that means more sales, leads, or engagement.",
  },
  {
    number: "02",
    title: "UI/UX Design in Figma",
    description:
      "I design high-fidelity interfaces in Figma with obsessive attention to typography, spacing, and hierarchy. Every layout decision is intentional. You get a design that is distinctly yours, not a template with your logo slapped on.",
  },
  {
    number: "03",
    title: "Webflow Development",
    description:
      "I build the final product in Webflow using the Client-First framework for clean, scalable architecture. Your site loads fast, works flawlessly across devices, and is structured so you can manage content independently.",
  },
  {
    number: "04",
    title: "Custom Code & Launch",
    description:
      "When the project demands more, I extend Webflow with custom JavaScript, CSS animations, and third-party integrations. After rigorous QA and optimization, we launch — and I stick around to make sure everything runs smooth.",
  },
] as const;

function ProcessCard({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, ease, delay: index * 0.15 }}
      className="group relative border border-border bg-bg-elevated p-8 transition-all duration-500 hover:border-accent/50 hover:bg-bg-secondary md:p-8 lg:p-10"
    >
      {/* Step number — oversized background */}
      <span className="absolute right-6 top-6 font-mono text-[clamp(3rem,6vw,5rem)] font-bold leading-none text-accent/10 transition-colors duration-500 group-hover:text-accent/20">
        {step.number}
      </span>

      {/* Accent top bar */}
      <div className="mb-8 h-px w-12 bg-accent transition-all duration-500 group-hover:w-20" />

      {/* Number badge */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="mb-6 flex h-14 w-14 items-center justify-center border border-accent bg-transparent font-mono text-[13px] font-bold text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-bg-primary"
      >
        {step.number}
      </motion.div>

      {/* Title */}
      <h3 className="mb-4 font-display text-[clamp(20px,2vw,28px)] leading-[1.2] tracking-[-0.02em] text-text-primary transition-colors duration-300 group-hover:text-accent">
        {step.title}
      </h3>

      {/* Description */}
      <p className="font-body text-[16px] leading-[1.7] text-text-muted">
        {step.description}
      </p>
    </motion.div>
  );
}

export default function Process() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-10% 0px" });

  return (
    <section
      id="process"
      className="border-t border-border bg-bg-primary"
      style={{ paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)" }}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <div ref={headerRef} className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, ease }}
            className="font-display text-[clamp(32px,5vw,56px)] leading-[1.15] tracking-[-0.02em] text-text-primary"
          >
            My Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease, delay: 0.2 }}
            className="mt-6 max-w-lg font-body text-[16px] leading-[1.7] text-text-muted"
          >
            Every project follows a proven framework — from strategy to launch,
            no shortcuts.
          </motion.p>
        </div>

        {/* Process cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <ProcessCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
