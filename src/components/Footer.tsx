"use client";
import { FooterContent } from "@/types/cms";
import Link from "next/link";

const PX = "clamp(24px,5vw,80px)";
const MAX = 1280;

const NAV = [
  { l: "About",      h: "#about" },
  { l: "Business",   h: "#business" },
  { l: "Project",    h: "#project" },
  { l: "Product",    h: "#products" },
  { l: "Contact Us", h: "#contact" },
];

export default function Footer({ content }: { content: FooterContent }) {
  return (
    <footer style={{
      background: "#08080c",
      borderTop: "1px solid rgba(255,255,255,0.055)",
    }}>
      <div style={{
        maxWidth: MAX, margin: "0 auto",
        padding: `24px ${PX}`,
        display: "flex", flexWrap: "wrap",
        alignItems: "center", justifyContent: "space-between",
        gap: 20,
      }}>
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 22, height: 22,
            background: "#8b7cf8", color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 9, fontWeight: 700, letterSpacing: "0.04em",
            clipPath: "polygon(0 0, 82% 0, 100% 18%, 100% 100%, 18% 100%, 0 82%)",
          }}>SI</div>
          <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.7)" }}>{content.studioName}</span>
        </div>

        {/* Nav */}
        <div style={{ display: "flex", gap: 26 }}>
          {NAV.map(n => (
            <a key={n.l} href={n.h} style={{
              fontSize: 10, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.24)", transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.24)")}
            >{n.l}</a>
          ))}
        </div>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <Link href="/cms" style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.14)" }}>
            CMS
          </Link>
          <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.16)" }}>
            © {new Date().getFullYear()} {content.studioName}
          </span>
        </div>
      </div>
    </footer>
  );
}
