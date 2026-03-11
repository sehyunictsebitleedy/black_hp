"use client";
import { ClientItem } from "@/types/cms";

export default function ClientsTicker({ clients }: { clients: ClientItem[] }) {
  if (!clients.length) return null;

  // 무한 루프를 위해 2배 복제
  const items = [...clients, ...clients];

  return (
    <div style={{
      marginTop: 56,
      paddingTop: 40,
      borderTop: "1px solid rgba(255,255,255,0.055)",
      overflow: "hidden",
    }}>
      <p style={{
        fontSize: 10, fontWeight: 500, letterSpacing: "0.22em",
        textTransform: "uppercase", color: "rgba(255,255,255,0.18)",
        marginBottom: 22,
      }}>
        Partners &amp; Clients
      </p>

      <div style={{ overflow: "hidden", maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
        <div
          className="marquee"
          style={{
            display: "flex",
            gap: 0,
            width: "max-content",
            willChange: "transform",
          }}
        >
          {items.map((c, i) => (
            <div key={`${c.id}-${i}`} style={{
              display: "flex", alignItems: "center",
              flexShrink: 0,
            }}>
              <span style={{
                fontSize: 13, fontWeight: 300,
                letterSpacing: "0.02em",
                color: "rgba(255,255,255,0.35)",
                whiteSpace: "nowrap",
                padding: "0 32px",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
              >
                {c.name}
              </span>
              <span style={{
                width: 3, height: 3, borderRadius: "50%",
                background: "rgba(139,124,248,0.35)",
                flexShrink: 0,
              }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
