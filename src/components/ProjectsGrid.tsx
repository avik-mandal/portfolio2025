// src/components/ProjectsGrid.tsx
import React from "react";
import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
  { id: "1", title: "Expense Tracker", description: "Next.js + Postgres (backend separate). Mobile friendly UI, tags, CSV export.", tags: ["Next.js", "TypeScript", "Postgres"], link: "#" },
  { id: "2", title: "Portfolio Website", description: "This site — responsive layout, animations, and SEO friendly.", tags: ["Next.js", "Sass", "SEO"] },
  { id: "3", title: "Streaming Overlay", description: "Custom OBS overlays and widget UI for live streaming.", tags: ["HTML/CSS", "Canvas", "JS"], link: "#" },
];

export default function ProjectsGrid() {
  return (
    <div id="projects" className="projects-grid" aria-live="polite">
      {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
    </div>
  );
}
