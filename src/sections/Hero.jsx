import { PrimaryBtn, GhostBtn, DownloadBtn } from "../components/Buttons";
import { Ico } from "../components/Icons";

export function Hero({ T, typed, scrollTo }) {
  return (
    <section id="hero" style={{ minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 clamp(20px,8vw,120px)", paddingTop: 100, paddingBottom: 80, position: "relative", zIndex: 2 }}>

      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${T.border} 1px, transparent 1px), linear-gradient(90deg, ${T.border} 1px, transparent 1px)`, backgroundSize: "80px 80px", maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)", pointerEvents: "none" }} />

      <div style={{ position: "absolute", top: "20%", right: "8%", width: 340, height: 340, borderRadius: "50%", background: `radial-gradient(circle, ${T.accentG} 0%, transparent 65%)`, pointerEvents: "none", animation: "orb 8s ease-in-out infinite" }} />

      <div style={{ maxWidth: 900, position: "relative" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${T.border}`, borderRadius: 100, padding: "5px 14px 5px 10px", fontSize: 12, color: T.muted, marginBottom: 44, background: T.bg1, animation: "fadeU .7s ease both", fontFamily: "'Geist Mono', monospace", letterSpacing: ".04em" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", flexShrink: 0, boxShadow: "0 0 8px #4ade80aa", animation: "pulse 2.5s infinite" }} />
          open to opportunities
        </div>

        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(52px,10vw,104px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: .95, margin: "0 0 28px", animation: "fadeU .7s .08s ease both" }}>
          Upendar<br />
          <span style={{ backgroundImage: T.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Chaudhary</span>
        </h1>

        <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: "clamp(14px,2.2vw,18px)", color: T.accent, marginBottom: 28, animation: "fadeU .7s .16s ease both", minHeight: 28, letterSpacing: ".02em" }}>
          {typed}<span style={{ animation: "blink 1s step-end infinite", color: T.accent }}>|</span>
        </div>

        <p style={{ fontSize: "clamp(16px,2.2vw,20px)", color: T.muted, lineHeight: 1.65, maxWidth: 560, margin: "0 0 52px", animation: "fadeU .7s .24s ease both", fontWeight: 300 }}>
          Building scalable, secure, and real-time web applications that handle the complexity so users don't have to.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", animation: "fadeU .7s .32s ease both" }}>
          <PrimaryBtn T={T} onClick={() => scrollTo("projects")}>View Projects {Ico.arr}</PrimaryBtn>
          <GhostBtn T={T} onClick={() => scrollTo("contact")}>Contact Me</GhostBtn>
          <DownloadBtn T={T} />
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 36, left: "clamp(20px,8vw,120px)", display: "flex", alignItems: "center", gap: 10, animation: "fadeU .7s .5s ease both" }}>
        <div style={{ width: 22, height: 36, border: `1.5px solid ${T.dim}`, borderRadius: 20, display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 6 }}>
          <div style={{ width: 3, height: 8, borderRadius: 4, background: T.accent, animation: "scrollDot 2s ease-in-out infinite" }} />
        </div>
        <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: T.dim, letterSpacing: ".08em" }}>SCROLL</span>
      </div>
    </section>
  );
}
