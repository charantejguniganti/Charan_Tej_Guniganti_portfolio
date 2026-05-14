"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export default function BentoGrid({ children, className = "" }: BentoGridProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, staggerChildren: 0.1 }}
      className={`grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 auto-rows-[180px] gap-4 max-w-7xl mx-auto p-4 ${className}`}
    >
      {children}
    </motion.div>
  );
}
