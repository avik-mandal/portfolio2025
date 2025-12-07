// src/components/Typed.tsx
"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import { Box } from "@mui/material";

export default function Typed() {
  return (
    <Box sx={{ fontSize: "1.5rem", fontWeight: 700, color: "#00D9FF" }}>
      <Typewriter
        options={{
          strings: ['Frontend Developer', 'Designer', 'Freelancer', 'MERN Stack Developer', 'Problem Solver'],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 20,
        }}
      />
    </Box>
  );
}
