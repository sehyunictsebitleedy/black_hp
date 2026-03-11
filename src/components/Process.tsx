import { ProcessStep } from "@/types/cms";

interface Props { steps: ProcessStep[]; }

export default function Process({ steps }: Props) {
  return (
    <section id="business" className="py-28 md:py-40" style={{ background: "var(--surface)" }}>
      <div className="max-w-[1380px] mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <p className="label mb-4">How We Work</p>
            <h2 className="display-md" style={{ color: "var(--text-primary)" }}>
              검증된 프로세스로<br />
              <span style={{ color: "var(--text-secondary)" }}>신뢰를 쌓습니다.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed md:text-right"
            style={{ color: "var(--text-secondary)", fontWeight: 300 }}>
            요구사항 분석부터 운영까지, 단계별로 철저하게 진행합니다.
          </p>
        </div>

        {/* Steps grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: "var(--border)" }}
        >
          {steps.map((step) => (
            <div
              key={step.id}
              className="group p-8 card-hover"
              style={{ background: "var(--surface)" }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-10">
                <span
                  className="text-5xl font-light leading-none tracking-tight"
                  style={{ color: "var(--text-tertiary)", letterSpacing: "-0.04em" }}
                >
                  {step.number}
                </span>
                <span
                  className="text-xs px-2 py-1 rounded"
                  style={{ background: "var(--surface-3)", color: "var(--text-secondary)", letterSpacing: "0.05em" }}
                >
                  {step.detail}
                </span>
              </div>

              <h3
                className="text-lg font-light mb-3 tracking-tight transition-colors duration-300 group-hover:text-white"
                style={{ color: "var(--text-primary)", wordBreak: "keep-all" }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)", fontWeight: 300, wordBreak: "keep-all" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
