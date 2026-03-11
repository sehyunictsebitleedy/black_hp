import { CTAContent } from "@/types/cms";

interface Props { content: CTAContent; }

export default function CTA({ content }: Props) {
  return (
    <section
      id="contact"
      className="relative flex flex-col justify-center overflow-hidden"
      style={{ minHeight: "100svh", borderTop: "1px solid var(--border)" }}
    >
      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(79,126,245,0.06) 0%, transparent 70%)",
          top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative max-w-[1380px] mx-auto px-6 md:px-16 w-full py-20">
        <p className="label mb-10">Contact Us</p>

        <h2 className="display-xl mb-10">
          {content.headline.split("\n").map((line, i) => (
            <span
              key={i}
              className="block"
              style={{ color: i === 0 ? "var(--text-primary)" : "var(--text-tertiary)" }}
            >
              {line}
            </span>
          ))}
        </h2>

        <p className="text-sm leading-loose mb-12"
          style={{ color: "var(--text-secondary)", fontWeight: 300, maxWidth: 300, wordBreak: "keep-all" }}>
          {content.subtext}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a href="mailto:asset.manager@sehyunict.com" className="btn-primary">
            {content.buttonText}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="tel:07040478955" className="btn-secondary">070-4047-8955</a>
        </div>

        {/* Contact info */}
        <div
          className="flex flex-col md:flex-row gap-10 md:gap-20 mt-16 pt-10"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {[
            { label: "Email", value: "asset.manager@sehyunict.com" },
            { label: "Tel", value: "070-4047-8955" },
            { label: "Location", value: "경기도 화성시 동탄기흥로 557, 1901호" },
          ].map((c) => (
            <div key={c.label}>
              <p className="label mb-2">{c.label}</p>
              <p className="text-sm" style={{ color: "var(--text-secondary)", fontWeight: 300 }}>{c.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
