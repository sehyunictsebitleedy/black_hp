"use client";
import { WorkItem } from "@/types/cms";
import Reveal from "./Reveal";

const PX = "clamp(24px,5vw,80px)";
const MAX = 1280;

export default function Works({ works }: { works: WorkItem[] }) {
  return (
    <section id="products" style={{
      minHeight: "100svh",
      background: "#0a0a0a",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      display: "flex",
      alignItems: "center",
    }}>
      <div style={{ maxWidth: MAX, margin: "0 auto", padding: `80px ${PX}`, width: "100%" }}>

        {/* Header */}
        <Reveal style={{
          display: "flex", flexWrap: "wrap",
          alignItems: "flex-end", justifyContent: "space-between",
          gap: 16, marginBottom: 48,
        }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 16 }}>
              SmartGeoKit Series
            </p>
            <h2 style={{ lineHeight: 1.05, letterSpacing: "-0.035em", wordBreak: "keep-all" }}>
              <span style={{ display: "block", fontSize: "6vw", fontWeight: 400, color: "#fff" }}>공간정보를</span>
              <span style={{ display: "block", fontSize: "clamp(2rem,4vw,4rem)", fontWeight: 200, color: "rgba(255,255,255,0.2)" }}>다루는 방법.</span>
            </h2>
          </div>
          <a href="#contact" style={{
            display: "flex", alignItems: "center", gap: 6,
            fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
          onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
          >
            문의하기
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </Reveal>

        {/* List */}
        <Reveal delay={100} style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {works.map((w, i) => (
            <div key={w.id}
              style={{
                display: "flex", alignItems: "center", gap: 24,
                padding: "28px 0",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                cursor: "pointer",
                transition: "padding-left 0.3s ease",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.paddingLeft = "12px"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.paddingLeft = "0"; }}
            >
              {/* Index */}
              <span style={{ fontSize: 11, fontWeight: 400, letterSpacing: "0.12em", color: "rgba(255,255,255,0.22)", width: 28, flexShrink: 0, fontVariantNumeric: "tabular-nums" }}>
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <span style={{
                flex: 1,
                fontSize: "clamp(1.1rem,2.2vw,1.75rem)",
                fontWeight: 300,
                letterSpacing: "-0.015em",
                color: "rgba(255,255,255,0.55)",
                wordBreak: "keep-all",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
              >
                {w.title}
              </span>

              {/* Category */}
              <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", flexShrink: 0, minWidth: 80, textAlign: "right" }}
                className="hidden md:block">
                {w.category}
              </span>

              {/* Tags */}
              <div style={{ display: "flex", gap: 6, flexShrink: 0 }} className="hidden lg:flex">
                {w.tags.slice(0, 2).map(t => (
                  <span key={t} style={{
                    padding: "3px 10px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 100,
                    fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase",
                    color: "rgba(255,255,255,0.28)",
                  }}>{t}</span>
                ))}
              </div>

              {/* Year */}
              <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", color: "rgba(255,255,255,0.22)", flexShrink: 0 }}>
                {w.year}
              </span>
            </div>
          ))}
        </Reveal>

      </div>
    </section>
  );
}
