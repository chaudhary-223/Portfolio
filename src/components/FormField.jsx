export function FormField({ id, type, label, placeholder, value, onChange, T }) {
  return (
    <div>
      <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: T.muted, letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 8 }}>{label}</p>
      <input type={type} required value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        style={{ width: "100%", background: T.bg2, border: `1px solid ${T.border}`, borderRadius: 10, padding: "10px 14px", fontSize: 14, color: T.text, outline: "none", fontFamily: "inherit", transition: "border-color .2s" }}
        onFocus={e => e.target.style.borderColor = T.accent}
        onBlur={e => e.target.style.borderColor = T.border}
      />
    </div>
  );
}
