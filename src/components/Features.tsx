import { Feature } from "@/types/cms";

interface Props { features: Feature[]; }

export default function Features({ features }: Props) {
  return (
    <section
      id="about"
      className="relative flex flex-col justify-center"
      style={{ minHeight: "100svh", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-[1380px] mx-auto px-6 md:px-16 w-full py-20">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="label mb-4">Why Sehyun ICT</p>
            <h2 className="display-lg" style={{ color: "var(--text-primary)" }}>
              스마터한 IT의<br />
              <span style={{ color: "var(--text-tertiary)" }}>새로운 기준.</span>
            </h2>
          </div>
          <p className="text-sm leading-loose md:text-right"
            style={{ color: "var(--text-secondary)", fontWeight: 300, maxWidth: 280, wordBreak: "keep-all" }}>
            공간정보 기술을 기반으로<br />고객 비즈니스에 최적화된 솔루션을 제공합니다.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "var(--border)" }}>
          {features.map((f) => (
            <div
              key={f.id}
              className="group p-10 card-hover"
              style={{ background: "var(--bg)" }}
            >
              <span className="num-accent block mb-8">{f.number}</span>
              <h3 className="text-xl font-light mb-4 tracking-tight" style={{ color: "var(--text-primary)", wordBreak: "keep-all" }}>
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)", fontWeight: 300, wordBreak: "keep-all" }}>
                {f.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-px" style={{ background: "var(--border)" }}>
          {[
            { value: "2015", label: "설립년도" },
            { value: "10+", label: "업력" },
            { value: "100+", label: "수행 프로젝트" },
            { value: "50+", label: "파트너사" },
          ].map((s) => (
            <div key={s.label} className="px-10 py-8" style={{ background: "var(--bg)" }}>
              <div className="text-4xl font-light mb-1.5 tracking-tight" style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}>
                {s.value}
              </div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
