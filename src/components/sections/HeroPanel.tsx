"use client";

import { motion } from "framer-motion";
import BentoCard from "../BentoCard";

export default function HeroPanel() {
  return (
    <BentoCard colSpan="md:col-span-4" rowSpan="row-span-2" className="flex flex-col justify-center overflow-hidden">
      <div className="relative z-10 flex flex-col gap-2">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="text-neon-cyan font-mono text-sm tracking-[0.3em] uppercase"
        >
          System Core Online
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-white"
        >
          CHARAN TEJ <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-plasma-purple to-electric-pink">GUNIGANTI</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-xl md:text-2xl text-white/60 font-light max-w-lg"
        >
          Full Stack Developer specialized in building scalable backend systems, algorithmic trading engines, and modern marketplaces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-wrap gap-3 mt-4"
        >
          {["Full Stack Developer", "Node.js Expert", "React.js", "MongoDB"].map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 text-xs font-mono border border-white/10 rounded-full bg-white/5 text-neon-cyan"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Decorative 3D-ish Elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute -right-20 -top-20 w-64 h-64 border-2 border-neon-cyan/20 rounded-full border-dashed"
      />
      <motion.div
        animate={{ 
          rotate: -360,
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 7, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute -right-10 -top-10 w-48 h-48 border border-plasma-purple/30 rounded-full"
      />
    </BentoCard>
  );
}
