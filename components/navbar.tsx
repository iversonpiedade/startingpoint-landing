"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-600 p-2 hover:bg-slate-100 rounded-full transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-4 p-4 bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl rounded-2xl flex flex-col gap-4 text-center md:hidden"
          >
            <Link 
              href="#services" 
              onClick={() => setIsOpen(false)}
              className="py-2 text-slate-600 font-medium hover:text-blue-500 hover:bg-slate-50 rounded-lg transition-all"
            >
              Serviços
            </Link>
            <Link 
              href="#method" 
              onClick={() => setIsOpen(false)}
              className="py-2 text-slate-600 font-medium hover:text-blue-500 hover:bg-slate-50 rounded-lg transition-all"
            >
              Método
            </Link>
            <Link 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="py-2 text-slate-600 font-medium hover:text-blue-500 hover:bg-slate-50 rounded-lg transition-all"
            >
              Contacto
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
