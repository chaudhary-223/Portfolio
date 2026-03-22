import { Ico } from "../components/Icons";

export function Navbar({ T, dark, setDark, menu, setMenu, scrollY, scrollTo }) {
  const btnReset = { background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" };
  const navBg = scrollY > 50 ? (dark ? "rgba(8,8,16,0.88)" : "rgba(248,248,252,0.88)") : "transparent";

  return (
    <>
      <nav style={{
        position: "fixed", inset: "0 0 auto", zIndex: 200, height: 68,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 clamp(20px,5vw,56px)",
        background: navBg,
        backdropFilter: scrollY > 50 ? "blur(24px) saturate(180%)" : "none",
        borderBottom: scrollY > 50 ? `1px solid ${T.border}` : "none",
        transition: "background .35s, border-color .35s",
      }}>
        <button onClick={() => scrollTo("hero")} style={btnReset}>
          <span style={{ 
            fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, color: T.text, letterSpacing: "1px",
            border: `2px solid ${T.text}`, borderRadius: 6, padding: "3px 6px", 
            display: "inline-block"
          }}>
            U<span style={{color: T.accent}}>C</span>
          </span>
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }} className="desk-nav">
          {["About", "Skills", "Projects", "Experience", "Contact"].map(n => (
            <button key={n} onClick={() => scrollTo(n.toLowerCase())}
              style={{ ...btnReset, padding: "6px 14px", borderRadius: 8, fontSize: 13, fontWeight: 500, color: T.muted, transition: "color .2s, background .2s" }}
              onMouseEnter={e => { e.currentTarget.style.color = T.text; e.currentTarget.style.background = T.bg2; }}
              onMouseLeave={e => { e.currentTarget.style.color = T.muted; e.currentTarget.style.background = "transparent"; }}
            >{n}</button>
          ))}
          <div style={{ width: 1, height: 18, background: T.border, margin: "0 4px" }} />
          <button onClick={() => setDark(!dark)}
            style={{ ...btnReset, width: 36, height: 36, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${T.border}`, color: T.muted, transition: "border-color .2s, color .2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = T.accent; e.currentTarget.style.color = T.accent; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.muted; }}
          >{dark ? Ico.sun : Ico.moon}</button>
        </div>

        <button onClick={() => setMenu(!menu)} style={{ ...btnReset, display: "none", color: T.text }} className="mob-nav">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menu ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
          </svg>
        </button>
      </nav>

      <div style={{
        position: "fixed", top: 68, left: 0, right: 0, zIndex: 199,
        background: T.bg1, borderBottom: `1px solid ${T.border}`,
        padding: menu ? "20px clamp(20px,5vw,56px) 28px" : "0 clamp(20px,5vw,56px)",
        maxHeight: menu ? 400 : 0, overflow: "hidden",
        transition: "max-height .35s cubic-bezier(.4,0,.2,1), padding .35s",
        display: "flex", flexDirection: "column", gap: 4,
      }}>
        {["About", "Skills", "Projects", "Experience", "Contact"].map(n => (
          <button key={n} onClick={() => scrollTo(n.toLowerCase())}
            style={{ ...btnReset, padding: "10px 0", fontSize: 17, fontWeight: 500, color: T.text, textAlign: "left" }}>{n}</button>
        ))}
        <button onClick={() => { setDark(!dark); setMenu(false); }} style={{ ...btnReset, marginTop: 8, display: "flex", alignItems: "center", gap: 8, color: T.muted, fontSize: 14 }}>
          {dark ? Ico.sun : Ico.moon} {dark ? "Light mode" : "Dark mode"}
        </button>
      </div>
    </>
  );
}
