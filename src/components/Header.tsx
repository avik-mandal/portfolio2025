// src/components/Header.tsx
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";
import DescriptionIcon from "@mui/icons-material/Description";
import EmailIcon from "@mui/icons-material/Email";
import BuildIcon from "@mui/icons-material/Build";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menu = [
    { text: "Home", path: "/" , icon: <HomeIcon />},
    { text: "About", path: "/about" , icon: <PersonIcon />},
    { text: "Skills", path: "/skills" , icon: <PsychologyIcon />},
    { text: "Projects", path: "/projects" , icon: <CodeIcon />},
    { text: "Services", path: "/services" , icon: <BuildIcon />},
    { text: "Resume", path: "/resume" , icon: <DescriptionIcon />},
    { text: "Contact", path: "/contact" , icon: <EmailIcon />},
  ];

  return (
    <AppBar position="sticky" sx={{ background: scrolled ? "rgba(10,10,10,.95)" : "transparent", boxShadow: "none", borderBottom: scrolled ? "1px solid rgba(0,217,255,.06)" : "none" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>AM</Typography>
          </Link>
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          {menu.map((m) => (
            <Link key={m.path} href={m.path} style={{ textDecoration: "none" }}>
              <Button color={pathname === m.path ? "primary" : "inherit"} sx={{ color: pathname === m.path ? "#00D9FF" : "#fff" }}>
                {m.text}
              </Button>
            </Link>
          ))}
        </Box>

        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton onClick={() => setMobileOpen(true)} color="inherit"><MenuIcon /></IconButton>
        </Box>
      </Toolbar>

      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box sx={{ width: 260, p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h6">Menu</Typography>
            <IconButton onClick={() => setMobileOpen(false)}><CloseIcon /></IconButton>
          </Box>
          <List>
            {menu.map((m) => (
              <ListItem key={m.path} button onClick={() => setMobileOpen(false)}>
                <ListItemIcon>{m.icon}</ListItemIcon>
                <Link href={m.path} style={{ textDecoration: "none", color: "inherit" }}>
                  <ListItemText primary={m.text} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
