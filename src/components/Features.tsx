"use client";
import { Feature } from "@/types/cms";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

const PX = "clamp(24px,5vw,80px)";
const MAX = 1280;

const STATS = [
  { to: 2015, suffix: "",  l: "설립년도", duration: 2000 },
  { to: 10,   suffix: "+", l: "업력",     duration: 1400 },
  { to: 100,  suffix: "+", l: "수행 프로젝트", duration: 1600 },
  { to: 50,   suffix: "+", l: "파트너사",  duration: 1200 },
];

export default function Features({ features }: { features: Feature[] }) {
  return (
    <section id="about" style={{
      minHeight: "100svh",
      background: "#080810",
      borderTop: "1px solid rgba(255,255,255,0.07)",
      display: "flex",
      alignItems: "center",
    }}>
      <div style={{ maxWidth: MAX, margin: "0 auto", padding: `80px ${PX}`, width: "100%" }}>

        {/* Header */}
        <Reveal style={{
          display: "flex", flexWrap: "wrap",
          alignItems: "flex-end", justifyContent: "space-between",
          gap: 24, marginBottom: 56,
        }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 16 }}>
              Why Sehyun ICT
            </p>
            <h2 style={{ lineHeight: 1.05, letterSpacing: "-0.035em", wordBreak: "keep-all" }}>
              <span style={{ display: "block", fontSize: "8vw", fontWeight: 700, color: "#fff" }}>스마터한 IT의</span>
              <span style={{ display: "block", fontSize: "clamp(2rem,4vw,4rem)", fontWeight: 200, color: "rgba(255,255,255,0.2)" }}>새로운 기준.</span>
            </h2>
          </div>
          <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.75, color: "rgba(255,255,255,0.45)", maxWidth: 260, wordBreak: "keep-all" }}>
            공간정보 기술 기반으로<br />고객 비즈니스에 최적화된<br />솔루션을 제공합니다.
          </p>
        </Reveal>

        {/* Feature Cards */}
        <Reveal delay={100} style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 1,
          background: "rgba(255,255,255,0.08)",
          marginBottom: 1,
        }}>
          {features.map((f) => (
            <div key={f.id} style={{
              background: "#080810",
              padding: "40px 36px",
              transition: "background 0.25s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#0e0e1c")}
            onMouseLeave={e => (e.currentTarget.style.background = "#080810")}
            >
              <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.15em", color: "rgba(255,255,255,0.2)", marginBottom: 32, fontVariantNumeric: "tabular-nums" }}>
                {f.number}
              </p>
              <h3 style={{ fontSize: 18, fontWeight: 300, lineHeight: 1.4, letterSpacing: "-0.01em", color: "#fff", marginBottom: 14, wordBreak: "keep-all" }}>
                {f.title}
              </h3>
              <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.75, color: "rgba(255,255,255,0.45)", wordBreak: "keep-all" }}>
                {f.description}
              </p>
            </div>
          ))}
        </Reveal>

        {/* Stats */}
        <Reveal delay={200} style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: 1,
          background: "rgba(255,255,255,0.08)",
        }}>
          {STATS.map(s => (
            <div key={s.l} style={{ background: "#080810", padding: "28px 36px" }}>
              <CountUp
                to={s.to}
                suffix={s.suffix}
                duration={s.duration}
                style={{ fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 200, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1, display: "block", marginBottom: 8 }}
              />
              <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)" }}>
                {s.l}
              </p>
            </div>
          ))}
        </Reveal>

      </div>
    </section>
  );
}
