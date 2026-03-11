"use client";

import { WorkItem } from "@/types/cms";

interface Props { works: WorkItem[]; }

export default function Works({ works }: Props) {
  return (
    <section id="products" className="py-28 md:py-40">
      <div className="max-w-[1380px] mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="label mb-4">SmartGeoKit Series</p>
            <h2 className="display-md" style={{ color: "var(--text-primary)" }}>
              공간정보를<br />
              <span style={{ color: "var(--text-secondary)" }}>다루는 방법.</span>
            </h2>
          </div>
          <a href="#contact" className="link-arrow hidden md:flex">
            전체 제품
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Desktop — table list */}
        <div className="hidden md:block">
          <div className="divider" />
          {works.map((w, i) => (
            <div
              key={w.id}
              className="group flex items-center gap-8 py-6 cursor-pointer transition-all duration-300"
              style={{ color: "var(--text-secondary)", borderBottom: "1px solid var(--border)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text-primary)";
                e.currentTarget.style.paddingLeft = "16px";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.paddingLeft = "0";
              }}
            >
              <span className="num-accent w-8 shrink-0">{String(i + 1).padStart(2, "0")}</span>

              <h3
                className="display-md flex-1 transition-colors duration-200"
                style={{ fontSize: "clamp(1.3rem, 2.5vw, 2.2rem)" }}
              >
                {w.title}
              </h3>

              <span className="label w-28 text-right shrink-0 hidden lg:block">
                {w.category}
              </span>

              <div className="flex gap-2 justify-end shrink-0" style={{ width: 200 }}>
                {w.tags.slice(0, 2).map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              <span className="label w-10 text-right shrink-0">{w.year}</span>

              <svg
                className="w-4 h-4 shrink-0 opacity-0 group-hover:opacity-60 transition-opacity"
                viewBox="0 0 14 14" fill="none"
              >
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          ))}
        </div>

        {/* Mobile — cards */}
        <div
          className="grid grid-cols-1 gap-px md:hidden"
          style={{ background: "var(--border)" }}
        >
          {works.map((w, i) => (
            <div
              key={w.id}
              className="p-6 card-hover"
              style={{ background: "var(--bg)" }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="num-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="label">{w.year}</span>
              </div>
              <h3 className="text-xl font-light mb-2 tracking-tight"
                style={{ color: "var(--text-primary)" }}>
                {w.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)", fontWeight: 300 }}>
                {w.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {w.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
