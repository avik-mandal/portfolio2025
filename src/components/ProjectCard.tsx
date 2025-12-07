// src/components/ProjectCard.tsx
import React from "react";

export type Project = {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  link?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card" aria-labelledby={`project-${project.id}`}>
      <h3 id={`project-${project.id}`}>{project.title}</h3>
      <p style={{ color: "#475569" }}>{project.description}</p>
      <div className="tags">
        {project.tags?.map((t) => <span key={t} className="tag">{t}</span>)}
      </div>
      {project.link && <a href={project.link} target="_blank" rel="noreferrer" style={{ display:"inline-block", marginTop: 12 }}>View →</a>}
    </article>
  );
}
