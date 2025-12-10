"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { MoveRight } from "lucide-react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

export const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white antialiased group"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div>
        <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 opacity-10 blur-3xl" />
         <motion.div
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  650px circle at ${mouseX}px ${mouseY}px,
                  rgba(139, 92, 246, 0.1),
                  transparent 80%
                )
              `,
            }}
         />
      </div>

      <div className="z-10 flex flex-col items-center justify-center p-4 max-w-4xl mx-auto text-center space-y-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="mb-8"
        >
             <img src="/logo-full.png" alt="Starting Point" className="h-32 md:h-40 w-auto object-contain mx-auto" />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.1 }}
           className="px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-xs font-medium text-blue-600 backdrop-blur-sm shadow-sm"
        >
          Premier Venture Studio em Angola
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-500 text-center relative z-20"
        >
          Nós Construímos o<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-cyber-purple">
            Futuro da Tecnologia.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 max-w-2xl text-center leading-relaxed relative z-20"
        >
          A Starting Point faz parceria com visionários para arquitetar, desenhar e escalar software de classe mundial, de Luanda para o mundo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative z-20"
        >
          <ShimmerButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Iniciar um Projeto <MoveRight className="w-4 h-4" />
          </ShimmerButton>
        </motion.div>
      </div>
    </div>
  );
};
