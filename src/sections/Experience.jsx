import { Reveal } from "../components/Reveal";
import { Label } from "../components/Label";
import { TIMELINE } from "../data/constants";

export function Experience({ T }) {
  return (
    <section id="experience" style={{ marginBottom: 140 }}>
      <Reveal><Label T={T}>Experience & Education</Label></Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 14, marginBottom: 14 }}>
        <Reveal delay={.1} style={{ gridColumn: "span 2" }} className="timeline-span">
          <div style={{ border: `1px solid ${T.border}`, borderRadius: 20, padding: "32px 36px", background: T.bg1 }}>
            <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: 10.5, color: T.accent, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 32 }}>Timeline</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {TIMELINE.map(({ year, role, org, desc }, i) => (
                <div key={role} style={{ display: "flex", gap: 24, paddingBottom: i < TIMELINE.length - 1 ? 32 : 0, position: "relative" }}>
                  {i < TIMELINE.length - 1 && <div style={{ position: "absolute", left: 84, top: 22, bottom: 0, width: 1, background: T.border }} />}
                  <div style={{ flexShrink: 0, width: 72, fontFamily: "'Geist Mono', monospace", fontSize: 11, color: T.dim, paddingTop: 3, lineHeight: 1.4 }}>{year}</div>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", border: `2px solid ${T.accent}`, flexShrink: 0, marginTop: 4, background: T.bg, zIndex: 1 }} />
                  <div>
                    <p style={{ fontWeight: 600, fontSize: 15, marginBottom: 2 }}>{role}</p>
                    <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: T.accent, marginBottom: 8, letterSpacing: ".04em" }}>{org}</p>
                    <p style={{ color: T.muted, fontSize: 13.5, lineHeight: 1.6, margin: 0 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={.2} style={{ height: "100%" }}>
          <div style={{ height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column", border: `1px solid ${T.border}`, borderRadius: 20, padding: "28px", background: T.bg1, transition: "border-color .25s" }}
            onMouseEnter={e => e.currentTarget.style.borderColor = T.borderH}
            onMouseLeave={e => e.currentTarget.style.borderColor = T.border}
          >
            <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: 10.5, color: T.accent, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 20 }}>Education</p>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 700, letterSpacing: "-.02em", marginBottom: 6 }}>B.Tech · Computer Science</h3>
            <p style={{ flex: 1, color: T.muted, fontSize: 14, marginBottom: 20 }}>Lovely Professional University, Punjab</p>
            <div style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: 8, background: T.accentS, border: `1px solid ${T.accent}44`, borderRadius: 10, padding: "8px 16px", alignSelf: "flex-start" }}>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 18, fontWeight: 500, color: T.accent }}>7.28</span>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: T.muted, letterSpacing: ".06em" }}>CGPA</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={.2} style={{ height: "100%" }}>
          <div style={{ height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column", border: `1px solid ${T.border}`, borderRadius: 20, padding: "28px", background: T.bg1, transition: "border-color .25s" }}
            onMouseEnter={e => e.currentTarget.style.borderColor = T.borderH}
            onMouseLeave={e => e.currentTarget.style.borderColor = T.border}
          >
            <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: 10.5, color: T.accent, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 20 }}>Education</p>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 700, letterSpacing: "-.02em", marginBottom: 6 }}>Intermediate</h3>
            <p style={{ flex: 1, color: T.muted, fontSize: 14, marginBottom: 20 }}>Lala Radhey Shyam Academy</p>
            <div style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: 8, background: T.accentS, border: `1px solid ${T.accent}44`, borderRadius: 10, padding: "8px 16px", alignSelf: "flex-start" }}>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 18, fontWeight: 500, color: T.accent }}>74</span>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: T.muted, letterSpacing: ".06em" }}>Percentage</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={.2} style={{ height: "100%" }}>
          <div style={{ height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column", border: `1px solid ${T.border}`, borderRadius: 20, padding: "28px", background: T.bg1, transition: "border-color .25s" }}
            onMouseEnter={e => e.currentTarget.style.borderColor = T.borderH}
            onMouseLeave={e => e.currentTarget.style.borderColor = T.border}
          >
            <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: 10.5, color: T.accent, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 20 }}>Education</p>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 700, letterSpacing: "-.02em", marginBottom: 6 }}>Matriculation</h3>
            <p style={{ flex: 1, color: T.muted, fontSize: 14, marginBottom: 20 }}>St. Mary's School, Nagina</p>
            <div style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: 8, background: T.accentS, border: `1px solid ${T.accent}44`, borderRadius: 10, padding: "8px 16px", alignSelf: "flex-start" }}>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 18, fontWeight: 500, color: T.accent }}>72</span>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: T.muted, letterSpacing: ".06em" }}>Percentage</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={.3} style={{ height: "100%" }}>
          <div style={{ height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column", border: `1px solid ${T.border}`, borderRadius: 20, padding: "28px", background: T.bg1 }}>
            <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: 10.5, color: T.accent, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 20 }}>Currently Exploring</p>
            <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 10 }}>
              {[{ e: "⚡", t: "Advanced Backend Scaling" }, { e: "🏗️", t: "System Design & Architecture" }, { e: "🤖", t: "AI Integration in Web Apps" }].map(({ e, t }) => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", borderRadius: 10, background: T.bg2, border: `1px solid ${T.border}`, fontSize: 13.5, fontWeight: 500, transition: "border-color .2s, transform .2s", cursor: "default" }}
                  onMouseEnter={el => { el.currentTarget.style.borderColor = T.borderH; el.currentTarget.style.transform = "translateX(4px)"; }}
                  onMouseLeave={el => { el.currentTarget.style.borderColor = T.border; el.currentTarget.style.transform = "translateX(0)"; }}
                ><span>{e}</span><span>{t}</span></div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
