"use client";
import { FooterContent } from "@/types/cms";
import Link from "next/link";

const PX = "clamp(24px,5vw,80px)";
const MAX = 1280;

const NAV = [
  { l: "회사소개", h: "#about" },
  { l: "사업영역", h: "#business" },
  { l: "제품",     h: "#products" },
  { l: "문의",     h: "#contact" },
];

export default function Footer({ content }: { content: FooterContent }) {
  return (
    <footer style={{
      background: "#0d0d18",
      borderTop: "1px solid rgba(255,255,255,0.07)",
    }}>
      <div style={{
        maxWidth: MAX, margin: "0 auto",
        padding: `28px ${PX}`,
        display: "flex", flexWrap: "wrap",
        alignItems: "center", justifyContent: "space-between",
        gap: 20,
      }}>
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 24, height: 24,
            background: "#fff", color: "#000",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 9, fontWeight: 700, letterSpacing: "0.04em",
            clipPath: "polygon(0 0, 82% 0, 100% 18%, 100% 100%, 18% 100%, 0 82%)",
          }}>SI</div>
          <span style={{ fontSize: 13, fontWeight: 500, color: "#fff" }}>{content.studioName}</span>
        </div>

        {/* Nav */}
        <div style={{ display: "flex", gap: 28 }}>
          {NAV.map(n => (
            <a key={n.l} href={n.h} style={{
              fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.28)", transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.28)")}
            >{n.l}</a>
          ))}
        </div>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <Link href="/cms" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.16)" }}>
            CMS
          </Link>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.18)" }}>
            © {new Date().getFullYear()} {content.studioName}
          </span>
        </div>
      </div>
    </footer>
  );
}
