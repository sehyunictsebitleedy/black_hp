"use client";
import { useState } from "react";
import { Product } from "@/types/cms";
import Reveal from "./Reveal";

const PX = "clamp(24px,5vw,80px)";
const MAX = 1280;
const INITIAL_COUNT = 4;

export default function Works({ products }: { products: Product[] }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? products : products.slice(0, INITIAL_COUNT);
  const hasMore = products.length > INITIAL_COUNT;

  return (
    <section id="products" style={{
      minHeight: "100svh",
      background: "#0d0d15",
      borderTop: "1px solid rgba(255,255,255,0.055)",
      display: "flex",
      alignItems: "center",
    }}>
      <div style={{ maxWidth: MAX, margin: "0 auto", padding: `80px ${PX}`, width: "100%" }}>

        {/* Header */}
        <Reveal style={{
          display: "flex", flexWrap: "wrap",
          alignItems: "flex-end", justifyContent: "space-between",
          gap: 16, marginBottom: 52,
        }}>
          <div>
            <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(139,124,248,0.7)", marginBottom: 20 }}>
              SmartGeoKit Series
            </p>
            <h2 style={{ lineHeight: 1.05, letterSpacing: "-0.04em", wordBreak: "keep-all" }}>
              <span style={{ display: "block", fontSize: "5vw", fontWeight: 400, color: "#fff" }}>공간정보를</span>
              <span style={{ display: "block", fontSize: "clamp(2rem,4vw,4rem)", fontWeight: 200, color: "rgba(255,255,255,0.18)" }}>다루는 방법.</span>
            </h2>
          </div>
          <a href="#contact" style={{
            display: "flex", alignItems: "center", gap: 6,
            fontSize: 10, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.32)",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
          onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.32)")}
          >
            문의하기
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </Reveal>

        {/* List */}
        <Reveal delay={100} style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {visible.map((w, i) => (
            <div key={w.id}
              style={{
                display: "flex", alignItems: "flex-start", gap: 24,
                padding: "26px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                cursor: "pointer",
                transition: "padding-left 0.35s cubic-bezier(0.16,1,0.3,1)",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.paddingLeft = "10px"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.paddingLeft = "0"; }}
            >
              {/* Index */}
              <span style={{
                fontSize: 10, fontWeight: 400, letterSpacing: "0.14em",
                color: "rgba(139,124,248,0.5)",
                width: 28, flexShrink: 0, fontVariantNumeric: "tabular-nums",
                paddingTop: 4,
              }}>
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Title + Description */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={{
                  display: "block",
                  fontSize: "clamp(1.05rem,2.1vw,1.7rem)",
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                  color: "rgba(255,255,255,0.5)",
                  wordBreak: "keep-all",
                  transition: "color 0.2s",
                  marginBottom: 4,
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >
                  {w.title}
                </span>
                {w.description && (
                  <span style={{
                    display: "block",
                    fontSize: 11,
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.28)",
                    letterSpacing: "0.01em",
                    lineHeight: 1.5,
                    wordBreak: "keep-all",
                  }}>
                    {w.description}
                  </span>
                )}
              </div>

              {/* Category */}
              <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", flexShrink: 0, minWidth: 80, textAlign: "right", paddingTop: 4 }}
                className="hidden md:block">
                {w.category}
              </span>

              {/* Tags */}
              <div style={{ display: "flex", gap: 5, flexShrink: 0, paddingTop: 4 }} className="hidden lg:flex">
                {w.tags.slice(0, 2).map(t => (
                  <span key={t} style={{
                    padding: "3px 10px",
                    background: "rgba(139,124,248,0.06)",
                    border: "1px solid rgba(139,124,248,0.14)",
                    borderRadius: 100,
                    fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase",
                    color: "rgba(255,255,255,0.3)",
                  }}>{t}</span>
                ))}
              </div>

              {/* Version */}
              <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.12em", color: "rgba(255,255,255,0.2)", flexShrink: 0, paddingTop: 4 }}>
                {w.version}
              </span>
            </div>
          ))}

          {/* More / Less */}
          {hasMore && (
            <button
              onClick={() => setShowAll(v => !v)}
              style={{
                display: "flex", alignItems: "center", gap: 8,
                marginTop: 28, fontSize: 10, fontWeight: 500,
                letterSpacing: "0.16em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                background: "transparent", border: "none", cursor: "pointer",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
            >
              {showAll ? "접기" : `+ ${products.length - INITIAL_COUNT}개 더 보기`}
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ transform: showAll ? "rotate(180deg)" : "none", transition: "transform 0.3s" }}>
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </Reveal>

      </div>
    </section>
  );
}
