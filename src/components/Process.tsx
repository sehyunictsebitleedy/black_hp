"use client";
import { ProcessStep } from "@/types/cms";

const PX = "clamp(24px,5vw,80px)";
const MAX = 1280;

export default function Process({ steps }: { steps: ProcessStep[] }) {
  return (
    <section id="business" style={{
      minHeight: "100svh",
      background: "#0d0d18",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      display: "flex",
      alignItems: "center",
    }}>
      <div style={{ maxWidth: MAX, margin: "0 auto", padding: `80px ${PX}`, width: "100%" }}>

        {/* Header */}
        <div style={{
          display: "flex", flexWrap: "wrap",
          alignItems: "flex-end", justifyContent: "space-between",
          gap: 24, marginBottom: 56,
        }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 16 }}>
              How We Work
            </p>
            <h2 style={{ fontSize: "clamp(2rem,4vw,4rem)", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.025em", color: "#fff", wordBreak: "keep-all" }}>
              검증된 프로세스로<br />
              <span style={{ color: "rgba(255,255,255,0.2)" }}>신뢰를 쌓습니다.</span>
            </h2>
          </div>
          <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.75, color: "rgba(255,255,255,0.4)", maxWidth: 240, wordBreak: "keep-all" }}>
            요구사항 분석부터 운영까지,<br />단계별로 철저하게 진행합니다.
          </p>
        </div>

        {/* Steps */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 1,
          background: "rgba(255,255,255,0.08)",
        }}>
          {steps.map((step) => (
            <div key={step.id} style={{
              background: "#0d0d18",
              padding: "40px 32px",
              transition: "background 0.25s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#131326")}
            onMouseLeave={e => (e.currentTarget.style.background = "#0d0d18")}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 48 }}>
                <span style={{
                  fontSize: "3.5rem", fontWeight: 200, lineHeight: 1,
                  letterSpacing: "-0.04em", color: "rgba(255,255,255,0.12)",
                }}>
                  {step.number}
                </span>
                <span style={{
                  fontSize: 11, padding: "4px 10px",
                  background: "rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.06em",
                  borderRadius: 2,
                }}>
                  {step.detail}
                </span>
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 400, lineHeight: 1.4, color: "#fff", marginBottom: 12, wordBreak: "keep-all" }}>
                {step.title}
              </h3>
              <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.7, color: "rgba(255,255,255,0.4)", wordBreak: "keep-all" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
