import { useState, useCallback } from "react";
import "./App.css";

// Hooks
import { useMouse } from "./hooks/useMouse";
import { useScrollY } from "./hooks/useScrollY";
import { useTypewriter } from "./hooks/useTypewriter";

// Data
import { TYPEWORDS } from "./data/constants";

import { Navbar } from "./sections/Navbar";
import { CursorTrail } from "./components/CursorTrail";
import { Hero } from "./sections/Hero";
import { StatsBar } from "./sections/StatsBar";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { ProjectsSection } from "./sections/ProjectsSection";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);
  
  const mouse = useMouse();
  const scrollY = useScrollY();
  const typed = useTypewriter(TYPEWORDS, 75, 2000);

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    
    // Web3Forms Integration
    const formData = new FormData();
    // ⚠️ CRITICAL: Replace "YOUR-ACCESS-KEY" with the key sent to your email from web3forms.com
    formData.append("access_key", "6e934ce0-d119-4afe-aa48-451bb7c07d06"); 
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.msg);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setSent(true);
        setForm({ name: "", email: "", msg: "" });
        setTimeout(() => setSent(false), 4000);
      } else {
        alert("Oops! Something went wrong.");
      }
    } catch (error) {
      alert("Oops! Network error. Please try again.");
    }
  };

  /* theme tokens */
  const T = dark ? {
    bg:      "#080810",
    bg1:     "#0d0d18",
    bg2:     "#111120",
    bg3:     "#161628",
    border:  "rgba(255,255,255,0.06)",
    borderH: "rgba(255,255,255,0.14)",
    text:    "#eeeef5",
    muted:   "#64648a",
    dim:     "#3a3a58",
    accent:  "#22d3ee",
    accentD: "#0891b2",
    accentG: "rgba(34,211,238,0.12)",
    accentS: "rgba(34,211,238,0.06)",
    grad:    "linear-gradient(135deg, #22d3ee 0%, #818cf8 100%)",
    noise:   "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
  } : {
    bg:      "#f8f8fc",
    bg1:     "#f2f2f8",
    bg2:     "#ebebf4",
    bg3:     "#e4e4ef",
    border:  "rgba(0,0,0,0.07)",
    borderH: "rgba(0,0,0,0.16)",
    text:    "#0c0c1e",
    muted:   "#7070a0",
    dim:     "#b0b0d0",
    accent:  "#0891b2",
    accentD: "#0e7490",
    accentG: "rgba(8,145,178,0.10)",
    accentS: "rgba(8,145,178,0.05)",
    grad:    "linear-gradient(135deg, #0891b2 0%, #6366f1 100%)",
    noise:   "none",
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Geist+Mono:wght@300;400;500&family=Instrument+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

      <div id="root-wrap" style={{ background: T.bg, color: T.text, fontFamily: "'Instrument Sans', system-ui, sans-serif", minHeight: "100vh", transition: "background .5s, color .5s", position: "relative" }}>

        {/* Glowing Cursor Trail */}
        <CursorTrail color={T.accent} />

        <div style={{ position: "fixed", inset: 0, backgroundImage: T.noise, pointerEvents: "none", zIndex: 1, opacity: dark ? 1 : 0 }} />

        <Navbar T={T} dark={dark} setDark={setDark} menu={menu} setMenu={setMenu} scrollY={scrollY} scrollTo={scrollTo} />
        
        <Hero T={T} typed={typed} scrollTo={scrollTo} />

        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 clamp(20px,5vw,56px)", position: "relative", zIndex: 2 }}>
          <StatsBar T={T} />
          <About T={T} />
          <Skills T={T} />
          <ProjectsSection T={T} />
          <Experience T={T} />
          <Contact T={T} form={form} setForm={setForm} sent={sent} submitForm={submitForm} dark={dark} />
        </div>

        <Footer T={T} />
      </div>
    </>
  );
}
