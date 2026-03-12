"use client";
import { ProcessStep } from "@/types/cms";
import Reveal from "./Reveal";

const PX = "clamp(24px,5vw,80px)";
const MAX = 1280;

export default function Process({ steps }: { steps: ProcessStep[] }) {
  return (
    <section id="business" style={{
      minHeight: "100svh",
      background: "#08080c",
      borderTop: "1px solid rgba(255,255,255,0.055)",
      display: "flex",
      alignItems: "center",
    }}>
      <div style={{ maxWidth: MAX, margin: "0 auto", padding: `80px ${PX}`, width: "100%" }}>

        {/* Header */}
        <Reveal style={{
          display: "flex", flexWrap: "wrap",
          alignItems: "flex-end", justifyContent: "space-between",
          gap: 24, marginBottom: 64,
        }}>
          <div>
            <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(139,124,248,0.7)", marginBottom: 20 }}>
              How We Work
            </p>
            <h2 style={{ lineHeight: 1.05, letterSpacing: "-0.04em", wordBreak: "keep-all" }}>
              <span style={{ display: "block", fontSize: "5vw", fontWeight: 400, color: "#fff" }}>세현의 SEbit</span>
              <span style={{ display: "block", fontSize: "clamp(2rem,4vw,4rem)", fontWeight: 200, color: "rgba(255,255,255,0.18)" }}>AI 브랜드를 소개합니다.</span>
            </h2>
          </div>
          
        </Reveal>

        {/* Steps */}
        <Reveal delay={100} style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 12,
        }}>
          {steps.map((step) => (
            <div key={step.id} style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              padding: "36px 30px",
              borderRadius: 3,
              transition: "background 0.3s, border-color 0.3s",
              cursor: "default",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(139,124,248,0.05)";
              e.currentTarget.style.borderColor = "rgba(139,124,248,0.22)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(255,255,255,0.02)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
            }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 52 }}>
                <span style={{
                  fontSize: "3.2rem", fontWeight: 200, lineHeight: 1,
                  letterSpacing: "-0.05em", color: "rgba(255,255,255,0.1)",
                }}>
                  {step.number}
                </span>
                <span style={{
                  fontSize: 10, padding: "4px 10px",
                  background: "rgba(139,124,248,0.08)",
                  border: "1px solid rgba(139,124,248,0.16)",
                  color: "rgba(139,124,248,0.7)",
                  letterSpacing: "0.06em",
                  borderRadius: 2,
                }}>
                  {step.detail}
                </span>
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.45, color: "#fff", marginBottom: 12, wordBreak: "keep-all", letterSpacing: "-0.01em" }}>
                {step.title}
              </h3>
              <p style={{ fontSize: 12, fontWeight: 300, lineHeight: 1.8, color: "rgba(255,255,255,0.38)", wordBreak: "keep-all" }}>
                {step.description}
              </p>
            </div>
          ))}
        </Reveal>

      </div>
    </section>
  );
}
