import { Feature } from "@/types/cms";

interface Props { features: Feature[]; }

export default function Features({ features }: Props) {
  return (
    <section id="about" className="py-28 md:py-40">
      <div className="max-w-[1380px] mx-auto px-6 md:px-10">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <p className="label mb-4">Why Sehyun ICT</p>
            <h2 className="display-md" style={{ color: "var(--text-primary)" }}>
              스마터한 IT의<br />
              <span style={{ color: "var(--text-secondary)" }}>새로운 기준.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed md:text-right"
            style={{ color: "var(--text-secondary)", fontWeight: 300 }}>
            공간정보 기술을 기반으로 고객의 비즈니스에 최적화된 IT 솔루션을 제공합니다.
          </p>
        </div>

        {/* Feature cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px"
          style={{ background: "var(--border)" }}
        >
          {features.map((f) => (
            <div
              key={f.id}
              className="group relative p-8 md:p-10 card-hover cursor-default"
              style={{ background: "var(--bg)" }}
            >
              <div className="num-accent mb-8">{f.number}</div>
              <h3 className="text-lg font-light mb-4 leading-snug tracking-tight"
                style={{ color: "var(--text-primary)" }}>
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)", fontWeight: 300 }}>
                {f.description}
              </p>
              {/* accent underline on hover */}
              <div
                className="absolute bottom-0 left-8 right-8 h-px transition-all duration-500 opacity-0 group-hover:opacity-100"
                style={{ background: "linear-gradient(90deg, var(--accent), transparent)", transformOrigin: "left" }}
              />
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px mt-px"
          style={{ background: "var(--border)" }}
        >
          {[
            { value: "2015", label: "설립년도", sub: "Founded" },
            { value: "10+", label: "업력", sub: "Years" },
            { value: "100+", label: "수행 프로젝트", sub: "Projects" },
            { value: "50+", label: "파트너사", sub: "Partners" },
          ].map((s) => (
            <div
              key={s.label}
              className="p-8 md:p-10"
              style={{ background: "var(--bg)" }}
            >
              <div
                className="text-4xl md:text-5xl font-light mb-2 tracking-tight"
                style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
              >
                {s.value}
              </div>
              <div className="text-sm mb-0.5" style={{ color: "var(--text-secondary)", fontWeight: 300 }}>
                {s.label}
              </div>
              <div className="label">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
