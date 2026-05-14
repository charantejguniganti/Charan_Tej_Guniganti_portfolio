"use client";

import { ReactNode, useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  colSpan?: string;
  rowSpan?: string;
  disable3D?: boolean;
}

export default function BentoCard({ 
  children, 
  className = "", 
  colSpan = "md:col-span-2", 
  rowSpan = "row-span-1",
  disable3D = false
}: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Randomize animation timings on client to avoid SSR hydration mismatch
  const [animConfig, setAnimConfig] = useState({ delay: 0, durationY: 5, durationX: 7 });

  useEffect(() => {
    setAnimConfig({
      delay: Math.random() * 2,
      durationY: 4 + Math.random() * 3,
      durationX: 6 + Math.random() * 3
    });
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (disable3D) return;
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = event.clientX - rect.left;
    const mouseYPos = event.clientY - rect.top;

    x.set(mouseXPos / width - 0.5);
    y.set(mouseYPos / height - 0.5);
  };

  const handleMouseLeave = () => {
    if (disable3D) return;
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02, zIndex: 50 }}
      viewport={{ once: true }}
      animate={{
        y: [0, -15, 0],
        x: [0, 5, -5, 0],
      }}
      transition={{
        y: {
          duration: animConfig.durationY,
          delay: animConfig.delay,
          repeat: Infinity,
          ease: "easeInOut",
        },
        x: {
          duration: animConfig.durationX,
          delay: animConfig.delay,
          repeat: Infinity,
          ease: "easeInOut",
        },
        scale: { duration: 0.3 },
        zIndex: { duration: 0 },
      }}
      style={{
        rotateX: isHovered && !disable3D ? rotateX : 0,
        rotateY: isHovered && !disable3D ? rotateY : 0,
        transformStyle: disable3D ? "flat" : "preserve-3d",
      }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl transition-colors duration-500 hover:border-neon-cyan/50 hover:shadow-[0_0_40px_-10px_rgba(0,242,255,0.4)]",
        colSpan,
        rowSpan,
        className
      )}
    >
      {/* Animated Border Gradient */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,var(--color-neon-cyan)_360deg)] opacity-20" />
      </div>

      {/* Cursor Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([xVal, yVal]) => `
              radial-gradient(
                800px circle at ${(xVal as number + 0.5) * 100}% ${(yVal as number + 0.5) * 100}%,
                rgba(0, 242, 255, 0.25),
                rgba(157, 0, 255, 0.1),
                transparent 50%
              )
            `
          ),
        }}
      />

      {/* Holographic Overlays */}
      <div className="pointer-events-none absolute inset-0 scanlines opacity-20 group-hover:opacity-40 transition-opacity" />
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
      
      <div className="relative h-full w-full p-6" style={{ transform: "translateZ(60px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
