import { Reveal } from "../components/Reveal";
import { Label } from "../components/Label";
import { SKILLS } from "../data/constants";

export function Skills({ T }) {
  return (
    <section id="skills" style={{ marginBottom: 140 }}>
      <Reveal><Label T={T}>Tech Stack</Label></Reveal>
      <Reveal delay={.1}>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 56 }}>Tools of the trade</h2>
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 14 }}>
        {SKILLS.map(({ g, items }, gi) => (
          <Reveal key={g} delay={gi * .07}>
            <div style={{ border: `1px solid ${T.border}`, borderRadius: 16, padding: "22px 20px", background: T.bg1, height: "100%", transition: "border-color .25s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = T.accent}
              onMouseLeave={e => e.currentTarget.style.borderColor = T.border}
            >
              <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: 10.5, fontWeight: 500, color: T.accent, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 16 }}>{g}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {items.map(it => (
                  <span key={it} style={{ background: T.bg3, border: `1px solid ${T.border}`, borderRadius: 7, padding: "4px 11px", fontSize: 12.5, fontWeight: 500, color: T.text, cursor: "default", transition: "background .2s, color .2s, border-color .2s" }}
                    onMouseEnter={e => { e.currentTarget.style.background = T.accentS; e.currentTarget.style.borderColor = T.accent; e.currentTarget.style.color = T.accent; }}
                    onMouseLeave={e => { e.currentTarget.style.background = T.bg3; e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.text; }}
                  >{it}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
