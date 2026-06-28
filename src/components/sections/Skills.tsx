"use client";

import { skillsByCategory } from "@/data/skills";

const marquee =
  "Webflow ✦ Figma ✦ Client-First ✦ Finsweet ✦ CMS Architecture ✦ Custom Code ✦ SEO ✦ Memberstack ✦ Zapier ✦ ";

const categoryOrder = ["Design", "Webflow", "Development", "Integrations"];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative z-[5] pb-24 pt-6"
      style={{ scrollMarginTop: "90px" }}
    >
      {/* Marquee band */}
      <div
        className="mb-14 overflow-hidden border-y border-border-accent bg-accent-subtle py-4"
        aria-hidden="true"
      >
        <div
          className="vs-marquee-track font-display font-extrabold text-accent"
          style={{ fontSize: "clamp(26px, 4.5vw, 52px)", letterSpacing: "-0.01em" }}
        >
          <span className="px-6">{marquee}</span>
          <span className="px-6">{marquee}</span>
        </div>
      </div>

      <div className="mx-auto max-w-[1340px] px-7">
        <div
          className="grid gap-9"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
        >
          <div data-reveal className="max-w-[780px]" style={{ gridColumn: "1 / -1" }}>
            <div className="font-mono text-[12px] uppercase tracking-[0.2em] text-accent">
              // Tools &amp; Expertise
            </div>
            <p
              className="mt-3.5 font-display font-semibold tracking-[-0.01em]"
              style={{ fontSize: "clamp(22px, 2.6vw, 34px)", lineHeight: 1.25 }}
            >
              I architect scalable, CMS-driven sites on the Client-First framework,
              weaving in custom code to push past standard limitations. Optimized
              for speed, clean SEO, and total client independence.
            </p>
          </div>

          {categoryOrder.map((category) => (
            <div key={category} data-reveal className="border-t border-border pt-4">
              <h3 className="mb-3 font-display text-[18px] font-bold">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {(skillsByCategory[category] || []).map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-[2px] border border-border px-2.5 py-1.5 font-mono text-[12px] text-text-secondary"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
