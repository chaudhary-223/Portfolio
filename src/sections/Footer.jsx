export function Footer({ T }) {
  return (
    
    <footer style={{ borderTop: `1px solid ${T.border}`, padding: "16px clamp(20px,5vw,56px)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 12, position: "relative", zIndex: 2 }}>
      <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 10, fontWeight: 500, color: T.text, letterSpacing: "1px", border: `1px solid ${T.text}`, borderRadius: 3, padding: "2px 4px" }}>U<span style={{color: T.accent}}>C</span></span>
      <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 12, color: T.muted, textAlign: "center" }}>
        &copy; {new Date().getFullYear()} Upendar Chaudhary. All rights reserved.
      </span>
    </footer>
  );
}
