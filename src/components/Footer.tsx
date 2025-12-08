// src/components/Footer.tsx
"use client";
import React from "react";
import Link from "next/link";
import { Box, Container, Typography, IconButton, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const FooterContainer = styled(Box)({
  background: "linear-gradient(180deg, #000 0%, #0a0a0a 100%)",
  borderTop: "1px solid rgba(0, 217, 255, 0.1)",
  color: "#fff",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background: "linear-gradient(90deg, transparent, #00D9FF, transparent)",
  },
});

const SocialButton = styled(IconButton)({
  background: "rgba(0, 217, 255, 0.1)",
  border: "1px solid rgba(0, 217, 255, 0.2)",
  color: "#00D9FF",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "rgba(0, 217, 255, 0.2)",
    borderColor: "#00D9FF",
    transform: "translateY(-3px)",
    boxShadow: "0 10px 20px rgba(0, 217, 255, 0.3)",
  },
});

const FooterLink = styled(Link)({
  color: "rgba(255, 255, 255, 0.7)",
  textDecoration: "none",
  fontSize: "0.9rem",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "#00D9FF",
  },
});

const ScrollToTopButton = styled(IconButton)({
  position: "fixed",
  bottom: 30,
  right: 30,
  background: "linear-gradient(135deg, #00D9FF 0%, #0066FF 100%)",
  color: "#000",
  width: 50,
  height: 50,
  zIndex: 1000,
  boxShadow: "0 10px 30px rgba(0, 217, 255, 0.4)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 15px 40px rgba(0, 217, 255, 0.6)",
  },
});

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/avik-mandal", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/avik-mandal-a901b7294", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:avikmandal2022@gmail.com", label: "Email" },
  ];

  return (
    <>
      <FooterContainer>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          {/* Main Footer Content */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "2fr 1fr 1fr" },
              gap: 6,
              mb: 6,
            }}
          >
            {/* Brand Section */}
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    background: "linear-gradient(135deg, #00D9FF 0%, #0066FF 100%)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      color: "#000",
                      fontSize: "1.2rem",
                    }}
                  >
                    AM
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    background: "linear-gradient(135deg, #00D9FF 0%, #0066FF 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Avik Mandal
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  lineHeight: 1.8,
                  mb: 3,
                  maxWidth: 400,
                }}
              >
                Frontend Developer & MERN Stack Enthusiast passionate about
                creating beautiful, functional, and user-friendly digital
                experiences.
              </Typography>
              <Box sx={{ display: "flex", gap: 1.5 }}>
                {socialLinks.map((social) => (
                  <SocialButton
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    size="small"
                  >
                    {social.icon}
                  </SocialButton>
                ))}
              </Box>
            </Box>

            {/* Quick Links */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: "#fff",
                }}
              >
                Quick Links
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {footerLinks.map((link) => (
                  <FooterLink key={link.href} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </Box>
            </Box>

            {/* Contact Info */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: "#fff",
                }}
              >
                Get in Touch
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  Email:
                </Typography>
                <Typography
                  component="a"
                  href="mailto:avikmandal2022@gmail.com"
                  sx={{
                    color: "#00D9FF",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  avikmandal2022@gmail.com
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255, 255, 255, 0.7)", mt: 2 }}
                >
                  Location:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  Siliguri, West Bengal, India
                </Typography>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)", mb: 4 }} />

          {/* Bottom Bar */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "rgba(255, 255, 255, 0.6)", textAlign: "center" }}
            >
              © {new Date().getFullYear()} Avik Mandal. All rights reserved.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "rgba(255, 255, 255, 0.6)",
              }}
            >
              <Typography variant="body2">Made with</Typography>
              <Heart size={16} fill="#00D9FF" color="#00D9FF" />
              <Typography variant="body2">and lots of coffee</Typography>
            </Box>
          </Box>
        </Container>
      </FooterContainer>

      {/* Scroll to Top Button */}
      <ScrollToTopButton onClick={scrollToTop} aria-label="Scroll to top">
        <ArrowUp size={24} />
      </ScrollToTopButton>
    </>
  );
}