// src/app/skills/page.tsx  (server component — NO "use client")
import React from "react";
import { Box } from "@mui/material";
import SkillsShowcase from "@/components/SkillsShowcase";
 // SkillsShowcase must be a client component

export const metadata = { title: "Skills — Avik Mandal" };

export default function SkillsPage() {
  return (
    <Box sx={{ minHeight: "100vh", py: 10, background: "#000", color: "#fff" }}>
      <SkillsShowcase />
    </Box>
  );
}
