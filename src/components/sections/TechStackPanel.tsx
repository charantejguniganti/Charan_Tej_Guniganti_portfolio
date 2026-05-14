"use client";

import { useEffect, useState } from "react";
import BentoCard from "../BentoCard";
import { 
  Database, Zap, Leaf, FileCode2, Code, Terminal, Server, Globe, Cpu, Blocks,
  FileType, TerminalSquare, Box, Flame, Network
} from "lucide-react";

const technologies = [
  { name: "React.js", icon: Cpu, color: "text-cyan-400" },
  { name: "Next.js", icon: Globe, color: "text-white" },
  { name: "Node.js", icon: Server, color: "text-green-500" },
  { name: "Express.js", icon: Network, color: "text-gray-300" },
  { name: "MongoDB", icon: Leaf, color: "text-green-600" },
  { name: "Supabase", icon: Zap, color: "text-green-400" },
  { name: "PostgreSQL", icon: Database, color: "text-blue-400" },
  { name: "JavaScript", icon: FileCode2, color: "text-yellow-400" },
  { name: "TypeScript", icon: FileType, color: "text-blue-500" },
  { name: "Python", icon: TerminalSquare, color: "text-yellow-300" },
  { name: "Tailwind CSS", icon: Blocks, color: "text-cyan-300" },
  { name: "Git & GitHub", icon: Terminal, color: "text-white" },
  { name: "REST APIs", icon: Network, color: "text-orange-400" },
  { name: "Docker", icon: Box, color: "text-blue-500" },
  { name: "Firebase", icon: Flame, color: "text-yellow-500" },
];

export default function TechStackPanel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <BentoCard disable3D colSpan="md:col-span-2" rowSpan="row-span-2" className="flex flex-col overflow-hidden">
        <h3 className="text-xl font-bold text-white mb-4">Tech Arsenal</h3>
      </BentoCard>
    );
  }

  // Duplicate for seamless infinite scrolling
  const marqueeTechs = [...technologies, ...technologies];

  return (
    <BentoCard disable3D colSpan="md:col-span-2" rowSpan="row-span-2" className="flex flex-col overflow-hidden bg-[#0a0a14] group/tech border-neon-cyan/20">
      <div className="flex items-center justify-between p-4 border-b border-neon-cyan/10 bg-black/40 relative z-20 shadow-md">
        <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
          Tech Arsenal
        </h3>
        <span className="text-[10px] font-mono text-neon-cyan uppercase tracking-widest">Active_Scan</span>
      </div>
      
      <div 
        className="relative flex-1 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)"
        }}
      >
        <div className="animate-marquee-vertical flex flex-col gap-4 py-4 px-6 hover:[animation-play-state:paused]">
          {marqueeTechs.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-black/50 backdrop-blur-md transition-all duration-300 hover:border-neon-cyan/50 hover:bg-neon-cyan/5 hover:shadow-[0_0_15px_-3px_rgba(0,242,255,0.4)] group/card"
              >
                <Icon className={`${tech.color} group-hover/card:scale-110 transition-transform`} size={20} />
                <span className="text-sm font-bold text-white/90 tracking-wide">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </BentoCard>
  );
}
