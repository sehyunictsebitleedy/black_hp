"use client";

import { useEffect, useRef } from "react";
import { HeroContent } from "@/types/cms";

interface Props { content: HeroContent; }

export default function Hero({ content }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = 0, h = 0;

    type P = { x: number; y: number; vx: number; vy: number; r: number; o: number; fo: number };
    const pts: P[] = [];

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      pts.length = 0;
      const n = Math.floor((w * h) / 15000);
      for (let i = 0; i < n; i++) {
        pts.push({
          x: Math.random() * w, y: Math.random() * h,
          vx: (Math.random() - .5) * .18, vy: (Math.random() - .5) * .18,
          r: Math.random() * 1.1 + .3,
          o: Math.random() * .35 + .05,
          fo: Math.random() > .5 ? 1 : -1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x = (p.x + p.vx + w) % w;
        p.y = (p.y + p.vy + h) % h;
        p.o = Math.max(.03, Math.min(.4, p.o + p.fo * .0015));
        if (p.o >= .4 || p.o <= .03) p.fo *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240,237,232,${p.o})`;
        ctx.fill();
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(240,237,232,${(1 - d / 110) * .035})`;
            ctx.lineWidth = .5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };

    resize(); init(); draw();
    const ro = new ResizeObserver(() => { resize(); init(); });
    ro.observe(canvas);
    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, []);

  const lines = content.headline.split("\n");
  const subLines = content.subheadline.split("\n");

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-grid" style={{ paddingBottom: "6rem" }}>
      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: .55 }} />

      {/* Orb blue */}
      <div
        className="absolute pointer-events-none animate-orb"
        style={{
          width: 700, height: 700, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(79,126,245,0.1) 0%, transparent 68%)",
          top: "5%", right: "-10%", filter: "blur(80px)",
        }}
      />
      {/* Orb purple */}
      <div
        className="absolute pointer-events-none animate-orb-2"
        style={{
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)",
          bottom: "20%", left: "-8%", filter: "blur(100px)",
        }}
      />

      {/* Vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-72 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)" }} />

      {/* Content */}
      <div className="relative max-w-[1380px] mx-auto px-6 md:px-10 w-full">

        {/* Top eyebrow */}
        <div className="mb-10 animate-fadeUp">
          <span className="tag">
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--accent)" }} />
            {content.eyebrow}
          </span>
        </div>

        {/* Main headline */}
        <h1 className="display-xl mb-10">
          {lines.map((line, i) => (
            <span
              key={i}
              className={`block animate-fadeUp delay-${(i + 1) * 100}`}
              style={{ color: i === 0 ? "var(--text-primary)" : "var(--text-secondary)" }}
            >
              {line}
            </span>
          ))}
        </h1>

        {/* Sub + CTA */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-20">
          <div className="max-w-sm">
            {subLines.map((line, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed animate-fadeUp delay-300"
                style={{ color: "var(--text-secondary)", fontWeight: 300 }}
              >
                {line}
              </p>
            ))}
          </div>
          <div className="flex items-center gap-3 animate-fadeUp delay-400">
            <a href="#business" className="btn-primary">
              {content.ctaPrimary}
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M1 6.5h11M6.5 1l5.5 5.5-5.5 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#products" className="btn-secondary">
              {content.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Bottom stats row */}
        <div
          className="flex flex-wrap items-center gap-x-10 gap-y-3 mt-16 pt-6 animate-fadeUp delay-600"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {[
            { value: "10+", label: "Years" },
            { value: "100+", label: "Projects" },
            { value: "50+", label: "Clients" },
          ].map((s) => (
            <div key={s.label} className="flex items-baseline gap-2">
              <span className="text-xl font-light tracking-tight" style={{ color: "var(--text-primary)" }}>
                {s.value}
              </span>
              <span className="label">{s.label}</span>
            </div>
          ))}
          <div className="ml-auto flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4ade80", boxShadow: "0 0 6px #4ade80" }} />
            <span className="label">프로젝트 진행 중</span>
          </div>
        </div>
      </div>
    </section>
  );
}
