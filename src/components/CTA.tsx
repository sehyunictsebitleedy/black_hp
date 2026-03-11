"use client";
import { CTAContent } from "@/types/cms";

const PX = "clamp(24px,5vw,80px)";
const MAX = 1280;

const CONTACTS = [
  { l: "Email",    v: "asset.manager@sehyunict.com", href: "mailto:asset.manager@sehyunict.com" },
  { l: "Tel",      v: "070-4047-8955",               href: "tel:07040478955" },
  { l: "Location", v: "경기도 화성시 동탄기흥로 557, 1901호", href: "" },
];

export default function CTA({ content }: { content: CTAContent }) {
  const lines = content.headline.split("\n");
  return (
    <section id="contact" style={{
      minHeight: "100svh",
      background: "#080810",
      borderTop: "1px solid rgba(255,255,255,0.07)",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Orbs */}
      <div className="orb2" style={{
        position: "absolute",
        width: 700, height: 700, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, rgba(74,124,247,0.1) 45%, transparent 70%)",
        top: "10%", right: "-15%",
        filter: "blur(90px)", pointerEvents: "none",
      }} />
      <div className="orb3" style={{
        position: "absolute",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(74,124,247,0.2) 0%, transparent 65%)",
        bottom: "5%", left: "-10%",
        filter: "blur(80px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: MAX, margin: "0 auto", padding: `80px ${PX}`, width: "100%", position: "relative" }}>

        <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 36 }}>
          Contact Us
        </p>

        <h2 style={{ marginBottom: 32 }}>
          {lines.map((line, i) => (
            <span key={i} style={{
              display: "block",
              fontSize: "clamp(2.4rem,6vw,6rem)",
              fontWeight: 200,
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              wordBreak: "keep-all",
              color: i === 0 ? "#fff" : "rgba(255,255,255,0.2)",
            }}>{line}</span>
          ))}
        </h2>

        <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.75, color: "rgba(255,255,255,0.45)", maxWidth: 300, wordBreak: "keep-all", marginBottom: 48 }}>
          {content.subtext}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 72 }}>
          <a href="mailto:asset.manager@sehyunict.com" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "14px 30px",
            background: "#fff", color: "#000",
            fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase",
            borderRadius: 2, transition: "opacity 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            {content.buttonText}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="tel:07040478955" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "14px 30px",
            background: "transparent", color: "rgba(255,255,255,0.5)",
            fontSize: 12, fontWeight: 400, letterSpacing: "0.08em", textTransform: "uppercase",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 2, transition: "all 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
          >
            070-4047-8955
          </a>
        </div>

        {/* Contact details */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: 40,
          paddingTop: 32,
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}>
          {CONTACTS.map(c => (
            <div key={c.l}>
              <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: 8 }}>
                {c.l}
              </p>
              {c.href
                ? <a href={c.href} style={{ fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.55)", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                    >{c.v}</a>
                : <p style={{ fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.55)" }}>{c.v}</p>
              }
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
