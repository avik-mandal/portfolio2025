// src/app/layout.tsx
import "./globals.css"; // create this (or use your existing globals.scss)
import Header from "../components/Header";
import Footer from "../components/Footer";
import MoveToTop from "../components/MoveToTop";

export const metadata = {
  title: "Avik Mandal — Portfolio",
  description: "Avik Mandal — Frontend Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ minHeight: "60vh" }}>{children}</main>
        <Footer />
        <MoveToTop />
      </body>
    </html>
  );
}
