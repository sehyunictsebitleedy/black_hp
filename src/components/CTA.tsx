import { CTAContent } from "@/types/cms";

interface Props { content: CTAContent; }

export default function CTA({ content }: Props) {
  const lines = content.headline.split("\n");

  return (
    <section id="contact" className="relative py-32 md:py-52 overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Glow center */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(79,126,245,0.07) 0%, transparent 70%)",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-[1380px] mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="label mb-8">Contact Us</p>

          <h2 className="display-xl mb-8">
            {lines.map((line, i) => (
              <span
                key={i}
                className="block"
                style={{ color: i === 0 ? "var(--text-primary)" : "var(--text-secondary)" }}
              >
                {line}
              </span>
            ))}
          </h2>

          <p className="text-sm leading-relaxed mb-12 max-w-sm"
            style={{ color: "var(--text-secondary)", fontWeight: 300, wordBreak: "keep-all" }}>
            {content.subtext}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="mailto:asset.manager@sehyunict.com" className="btn-primary">
              {content.buttonText}
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M1 6.5h11M6.5 1l5.5 5.5-5.5 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="tel:07040478955" className="btn-secondary">
              070-4047-8955
            </a>
          </div>

          {/* Contact detail */}
          <div
            className="mt-16 pt-8 flex flex-col md:flex-row gap-6 md:gap-16"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            {[
              { label: "Email", value: "asset.manager@sehyunict.com" },
              { label: "Tel", value: "070-4047-8955" },
              { label: "Location", value: "경기도 화성시 동탄기흥로 557" },
            ].map((c) => (
              <div key={c.label}>
                <div className="label mb-1.5">{c.label}</div>
                <div className="text-sm" style={{ color: "var(--text-secondary)", fontWeight: 300 }}>
                  {c.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
