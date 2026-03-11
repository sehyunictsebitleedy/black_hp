"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Company", href: "#about", ko: "회사소개" },
  { label: "Business", href: "#business", ko: "사업영역" },
  { label: "Products", href: "#products", ko: "제품" },
  { label: "Contact", href: "#contact", ko: "문의" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(6,6,6,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <div className="max-w-[1380px] mx-auto px-6 md:px-10 h-[60px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 flex items-center justify-center text-[10px] font-bold tracking-wider shrink-0"
              style={{
                background: "var(--text-primary)",
                color: "var(--bg)",
                clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)",
              }}
            >
              SI
            </div>
            <span className="text-sm font-medium tracking-wide" style={{ color: "var(--text-primary)" }}>
              세현ICT
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex flex-col items-center px-5 py-2 transition-all duration-200"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                <span className="text-[11px] tracking-[0.18em] uppercase leading-none">{link.label}</span>
                <span className="text-[10px] mt-0.5" style={{ color: "var(--text-tertiary)" }}>{link.ko}</span>
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-5">
            <Link
              href="/cms"
              className="label transition-colors"
              style={{ color: "var(--text-tertiary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}
            >
              CMS
            </Link>
            <a
              href="mailto:asset.manager@sehyunict.com"
              className="text-[11px] tracking-widest uppercase px-4 py-2 rounded-sm transition-all duration-200"
              style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-hover)";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
            >
              문의하기
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-1" aria-label="메뉴">
            <div className="flex flex-col gap-1.5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="block transition-all duration-300 origin-center"
                  style={{
                    width: 20,
                    height: 1,
                    background: "var(--text-primary)",
                    transform:
                      menuOpen && i === 0 ? "rotate(45deg) translate(3px, 3px)"
                      : menuOpen && i === 1 ? "scaleX(0)"
                      : menuOpen && i === 2 ? "rotate(-45deg) translate(3px, -3px)"
                      : "none",
                  }}
                />
              ))}
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className="fixed inset-0 z-40 flex flex-col md:hidden transition-all duration-400 px-8 pt-24 pb-12"
        style={{
          background: "var(--bg)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transform: menuOpen ? "none" : "translateY(-10px)",
        }}
      >
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="flex items-baseline gap-4 py-5 transition-colors duration-200"
            style={{ borderBottom: "1px solid var(--border)", color: "var(--text-primary)" }}
          >
            <span className="num-accent w-6">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-3xl font-light tracking-tight">{link.ko}</span>
            <span className="label ml-auto">{link.label}</span>
          </a>
        ))}
        <a
          href="mailto:asset.manager@sehyunict.com"
          className="btn-primary mt-10 justify-center"
          onClick={() => setMenuOpen(false)}
        >
          문의하기
        </a>
      </div>
    </>
  );
}
