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
    background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
    backdropFilter: scrolled ? "blur(16px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
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
    background: "#fff",
    color: "#0a0a0a",
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
                padding: "8px 18px",
                fontSize: 14,
                fontWeight: 400,
                letterSpacing: "0.01em",
                color: "rgba(255,255,255,0.5)",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                {l.ko}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }} className="hidden md:flex">
            {/* SEbit AI — 추후 링크 연결 */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 13, fontWeight: 500,
                letterSpacing: "0.04em",
                color: "rgba(255,255,255,0.35)",
                transition: "color 0.2s",
                display: "flex", alignItems: "center", gap: 5,
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
            >
              SEbit AI
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ opacity: 0.5 }}>
                <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="mailto:asset.manager@sehyunict.com" style={{
              fontSize: 13, letterSpacing: "0.02em",
              padding: "8px 18px",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.5)",
              borderRadius: 2,
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
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
        background: "#0a0a0a",
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "0 32px",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "all" : "none",
        transition: "opacity 0.3s ease",
      }} className="md:hidden">
        {LINKS.map((l, i) => (
          <a key={l.ko} href={l.href} onClick={() => setOpen(false)} style={{
            padding: "20px 0",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <span style={{ fontSize: 32, fontWeight: 200, letterSpacing: "-0.02em", color: "#fff" }}>{l.ko}</span>
            <span style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)" }}>0{i+1}</span>
          </a>
        ))}
        <a href="mailto:asset.manager@sehyunict.com" onClick={() => setOpen(false)}
          style={{
            marginTop: 40, padding: "14px 28px", background: "#fff", color: "#000",
            fontSize: 12, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase",
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            borderRadius: 2,
          }}>
          문의하기
        </a>
      </div>
    </>
  );
}
