// src/app/resume/page.tsx
import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";

export const metadata = { title: "Resume — Avik Mandal" };

export default function ResumePage() {
  const pdf = "/Resume.pdf"; // put your resume file in public/Resume.pdf
  return (
    <Box sx={{ minHeight: "100vh", py: 10, background: "#000", color: "#fff" }}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>Resume</Typography>
        <Typography sx={{ color: "rgba(255,255,255,0.78)", mb: 4 }}>Download or preview my resume.</Typography>
        <Button variant="contained" href={pdf} target="_blank" rel="noreferrer" sx={{ mr: 2 }}>Download PDF</Button>
        <Button variant="outlined" href="#preview">Preview</Button>

        <Box id="preview" sx={{ mt: 6 }}>
          <iframe src={pdf} width="100%" height="800px" style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8 }} title="Resume preview" />
        </Box>
      </Container>
    </Box>
  );
}
