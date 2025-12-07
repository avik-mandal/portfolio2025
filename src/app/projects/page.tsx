// src/app/projects/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import { Container, Box, Grid, Typography } from "@mui/material";
import ProjectBox from "../../components/ProjectBox";
// If you have images in /public/images put them as "/images/Name.png"
const PRACTOImg = "/projects/WigglesImage.png"; 


export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);
  const projects = [
    { photo: PRACTOImg, name: "PRACTO", github: "https://github.com/avik-mandal/PRACTO-FRONTEND", website: "https://practoexam.vercel.app/", desc: "Procto Exam app." },
   
  ];

  return (
    <Box sx={{ minHeight: "100vh", py: 10, background: "#000" }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ color: "transparent", background: "linear-gradient(45deg,#00D9FF,#0066FF,#A855F7)", WebkitBackgroundClip: "text", fontWeight: 800, mb: 3 }}>
          My Projects
        </Typography>

        <Grid container spacing={3}>
          {projects.map((p) => (
            <Grid item xs={12} sm={6} md={4} key={p.name}>
              <ProjectBox photo={p.photo} name={p.name} github={p.github} website={p.website} desc={p.desc} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
