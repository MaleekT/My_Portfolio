"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { testimonials } from "@/data/testimonials";

const ease = [0.16, 1, 0.3, 1] as const;

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease, delay: index * 0.15 }}
      className="group relative border-t border-border py-12 md:py-16"
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-16">
        {/* Number */}
        <span className="font-mono text-[13px] uppercase tracking-[0.08em] text-accent md:pt-2">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Quote */}
        <div className="flex-1">
          <blockquote className="font-display text-[clamp(20px,2.5vw,32px)] leading-[1.4] tracking-[-0.01em] text-text-primary">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>

          {/* Attribution */}
          <div className="mt-8 flex items-center gap-4">
            {/* Avatar placeholder */}
            <div className="flex h-12 w-12 items-center justify-center border border-border bg-bg-elevated">
              <span className="font-mono text-[13px] font-bold text-accent">
                {testimonial.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>

            <div>
              <p className="font-body text-[15px] font-medium text-text-primary">
                {testimonial.author}
              </p>
              <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-text-muted">
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-10% 0px" });

  return (
    <section
      id="testimonials"
      className="border-t border-border bg-bg-primary"
      style={{
        paddingTop: "var(--space-section)",
        paddingBottom: "var(--space-section)",
      }}
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
            Selected Feedback
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease, delay: 0.2 }}
            className="mt-6 max-w-lg font-body text-[16px] leading-[1.7] text-text-muted"
          >
            What clients say after we ship.
          </motion.p>
        </div>

        {/* Testimonial cards */}
        <div>
          {testimonials.map((testimonial, i) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={i}
            />
          ))}
        </div>

        {/* Bottom border */}
        <div className="border-t border-border" />
      </div>
    </section>
  );
}
