"use client";
import { HeroContent } from "@/types/cms";

const PX = "clamp(24px,5vw,80px)";
const MAX = 1280;

export default function Hero({ content }: { content: HeroContent }) {
  const lines = content.headline.split("\n");

  return (
    <section style={{
      minHeight: "100svh",
      background: "#0a0a0a",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      paddingTop: 64,
    }}>
      {/* Glow blob */}
      <div className="ag" style={{
        position: "absolute",
        width: 600, height: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(74,124,247,0.12) 0%, transparent 68%)",
        top: "0%", right: "-5%",
        filter: "blur(80px)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: MAX, margin: "0 auto",
        padding: `72px ${PX}`,
        width: "100%",
      }}>
        {/* Eyebrow */}
        <div className="au" style={{
          display: "flex", alignItems: "center", gap: 8,
          marginBottom: 40,
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: "50%",
            background: "var(--blue)",
            boxShadow: "0 0 8px rgba(74,124,247,0.6)",
          }} />
          <span style={{
            fontSize: 11, fontWeight: 500,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
          }}>
            {content.eyebrow}
          </span>
        </div>

        {/* Headline */}
        <h1 style={{ marginBottom: 36 }}>
          {lines.map((line, i) => (
            <span key={i} className={`au d${i + 1}`} style={{
              display: "block",
              fontSize: "clamp(3rem, 7.5vw, 7rem)",
              fontWeight: 200,
              lineHeight: 1.0,
              letterSpacing: "-0.035em",
              wordBreak: "keep-all",
              color: i === 0 ? "#fff" : "rgba(255,255,255,0.22)",
            }}>
              {line}
            </span>
          ))}
        </h1>

        {/* Sub + CTA */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: 40 }}>
          <p className="au d3" style={{
            fontSize: 14, fontWeight: 300, lineHeight: 1.8,
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
              borderRadius: 2, transition: "opacity 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              {content.ctaPrimary}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#products" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "13px 28px",
              background: "transparent", color: "rgba(255,255,255,0.5)",
              fontSize: 12, fontWeight: 400,
              letterSpacing: "0.08em", textTransform: "uppercase",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 2, transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.24)"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
            >
              {content.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="au d5" style={{
          display: "flex", flexWrap: "wrap",
          alignItems: "center", justifyContent: "space-between",
          gap: 20, marginTop: 72,
          paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}>
          <div style={{ display: "flex", gap: 40 }}>
            {[
              { v: "10+", l: "Years" },
              { v: "100+", l: "Projects" },
              { v: "50+", l: "Clients" },
            ].map(s => (
              <div key={s.l} style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <span style={{ fontSize: 20, fontWeight: 200, letterSpacing: "-0.02em", color: "#fff" }}>{s.v}</span>
                <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)" }}>{s.l}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e" }} />
            <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)" }}>Available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
