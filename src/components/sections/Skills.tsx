"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillsByCategory } from "@/data/skills";

const ease = [0.16, 1, 0.3, 1] as const;

const categories = ["Design", "Webflow", "Development", "Integrations"] as const;

const marqueeItems = [
  "Client-First Framework",
  "Finsweet Attributes",
  "CMS Architecture",
  "Custom Animations",
  "Webflow Ecommerce",
  "Reverse Proxy",
  "SEO Optimization",
  "Memberstack",
  "Zapier Integration",
  "Responsive Breakpoints",
  "Webflow Hosting",
  "Dynamic Filtering",
];

function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative overflow-hidden py-8">
      <motion.div
        animate={{ x: [0, -50 * marqueeItems.length] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
        className="flex whitespace-nowrap"
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="mx-8 font-mono text-[13px] uppercase tracking-[0.08em] text-accent"
          >
            {item}
            <span className="ml-8 text-text-muted">&bull;</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-10% 0px" });

  const spotlightRef = useRef<HTMLDivElement>(null);
  const spotlightInView = useInView(spotlightRef, {
    once: true,
    margin: "-10% 0px",
  });

  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-10% 0px" });

  return (
    <section
      id="skills"
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
            Tools &amp; Expertise
          </motion.h2>
        </div>

        {/* Webflow Spotlight */}
        <motion.div
          ref={spotlightRef}
          initial={{ opacity: 0, x: -40, rotate: -1 }}
          animate={
            spotlightInView
              ? { opacity: 1, x: 0, rotate: 0 }
              : { opacity: 0, x: -40, rotate: -1 }
          }
          transition={{ duration: 0.8, ease }}
          className="mb-16 border border-border bg-bg-elevated p-10 md:p-14"
        >
          <h3 className="mb-6 font-display text-[clamp(24px,3vw,32px)] leading-[1.2] tracking-[-0.02em] text-text-primary">
            Webflow Development
          </h3>
          <p className="max-w-2xl font-body text-[16px] leading-[1.7] text-text-secondary">
            I focus on architecting scalable, CMS-driven sites built on the
            Client-First framework and Finsweet attributes. My process involves
            weaving in custom code integrations to push past standard
            limitations, ensuring every build is fully optimized for speed,
            clean SEO, and total client independence.
          </p>

          <div className="mt-10 border-t border-border">
            <Marquee />
          </div>
        </motion.div>

        {/* Skill grid */}
        <div
          ref={gridRef}
          className="grid gap-16 md:grid-cols-2"
        >
          {categories.map((category, catIndex) => {
            const skills = skillsByCategory[category] || [];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  gridInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.6,
                  ease,
                  delay: catIndex * 0.15,
                }}
              >
                <h4 className="mb-6 font-mono text-[13px] uppercase tracking-[0.08em] text-accent">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        gridInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        duration: 0.3,
                        ease,
                        delay: catIndex * 0.15 + skillIndex * 0.03,
                      }}
                      className="border border-border px-4 py-2 font-mono text-[13px] text-text-secondary transition-all duration-300 hover:border-accent hover:bg-accent hover:text-bg-primary"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
