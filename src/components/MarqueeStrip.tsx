const items = [
  "GIS Solution",
  "CAD Viewer",
  "Smarter IT",
  "공간정보",
  "디지털 전환",
  "IT Solution",
  "CAD Compare",
  "SmartGeoKit",
];

export default function MarqueeStrip() {
  const doubled = [...items, ...items];
  return (
    <div
      className="py-4 overflow-hidden"
      style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="flex animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-7 px-7">
            <span
              className="text-[11px] font-medium tracking-[0.22em] uppercase"
              style={{ color: "var(--text-tertiary)" }}
            >
              {item}
            </span>
            <span
              className="w-1 h-1 rounded-full shrink-0"
              style={{ background: "var(--text-tertiary)" }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
