"use client";
import React from "react";
import Link from "next/link";
import { Code, Github } from "lucide-react";

export default function Hero() {
  return (
    <div>
      <h1>Hi, I’m Avik — Frontend Developer</h1>
      <p>I build modern, accessible, and responsive user interfaces using React and Next.js.</p>

      <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
        {/* internal route — Link with no inner <a> */}
        <Link
          href="/projects"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: ".5rem .75rem", borderRadius: 8, textDecoration: "none" }}
          className="card"
        >
          <Code size={16} /> View projects
        </Link>

        {/* external link: still use <a> because Link is for internal navigation */}
        <a
          className="card"
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
        >
          <Github size={16} /> GitHub
        </a>
      </div>
    </div>
  );
}
