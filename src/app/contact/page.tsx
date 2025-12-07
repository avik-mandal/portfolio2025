// src/app/contact/page.tsx
"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser"; // or @emailjs/browser
import { Container, Box, Typography, TextField, Button, Grid, Snackbar, Alert } from "@mui/material";
import { styled } from "@mui/material/styles";
import { emailjsConfig } from "@/config/emailjs.config";
 // create this file with keys or update path

const ContactContainer = styled(Box)({
  minHeight: "100vh",
  background: "#000",
  color: "#fff",
  position: "relative",
  py: 10,
});

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [openSnack, setOpenSnack] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setOpenSnack(null);

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setOpenSnack({ type: "error", text: "Please fill all fields." });
      return;
    }
    if (!validateEmail(formData.email)) {
      setOpenSnack({ type: "error", text: "Invalid email address." });
      return;
    }

    // Fallback if no EmailJS configured
    if (!emailjsConfig || emailjsConfig.publicKey === "YOUR_PUBLIC_KEY") {
      const mailto = `mailto:avikmandal2022@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      window.location.href = mailto;
      setOpenSnack({ type: "success", text: "Opening mail client..." });
      setFormData({ name: "", email: "", subject: "", message: "" });
      return;
    }

    setLoading(true);
    try {
      emailjs.init(emailjsConfig.publicKey);
      const result = await emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });
      setOpenSnack({ type: "success", text: "Message sent — thank you!" });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setOpenSnack({ type: "error", text: "Failed to send — try mailto or check EmailJS config." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactContainer>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, background: "linear-gradient(45deg,#00D9FF,#A855F7)", WebkitBackgroundClip: "text", color: "transparent" }}>
            Contact
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.78)" }}>Have a project? Let's talk.</Typography>
        </Box>

        <Box component="form" ref={formRef} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} InputProps={{ sx: { background: "rgba(255,255,255,0.02)" } }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Email" name="email" value={formData.email} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Subject" name="subject" value={formData.subject} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Message" name="message" value={formData.message} onChange={handleChange} multiline rows={6} />
            </Grid>

            <Grid item xs={12} sx={{ textAlign: "center", mt: 1 }}>
              <Button variant="contained" type="submit" disabled={loading}>{loading ? "Sending..." : "Send Message"}</Button>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Snackbar open={!!openSnack} autoHideDuration={5000} onClose={() => setOpenSnack(null)} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
        {openSnack && <Alert severity={openSnack.type === "success" ? "success" : "error"} onClose={() => setOpenSnack(null)}>{openSnack.text}</Alert>}
      </Snackbar>
    </ContactContainer>
  );
}
