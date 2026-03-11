"use client";

import { FooterContent } from "@/types/cms";
import Link from "next/link";

interface Props { content: FooterContent; }

export default function Footer({ content }: Props) {
  return (
    <footer style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-[1380px] mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">

          {/* Brand col */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-7 h-7 flex items-center justify-center text-[10px] font-bold shrink-0"
                style={{
                  background: "var(--text-primary)",
                  color: "var(--bg)",
                  clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)",
                }}
              >
                SI
              </div>
              <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                {content.studioName}
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)", maxWidth: 260, fontWeight: 300, wordBreak: "keep-all" }}>
              {content.tagline}
            </p>
            <a href={`mailto:${content.email}`}
              className="text-xs transition-colors duration-200"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {content.email}
            </a>
          </div>

          {/* Links */}
          <div className="md:col-span-3 md:col-start-6">
            <p className="label mb-5">Navigate</p>
            <div className="flex flex-col gap-3">
              {[
                { label: "회사소개", href: "#about" },
                { label: "사업영역", href: "#business" },
                { label: "제품", href: "#products" },
                { label: "문의", href: "#contact" },
              ].map((item) => (
                <a key={item.label} href={item.href}
                  className="text-sm transition-colors duration-200"
                  style={{ color: "var(--text-secondary)", fontWeight: 300 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div className="md:col-span-4 md:col-start-9">
            <p className="label mb-5">Contact</p>
            <div className="flex flex-col gap-3">
              <div>
                <p className="num-accent mb-1">Tel</p>
                <p className="text-sm" style={{ color: "var(--text-secondary)", fontWeight: 300 }}>
                  {content.instagram}
                </p>
              </div>
              <div>
                <p className="num-accent mb-1">Address</p>
                <p className="text-sm" style={{ color: "var(--text-secondary)", fontWeight: 300, wordBreak: "keep-all" }}>
                  경기도 화성시 동탄기흥로 557<br />금강펜토리움 IT타워 1901호
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-8"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <span className="label">
            © {new Date().getFullYear()} {content.studioName}. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <Link href="/cms" className="label transition-colors"
              style={{ color: "var(--text-tertiary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}
            >
              CMS
            </Link>
            <span className="label" style={{ cursor: "pointer" }}>개인정보처리방침</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
