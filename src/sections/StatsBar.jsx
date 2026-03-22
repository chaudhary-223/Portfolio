import { Reveal } from "../components/Reveal";
import { STATS } from "../data/constants";

export function StatsBar({ T }) {
  return (
    <Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 1, border: `1px solid ${T.border}`, borderRadius: 20, overflow: "hidden", marginBottom: 120 }}>
        {STATS.map(({ n, l }, i) => (
          <div key={l} style={{ padding: "28px 24px", background: T.bg1, textAlign: "center", borderRight: i < STATS.length - 1 ? `1px solid ${T.border}` : "none", transition: "background .2s" }}
            onMouseEnter={e => e.currentTarget.style.background = T.bg2}
            onMouseLeave={e => e.currentTarget.style.background = T.bg1}
          >
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px,5vw,44px)", fontWeight: 800, letterSpacing: "-0.03em", backgroundImage: T.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{n}</div>
            <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: T.muted, letterSpacing: ".06em", marginTop: 6, textTransform: "uppercase" }}>{l}</div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
