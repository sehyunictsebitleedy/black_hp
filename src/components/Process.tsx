import { ProcessStep } from "@/types/cms";

interface Props { steps: ProcessStep[]; }

export default function Process({ steps }: Props) {
  return (
    <section
      id="business"
      className="relative flex flex-col justify-center"
      style={{ minHeight: "100svh", background: "var(--surface)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-[1380px] mx-auto px-6 md:px-16 w-full py-20">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="label mb-4">How We Work</p>
            <h2 className="display-lg" style={{ color: "var(--text-primary)" }}>
              검증된 프로세스로<br />
              <span style={{ color: "var(--text-tertiary)" }}>신뢰를 쌓습니다.</span>
            </h2>
          </div>
          <p className="text-sm leading-loose md:text-right"
            style={{ color: "var(--text-secondary)", fontWeight: 300, maxWidth: 260, wordBreak: "keep-all" }}>
            요구사항 분석부터 운영까지,<br />단계별로 철저하게 진행합니다.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "var(--border)" }}>
          {steps.map((step) => (
            <div
              key={step.id}
              className="group p-10 card-hover"
              style={{ background: "var(--surface)" }}
            >
              <div className="flex items-start justify-between mb-12">
                <span
                  className="font-light leading-none"
                  style={{ fontSize: "3.5rem", color: "var(--text-tertiary)", letterSpacing: "-0.04em" }}
                >
                  {step.number}
                </span>
                <span
                  className="text-xs px-2.5 py-1 rounded-sm"
                  style={{ background: "var(--surface-3)", color: "var(--text-secondary)", letterSpacing: "0.05em" }}
                >
                  {step.detail}
                </span>
              </div>
              <h3
                className="text-base font-light mb-3 tracking-tight group-hover:text-white transition-colors duration-300"
                style={{ color: "var(--text-primary)", wordBreak: "keep-all" }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)", fontWeight: 300, wordBreak: "keep-all" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
