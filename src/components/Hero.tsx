"use client";

import { HeroContent } from "@/types/cms";

interface Props { content: HeroContent; }

export default function Hero({ content }: Props) {
  return (
    <section
      className="relative flex flex-col justify-center overflow-hidden"
      style={{ minHeight: "100svh", paddingTop: 60 }}
    >
      {/* Glow */}
      <div
        className="absolute pointer-events-none animate-orb"
        style={{
          width: 700, height: 700, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(79,126,245,0.08) 0%, transparent 65%)",
          top: "5%", right: "-8%", filter: "blur(100px)",
        }}
      />

      <div className="max-w-[1380px] mx-auto px-6 md:px-16 w-full">
        {/* Eyebrow */}
        <p className="label mb-10 animate-fadeUp" style={{ color: "var(--accent)" }}>
          {content.eyebrow}
        </p>

        {/* Headline */}
        <h1 className="display-xl mb-8">
          {content.headline.split("\n").map((line, i) => (
            <span
              key={i}
              className={`block animate-fadeUp delay-${(i + 1) * 100}`}
              style={{ color: i === 0 ? "var(--text-primary)" : "var(--text-tertiary)" }}
            >
              {line}
            </span>
          ))}
        </h1>

        {/* Sub + CTA */}
        <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-24">
          <p
            className="text-sm leading-loose animate-fadeUp delay-300"
            style={{ color: "var(--text-secondary)", fontWeight: 300, maxWidth: 320, wordBreak: "keep-all" }}
          >
            {content.subheadline.replace(/\n/g, " ")}
          </p>
          <div className="flex items-center gap-3 animate-fadeUp delay-400">
            <a href="#about" className="btn-primary">
              {content.ctaPrimary}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#products" className="btn-secondary">{content.ctaSecondary}</a>
          </div>
        </div>

        {/* Bottom meta */}
        <div
          className="flex flex-wrap items-center justify-between gap-4 mt-20 pt-6 animate-fadeUp delay-500"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="flex items-center gap-8">
            {[{ v: "10+", l: "Years" }, { v: "100+", l: "Projects" }, { v: "50+", l: "Clients" }].map((s) => (
              <div key={s.l} className="flex items-baseline gap-2">
                <span className="text-xl font-light" style={{ color: "var(--text-primary)" }}>{s.v}</span>
                <span className="label">{s.l}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4ade80", boxShadow: "0 0 5px #4ade80" }} />
            <span className="label">Available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
