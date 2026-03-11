"use client";
import { CTAContent } from "@/types/cms";
import Reveal from "./Reveal";

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
      background: "#0d0d15",
      borderTop: "1px solid rgba(255,255,255,0.055)",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Orbs */}
      <div className="orb2" style={{
        position: "absolute",
        width: 700, height: 700, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(99,102,241,0.08) 45%, transparent 70%)",
        top: "5%", right: "-18%",
        filter: "blur(100px)", pointerEvents: "none",
      }} />
      <div className="orb3" style={{
        position: "absolute",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 65%)",
        bottom: "0%", left: "-12%",
        filter: "blur(90px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: MAX, margin: "0 auto", padding: `80px ${PX}`, width: "100%", position: "relative" }}>

        <Reveal>
        <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(139,124,248,0.7)", marginBottom: 40 }}>
          Contact Us
        </p>

        <h2 style={{ marginBottom: 36 }}>
          {lines.map((line, i) => (
            <span key={i} style={{
              display: "block",
              fontSize: i === 0 ? "6vw" : "clamp(2.4rem,6vw,6rem)",
              fontWeight: i === 0 ? 400 : 200,
              lineHeight: 1.0,
              letterSpacing: "-0.04em",
              wordBreak: "keep-all",
              color: i === 0 ? "#fff" : "rgba(255,255,255,0.18)",
            }}>{line}</span>
          ))}
        </h2>

        <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.85, color: "rgba(255,255,255,0.42)", maxWidth: 300, wordBreak: "keep-all", marginBottom: 52, letterSpacing: "0.005em" }}>
          {content.subtext}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 76 }}>
          <a href="mailto:asset.manager@sehyunict.com" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "13px 28px",
            background: "#fff", color: "#000",
            fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase",
            borderRadius: 2, transition: "opacity 0.2s, transform 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = "0.86"; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "none"; }}
          >
            {content.buttonText}
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="tel:07040478955" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "12px 28px",
            background: "rgba(139,124,248,0.08)", color: "rgba(255,255,255,0.5)",
            fontSize: 11, fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase",
            border: "1px solid rgba(139,124,248,0.2)",
            borderRadius: 2, transition: "all 0.25s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(139,124,248,0.14)"; e.currentTarget.style.borderColor = "rgba(139,124,248,0.35)"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(139,124,248,0.08)"; e.currentTarget.style.borderColor = "rgba(139,124,248,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
          >
            070-4047-8955
          </a>
        </div>

        {/* Contact details */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: 44,
          paddingTop: 32,
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}>
          {CONTACTS.map(c => (
            <div key={c.l}>
              <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: 8 }}>
                {c.l}
              </p>
              {c.href
                ? <a href={c.href} style={{ fontSize: 12, fontWeight: 300, color: "rgba(255,255,255,0.5)", transition: "color 0.2s", letterSpacing: "0.005em" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                    >{c.v}</a>
                : <p style={{ fontSize: 12, fontWeight: 300, color: "rgba(255,255,255,0.5)", letterSpacing: "0.005em" }}>{c.v}</p>
              }
            </div>
          ))}
        </div>
        </Reveal>

      </div>
    </section>
  );
}
