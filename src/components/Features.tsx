"use client";
import { Feature, ClientItem } from "@/types/cms";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import ClientsTicker from "./ClientsTicker";

const PX = "clamp(24px,5vw,80px)";
const MAX = 1280;

const STATS = [
  { to: 2015, suffix: "",  l: "설립년도", duration: 2000 },
  { to: 10,   suffix: "+", l: "업력",     duration: 1400 },
  { to: 100,  suffix: "+", l: "수행 프로젝트", duration: 1600 },
  { to: 50,   suffix: "+", l: "파트너사",  duration: 1200 },
];

export default function Features({ features, clients }: { features: Feature[]; clients: ClientItem[] }) {
  return (
    <section id="about" style={{
      minHeight: "100svh",
      background: "#0c0a1a",
      borderTop: "1px solid rgba(139,124,248,0.12)",
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
              Why Sehyun ICT
            </p>
            <h2 style={{ lineHeight: 1.05, letterSpacing: "-0.04em", wordBreak: "keep-all" }}>
              <span style={{ display: "block", fontSize: "5vw", fontWeight: 400, color: "#fff" }}>스마트한 IT의</span>
              <span style={{ display: "block", fontSize: "clamp(2rem,4vw,4rem)", fontWeight: 200, color: "rgba(255,255,255,0.18)" }}>세현만의 새로운 기준</span>
            </h2>
          </div>
        
        </Reveal>

        {/* Feature Cards */}
        <Reveal delay={100} style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 12,
          marginBottom: 12,
        }}>
          {features.map((f) => (
            <div key={f.id} style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.13)",
              padding: "36px 32px",
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
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.13)";
            }}
            >
              <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", color: "rgba(255,255,255,0.2)", marginBottom: 36, fontVariantNumeric: "tabular-nums" }}>
                {f.number}
              </p>
              <h3 style={{ fontSize: 24, fontWeight: 600, lineHeight: 1.45, letterSpacing: "-0.015em", color: "#fff", marginBottom: 14, wordBreak: "keep-all" }}>
                {f.title}
              </h3>
              <p style={{ fontSize: 12, fontWeight: 300, lineHeight: 1.8, color: "rgba(255,255,255,0.42)", wordBreak: "keep-all" }}>
                {f.description}
              </p>
            </div>
          ))}
        </Reveal>

        {/* Stats */}
        <Reveal delay={200} style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: 12,
        }}>
          {STATS.map(s => (
            <div key={s.l} style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.13)",
              padding: "28px 32px",
              borderRadius: 3,
            }}>
              <CountUp
                to={s.to}
                suffix={s.suffix}
                duration={s.duration}
                style={{ fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 200, letterSpacing: "-0.04em", color: "#fff", lineHeight: 1, display: "block", marginBottom: 10 }}
              />
              <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.26)" }}>
                {s.l}
              </p>
            </div>
          ))}
        </Reveal>

        <ClientsTicker clients={clients} />

      </div>
    </section>
  );
}
