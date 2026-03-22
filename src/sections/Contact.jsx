import { Reveal } from "../components/Reveal";
import { Label } from "../components/Label";
import { FormField } from "../components/FormField";
import { Ico } from "../components/Icons";

export function Contact({ T, form, setForm, sent, submitForm, dark }) {
  return (
    <section id="contact" style={{ marginBottom: 100 }}>
      <Reveal><Label T={T}>Contact</Label></Reveal>
      <Reveal delay={.1}>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 12 }}>Let's build something.</h2>
        <p style={{ color: T.muted, fontSize: 16, fontWeight: 300, marginBottom: 48 }}>Open to full-time roles, freelance projects, and interesting conversations.</p>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
        <Reveal delay={.15}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { ic: Ico.mail, l: "Email", v: "upenderchaudharydh23@gmail.com", h: "mailto:upenderchaudharydh23@gmail.com" },
              { ic: Ico.phone, l: "Phone", v: "+91 95289 xxxxx", h: "tel:+91 9528974067" },
              { ic: Ico.gh,   l: "GitHub", v: "github.com/chaudhary-223", h: "https://github.com/chaudhary-223" },
              { ic: Ico.li,   l: "LinkedIn", v: "http://www.linkedin.com/in/upendar-chaudhary", h: "http://www.linkedin.com/in/upendar-chaudhary" },
            ].map(({ ic, l, v, h }) => (
              <a key={l} href={h} target="_blank" rel="noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 20px", border: `1px solid ${T.border}`, borderRadius: 14, background: T.bg1, textDecoration: "none", color: T.text, transition: "border-color .25s, transform .25s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = T.accent; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <span style={{ color: T.accent, display: "flex" }}>{ic}</span>
                <div>
                  <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: 10.5, color: T.muted, letterSpacing: ".06em", textTransform: "uppercase", margin: "0 0 3px" }}>{l}</p>
                  <p style={{ fontSize: 13.5, fontWeight: 500, margin: 0 }}>{v}</p>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={.25}>
          <form onSubmit={submitForm} style={{ border: `1px solid ${T.border}`, borderRadius: 20, padding: "30px", background: T.bg1, display: "flex", flexDirection: "column", gap: 16 }}>
            {sent && <div style={{ background: "rgba(74,222,128,.1)", border: "1px solid rgba(74,222,128,.3)", borderRadius: 10, padding: "12px 16px", fontSize: 13, color: "#4ade80" }}>✓ Sent! I'll reply shortly.</div>}
            {[{ id: "name", t: "text", label: "Name", ph: "Your name" }, { id: "email", t: "email", label: "Email", ph: "your@email.com" }].map(({ id, t, label, ph }) => (
              <FormField key={id} id={id} type={t} label={label} placeholder={ph} value={form[id === "email" ? "email" : id]} onChange={v => setForm(f => ({ ...f, [id]: v }))} T={T} />
            ))}
            <div>
              <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: T.muted, letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 8 }}>Message</p>
              <textarea rows={4} required value={form.msg} onChange={e => setForm(f => ({ ...f, msg: e.target.value }))} placeholder="What's on your mind?"
                style={{ width: "100%", boxSizing: "border-box", background: T.bg2, border: `1px solid ${T.border}`, borderRadius: 10, padding: "10px 14px", fontSize: 14, color: T.text, outline: "none", resize: "vertical", fontFamily: "inherit", transition: "border-color .2s" }}
                onFocus={e => e.target.style.borderColor = T.accent}
                onBlur={e => e.target.style.borderColor = T.border}
              />
            </div>
            <button type="submit" style={{ background: T.accent, color: dark ? "#080810" : "#fff", border: "none", borderRadius: 12, padding: "13px 24px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "'Syne', sans-serif", letterSpacing: ".01em", transition: "opacity .2s, transform .2s, box-shadow .2s", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
              onMouseEnter={e => { e.currentTarget.style.opacity = ".88"; e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = `0 8px 28px ${T.accentG}`; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >Send Message {Ico.arr}</button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
