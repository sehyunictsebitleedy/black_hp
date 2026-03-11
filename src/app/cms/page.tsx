"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SiteContent, Feature, Product, ProcessStep, ProjectItem } from "@/types/cms";
import { loadContent, saveContent, resetContent, defaultContent } from "@/lib/cms-store";

type Section = "overview" | "hero" | "features" | "products" | "process" | "projects" | "cta" | "footer";

// ── Design tokens ──────────────────────────────────────────────
const T = {
  bg:          "#08080c",
  sidebar:     "#0c0c14",
  panel:       "#0f0f18",
  card:        "rgba(255,255,255,0.03)",
  cardHover:   "rgba(139,124,248,0.06)",
  border:      "rgba(255,255,255,0.07)",
  borderHover: "rgba(139,124,248,0.3)",
  accent:      "#8b7cf8",
  accentDim:   "rgba(139,124,248,0.12)",
  accentGlow:  "rgba(139,124,248,0.25)",
  t1:          "#ffffff",
  t2:          "rgba(255,255,255,0.55)",
  t3:          "rgba(255,255,255,0.3)",
  t4:          "rgba(255,255,255,0.15)",
  inputBg:     "rgba(255,255,255,0.04)",
  inputBorder: "rgba(255,255,255,0.1)",
  green:       "#22c55e",
  amber:       "#f59e0b",
};

const NAV_ITEMS: { id: Section; label: string; desc: string; icon: React.ReactNode }[] = [
  { id: "overview",  label: "Overview",  desc: "전체 현황",       icon: <GridIcon /> },
  { id: "hero",      label: "Hero",      desc: "메인 헤드라인",   icon: <FlagIcon /> },
  { id: "features",  label: "About",     desc: "강점 카드",       icon: <StarIcon /> },
  { id: "products",  label: "Products",  desc: "SmartGeoKit",     icon: <BoxIcon /> },
  { id: "process",   label: "Business",  desc: "업무 프로세스",   icon: <FlowIcon /> },
  { id: "projects",  label: "Projects",  desc: "수행 실적",       icon: <FolderIcon /> },
  { id: "cta",       label: "Contact",   desc: "문의 섹션",       icon: <MailIcon /> },
  { id: "footer",    label: "Footer",    desc: "푸터 정보",       icon: <FooterIcon /> },
];

// ── Icons ──────────────────────────────────────────────────────
function GridIcon()   { return <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/><rect x="8" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/><rect x="1" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/><rect x="8" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/></svg>; }
function FlagIcon()   { return <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 1v12M2 2h8l-2 3 2 3H2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
function StarIcon()   { return <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1l1.5 4H13l-3.5 2.5 1.5 4L7 9 3 11.5l1.5-4L1 5h4.5L7 1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>; }
function BoxIcon()    { return <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1l5.5 3v6L7 13 1.5 10V4L7 1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/><path d="M7 1v12M1.5 4l5.5 3 5.5-3" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>; }
function FlowIcon()   { return <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="2.5" cy="7" r="1.5" stroke="currentColor" strokeWidth="1.2"/><circle cx="7" cy="2.5" r="1.5" stroke="currentColor" strokeWidth="1.2"/><circle cx="7" cy="11.5" r="1.5" stroke="currentColor" strokeWidth="1.2"/><circle cx="11.5" cy="7" r="1.5" stroke="currentColor" strokeWidth="1.2"/><path d="M4 7h1.5M8.5 7H10M7 4v1.5M7 8.5V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>; }
function FolderIcon() { return <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 4a1 1 0 011-1h3l1.5 2H12a1 1 0 011 1v5a1 1 0 01-1 1H2a1 1 0 01-1-1V4z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>; }
function MailIcon()   { return <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="3" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.2"/><path d="M1 4l6 4 6-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>; }
function FooterIcon() { return <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.2"/><path d="M1 11h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><path d="M4 13h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>; }
function ChevronDown(){ return <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
function ChevronUp()  { return <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 8l4-4 4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
function PlusIcon()   { return <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>; }
function TrashIcon()  { return <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 3.5h9M5 3.5V2.5h3v1M4 3.5l.5 7h4l.5-7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
function ArrowRight() { return <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
function CheckIcon()  { return <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
function BackIcon()   { return <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M8 6H2M5 3L2 6l3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
function ExternalIcon(){ return <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M4 2H2a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1V6M6 1h3v3M5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>; }

// ── Main ───────────────────────────────────────────────────────
export default function CmsPage() {
  const [activeSection, setActiveSection] = useState<Section>("overview");
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [saved, setSaved] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => { setContent(loadContent()); }, []);

  const handleSave = () => {
    saveContent(content);
    setSaved(true);
    setIsDirty(false);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleReset = () => {
    if (confirm("모든 콘텐츠를 기본값으로 초기화할까요?")) {
      resetContent();
      setContent(defaultContent);
      setIsDirty(false);
    }
  };

  const update = (updater: (prev: SiteContent) => SiteContent) => {
    setContent(updater);
    setIsDirty(true);
  };

  const activeNav = NAV_ITEMS.find(n => n.id === activeSection);

  return (
    <div style={{ minHeight: "100svh", display: "flex", background: T.bg, color: T.t1, fontFamily: "inherit" }}>

      {/* ── Sidebar ── */}
      <aside style={{
        width: 220, flexShrink: 0,
        height: "100vh", position: "sticky", top: 0,
        display: "flex", flexDirection: "column",
        background: T.sidebar,
        borderRight: `1px solid ${T.border}`,
      }}>
        {/* Logo */}
        <div style={{
          padding: "20px 20px 18px",
          borderBottom: `1px solid ${T.border}`,
          display: "flex", alignItems: "center", gap: 10,
        }}>
          <div style={{
            width: 28, height: 28,
            background: T.accent, color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 10, fontWeight: 700, letterSpacing: "0.04em",
            clipPath: "polygon(0 0, 82% 0, 100% 18%, 100% 100%, 18% 100%, 0 82%)",
          }}>SI</div>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: T.t1, lineHeight: 1.2 }}>세현ICT</p>
            <p style={{ fontSize: 10, color: T.t3, letterSpacing: "0.08em" }}>CMS v1</p>
          </div>
          {isDirty && (
            <div style={{
              marginLeft: "auto", width: 6, height: 6, borderRadius: "50%",
              background: T.amber, boxShadow: `0 0 6px ${T.amber}`,
              flexShrink: 0,
            }} />
          )}
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, overflowY: "auto", padding: "12px 10px" }}>
          <p style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: T.t4, padding: "0 8px", marginBottom: 8 }}>Sections</p>
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                style={{
                  width: "100%", display: "flex", alignItems: "center", gap: 10,
                  padding: "9px 10px",
                  borderRadius: 6, marginBottom: 2,
                  background: isActive ? T.accentDim : "transparent",
                  border: `1px solid ${isActive ? T.accentGlow : "transparent"}`,
                  color: isActive ? T.t1 : T.t2,
                  cursor: "pointer",
                  transition: "all 0.15s",
                  textAlign: "left",
                }}
                onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.color = T.t1; }}}
                onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = T.t2; }}}
              >
                <span style={{ color: isActive ? T.accent : T.t3, flexShrink: 0 }}>{item.icon}</span>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontSize: 12, fontWeight: isActive ? 500 : 400, lineHeight: 1.2 }}>{item.label}</p>
                  <p style={{ fontSize: 10, color: isActive ? "rgba(139,124,248,0.7)" : T.t4, marginTop: 1 }}>{item.desc}</p>
                </div>
              </button>
            );
          })}
        </nav>

        {/* Sidebar bottom */}
        <div style={{ padding: "14px 18px", borderTop: `1px solid ${T.border}`, display: "flex", flexDirection: "column", gap: 8 }}>
          <Link href="/" style={{
            display: "flex", alignItems: "center", gap: 7,
            fontSize: 11, color: T.t3,
            transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = T.t1)}
          onMouseLeave={e => (e.currentTarget.style.color = T.t3)}
          >
            <BackIcon /> 사이트로 돌아가기
          </Link>
          <a href="/" target="_blank" rel="noopener noreferrer" style={{
            display: "flex", alignItems: "center", gap: 7,
            fontSize: 11, color: T.t3,
            transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = T.t1)}
          onMouseLeave={e => (e.currentTarget.style.color = T.t3)}
          >
            <ExternalIcon /> 미리보기
          </a>
        </div>
      </aside>

      {/* ── Main ── */}
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>

        {/* Topbar */}
        <header style={{
          position: "sticky", top: 0, zIndex: 10,
          height: 56,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 32px",
          background: "rgba(8,8,12,0.9)",
          backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${T.border}`,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color: T.t3, fontSize: 12 }}>{activeNav?.icon}</span>
            <h1 style={{ fontSize: 13, fontWeight: 500, color: T.t1, letterSpacing: "0.01em" }}>{activeNav?.label}</h1>
            <span style={{ color: T.t4, fontSize: 12 }}>/</span>
            <span style={{ fontSize: 12, color: T.t3 }}>{activeNav?.desc}</span>
            {isDirty && (
              <span style={{
                fontSize: 10, padding: "2px 8px", borderRadius: 100,
                background: "rgba(245,158,11,0.1)", color: T.amber,
                border: "1px solid rgba(245,158,11,0.25)",
                letterSpacing: "0.06em",
              }}>미저장</span>
            )}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button
              onClick={handleReset}
              style={{
                fontSize: 11, padding: "6px 14px",
                background: "transparent", color: T.t3,
                border: `1px solid ${T.border}`,
                borderRadius: 4, cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = T.t1; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.t3; }}
            >
              초기화
            </button>
            <button
              onClick={handleSave}
              style={{
                display: "flex", alignItems: "center", gap: 6,
                fontSize: 11, fontWeight: 500, padding: "6px 16px",
                background: saved ? "rgba(34,197,94,0.15)" : T.t1,
                color: saved ? T.green : "#000",
                border: `1px solid ${saved ? "rgba(34,197,94,0.3)" : T.t1}`,
                borderRadius: 4, cursor: "pointer",
                transition: "all 0.25s",
              }}
            >
              {saved ? <><CheckIcon /> 저장됨</> : "저장"}
            </button>
          </div>
        </header>

        {/* Content */}
        <div style={{ flex: 1, padding: "32px", overflowY: "auto", maxWidth: 860 }}>
          {activeSection === "overview"  && <OverviewPanel  content={content} onNavigate={setActiveSection} />}
          {activeSection === "hero"      && <HeroPanel      content={content} onChange={(hero) => update((c) => ({ ...c, hero }))} />}
          {activeSection === "features"  && <FeaturesPanel  features={content.features} onChange={(features) => update((c) => ({ ...c, features }))} />}
          {activeSection === "products"  && <ProductsPanel  products={content.products} onChange={(products) => update((c) => ({ ...c, products }))} />}
          {activeSection === "process"   && <ProcessPanel   steps={content.process} onChange={(process) => update((c) => ({ ...c, process }))} />}
          {activeSection === "projects"  && <ProjectsPanel  projects={content.projects} onChange={(projects) => update((c) => ({ ...c, projects }))} />}
          {activeSection === "cta"       && <CtaPanel       content={content} onChange={(cta) => update((c) => ({ ...c, cta }))} />}
          {activeSection === "footer"    && <FooterPanel    content={content} onChange={(footer) => update((c) => ({ ...c, footer }))} />}
        </div>
      </div>
    </div>
  );
}

// ── Shared Components ──────────────────────────────────────────

function PanelHeader({ title, action }: { title: string; action?: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
      <h2 style={{ fontSize: 20, fontWeight: 300, letterSpacing: "-0.025em", color: T.t1 }}>{title}</h2>
      {action}
    </div>
  );
}

function AddButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button onClick={onClick} style={{
      display: "flex", alignItems: "center", gap: 6,
      fontSize: 11, fontWeight: 500, padding: "7px 14px",
      background: T.accentDim, color: T.accent,
      border: `1px solid ${T.accentGlow}`,
      borderRadius: 5, cursor: "pointer",
      transition: "all 0.2s",
    }}
    onMouseEnter={e => { e.currentTarget.style.background = "rgba(139,124,248,0.18)"; }}
    onMouseLeave={e => { e.currentTarget.style.background = T.accentDim; }}
    >
      <PlusIcon /> {label}
    </button>
  );
}

function Field({
  label, value, onChange, multiline = false, hint, placeholder,
}: {
  label: string; value: string; onChange: (v: string) => void;
  multiline?: boolean; hint?: string; placeholder?: string;
}) {
  const base: React.CSSProperties = {
    width: "100%",
    background: T.inputBg,
    border: `1px solid ${T.inputBorder}`,
    borderRadius: 5,
    color: T.t1,
    fontSize: 13,
    padding: "9px 12px",
    outline: "none",
    fontFamily: "inherit",
    fontWeight: 300,
    lineHeight: 1.6,
    transition: "border-color 0.2s",
    resize: multiline ? "vertical" : undefined,
    minHeight: multiline ? 80 : undefined,
  };
  return (
    <div style={{ marginBottom: 18 }}>
      <label style={{ display: "block", fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.t3, marginBottom: 7 }}>{label}</label>
      {multiline ? (
        <textarea value={value} placeholder={placeholder} onChange={e => onChange(e.target.value)} style={base}
          onFocus={e => (e.currentTarget.style.borderColor = T.accentGlow)}
          onBlur={e => (e.currentTarget.style.borderColor = T.inputBorder)} />
      ) : (
        <input type="text" value={value} placeholder={placeholder} onChange={e => onChange(e.target.value)} style={base}
          onFocus={e => (e.currentTarget.style.borderColor = T.accentGlow)}
          onBlur={e => (e.currentTarget.style.borderColor = T.inputBorder)} />
      )}
      {hint && <p style={{ fontSize: 10, color: T.t4, marginTop: 5, letterSpacing: "0.02em" }}>{hint}</p>}
    </div>
  );
}

function FormCard({ children, noPad }: { children: React.ReactNode; noPad?: boolean }) {
  return (
    <div style={{
      background: T.card,
      border: `1px solid ${T.border}`,
      borderRadius: 8,
      padding: noPad ? 0 : "24px",
      marginBottom: 12,
    }}>
      {children}
    </div>
  );
}

// Accordion item row — shows summary, expands to form
function AccordionItem({
  id, isOpen, onToggle, summary, badge, onRemove, children,
}: {
  id: string; isOpen: boolean; onToggle: () => void;
  summary: string; badge?: string; onRemove: () => void;
  children: React.ReactNode;
}) {
  return (
    <div style={{
      background: T.card,
      border: `1px solid ${isOpen ? T.accentGlow : T.border}`,
      borderRadius: 8, marginBottom: 8,
      overflow: "hidden",
      transition: "border-color 0.2s",
    }}>
      {/* Header */}
      <button onClick={onToggle} style={{
        width: "100%", display: "flex", alignItems: "center", gap: 12,
        padding: "14px 18px",
        background: "transparent", border: "none", cursor: "pointer",
        textAlign: "left",
      }}>
        <span style={{ color: isOpen ? T.accent : T.t3, transition: "color 0.2s" }}>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </span>
        <span style={{ flex: 1, fontSize: 13, fontWeight: 400, color: T.t1, letterSpacing: "-0.01em" }}>{summary}</span>
        {badge && (
          <span style={{
            fontSize: 10, padding: "2px 8px", borderRadius: 100,
            background: T.accentDim, color: T.accent,
            border: `1px solid ${T.accentGlow}`,
            letterSpacing: "0.06em", flexShrink: 0,
          }}>{badge}</span>
        )}
      </button>

      {/* Body */}
      {isOpen && (
        <div style={{ padding: "0 18px 18px", borderTop: `1px solid ${T.border}` }}>
          <div style={{ paddingTop: 18 }}>{children}</div>
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 4 }}>
            <button onClick={onRemove} style={{
              display: "flex", alignItems: "center", gap: 5,
              fontSize: 11, padding: "5px 12px",
              background: "rgba(239,68,68,0.06)", color: "rgba(239,68,68,0.6)",
              border: "1px solid rgba(239,68,68,0.15)",
              borderRadius: 4, cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(239,68,68,0.12)"; e.currentTarget.style.color = "#ef4444"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(239,68,68,0.06)"; e.currentTarget.style.color = "rgba(239,68,68,0.6)"; }}
            >
              <TrashIcon /> 삭제
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Overview ──────────────────────────────────────────────────
function OverviewPanel({ content, onNavigate }: { content: SiteContent; onNavigate: (s: Section) => void }) {
  const stats = [
    { label: "Products", value: content.products.length },
    { label: "Projects", value: content.projects.length },
    { label: "Features", value: content.features.length },
    { label: "Process Steps", value: content.process.length },
  ];

  const sections: { id: Section; label: string; desc: string; preview: string; icon: React.ReactNode }[] = [
    { id: "hero",     label: "Hero",     desc: "메인 헤드라인 & CTA",    preview: content.hero.headline.replace("\n", " · "), icon: <FlagIcon /> },
    { id: "features", label: "About",    desc: "Why Sehyun ICT 강점",    preview: `${content.features.length}개 항목`, icon: <StarIcon /> },
    { id: "products", label: "Products", desc: "SmartGeoKit 제품 목록",  preview: `${content.products.length}개 제품`, icon: <BoxIcon /> },
    { id: "process",  label: "Business", desc: "업무 프로세스 단계",     preview: `${content.process.length}단계`, icon: <FlowIcon /> },
    { id: "projects", label: "Projects", desc: "수행 프로젝트 실적",     preview: `${content.projects.length}건`, icon: <FolderIcon /> },
    { id: "cta",      label: "Contact",  desc: "문의 섹션 텍스트",       preview: content.cta.headline.replace("\n", " · "), icon: <MailIcon /> },
    { id: "footer",   label: "Footer",   desc: "브랜드 & 푸터 정보",     preview: content.footer.studioName, icon: <FooterIcon /> },
  ];

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: T.accent, marginBottom: 8 }}>Dashboard</p>
        <h2 style={{ fontSize: 24, fontWeight: 300, letterSpacing: "-0.03em", color: T.t1, marginBottom: 6 }}>세현ICT 콘텐츠 관리</h2>
        <p style={{ fontSize: 13, color: T.t3, fontWeight: 300 }}>각 섹션을 클릭해 콘텐츠를 수정하세요.</p>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 28 }}>
        {stats.map(s => (
          <div key={s.label} style={{
            background: T.card, border: `1px solid ${T.border}`,
            borderRadius: 8, padding: "16px 18px",
          }}>
            <p style={{ fontSize: 22, fontWeight: 200, letterSpacing: "-0.03em", color: T.t1, lineHeight: 1 }}>{s.value}</p>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.t3, marginTop: 6 }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Section cards */}
      <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: T.t4, marginBottom: 12 }}>Sections</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 8 }}>
        {sections.map(sec => (
          <button key={sec.id} onClick={() => onNavigate(sec.id)} style={{
            display: "flex", alignItems: "flex-start", gap: 14,
            padding: "16px 18px",
            background: T.card, border: `1px solid ${T.border}`,
            borderRadius: 8, cursor: "pointer", textAlign: "left",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = T.cardHover; e.currentTarget.style.borderColor = T.accentGlow; }}
          onMouseLeave={e => { e.currentTarget.style.background = T.card; e.currentTarget.style.borderColor = T.border; }}
          >
            <span style={{
              width: 32, height: 32, borderRadius: 6, flexShrink: 0,
              background: T.accentDim, color: T.accent,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>{sec.icon}</span>
            <div style={{ minWidth: 0 }}>
              <p style={{ fontSize: 12, fontWeight: 500, color: T.t1, marginBottom: 2 }}>{sec.label}</p>
              <p style={{ fontSize: 11, color: T.t3, marginBottom: 8 }}>{sec.desc}</p>
              <p style={{ fontSize: 11, color: T.t2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{sec.preview}</p>
            </div>
            <span style={{ color: T.accent, flexShrink: 0, marginTop: 2 }}><ArrowRight /></span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────
function HeroPanel({ content, onChange }: { content: SiteContent; onChange: (h: SiteContent["hero"]) => void }) {
  const h = content.hero;
  const set = (key: keyof typeof h) => (v: string) => onChange({ ...h, [key]: v });
  return (
    <div>
      <PanelHeader title="Hero 섹션" />
      <FormCard>
        <Field label="Eyebrow" value={h.eyebrow} onChange={set("eyebrow")} placeholder="Smarter IT Solution Provider" />
        <Field label="헤드라인" value={h.headline} onChange={set("headline")} multiline hint="줄 바꿈은 \n 사용" />
        <Field label="서브 텍스트" value={h.subheadline} onChange={set("subheadline")} multiline />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <Field label="Primary CTA 버튼" value={h.ctaPrimary} onChange={set("ctaPrimary")} />
          <Field label="Secondary CTA 버튼" value={h.ctaSecondary} onChange={set("ctaSecondary")} />
        </div>
      </FormCard>
    </div>
  );
}

// ── Features ──────────────────────────────────────────────────
function FeaturesPanel({ features, onChange }: { features: Feature[]; onChange: (f: Feature[]) => void }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const toggle = (id: string) => setOpenId(prev => prev === id ? null : id);

  const update = (id: string, key: keyof Feature, val: string) =>
    onChange(features.map(f => f.id === id ? { ...f, [key]: val } : f));

  const add = () => {
    const item: Feature = { id: `f${Date.now()}`, number: String(features.length + 1).padStart(2, "0"), title: "새 강점", description: "설명을 입력하세요." };
    onChange([...features, item]);
    setOpenId(item.id);
  };

  return (
    <div>
      <PanelHeader title="About — 강점 카드" action={<AddButton onClick={add} label="항목 추가" />} />
      {features.map(f => (
        <AccordionItem key={f.id} id={f.id} isOpen={openId === f.id} onToggle={() => toggle(f.id)}
          summary={f.title} badge={f.number} onRemove={() => onChange(features.filter(x => x.id !== f.id))}>
          <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 14 }}>
            <Field label="번호" value={f.number} onChange={v => update(f.id, "number", v)} />
            <Field label="제목" value={f.title} onChange={v => update(f.id, "title", v)} />
          </div>
          <Field label="설명" value={f.description} onChange={v => update(f.id, "description", v)} multiline />
        </AccordionItem>
      ))}
    </div>
  );
}

// ── Products ──────────────────────────────────────────────────
function ProductsPanel({ products, onChange }: { products: Product[]; onChange: (p: Product[]) => void }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const toggle = (id: string) => setOpenId(prev => prev === id ? null : id);

  const update = (id: string, key: keyof Product, val: string | string[]) =>
    onChange(products.map(p => p.id === id ? { ...p, [key]: val } : p));

  const add = () => {
    const item: Product = { id: `p${Date.now()}`, title: "New Product", version: "v1.0", category: "GIS", description: "", tags: [] };
    onChange([...products, item]);
    setOpenId(item.id);
  };

  return (
    <div>
      <PanelHeader title="Products — SmartGeoKit" action={<AddButton onClick={add} label="제품 추가" />} />
      {products.map(p => (
        <AccordionItem key={p.id} id={p.id} isOpen={openId === p.id} onToggle={() => toggle(p.id)}
          summary={p.title} badge={p.category} onRemove={() => onChange(products.filter(x => x.id !== p.id))}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 80px 100px", gap: 14 }}>
            <Field label="제품명" value={p.title} onChange={v => update(p.id, "title", v)} />
            <Field label="버전" value={p.version} onChange={v => update(p.id, "version", v)} />
            <Field label="카테고리" value={p.category} onChange={v => update(p.id, "category", v)} />
          </div>
          <Field label="태그 (쉼표 구분)" value={p.tags.join(", ")} onChange={v => update(p.id, "tags", v.split(",").map(t => t.trim()).filter(Boolean))} placeholder="HTML5, Web, GIS" />
          <Field label="설명" value={p.description} onChange={v => update(p.id, "description", v)} multiline />
        </AccordionItem>
      ))}
    </div>
  );
}

// ── Process ───────────────────────────────────────────────────
function ProcessPanel({ steps, onChange }: { steps: ProcessStep[]; onChange: (s: ProcessStep[]) => void }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const toggle = (id: string) => setOpenId(prev => prev === id ? null : id);

  const update = (id: string, key: keyof ProcessStep, val: string) =>
    onChange(steps.map(s => s.id === id ? { ...s, [key]: val } : s));

  const add = () => {
    const item: ProcessStep = { id: `s${Date.now()}`, number: String(steps.length + 1).padStart(2, "0"), title: "새 단계", description: "", detail: "" };
    onChange([...steps, item]);
    setOpenId(item.id);
  };

  return (
    <div>
      <PanelHeader title="Business — 프로세스" action={<AddButton onClick={add} label="단계 추가" />} />
      {steps.map(s => (
        <AccordionItem key={s.id} id={s.id} isOpen={openId === s.id} onToggle={() => toggle(s.id)}
          summary={`${s.number}. ${s.title}`} badge={s.detail} onRemove={() => onChange(steps.filter(x => x.id !== s.id))}>
          <div style={{ display: "grid", gridTemplateColumns: "80px 1fr 100px", gap: 14 }}>
            <Field label="번호" value={s.number} onChange={v => update(s.id, "number", v)} />
            <Field label="단계명" value={s.title} onChange={v => update(s.id, "title", v)} />
            <Field label="소요기간" value={s.detail} onChange={v => update(s.id, "detail", v)} placeholder="2–3주" />
          </div>
          <Field label="설명" value={s.description} onChange={v => update(s.id, "description", v)} multiline />
        </AccordionItem>
      ))}
    </div>
  );
}

// ── Projects ──────────────────────────────────────────────────
function ProjectsPanel({ projects, onChange }: { projects: ProjectItem[]; onChange: (p: ProjectItem[]) => void }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const toggle = (id: string) => setOpenId(prev => prev === id ? null : id);

  const update = (id: string, key: keyof ProjectItem, val: string | string[]) =>
    onChange(projects.map(p => p.id === id ? { ...p, [key]: val } : p));

  const add = () => {
    const item: ProjectItem = { id: `proj${Date.now()}`, title: "새 프로젝트", client: "", year: String(new Date().getFullYear()), category: "GIS", description: "", tags: [] };
    onChange([...projects, item]);
    setOpenId(item.id);
  };

  return (
    <div>
      <PanelHeader title="Projects — 수행 실적" action={<AddButton onClick={add} label="프로젝트 추가" />} />
      {projects.map(p => (
        <AccordionItem key={p.id} id={p.id} isOpen={openId === p.id} onToggle={() => toggle(p.id)}
          summary={p.title} badge={p.year} onRemove={() => onChange(projects.filter(x => x.id !== p.id))}>
          <Field label="프로젝트명" value={p.title} onChange={v => update(p.id, "title", v)} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 80px 120px", gap: 14 }}>
            <Field label="발주처 / 클라이언트" value={p.client} onChange={v => update(p.id, "client", v)} />
            <Field label="연도" value={p.year} onChange={v => update(p.id, "year", v)} />
            <Field label="분야" value={p.category} onChange={v => update(p.id, "category", v)} />
          </div>
          <Field label="태그 (쉼표 구분)" value={p.tags.join(", ")} onChange={v => update(p.id, "tags", v.split(",").map(t => t.trim()).filter(Boolean))} />
          <Field label="설명" value={p.description} onChange={v => update(p.id, "description", v)} multiline />
        </AccordionItem>
      ))}
    </div>
  );
}

// ── CTA ───────────────────────────────────────────────────────
function CtaPanel({ content, onChange }: { content: SiteContent; onChange: (c: SiteContent["cta"]) => void }) {
  const cta = content.cta;
  const set = (key: keyof typeof cta) => (v: string) => onChange({ ...cta, [key]: v });
  return (
    <div>
      <PanelHeader title="Contact 섹션" />
      <FormCard>
        <Field label="헤드라인" value={cta.headline} onChange={set("headline")} multiline hint="줄 바꿈은 \n 사용" />
        <Field label="서브 텍스트" value={cta.subtext} onChange={set("subtext")} multiline />
        <Field label="버튼 텍스트" value={cta.buttonText} onChange={set("buttonText")} />
      </FormCard>
    </div>
  );
}

// ── Footer ────────────────────────────────────────────────────
function FooterPanel({ content, onChange }: { content: SiteContent; onChange: (f: SiteContent["footer"]) => void }) {
  const footer = content.footer;
  const set = (key: keyof typeof footer) => (v: string) => onChange({ ...footer, [key]: v });
  return (
    <div>
      <PanelHeader title="Footer" />
      <FormCard>
        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.t3, marginBottom: 16 }}>브랜드</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <Field label="스튜디오명" value={footer.studioName} onChange={set("studioName")} />
          <Field label="태그라인" value={footer.tagline} onChange={set("tagline")} />
        </div>
        <div style={{ height: 1, background: T.border, margin: "8px 0 20px" }} />
        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.t3, marginBottom: 16 }}>연락처 & 소셜</p>
        <Field label="이메일" value={footer.email} onChange={set("email")} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <Field label="Instagram" value={footer.instagram} onChange={set("instagram")} />
          <Field label="Twitter" value={footer.twitter} onChange={set("twitter")} />
        </div>
      </FormCard>
    </div>
  );
}
