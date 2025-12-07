// src/app/about/page.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Container, Box, Grid, Typography, Paper, Fade } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import SkillsShowcase from "../../components/SkillsShowcase"; // adjust if your path differs
// If you have a Typed or Lottie component, you can import them likewise:
// import Typed from "../../components/Typed";
// import Lottie from "lottie-react";
// import Coder from "/lottie/coder.json";

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AboutContainer = styled(Box)({
  minHeight: "100vh",
  padding: 0,
  background: "#000000",
  color: "#ffffff",
  overflow: "hidden",
  position: "relative",
});

const AnimatedBackground = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  pointerEvents: "none",
  overflow: "hidden",
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
    backgroundImage: `
      linear-gradient(rgba(0, 217, 255, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 217, 255, 0.05) 1px, transparent 1px)
    `,
    backgroundSize: "50px 50px",
    opacity: 0.18,
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

const AboutPaper = styled(Paper)({
  padding: "32px",
  background: "rgba(26, 26, 46, 0.4)",
  backdropFilter: "blur(20px)",
  borderRadius: "16px",
  border: "1px solid rgba(0, 217, 255, 0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    border: "1px solid rgba(0, 217, 255, 0.3)",
    boxShadow: "0 8px 32px rgba(0, 217, 255, 0.15)",
    transform: "translateY(-4px)",
  },
});

const GradientText = styled(Typography)({
  background: "linear-gradient(45deg, #00D9FF, #0066FF, #A855F7)",
  backgroundSize: "200% 200%",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <AboutContainer>
      <AnimatedBackground>
        <GlowBlob
          sx={{
            width: "500px",
            height: "500px",
            background: "#00D9FF",
            top: "10%",
            left: "5%",
          }}
        />
        <GlowBlob
          delay="1.5s"
          sx={{
            width: "400px",
            height: "400px",
            background: "#A855F7",
            top: "50%",
            right: "5%",
          }}
        />
        <GlowBlob
          delay="0.75s"
          sx={{
            width: "300px",
            height: "300px",
            background: "#0066FF",
            bottom: "10%",
            left: "50%",
          }}
        />
      </AnimatedBackground>

      <Box sx={{ position: "relative", zIndex: 1, py: 10 }}>
        <Container maxWidth="lg">
          <Fade in={isVisible} timeout={1000}>
            <Grid container spacing={4} alignItems="center">
              {/* Text Section */}
              <Grid item xs={12} md={7}>
                <AboutPaper elevation={3}>
                  <GradientText
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 3,
                      fontSize: { xs: "2rem", md: "2.5rem" },
                    }}
                  >
                    Get to <Box component="span" sx={{ fontWeight: 900 }}>know</Box> me!
                  </GradientText>

                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      color: "rgba(255, 255, 255, 0.85)",
                      lineHeight: 1.8,
                      fontSize: "1.05rem",
                    }}
                  >
                    Hi, my name is <Box component="strong" sx={{ color: "#00D9FF" }}>Avik Mandal</Box> and I am from West Bengal, India.
                    I'm a <Box component="strong" sx={{ color: "#A855F7" }}>Frontend web developer</Box> and a final year student pursuing <Box component="strong" sx={{ color: "#00D9FF" }}>M.C.A</Box>.
                  </Typography>

                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      color: "rgba(255, 255, 255, 0.75)",
                      lineHeight: 1.8,
                    }}
                  >
                    I love building user interfaces that are fast, accessible and delightful. I enjoy working with React, Next.js, MUI and modern JS tooling to ship polished products.
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    Outside of coding I enjoy streaming, gaming, and learning new UI/UX patterns.
                  </Typography>
                </AboutPaper>
              </Grid>

              {/* Visual / Skills Section */}
              <Grid item xs={12} md={5}>
                <Box sx={{ display: "grid", gap: 2 }}>
                  {/* If you have a Lottie animation, you can enable it here */}
                  {/* <Box sx={{ width: '100%', height: 260 }}>
                    <Lottie animationData={Coder} loop />
                  </Box> */}

                  {/* Skills showcase component (imported) */}
                  <Box>
                    <SkillsShowcase />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Fade>
        </Container>
      </Box>
    </AboutContainer>
  );
}
