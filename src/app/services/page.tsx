// src/app/services/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import { Container, Box, Typography, Grid, Fade, Zoom } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";

// This page is adapted from your original Services.tsx. See source. :contentReference[oaicite:5]{index=5}

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
`;
const slideUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ServicesContainer = styled(Box)({
  minHeight: "100vh",
  background: "#000",
  color: "#fff",
  overflow: "hidden",
  position: "relative",
  py: 10,
});

const AnimatedBackground = styled(Box)({
  position: "fixed",
  inset: 0,
  pointerEvents: "none",
  zIndex: 0,
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: "linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #000000 100%)",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundImage: `linear-gradient(rgba(0, 217, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 255, 0.05) 1px, transparent 1px)`,
    backgroundSize: "50px 50px",
    opacity: 0.2,
  },
});

const GlowBlob = styled(Box)<{ delay?: string }>(({ delay = "0s" }) => ({
  position: "absolute",
  borderRadius: "50%",
  filter: "blur(60px)",
  opacity: 0.18,
  animation: `${pulseGlow} 3s ease-in-out infinite`,
  animationDelay: delay,
}));

const ServiceCard = styled(Box)({
  padding: 24,
  background: "rgba(26,26,46,0.4)",
  borderRadius: 16,
  border: "1px solid rgba(0,217,255,0.08)",
  textAlign: "center",
  transition: "all 0.3s ease",
});

const services = [
  { title: "Web Development", desc: "Custom web applications built with React, Next.js, Node & MongoDB.", gradient: "linear-gradient(135deg,#00D9FF,#0066FF)" },
  { title: "Responsive Design", desc: "Mobile-first UIs and polished layouts.", gradient: "linear-gradient(135deg,#A855F7,#7C3AED)" },
  { title: "UI/UX Design", desc: "Designing clear flows and delightful experiences.", gradient: "linear-gradient(135deg,#EC4899,#BE185D)" },
  { title: "Frontend Development", desc: "React, TypeScript, modern CSS and accessibility.", gradient: "linear-gradient(135deg,#10B981,#059669)" },
  { title: "Performance Optimization", desc: "Speed, Lighthouse improvements and CI/CD.", gradient: "linear-gradient(135deg,#F97316,#DC2626)" },
  { title: "Maintenance & Support", desc: "Ongoing support, monitoring and improvements.", gradient: "linear-gradient(135deg,#8B5CF6,#6366F1)" },
];

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  return (
    <ServicesContainer>
      <AnimatedBackground>
        <GlowBlob sx={{ width: 500, height: 500, background: "#00D9FF", top: "8%", left: "4%" }} />
        <GlowBlob delay="1.2s" sx={{ width: 380, height: 380, background: "#A855F7", top: "50%", right: "6%" }} />
        <GlowBlob delay="0.6s" sx={{ width: 300, height: 300, background: "#0066FF", bottom: "12%", left: "50%" }} />
      </AnimatedBackground>

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Container maxWidth="lg">
          <Fade in={isVisible} timeout={800}>
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 1, background: "linear-gradient(45deg,#00D9FF,#A855F7)", WebkitBackgroundClip: "text", color: "transparent" }}>
                My Services
              </Typography>
              <Box sx={{ width: 96, height: 4, mx: "auto", background: "linear-gradient(90deg,#00D9FF,#0066FF,#A855F7)", borderRadius: 1, mb: 2 }} />
              <Typography sx={{ color: "rgba(255,255,255,0.78)", maxWidth: 720, mx: "auto" }}>
                I provide end-to-end services from design to deployment — built to scale and optimized for performance.
              </Typography>
            </Box>
          </Fade>

          <Grid container spacing={4}>
            {services.map((s, i) => (
              <Grid item xs={12} sm={6} md={4} key={s.title}>
                <Box sx={{ animation: isVisible ? `${slideUp} 0.7s ease-out forwards` : "none", animationDelay: `${i * 0.12}s` }}>
                  <Zoom in={isVisible} timeout={600 + i * 80}>
                    <ServiceCard>
                      <Box sx={{ width: 80, height: 80, mx: "auto", borderRadius: "50%", mb: 2, background: s.gradient, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 18 }}>
                        {s.title[0]}
                      </Box>
                      <Typography variant="h6" sx={{ color: "#00D9FF", mb: 1 }}>{s.title}</Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.78)" }}>{s.desc}</Typography>
                    </ServiceCard>
                  </Zoom>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ServicesContainer>
  );
}
