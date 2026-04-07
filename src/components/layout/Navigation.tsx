"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-bg-primary/80 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 md:px-12 lg:px-16">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-display text-xl font-bold text-text-primary transition-colors duration-300 hover:text-accent"
          >
            MALEEK.
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2 + i * 0.08,
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={cn(
                  "relative px-4 py-2.5 font-mono text-[13px] uppercase tracking-[0.08em] transition-colors duration-300",
                  activeSection === link.href.replace("#", "")
                    ? "text-accent"
                    : "text-text-secondary hover:text-text-primary"
                )}
              >
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute bottom-0 left-4 right-4 h-px bg-accent"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </motion.a>
            ))}
            <div className="ml-4 border-l border-border pl-4">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: 45, y: 5.5, backgroundColor: "var(--accent)" }
                    : { rotate: 0, y: 0, backgroundColor: "var(--text-primary)" }
                }
                transition={{ duration: 0.3 }}
                className="block h-px w-5 origin-center"
                style={{ backgroundColor: "var(--text-primary)" }}
              />
              <motion.span
                animate={
                  mobileOpen
                    ? { opacity: 0, scaleX: 0 }
                    : { opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.2 }}
                className="block h-px w-5"
                style={{ backgroundColor: "var(--text-primary)" }}
              />
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: -45, y: -5.5, backgroundColor: "var(--accent)" }
                    : { rotate: 0, y: 0, backgroundColor: "var(--text-primary)" }
                }
                transition={{ duration: 0.3 }}
                className="block h-px w-5 origin-center"
                style={{ backgroundColor: "var(--text-primary)" }}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-bg-primary/95 backdrop-blur-lg md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                    delay: i * 0.08,
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="font-display text-3xl font-bold text-text-primary transition-colors duration-300 hover:text-accent"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
