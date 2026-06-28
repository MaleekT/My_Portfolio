"use client";

import { useState } from "react";

const contactLinks = [
  {
    label: "EMAIL",
    value: "maleektaiwo164@gmail.com",
    href: "mailto:maleektaiwo164@gmail.com",
  },
  {
    label: "WHATSAPP",
    value: "+234 806 119 1638",
    href: "https://wa.me/2348061191638",
  },
  {
    label: "TWITTER / X",
    value: "@_MasterMal",
    href: "https://x.com/_MasterMal",
  },
  {
    label: "GITHUB",
    value: "MaleekT",
    href: "https://github.com/MaleekT",
  },
];

const inputClass =
  "w-full rounded-[3px] border border-border bg-bg-primary p-3 text-[14px] text-text-primary placeholder:text-placeholder focus:border-accent focus:outline-none";

export default function Contact() {
  // Placeholder submit. Real Web3Forms + Turnstile handler is wired in Phase 6.
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2600);
  };

  return (
    <section
      id="contact"
      className="relative z-[5] mx-auto max-w-[1340px] px-7 pb-16"
      style={{ scrollMarginTop: "90px" }}
    >
      <div
        className="grid gap-12 border-t border-border pt-12"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
      >
        {/* Left: info */}
        <div>
          <div
            data-reveal
            className="mb-4 font-mono text-[12px] uppercase tracking-[0.2em] text-accent"
          >
            // Get in touch
          </div>
          <h2
            data-reveal
            className="m-0 mb-4 font-display font-extrabold tracking-[-0.03em]"
            style={{ fontSize: "clamp(40px, 6.5vw, 86px)", lineHeight: 0.9 }}
          >
            Have a project in mind?
          </h2>
          <p className="max-w-[440px] text-[15px] leading-[1.6] text-text-muted">
            I&apos;m open to freelance projects and full-time roles, whether you
            need a complete website, a fresh redesign, or a technical Webflow
            build.
          </p>
          <div className="mt-6 flex flex-col">
            {contactLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                data-magnet
                className="flex justify-between border-b border-border py-3.5 font-mono text-[13px] transition-colors duration-300 hover:text-accent"
              >
                <span className="text-text-dim">{c.label}</span>
                <span>{c.value}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <form
          onSubmit={handleSubmit}
          data-reveal
          className="rounded-[8px] border border-border bg-bg-secondary p-7"
        >
          <label
            htmlFor="contact-name"
            className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.14em] text-text-dim"
          >
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            required
            placeholder="Your name"
            className={`mb-4 ${inputClass}`}
          />
          <label
            htmlFor="contact-email"
            className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.14em] text-text-dim"
          >
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            required
            placeholder="you@email.com"
            className={`mb-4 ${inputClass}`}
          />
          <label
            htmlFor="contact-message"
            className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.14em] text-text-dim"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            rows={4}
            required
            placeholder="Tell me about the project"
            className={`mb-5 resize-y ${inputClass}`}
          />
          <button
            type="submit"
            data-magnet
            className="w-full rounded-[3px] bg-accent p-4 font-display text-[15px] font-bold text-bg-primary transition-colors hover:bg-accent-hover"
          >
            {sent ? "✓ Sent. Thanks!" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
