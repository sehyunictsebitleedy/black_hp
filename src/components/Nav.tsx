"use client";
import { useState, useEffect } from "react";

const LINKS = [
  { ko: "About",      href: "#about" },
  { ko: "Business",   href: "#business" },
  { ko: "Project",    href: "#project" },
  { ko: "Product",    href: "#products" },
  { ko: "Contact Us", href: "#contact" },
];

const S = {
  nav: (scrolled: boolean): React.CSSProperties => ({
    position: "fixed",
    top: 0, left: 0, right: 0,
    height: 64,
    display: "flex",
    alignItems: "center",
    zIndex: 100,
    background: scrolled ? "rgba(8,8,12,0.88)" : "transparent",
    backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
    borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
    transition: "all 0.4s ease",
  }),
  inner: {
    width: "100%",
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 clamp(24px,5vw,80px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  } as React.CSSProperties,
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  } as React.CSSProperties,
  logoMark: {
    width: 28, height: 28,
    background: "#8b7cf8",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.05em",
    clipPath: "polygon(0 0, 82% 0, 100% 18%, 100% 100%, 18% 100%, 0 82%)",
  } as React.CSSProperties,
  logoText: {
    fontSize: 14,
    fontWeight: 500,
    color: "#fff",
    letterSpacing: "0.02em",
  } as React.CSSProperties,
};

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav style={S.nav(scrolled)}>
        <div style={S.inner}>
          {/* Logo */}
          <a href="/" style={S.logo}>
            <div style={S.logoMark}>SI</div>
            <span style={S.logoText}>세현ICT</span>
          </a>

          {/* Desktop menu */}
          <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden md:flex">
            {LINKS.map(l => (
              <a key={l.ko} href={l.href} style={{
                padding: "8px 16px",
                fontSize: 13,
                fontWeight: 400,
                letterSpacing: "0.01em",
                color: "rgba(255,255,255,0.45)",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              >
                {l.ko}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }} className="hidden md:flex">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 12, fontWeight: 500,
                letterSpacing: "0.06em",
                color: "rgba(139,124,248,0.6)",
                transition: "color 0.2s",
                display: "flex", alignItems: "center", gap: 5,
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#8b7cf8")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(139,124,248,0.6)")}
            >
              SEbit AI
              <svg width="9" height="9" viewBox="0 0 10 10" fill="none" style={{ opacity: 0.7 }}>
                <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="mailto:asset.manager@sehyunict.com" style={{
              fontSize: 12, letterSpacing: "0.04em",
              padding: "7px 16px",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.45)",
              borderRadius: 2,
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(139,124,248,0.35)"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.45)"; }}
            >
              문의하기
            </a>
          </div>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden" style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {[0,1,2].map(i => (
                <span key={i} style={{
                  display: "block", width: 22, height: 1, background: "#fff",
                  transformOrigin: "center",
                  transition: "transform 0.3s, opacity 0.3s",
                  transform: open
                    ? i === 0 ? "rotate(45deg) translate(4px, 4px)"
                    : i === 1 ? "scaleX(0)"
                    : "rotate(-45deg) translate(4px, -4px)"
                    : "none",
                  opacity: open && i === 1 ? 0 : 1,
                }} />
              ))}
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 90,
        background: "#08080c",
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "0 32px",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "all" : "none",
        transition: "opacity 0.3s ease",
      }} className="md:hidden">
        {LINKS.map((l, i) => (
          <a key={l.ko} href={l.href} onClick={() => setOpen(false)} style={{
            padding: "20px 0",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <span style={{ fontSize: 30, fontWeight: 200, letterSpacing: "-0.025em", color: "#fff" }}>{l.ko}</span>
            <span style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(139,124,248,0.5)" }}>0{i+1}</span>
          </a>
        ))}
        <a href="mailto:asset.manager@sehyunict.com" onClick={() => setOpen(false)}
          style={{
            marginTop: 40, padding: "13px 28px", background: "#fff", color: "#000",
            fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase",
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            borderRadius: 2,
          }}>
          문의하기
        </a>
      </div>
    </>
  );
}
