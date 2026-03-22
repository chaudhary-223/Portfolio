import { Reveal } from "../components/Reveal";
import { Label } from "../components/Label";

export function About({ T }) {
  return (
    <section id="about" style={{ marginBottom: 140 }}>
      <Reveal><Label T={T}>About</Label></Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px,6vw,80px)", alignItems: "center" }} className="about-grid">
        <Reveal delay={.1}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px,4.5vw,52px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, margin: 0 }}>
            I turn complex <span style={{ backgroundImage: T.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>problems</span> into elegant <span style={{ backgroundImage: T.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>software.</span>
          </h2>
        </Reveal>
        <Reveal delay={.2}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { icon: "⚙️", t: "MERN Stack Specialist", b: "End-to-end ownership — from pixel-perfect React UIs to scalable Node.js APIs and MongoDB schemas." },
              { icon: "🧠", t: "DSA & System Design", b: "Strong algorithmic foundations. Every architectural decision is backed by complexity analysis." },
              { icon: "🔌", t: "Real-Time & Secure Auth", b: "Production-grade Socket.io systems, JWT/RBAC authentication, and role-scoped data access." },
            ].map(({ icon, t, b }) => (
              <div key={t} style={{ display: "flex", gap: 16, padding: "20px 22px", border: `1px solid ${T.border}`, borderRadius: 14, background: T.bg1, transition: "border-color .25s, transform .25s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = T.borderH; e.currentTarget.style.transform = "translateX(4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.transform = "translateX(0)"; }}
              >
                <span style={{ fontSize: 22, flexShrink: 0 }}>{icon}</span>
                <div>
                  <p style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{t}</p>
                  <p style={{ color: T.muted, fontSize: 13.5, lineHeight: 1.6, margin: 0 }}>{b}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
