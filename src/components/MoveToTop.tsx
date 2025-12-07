// src/components/MoveToTop.tsx
"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MoveToTop() {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}
