"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 flex h-full w-full items-center justify-center overflow-hidden bg-white",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden opacity-30">
         <motion.div
            initial={{ opacity: 0.5, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute -left-[10%] top-[-10%] h-[120%] w-[120%] bg-[radial-gradient(circle_800px_at_50%_200px,#3b82f6,transparent)] opacity-40 blur-[100px]"
         />
         <motion.div
             initial={{ opacity: 0.5, x: 100 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
             className="absolute -right-[10%] top-[-10%] h-[120%] w-[120%] bg-[radial-gradient(circle_800px_at_50%_200px,#8b5cf6,transparent)] opacity-40 blur-[100px]"
         />
      </div>
    </div>
  );
};
