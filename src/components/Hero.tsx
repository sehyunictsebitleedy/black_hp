"use client";
import { HeroContent } from "@/types/cms";

const PX = "clamp(24px,5vw,80px)";
const MAX = 1280;

export default function Hero({ content }: { content: HeroContent }) {
  const lines = content.headline.split("\n");

  return (
    <section style={{
      minHeight: "100svh",
      background: "#08080c",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      paddingTop: 64,
    }}>

      {/* ── Background layer ── */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>

        {/* Orb 1 — Violet (top right) */}
        <div className="orb1" style={{
          position: "absolute",
          width: 800, height: 800, borderRadius: "50%",
          background: "radial-gradient(circle at center, rgba(139,92,246,0.28) 0%, rgba(109,40,217,0.1) 45%, transparent 70%)",
          top: "-20%", right: "-12%",
          filter: "blur(90px)",
        }} />

        {/* Orb 2 — Indigo (bottom left) */}
        <div className="orb2" style={{
          position: "absolute",
          width: 700, height: 700, borderRadius: "50%",
          background: "radial-gradient(circle at center, rgba(99,102,241,0.22) 0%, rgba(67,56,202,0.08) 45%, transparent 70%)",
          bottom: "-15%", left: "-10%",
          filter: "blur(100px)",
        }} />

        {/* Orb 3 — Soft sky (center) */}
        <div className="orb3" style={{
          position: "absolute",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle at center, rgba(139,124,248,0.1) 0%, transparent 70%)",
          top: "25%", left: "38%",
          filter: "blur(80px)",
        }} />

        {/* Grid */}
        <div style={{
          position: "absolute", inset: "-56px",
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }} className="grid-drift" />

        {/* Edge vignette */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 35%, rgba(8,8,12,0.9) 100%)",
        }} />
      </div>

      {/* ── Content ── */}
      <div style={{ position: "relative", maxWidth: MAX, margin: "0 auto", padding: `72px ${PX}`, width: "100%" }}>

        {/* Eyebrow */}
        <div className="au" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 48 }}>
          <span style={{
            width: 5, height: 5, borderRadius: "50%",
            background: "#8b7cf8",
            boxShadow: "0 0 8px rgba(139,124,248,0.9), 0 0 18px rgba(139,124,248,0.4)",
          }} />
          <span style={{
            fontSize: 10, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)",
          }}>
            {content.eyebrow}
          </span>
        </div>

        {/* Headline */}
        <h1 style={{ marginBottom: 44 }}>
          {lines.map((line, i) => (
            <span key={i} className={`au d${i + 1}`} style={{
              display: "block",
              fontSize: i === 0 ? "5vw" : "clamp(3rem, 7.5vw, 4rem)",
              fontWeight: i === 0 ? 400 : 200,
              lineHeight: 1.0,
              letterSpacing: "-0.04em",
              wordBreak: "keep-all",
              color: i === 0 ? "#ffffff" : "rgba(255,255,255,0.18)",
            }}>
              {line}
            </span>
          ))}
        </h1>

        {/* Sub + CTA */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: 44 }}>
          <p className="au d3" style={{
            fontSize: 13, fontWeight: 300, lineHeight: 1.9,
            color: "rgba(255,255,255,0.42)",
            maxWidth: 290, wordBreak: "keep-all",
            letterSpacing: "0.005em",
          }}>
            {content.subheadline.replace(/\n/g, " ")}
          </p>

          <div className="au d4" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <a href="#about" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "13px 26px",
              background: "#fff", color: "#000",
              fontSize: 11, fontWeight: 500,
              letterSpacing: "0.1em", textTransform: "uppercase",
              borderRadius: 2, transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.86"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "none"; }}
            >
              {content.ctaPrimary}
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#products" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "12px 26px",
              background: "rgba(139,124,248,0.08)",
              color: "rgba(255,255,255,0.55)",
              fontSize: 11, fontWeight: 400,
              letterSpacing: "0.1em", textTransform: "uppercase",
              border: "1px solid rgba(139,124,248,0.2)",
              borderRadius: 2, transition: "all 0.25s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(139,124,248,0.14)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(139,124,248,0.35)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(139,124,248,0.08)"; e.currentTarget.style.color = "rgba(255,255,255,0.55)"; e.currentTarget.style.borderColor = "rgba(139,124,248,0.2)"; }}
            >
              {content.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Status indicator */}
        <div className="au d5" style={{ marginTop: 64, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 7px rgba(34,197,94,0.9)" }} />
          <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.24)" }}>Available</span>
        </div>
      </div>
    </section>
  );
}
