"use client";

import { WorkItem } from "@/types/cms";

interface Props { works: WorkItem[]; }

export default function Works({ works }: Props) {
  return (
    <section
      id="products"
      className="relative flex flex-col justify-center"
      style={{ minHeight: "100svh", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-[1380px] mx-auto px-6 md:px-16 w-full py-20">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="label mb-4">SmartGeoKit Series</p>
            <h2 className="display-lg" style={{ color: "var(--text-primary)" }}>
              공간정보를<br />
              <span style={{ color: "var(--text-tertiary)" }}>다루는 방법.</span>
            </h2>
          </div>
          <a href="#contact" className="link-arrow hidden md:flex">
            문의하기
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* List */}
        <div style={{ borderTop: "1px solid var(--border)" }}>
          {works.map((w, i) => (
            <div
              key={w.id}
              className="group flex items-center gap-6 md:gap-10 py-7 cursor-pointer transition-all duration-300"
              style={{ borderBottom: "1px solid var(--border)", paddingLeft: 0 }}
              onMouseEnter={(e) => { e.currentTarget.style.paddingLeft = "12px"; }}
              onMouseLeave={(e) => { e.currentTarget.style.paddingLeft = "0"; }}
            >
              <span className="num-accent w-7 shrink-0">{String(i + 1).padStart(2, "0")}</span>

              <h3
                className="flex-1 font-light tracking-tight transition-colors duration-200"
                style={{
                  fontSize: "clamp(1.1rem, 2vw, 1.8rem)",
                  color: "var(--text-secondary)",
                  wordBreak: "keep-all",
                }}
              >
                <span className="group-hover:text-white transition-colors duration-200" style={{ color: "inherit" }}>
                  {w.title}
                </span>
              </h3>

              <span className="label hidden md:block w-24 text-right shrink-0">{w.category}</span>

              <div className="hidden lg:flex gap-2 shrink-0">
                {w.tags.slice(0, 2).map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              <span className="label w-10 text-right shrink-0">{w.year}</span>

              <svg
                className="w-4 h-4 shrink-0 transition-opacity duration-200 opacity-0 group-hover:opacity-50"
                viewBox="0 0 14 14" fill="none"
              >
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
