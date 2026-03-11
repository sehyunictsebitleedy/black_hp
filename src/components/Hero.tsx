"use client";
import { HeroContent } from "@/types/cms";

const PX = "clamp(24px,5vw,80px)";
const MAX = 1280;

export default function Hero({ content }: { content: HeroContent }) {
  const lines = content.headline.split("\n");

  return (
    <section style={{
      minHeight: "100svh",
      background: "#080810",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      paddingTop: 64,
    }}>

      {/* ── Aurora orb layer ── */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>

        {/* Orb 1 — Blue (top right) */}
        <div className="orb1" style={{
          position: "absolute",
          width: 700, height: 700, borderRadius: "50%",
          background: "radial-gradient(circle at center, rgba(74,124,247,0.38) 0%, rgba(74,124,247,0.12) 40%, transparent 72%)",
          top: "-15%", right: "-10%",
          filter: "blur(72px)",
        }} />

        {/* Orb 2 — Purple (bottom left) */}
        <div className="orb2" style={{
          position: "absolute",
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle at center, rgba(139,92,246,0.35) 0%, rgba(139,92,246,0.1) 42%, transparent 72%)",
          bottom: "-10%", left: "-8%",
          filter: "blur(80px)",
        }} />

        {/* Orb 3 — Teal (center-ish) */}
        <div className="orb3" style={{
          position: "absolute",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle at center, rgba(20,184,166,0.2) 0%, rgba(20,184,166,0.06) 45%, transparent 72%)",
          top: "30%", left: "35%",
          filter: "blur(90px)",
        }} />

        {/* Grid overlay */}
        <div style={{
          position: "absolute", inset: "-56px",
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }} className="grid-drift" />

        {/* Vignette — darken edges so text stays readable */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(8,8,16,0.85) 100%)",
        }} />
      </div>

      {/* ── Content ── */}
      <div style={{ position: "relative", maxWidth: MAX, margin: "0 auto", padding: `72px ${PX}`, width: "100%" }}>

        {/* Eyebrow */}
        <div className="au" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 44 }}>
          <span style={{
            width: 6, height: 6, borderRadius: "50%",
            background: "#4a7cf7",
            boxShadow: "0 0 10px rgba(74,124,247,0.8), 0 0 20px rgba(74,124,247,0.4)",
          }} />
          <span style={{
            fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)",
          }}>
            {content.eyebrow}
          </span>
        </div>

        {/* Headline */}
        <h1 style={{ marginBottom: 40 }}>
          {lines.map((line, i) => (
            <span key={i} className={`au d${i + 1}`} style={{
              display: "block",
              fontSize: i === 0 ? "6vw" : "clamp(3rem, 7.5vw, 7rem)",
              fontWeight: i === 0 ? 400 : 200,
              lineHeight: 1.0,
              letterSpacing: "-0.035em",
              wordBreak: "keep-all",
              color: i === 0 ? "#ffffff" : "rgba(255,255,255,0.2)",
            }}>
              {line}
            </span>
          ))}
        </h1>

        {/* Sub + CTA */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: 40 }}>
          <p className="au d3" style={{
            fontSize: 14, fontWeight: 300, lineHeight: 1.85,
            color: "rgba(255,255,255,0.5)",
            maxWidth: 300, wordBreak: "keep-all",
          }}>
            {content.subheadline.replace(/\n/g, " ")}
          </p>

          <div className="au d4" style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a href="#about" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "13px 28px",
              background: "#fff", color: "#000",
              fontSize: 12, fontWeight: 500,
              letterSpacing: "0.08em", textTransform: "uppercase",
              borderRadius: 2, transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "none"; }}
            >
              {content.ctaPrimary}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#products" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "13px 28px",
              background: "rgba(255,255,255,0.06)",
              color: "rgba(255,255,255,0.6)",
              fontSize: 12, fontWeight: 400,
              letterSpacing: "0.08em", textTransform: "uppercase",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 2, transition: "all 0.2s",
              backdropFilter: "blur(8px)",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
            >
              {content.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Available indicator */}
        <div className="au d5" style={{ marginTop: 60, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px rgba(34,197,94,0.8)" }} />
          <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)" }}>Available</span>
        </div>
      </div>
    </section>
  );
}
