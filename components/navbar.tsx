"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center px-8 py-3 transition-all duration-300 rounded-full border border-white/20",
        scrolled
          ? "bg-white/70 backdrop-blur-xl border-white/40 shadow-lg"
          : "bg-white/50 backdrop-blur-md border-white/20"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hidden md:flex items-center gap-12 text-base font-medium text-slate-600">
        <Link href="#services" className="hover:text-neon-blue hover:scale-105 transition-all">
          Serviços
        </Link>
        <Link href="#method" className="hover:text-neon-blue hover:scale-105 transition-all">
          Método
        </Link>
        <Link href="#contact" className="hover:text-neon-blue hover:scale-105 transition-all">
          Contacto
        </Link>
      </div>

      <div className="md:hidden">
        {/* Mobile Menu Placeholder - keeping it simple as per request or just basic hamburger */}
        <button className="text-white p-2">
           <span className="sr-only">Menu</span>
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
    </motion.nav>
  );
};
