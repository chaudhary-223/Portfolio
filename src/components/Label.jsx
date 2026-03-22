export function Label({ T, children }) {
  return (
    <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, fontWeight: 500, color: T.accent, letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{ display: "inline-block", width: 20, height: 1.5, background: T.accent, borderRadius: 2 }} />
      {children}
    </p>
  );
}
