"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SiteContent, Feature, Product, ProcessStep, ProjectItem } from "@/types/cms";
import { loadContent, saveContent, resetContent, defaultContent } from "@/lib/cms-store";

type Section = "overview" | "hero" | "features" | "products" | "process" | "projects" | "cta" | "footer";

export default function CmsPage() {
  const [activeSection, setActiveSection] = useState<Section>("overview");
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [saved, setSaved] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    setContent(loadContent());
  }, []);

  const handleSave = () => {
    saveContent(content);
    setSaved(true);
    setIsDirty(false);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleReset = () => {
    if (confirm("Reset all content to defaults?")) {
      resetContent();
      setContent(defaultContent);
      setIsDirty(false);
    }
  };

  const update = (updater: (prev: SiteContent) => SiteContent) => {
    setContent(updater);
    setIsDirty(true);
  };

  const navItems: { id: Section; label: string; icon: string }[] = [
    { id: "overview", label: "Overview", icon: "▦" },
    { id: "hero", label: "Hero", icon: "◉" },
    { id: "features", label: "Features", icon: "◫" },
    { id: "products", label: "Products", icon: "◱" },
    { id: "process", label: "Process", icon: "◳" },
    { id: "projects", label: "Projects", icon: "◈" },
    { id: "cta", label: "CTA", icon: "◆" },
    { id: "footer", label: "Footer", icon: "◻" },
  ];

  return (
    <div
      className="min-h-screen flex"
      style={{ background: "var(--bg)", color: "var(--text-primary)" }}
    >
      {/* Sidebar */}
      <aside
        className="w-56 shrink-0 h-screen sticky top-0 flex flex-col"
        style={{ background: "var(--surface)", borderRight: "1px solid var(--border)" }}
      >
        {/* Logo */}
        <div
          className="px-5 py-5 flex items-center gap-2"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <span
            className="w-5 h-5 rounded-sm flex items-center justify-center text-xs font-bold"
            style={{ background: "var(--text-primary)", color: "var(--bg)" }}
          >
            S
          </span>
          <span className="text-xs font-medium tracking-wide">CMS</span>
          <span
            className="ml-auto text-xs px-1.5 py-0.5 rounded"
            style={{ background: "var(--surface-3)", color: "var(--text-secondary)" }}
          >
            v1
          </span>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <div className="label px-2 mb-3">Sections</div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md mb-0.5 text-left transition-all duration-200 text-xs"
              style={{
                background: activeSection === item.id ? "rgba(255,255,255,0.07)" : "transparent",
                color: activeSection === item.id ? "var(--text-primary)" : "var(--text-secondary)",
              }}
            >
              <span className="text-base leading-none">{item.icon}</span>
              <span className="tracking-wide">{item.label}</span>
              {activeSection === item.id && (
                <span
                  className="ml-auto w-1 h-1 rounded-full"
                  style={{ background: "var(--accent-blue)" }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Sidebar footer */}
        <div
          className="px-5 py-4 flex flex-col gap-2"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <Link
            href="/"
            className="text-xs transition-colors flex items-center gap-2"
            style={{ color: "var(--text-secondary)" }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M8 6H1M4 3L1 6l3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            View site
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Topbar */}
        <header
          className="sticky top-0 z-10 px-8 h-14 flex items-center justify-between"
          style={{ background: "rgba(5,5,5,0.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid var(--border)" }}
        >
          <div className="flex items-center gap-3">
            <h1 className="text-sm font-medium capitalize">{activeSection}</h1>
            {isDirty && (
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{ background: "rgba(251, 191, 36, 0.1)", color: "#fbbf24", border: "1px solid rgba(251,191,36,0.2)" }}
              >
                Unsaved
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleReset}
              className="text-xs px-3 py-1.5 rounded transition-colors"
              style={{ color: "var(--text-secondary)", border: "1px solid var(--border)" }}
            >
              Reset
            </button>
            <button
              onClick={handleSave}
              className="btn-primary text-xs"
              style={{ padding: "8px 18px" }}
            >
              {saved ? (
                <span className="flex items-center gap-2">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Saved
                </span>
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          {activeSection === "overview" && (
            <OverviewPanel content={content} onNavigate={setActiveSection} />
          )}
          {activeSection === "hero" && (
            <HeroPanel
              content={content}
              onChange={(hero) => update((c) => ({ ...c, hero }))}
            />
          )}
          {activeSection === "features" && (
            <FeaturesPanel
              features={content.features}
              onChange={(features) => update((c) => ({ ...c, features }))}
            />
          )}
          {activeSection === "products" && (
            <ProductsPanel
              products={content.products}
              onChange={(products) => update((c) => ({ ...c, products }))}
            />
          )}
          {activeSection === "process" && (
            <ProcessPanel
              steps={content.process}
              onChange={(process) => update((c) => ({ ...c, process }))}
            />
          )}
          {activeSection === "projects" && (
            <ProjectsPanel
              projects={content.projects}
              onChange={(projects) => update((c) => ({ ...c, projects }))}
            />
          )}
          {activeSection === "cta" && (
            <CtaPanel
              content={content}
              onChange={(cta) => update((c) => ({ ...c, cta }))}
            />
          )}
          {activeSection === "footer" && (
            <FooterPanel
              content={content}
              onChange={(footer) => update((c) => ({ ...c, footer }))}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// ── Sub-components ──────────────────────────────────────────────

function OverviewPanel({
  content,
  onNavigate,
}: {
  content: SiteContent;
  onNavigate: (s: Section) => void;
}) {
  const cards = [
    { section: "hero" as Section, label: "Hero", preview: content.hero.headline.split("\n")[0] },
    { section: "features" as Section, label: "Features", preview: `${content.features.length} items` },
    { section: "products" as Section, label: "Products", preview: `${content.products.length} products` },
    { section: "process" as Section, label: "Process", preview: `${content.process.length} steps` },
    { section: "projects" as Section, label: "Projects", preview: `${content.projects.length} projects` },
    { section: "cta" as Section, label: "CTA", preview: content.cta.headline.split("\n")[0] },
    { section: "footer" as Section, label: "Footer", preview: content.footer.studioName },
  ];

  return (
    <div>
      <h2 className="text-2xl font-light mb-2" style={{ letterSpacing: "-0.02em" }}>
        Site Overview
      </h2>
      <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
        All content sections. Click to edit.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {cards.map((card) => (
          <button
            key={card.section}
            onClick={() => onNavigate(card.section)}
            className="text-left p-5 rounded-lg card-hover"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <div className="label mb-2">{card.label}</div>
            <div
              className="text-sm truncate"
              style={{ color: "var(--text-primary)", fontWeight: 300 }}
            >
              {card.preview}
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs" style={{ color: "var(--accent-blue)" }}>
              Edit
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  multiline = false,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  hint?: string;
}) {
  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: 6,
    color: "var(--text-primary)",
    fontSize: "0.875rem",
    padding: "10px 14px",
    outline: "none",
    fontFamily: "inherit",
    fontWeight: 300,
    transition: "border-color 0.2s",
    resize: multiline ? "vertical" : undefined,
    minHeight: multiline ? 90 : undefined,
  };

  return (
    <div className="mb-5">
      <label className="label block mb-2">{label}</label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--border-hover)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--border-hover)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
        />
      )}
      {hint && (
        <p className="text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>
          {hint}
        </p>
      )}
    </div>
  );
}

function SectionCard({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <div
      className="p-6 rounded-lg mb-4"
      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
    >
      {title && (
        <div className="label mb-5">{title}</div>
      )}
      {children}
    </div>
  );
}

function HeroPanel({
  content,
  onChange,
}: {
  content: SiteContent;
  onChange: (h: SiteContent["hero"]) => void;
}) {
  const h = content.hero;
  const set = (key: keyof typeof h) => (v: string) => onChange({ ...h, [key]: v });

  return (
    <div>
      <h2 className="text-2xl font-light mb-6" style={{ letterSpacing: "-0.02em" }}>Hero Section</h2>
      <SectionCard title="Content">
        <Field label="Eyebrow text" value={h.eyebrow} onChange={set("eyebrow")} />
        <Field label="Headline" value={h.headline} onChange={set("headline")} multiline hint="Use \n for line breaks" />
        <Field label="Subheadline" value={h.subheadline} onChange={set("subheadline")} multiline />
        <Field label="Primary CTA" value={h.ctaPrimary} onChange={set("ctaPrimary")} />
        <Field label="Secondary CTA" value={h.ctaSecondary} onChange={set("ctaSecondary")} />
      </SectionCard>
    </div>
  );
}

function FeaturesPanel({
  features,
  onChange,
}: {
  features: Feature[];
  onChange: (f: Feature[]) => void;
}) {
  const updateItem = (id: string, key: keyof Feature, value: string) => {
    onChange(features.map((f) => (f.id === id ? { ...f, [key]: value } : f)));
  };

  const addItem = () => {
    const newItem: Feature = {
      id: `f${Date.now()}`,
      number: String(features.length + 1).padStart(2, "0"),
      title: "New Feature",
      description: "Description here.",
    };
    onChange([...features, newItem]);
  };

  const removeItem = (id: string) => {
    onChange(features.filter((f) => f.id !== id));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-light" style={{ letterSpacing: "-0.02em" }}>Features</h2>
        <button onClick={addItem} className="btn-secondary text-xs" style={{ padding: "8px 16px" }}>
          + Add Feature
        </button>
      </div>

      {features.map((feature) => (
        <SectionCard key={feature.id} title={`Feature ${feature.number}`}>
          <div className="flex gap-4">
            <div className="flex-1">
              <Field label="Number" value={feature.number} onChange={(v) => updateItem(feature.id, "number", v)} />
              <Field label="Title" value={feature.title} onChange={(v) => updateItem(feature.id, "title", v)} />
              <Field label="Description" value={feature.description} onChange={(v) => updateItem(feature.id, "description", v)} multiline />
            </div>
            <button
              onClick={() => removeItem(feature.id)}
              className="self-start mt-6 p-2 rounded transition-colors"
              style={{ color: "var(--text-tertiary)", background: "var(--surface-2)" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </SectionCard>
      ))}
    </div>
  );
}

function ProductsPanel({
  products,
  onChange,
}: {
  products: Product[];
  onChange: (p: Product[]) => void;
}) {
  const updateItem = (id: string, key: keyof Product, value: string | string[]) => {
    onChange(products.map((p) => (p.id === id ? { ...p, [key]: value } : p)));
  };

  const addItem = () => {
    const newItem: Product = {
      id: `p${Date.now()}`,
      title: "New Product",
      version: "v1.0",
      category: "GIS",
      description: "제품 설명을 입력하세요.",
      tags: ["Web"],
    };
    onChange([...products, newItem]);
  };

  const removeItem = (id: string) => onChange(products.filter((p) => p.id !== id));

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-light" style={{ letterSpacing: "-0.02em" }}>Products</h2>
        <button onClick={addItem} className="btn-secondary text-xs" style={{ padding: "8px 16px" }}>
          + Add Product
        </button>
      </div>

      {products.map((product) => (
        <SectionCard key={product.id} title={product.title}>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                <Field label="Title" value={product.title} onChange={(v) => updateItem(product.id, "title", v)} />
                <Field label="Version" value={product.version} onChange={(v) => updateItem(product.id, "version", v)} />
                <Field label="Category" value={product.category} onChange={(v) => updateItem(product.id, "category", v)} />
                <Field label="Tags (comma-separated)" value={product.tags.join(", ")} onChange={(v) => updateItem(product.id, "tags", v.split(",").map((t) => t.trim()))} />
              </div>
              <Field label="Description" value={product.description} onChange={(v) => updateItem(product.id, "description", v)} multiline />
            </div>
            <button
              onClick={() => removeItem(product.id)}
              className="self-start mt-6 p-2 rounded transition-colors"
              style={{ color: "var(--text-tertiary)", background: "var(--surface-2)" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </SectionCard>
      ))}
    </div>
  );
}

function ProcessPanel({
  steps,
  onChange,
}: {
  steps: ProcessStep[];
  onChange: (s: ProcessStep[]) => void;
}) {
  const updateItem = (id: string, key: keyof ProcessStep, value: string) => {
    onChange(steps.map((s) => (s.id === id ? { ...s, [key]: value } : s)));
  };

  const addItem = () => {
    const newStep: ProcessStep = {
      id: `p${Date.now()}`,
      number: String(steps.length + 1).padStart(2, "0"),
      title: "New Step",
      description: "Step description.",
      detail: "N/A",
    };
    onChange([...steps, newStep]);
  };

  const removeItem = (id: string) => onChange(steps.filter((s) => s.id !== id));

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-light" style={{ letterSpacing: "-0.02em" }}>Process Steps</h2>
        <button onClick={addItem} className="btn-secondary text-xs" style={{ padding: "8px 16px" }}>
          + Add Step
        </button>
      </div>

      {steps.map((step) => (
        <SectionCard key={step.id} title={`Step ${step.number}`}>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                <Field label="Number" value={step.number} onChange={(v) => updateItem(step.id, "number", v)} />
                <Field label="Duration / Detail" value={step.detail} onChange={(v) => updateItem(step.id, "detail", v)} />
              </div>
              <Field label="Title" value={step.title} onChange={(v) => updateItem(step.id, "title", v)} />
              <Field label="Description" value={step.description} onChange={(v) => updateItem(step.id, "description", v)} multiline />
            </div>
            <button
              onClick={() => removeItem(step.id)}
              className="self-start mt-6 p-2 rounded transition-colors"
              style={{ color: "var(--text-tertiary)", background: "var(--surface-2)" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </SectionCard>
      ))}
    </div>
  );
}

function ProjectsPanel({
  projects,
  onChange,
}: {
  projects: ProjectItem[];
  onChange: (p: ProjectItem[]) => void;
}) {
  const updateItem = (id: string, key: keyof ProjectItem, value: string | string[]) => {
    onChange(projects.map((p) => (p.id === id ? { ...p, [key]: value } : p)));
  };

  const addItem = () => {
    const newItem: ProjectItem = {
      id: `proj${Date.now()}`,
      title: "새 프로젝트",
      client: "발주처",
      year: String(new Date().getFullYear()),
      category: "GIS",
      description: "프로젝트 설명을 입력하세요.",
      tags: ["GIS"],
    };
    onChange([...projects, newItem]);
  };

  const removeItem = (id: string) => onChange(projects.filter((p) => p.id !== id));

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-light" style={{ letterSpacing: "-0.02em" }}>Projects</h2>
        <button onClick={addItem} className="btn-secondary text-xs" style={{ padding: "8px 16px" }}>
          + Add Project
        </button>
      </div>

      {projects.map((proj) => (
        <SectionCard key={proj.id} title={proj.title}>
          <div className="flex gap-4">
            <div className="flex-1">
              <Field label="프로젝트명" value={proj.title} onChange={(v) => updateItem(proj.id, "title", v)} />
              <div className="grid grid-cols-2 gap-4">
                <Field label="발주처 / 클라이언트" value={proj.client} onChange={(v) => updateItem(proj.id, "client", v)} />
                <Field label="수행연도" value={proj.year} onChange={(v) => updateItem(proj.id, "year", v)} />
                <Field label="분야 / 카테고리" value={proj.category} onChange={(v) => updateItem(proj.id, "category", v)} />
                <Field label="태그 (쉼표 구분)" value={proj.tags.join(", ")} onChange={(v) => updateItem(proj.id, "tags", v.split(",").map((t) => t.trim()))} />
              </div>
              <Field label="설명" value={proj.description} onChange={(v) => updateItem(proj.id, "description", v)} multiline />
            </div>
            <button
              onClick={() => removeItem(proj.id)}
              className="self-start mt-6 p-2 rounded transition-colors"
              style={{ color: "var(--text-tertiary)", background: "var(--surface-2)" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </SectionCard>
      ))}
    </div>
  );
}

function CtaPanel({
  content,
  onChange,
}: {
  content: SiteContent;
  onChange: (c: SiteContent["cta"]) => void;
}) {
  const cta = content.cta;
  const set = (key: keyof typeof cta) => (v: string) => onChange({ ...cta, [key]: v });

  return (
    <div>
      <h2 className="text-2xl font-light mb-6" style={{ letterSpacing: "-0.02em" }}>CTA Section</h2>
      <SectionCard title="Content">
        <Field label="Headline" value={cta.headline} onChange={set("headline")} multiline hint="Use \n for line breaks" />
        <Field label="Subtext" value={cta.subtext} onChange={set("subtext")} multiline />
        <Field label="Button Text" value={cta.buttonText} onChange={set("buttonText")} />
      </SectionCard>
    </div>
  );
}

function FooterPanel({
  content,
  onChange,
}: {
  content: SiteContent;
  onChange: (f: SiteContent["footer"]) => void;
}) {
  const footer = content.footer;
  const set = (key: keyof typeof footer) => (v: string) => onChange({ ...footer, [key]: v });

  return (
    <div>
      <h2 className="text-2xl font-light mb-6" style={{ letterSpacing: "-0.02em" }}>Footer</h2>
      <SectionCard title="Brand">
        <Field label="Studio Name" value={footer.studioName} onChange={set("studioName")} />
        <Field label="Tagline" value={footer.tagline} onChange={set("tagline")} />
      </SectionCard>
      <SectionCard title="Contact & Social">
        <Field label="Email" value={footer.email} onChange={set("email")} />
        <Field label="Instagram Handle" value={footer.instagram} onChange={set("instagram")} />
        <Field label="Twitter Handle" value={footer.twitter} onChange={set("twitter")} />
      </SectionCard>
    </div>
  );
}
