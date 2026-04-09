"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Button from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

const contactLinks = [
  { label: "Email", value: "maleektaiwo164@gmail.com", href: "mailto:maleektaiwo164@gmail.com" },
  { label: "WhatsApp", value: "+234 806 119 1638", href: "https://wa.me/2348061191638" },
  { label: "Twitter / X", value: "@_MasterMal", href: "https://x.com/_MasterMal" },
  { label: "GitHub", value: "MaleekT", href: "https://github.com/MaleekT" },
];

export default function Contact() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-10% 0px" });

  const formRef = useRef<HTMLDivElement>(null);
  const formInView = useInView(formRef, { once: true, margin: "-10% 0px" });

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/maleektaiwo164@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Project Inquiry from ${formData.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-border bg-bg-primary"
      style={{
        paddingTop: "var(--space-section)",
        paddingBottom: "var(--space-section)",
      }}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <div ref={headerRef} className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease }}
            className="mb-6 font-mono text-[13px] uppercase tracking-[0.08em] text-accent"
          >
            Get in Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="font-display text-[clamp(36px,6vw,72px)] leading-[1.1] tracking-[-0.02em] text-text-primary"
          >
            Have a project
            <br />
            in mind? <span className="italic text-accent">Let&apos;s talk.</span>
          </motion.h2>
        </div>

        {/* Two-column layout */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left — Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 40 }}
            animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, ease }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div>
                <label
                  htmlFor="name"
                  className="mb-3 block font-mono text-[12px] uppercase tracking-[0.08em] text-text-muted"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-b border-border bg-transparent pb-3 font-body text-[16px] text-text-primary outline-none transition-colors duration-300 placeholder:text-text-muted/50 focus:border-accent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block font-mono text-[12px] uppercase tracking-[0.08em] text-text-muted"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border-b border-border bg-transparent pb-3 font-body text-[16px] text-text-primary outline-none transition-colors duration-300 placeholder:text-text-muted/50 focus:border-accent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-3 block font-mono text-[12px] uppercase tracking-[0.08em] text-text-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none border-b border-border bg-transparent pb-3 font-body text-[16px] text-text-primary outline-none transition-colors duration-300 placeholder:text-text-muted/50 focus:border-accent"
                  placeholder="Tell me about your project..."
                />
              </div>

              <div className="pt-4">
                <Button
                  variant="primary"
                  type="submit"
                  ariaLabel="Send message"
                  disabled={status === "sending" || status === "sent"}
                >
                  <AnimatePresence mode="wait">
                    {status === "sending" ? (
                      <motion.span
                        key="sending"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-3"
                      >
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="inline-block h-4 w-4 rounded-full border-2 border-current border-t-transparent"
                        />
                        Sending...
                      </motion.span>
                    ) : status === "sent" ? (
                      <motion.span
                        key="sent"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, ease }}
                        className="flex items-center gap-3"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Message Sent
                      </motion.span>
                    ) : status === "error" ? (
                      <motion.span
                        key="error"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        Try Again
                      </motion.span>
                    ) : (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        Send Message
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Button>
              </div>

              {/* Status feedback message */}
              <AnimatePresence>
                {status === "sent" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease }}
                    className="flex items-center gap-3 border border-accent/30 bg-accent-subtle px-5 py-4"
                  >
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                    </span>
                    <p className="font-mono text-[13px] uppercase tracking-[0.08em] text-accent">
                      Message sent — I&apos;ll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease }}
                    className="border border-red-500/30 bg-red-500/10 px-5 py-4"
                  >
                    <p className="font-mono text-[13px] uppercase tracking-[0.08em] text-red-400">
                      Something went wrong. Please email me directly at maleektaiwo164@gmail.com
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Right — Contact details */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div>
              <p className="mb-10 max-w-md font-body text-[16px] leading-[1.7] text-text-muted">
                I am open to freelance projects and full-time roles. I would
                love to hear from you if you are looking for a complete
                website, a fresh redesign, or a technical Webflow build.
              </p>

              <div className="flex flex-col gap-6">
                {contactLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, ease, delay: 0.3 + i * 0.1 }}
                    className="group flex items-center justify-between border-b border-border pb-4 transition-colors duration-300 hover:border-accent"
                  >
                    <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-text-muted">
                      {link.label}
                    </span>
                    <span className="font-body text-[15px] text-text-secondary transition-colors duration-300 group-hover:text-accent">
                      {link.value}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={formInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.8 }}
              className="mt-16 border border-border p-8"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                <span className="font-mono text-[13px] uppercase tracking-[0.08em] text-accent">
                  Available Now
                </span>
              </div>
              <p className="font-body text-[14px] leading-[1.7] text-text-muted">
                Currently taking on new projects for Q2 2026.
                Typical turnaround: 2–4 weeks depending on scope.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
