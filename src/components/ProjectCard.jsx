import { useState } from "react";
import { Ico } from "./Icons";

export function ProjectCard({ p, T }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      border: `1px solid ${hov ? p.color + "66" : T.border}`,
      borderRadius: 24, background: T.bg1,
      transition: "border-color .35s, transform .35s, box-shadow .35s",
      transform: hov ? "translateY(-4px)" : "translateY(0)",
      boxShadow: hov ? `0 24px 64px ${p.color}1a` : "none",
      overflow: "hidden",
    }}>
      {/* Top accent bar */}
      <div style={{ height: 3, background: `linear-gradient(90deg, ${p.color}, ${p.color}44)`, opacity: hov ? 1 : 0, transition: "opacity .35s" }} />

      <div style={{ padding: "36px 40px 36px" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: T.dim, letterSpacing: ".1em" }}>{p.idx}</span>
              <span style={{ width: 1, height: 14, background: T.border }} />
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: p.color, letterSpacing: ".06em" }}>{p.short}</span>
            </div>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(20px,3vw,28px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15, whiteSpace: "pre-line" }}>{p.title}</h3>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            {[
              { ic: Ico.gh, label: "GitHub", href: p.github, bg: "transparent", border: T.border, color: T.text, hBorder: p.color, hColor: p.color, hBg: "transparent" },
              // { ic: Ico.ext, label: "Live Demo", href: p.live, bg: p.color, border: p.color, color: T.bg, hBorder: p.color, hColor: T.bg, hBg: p.color },
            ].map(({ ic, label, href, bg, border, color, hBorder, hColor, hBg }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 6, background: bg, border: `1px solid ${border}`, borderRadius: 10, padding: "8px 14px", fontSize: 13, fontWeight: 600, color, textDecoration: "none", transition: "all .2s", fontFamily: "'Instrument Sans', sans-serif" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = hBorder; e.currentTarget.style.color = hColor; e.currentTarget.style.background = hBg; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.color = color; e.currentTarget.style.background = bg; e.currentTarget.style.transform = "translateY(0)"; }}
              >{ic} {label}</a>
            ))}
          </div>
        </div>

        <p style={{ color: T.muted, fontSize: 15, lineHeight: 1.75, marginBottom: 28, maxWidth: 640 }}>{p.desc}</p>

        {/* Features grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 10, marginBottom: 28 }}>
          {p.features.map(f => (
            <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: 13.5 }}>
              <span style={{ color: p.color, flexShrink: 0, marginTop: 2, fontWeight: 700 }}>→</span>
              <span style={{ color: T.text, lineHeight: 1.5 }}>{f}</span>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {p.tech.map(t => (
            <span key={t} style={{ background: p.color + "14", border: `1px solid ${p.color}33`, borderRadius: 7, padding: "4px 13px", fontSize: 12, color: p.color, fontWeight: 500, fontFamily: "'Geist Mono', monospace" }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
