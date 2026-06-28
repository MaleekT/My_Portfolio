"use client";

const steps = [
  {
    n: "01",
    title: "Discovery & Strategy",
    body: "I ask the right questions, not just what it should look like, but what it needs to accomplish, then build a structural blueprint designed to drive results.",
  },
  {
    n: "02",
    title: "UI/UX Design in Figma",
    body: "High-fidelity interfaces with obsessive attention to type, spacing, and hierarchy. Distinctly yours, not a template with your logo slapped on.",
  },
  {
    n: "03",
    title: "Webflow Development",
    body: "Built on the Client-First framework: fast loads, flawless across devices, structured so you can manage content independently.",
  },
  {
    n: "04",
    title: "Custom Code & Launch",
    body: "I extend Webflow with custom JavaScript, CSS animations, and integrations. After rigorous QA we launch, and I stick around to keep it smooth.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative z-[5] mx-auto max-w-[1340px] px-7 pb-24"
      style={{ scrollMarginTop: "90px" }}
    >
      <div className="mb-9 flex items-baseline justify-between border-b border-border pb-3.5">
        <h2
          data-reveal
          className="m-0 font-display font-bold tracking-[-0.02em]"
          style={{ fontSize: "clamp(28px, 4.5vw, 56px)" }}
        >
          My Process
        </h2>
        <span
          data-reveal
          className="font-mono text-[12px] tracking-[0.12em] text-text-dim"
        >
          STRATEGY → LAUNCH
        </span>
      </div>

      <div
        className="grid gap-[18px]"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
      >
        {steps.map((step) => (
          <div
            key={step.n}
            data-reveal
            data-lift
            className="rounded-[6px] border border-border bg-bg-secondary p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-border-accent"
          >
            <div className="mb-4 font-mono text-[13px] text-accent">{step.n}</div>
            <h3 className="mb-2.5 font-display text-[21px] font-bold">{step.title}</h3>
            <p className="m-0 text-[14px] leading-[1.6] text-text-muted">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
