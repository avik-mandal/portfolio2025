// src/components/Footer.tsx
import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 6, px: 3, background: "linear-gradient(135deg,#1a1a1a,#0a0a0a)", color: "#fff" }}>
      <Box sx={{ maxWidth: 1400, mx: "auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 3 }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>Avik Mandal</Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>Frontend Developer & MERN Stack Enthusiast.</Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
            <a href="https://github.com/avik-mandal" target="_blank" rel="noreferrer"><FaGithub style={{ color: "#fff" }} /></a>
            <a href="https://www.linkedin.com/in/avik-mandal-a901b7294" target="_blank" rel="noreferrer"><FaLinkedin style={{ color: "#fff" }} /></a>
            <a href="mailto:avikmandal2022@gmail.com"><GrMail style={{ color: "#fff" }} /></a>
          </Stack>
        </Box>

        <Box sx={{ alignSelf: "center" }}>
          <Typography variant="body2">© {new Date().getFullYear()} Avik Mandal. All rights reserved.</Typography>
        </Box>
      </Box>
    </Box>
  );
}
