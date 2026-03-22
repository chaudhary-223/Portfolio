import { Ico } from "./Icons";

const btnReset = { background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" };

export function PrimaryBtn({ T, onClick, children }) {
  return (
    <button onClick={onClick} style={{ ...btnReset, background: T.accent, color: T.bg, borderRadius: 12, padding: "13px 26px", fontSize: 14, fontWeight: 700, fontFamily: "'Syne', sans-serif", display: "flex", alignItems: "center", gap: 8, transition: "transform .2s, box-shadow .2s, opacity .2s" }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 12px 32px ${T.accentG}`; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
    >{children}</button>
  );
}

export function GhostBtn({ T, onClick, children }) {
  return (
    <button onClick={onClick} style={{ ...btnReset, color: T.text, border: `1px solid ${T.border}`, borderRadius: 12, padding: "13px 26px", fontSize: 14, fontWeight: 600, transition: "border-color .2s, transform .2s, background .2s" }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = T.borderH; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.background = T.bg2; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "transparent"; }}
    >{children}</button>
  );
}

export function DownloadBtn({ T }) {
  return (
    <button onClick={() => { const a = document.createElement("a"); a.href = "/Upendar_Chaudhary_CV.pdf"; a.download = "Upendar_Chaudhary_CV.pdf"; a.click(); }}
      style={{ ...btnReset, color: T.text, border: `1px solid ${T.border}`, borderRadius: 12, padding: "13px 22px", fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 8, transition: "border-color .25s, transform .25s, box-shadow .25s, color .25s" }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = T.accent; e.currentTarget.style.color = T.accent; e.currentTarget.style.transform = "scale(1.03) translateY(-1px)"; e.currentTarget.style.boxShadow = `0 8px 24px ${T.accentG}`; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.text; e.currentTarget.style.transform = "scale(1) translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
    >{Ico.dl} Download CV</button>
  );
}
