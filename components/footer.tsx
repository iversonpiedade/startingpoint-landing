"use client";
import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Footer = () => {
    const [copied, setCopied] = useState(false);
    const email = "geral@startingpoint.ao";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-24 bg-white text-center px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white to-white pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                    Pronto para construir<br /> o extraordinário?
                </h2>
                
                <div className="flex justify-center">
                    <button
                        onClick={handleCopy}
                        className="group relative flex items-center gap-3 px-6 py-4 rounded-xl bg-white border border-slate-200 hover:border-neon-blue transition-all shadow-sm hover:shadow-md"
                    >
                        <span className="text-lg md:text-xl font-mono text-slate-600 group-hover:text-slate-900 transition-colors">
                            {email}
                        </span>
                        {copied ? (
                            <Check className="w-5 h-5 text-green-500" />
                        ) : (
                            <Copy className="w-5 h-5 text-slate-400 group-hover:text-neon-blue transition-colors" />
                        )}

                        <AnimatePresence>
                            {copied && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-xs rounded-full whitespace-nowrap backdrop-blur-md"
                                >
                                    Email copiado!
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </div>

            <footer className="relative z-10 mt-24 pt-8 border-t border-slate-200 text-center text-slate-500 text-sm">
                <p>© 2024 Starting Point Technology Solutions. Luanda, Angola.</p>
            </footer>
        </section>
    );
};
