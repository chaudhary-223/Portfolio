import { Reveal } from "../components/Reveal";
import { Label } from "../components/Label";
import { ProjectCard } from "../components/ProjectCard";
import { PROJECTS } from "../data/constants";

export function ProjectsSection({ T }) {
  return (
    <section id="projects" style={{ marginBottom: 140 }}>
      <Reveal><Label T={T}>Selected Work</Label></Reveal>
      <Reveal delay={.1}>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 56 }}>Things I've built</h2>
      </Reveal>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {PROJECTS.map((p, i) => (
          <Reveal key={p.idx} delay={i * .1}>
            <ProjectCard p={p} T={T} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
