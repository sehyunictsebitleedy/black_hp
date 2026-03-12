"use client";
import { useState } from "react";
import { ProjectItem } from "@/types/cms";
import Reveal from "./Reveal";

const PX = "clamp(24px,5vw,80px)";
const MAX = 1280;
const CARD_W = 400;
const CARD_GAP = 14;

export default function Projects({ projects }: { projects: ProjectItem[] }) {
  const [current, setCurrent] = useState(0);
  const canPrev = current > 0;
  const canNext = current < projects.length - 1;

  const prev = () => setCurrent(i => Math.max(0, i - 1));
  const next = () => setCurrent(i => Math.min(projects.length - 1, i + 1));

  return (
    <section id="project" style={{
      minHeight: "100svh",
      background: "#080d18",
      borderTop: "1px solid rgba(96,165,250,0.10)",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
    }}>
      <div style={{ maxWidth: MAX, margin: "0 auto", padding: `80px ${PX}`, width: "100%" }}>

        {/* Header */}
        <Reveal style={{
          display: "flex", flexWrap: "wrap",
          alignItems: "flex-end", justifyContent: "space-between",
          gap: 24, marginBottom: 52,
        }}>
          <div>
            <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(139,124,248,0.7)", marginBottom: 20 }}>
              Project
            </p>
            <h2 style={{ lineHeight: 1.05, letterSpacing: "-0.04em", wordBreak: "keep-all" }}>
              <span style={{ display: "block", fontSize: "5vw", fontWeight: 400, color: "#fff" }}>함께 만든</span>
              <span style={{ display: "block", fontSize: "clamp(2rem,4vw,4rem)", fontWeight: 200, color: "rgba(255,255,255,0.18)" }}>수행 실적.</span>
            </h2>
          </div>

          {/* Arrow navigation */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)", marginRight: 8, fontVariantNumeric: "tabular-nums" }}>
              {String(current + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
            <button
              onClick={prev}
              disabled={!canPrev}
              style={{
                width: 40, height: 40,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: canPrev ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)",
                border: `1px solid ${canPrev ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.04)"}`,
                borderRadius: 2,
                cursor: canPrev ? "pointer" : "default",
                transition: "all 0.2s",
                color: canPrev ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.2)",
              }}
              onMouseEnter={e => { if (canPrev) { e.currentTarget.style.background = "rgba(139,124,248,0.1)"; e.currentTarget.style.borderColor = "rgba(139,124,248,0.25)"; e.currentTarget.style.color = "#fff"; }}}
              onMouseLeave={e => { if (canPrev) { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={next}
              disabled={!canNext}
              style={{
                width: 40, height: 40,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: canNext ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)",
                border: `1px solid ${canNext ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.04)"}`,
                borderRadius: 2,
                cursor: canNext ? "pointer" : "default",
                transition: "all 0.2s",
                color: canNext ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.2)",
              }}
              onMouseEnter={e => { if (canNext) { e.currentTarget.style.background = "rgba(139,124,248,0.1)"; e.currentTarget.style.borderColor = "rgba(139,124,248,0.25)"; e.currentTarget.style.color = "#fff"; }}}
              onMouseLeave={e => { if (canNext) { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </Reveal>

        {/* Carousel */}
        <Reveal delay={100}>
          <div style={{ overflow: "hidden", position: "relative" }}>
            {/* Track */}
            <div style={{
              display: "flex",
              gap: CARD_GAP,
              transform: `translateX(calc(-${current} * (${CARD_W}px + ${CARD_GAP}px)))`,
              transition: "transform 0.65s cubic-bezier(0.16,1,0.3,1)",
              willChange: "transform",
            }}>
              {projects.map((proj, i) => {
                const isActive = i === current;
                return (
                  <div
                    key={proj.id}
                    style={{
                      width: CARD_W,
                      flexShrink: 0,
                      background: isActive
                        ? "rgba(139,124,248,0.05)"
                        : "rgba(255,255,255,0.02)",
                      border: `1px solid ${isActive
                        ? "rgba(139,124,248,0.25)"
                        : "rgba(255,255,255,0.06)"}`,
                      borderRadius: 3,
                      padding: "36px 32px",
                      minHeight: 320,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      opacity: isActive ? 1 : 0.5,
                      transition: "opacity 0.5s ease, border-color 0.5s ease, background 0.5s ease",
                      cursor: isActive ? "default" : "pointer",
                    }}
                    onClick={() => !isActive && setCurrent(i)}
                  >
                    {/* Card top */}
                    <div>
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 32 }}>
                        <span style={{
                          fontSize: "3rem", fontWeight: 200, lineHeight: 1,
                          letterSpacing: "-0.05em",
                          color: isActive ? "rgba(139,124,248,0.3)" : "rgba(255,255,255,0.08)",
                          transition: "color 0.5s ease",
                        }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span style={{
                          fontSize: 10, padding: "4px 10px",
                          background: isActive ? "rgba(139,124,248,0.1)" : "rgba(255,255,255,0.04)",
                          border: `1px solid ${isActive ? "rgba(139,124,248,0.2)" : "rgba(255,255,255,0.06)"}`,
                          color: isActive ? "rgba(139,124,248,0.8)" : "rgba(255,255,255,0.3)",
                          letterSpacing: "0.08em",
                          borderRadius: 2,
                          transition: "all 0.5s ease",
                          whiteSpace: "nowrap",
                        }}>
                          {proj.category}
                        </span>
                      </div>

                      <h3 style={{
                        fontSize: "clamp(1.2rem,2vw,1.55rem)",
                        fontWeight: 300,
                        lineHeight: 1.35,
                        letterSpacing: "-0.02em",
                        color: isActive ? "#fff" : "rgba(255,255,255,0.55)",
                        marginBottom: 16,
                        wordBreak: "keep-all",
                        transition: "color 0.5s ease",
                      }}>
                        {proj.title}
                      </h3>

                      <p style={{
                        fontSize: 12, fontWeight: 300, lineHeight: 1.8,
                        color: isActive ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.28)",
                        wordBreak: "keep-all",
                        transition: "color 0.5s ease",
                      }}>
                        {proj.description}
                      </p>
                    </div>

                    {/* Card bottom */}
                    <div style={{ marginTop: 28, paddingTop: 20, borderTop: `1px solid ${isActive ? "rgba(139,124,248,0.15)" : "rgba(255,255,255,0.05)"}`, transition: "border-color 0.5s ease" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                        <div>
                          <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: 4 }}>Client</p>
                          <p style={{ fontSize: 12, fontWeight: 300, color: isActive ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.35)", transition: "color 0.5s ease" }}>{proj.client}</p>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: 4 }}>Year</p>
                          <p style={{ fontSize: 12, fontWeight: 300, color: isActive ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.35)", transition: "color 0.5s ease" }}>{proj.year}</p>
                        </div>
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                        {proj.tags.map(t => (
                          <span key={t} style={{
                            padding: "3px 9px",
                            background: isActive ? "rgba(139,124,248,0.08)" : "rgba(255,255,255,0.03)",
                            border: `1px solid ${isActive ? "rgba(139,124,248,0.16)" : "rgba(255,255,255,0.06)"}`,
                            borderRadius: 100,
                            fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase",
                            color: isActive ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.2)",
                            transition: "all 0.5s ease",
                          }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dot progress */}
          <div style={{ display: "flex", gap: 6, marginTop: 28 }}>
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? 20 : 5,
                  height: 5,
                  borderRadius: 100,
                  background: i === current ? "#8b7cf8" : "rgba(255,255,255,0.15)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
