// src/app/page.tsx
"use client";
import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import Typed from "@/components/Typed";

export default function Home() {
  return (
    <Box sx={{ minHeight: "100vh", background: "#000", color: "#fff", py: 10 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", py: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Hi, I'm Avik — Frontend Developer</Typography>
          <Typed />
          <Typography sx={{ color: "rgba(255,255,255,0.7)", mt: 2 }}>Crafting elegant solutions & beautiful UIs.</Typography>

          <Box sx={{ mt: 4, display: "flex", gap: 2, justifyContent: "center" }}>
            <Button variant="contained" href="/projects">View Projects</Button>
            <Button variant="outlined" href="/contact">Contact</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
