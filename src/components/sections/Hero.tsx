"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center bg-bg-primary"
      style={{ paddingTop: "var(--space-3xl)", paddingBottom: "var(--space-2xl)" }}
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-16 px-6 lg:flex-row lg:items-center lg:px-16">
        {/* Left column — 60% */}
        <div className="w-full lg:w-[60%]">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.3 }}
            className="mb-4 inline-flex items-center gap-3"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            <span className="font-mono text-[13px] uppercase tracking-[0.08em] text-accent">
              {"// "}Available for Work
            </span>
          </motion.div>

          {/* Name — main H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.5 }}
            className="font-display text-[clamp(56px,8vw,120px)] leading-[1.05] tracking-[-0.02em] text-text-primary"
          >
            Maleek Taiwo
          </motion.h1>

          {/* Role — secondary heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.65 }}
            className="mt-2 font-display text-[clamp(28px,4vw,48px)] italic leading-[1.2] text-accent"
          >
            UI/UX Designer &amp; Webflow Developer
          </motion.p>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.8 }}
            className="mt-8 max-w-[540px] font-body text-[18px] leading-[1.7] text-text-muted"
          >
            Hi, I&apos;m Maleek. I design and build functional websites that
            solve real user problems. I focus on keeping interfaces clean,
            understanding what the user actually needs, and writing solid code
            to bring those ideas to life on the web.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 1.0 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button variant="primary" onClick={() => handleScrollTo("work")}>
              View My Work
            </Button>
            <Button variant="secondary" onClick={() => handleScrollTo("contact")}>
              Let&apos;s Talk
            </Button>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease, delay: 1.3 }}
            className="mt-16 flex items-center gap-8 font-mono text-[13px] uppercase tracking-[0.08em] text-text-muted"
          >
            <span>4+ Projects</span>
            <span className="h-4 w-px bg-border" />
            <span>2+ Years Experience</span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span className="hidden sm:inline">Lagos, Nigeria</span>
          </motion.div>
        </div>

        {/* Right column — 35% headshot placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.6 }}
          className="mx-auto w-full max-w-[280px] lg:mx-0 lg:w-[35%] lg:max-w-[400px]"
        >
          <div className="aspect-[3/4] w-full overflow-hidden border border-border bg-bg-elevated">
            <img
              src="/images/headshot.jpg"
              alt="Maleek Taiwo"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-text-muted">
            Scroll
          </span>
          <div className="h-10 w-px bg-accent/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
