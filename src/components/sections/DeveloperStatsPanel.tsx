"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BentoCard from "../BentoCard";
import { Activity, GitMerge, LayoutGrid, Layers, Globe } from "lucide-react";

const GithubIcon = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const statsData = [
  { label: "ORGS CONTRIBUTED", value: "7", icon: GithubIcon },
  { label: "PRs RAISED", value: "20+", icon: GitMerge },
  { label: "PROJECTS BUILT", value: "5", icon: LayoutGrid },
  { label: "OPEN SOURCE", value: "ACTIVE", icon: Globe },
  { label: "STACKS MASTERED", value: "15", icon: Layers },
];

export default function DeveloperStatsPanel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <BentoCard disable3D colSpan="md:col-span-2 lg:col-span-1" rowSpan="row-span-1" className="flex flex-col overflow-hidden">
        <h3 className="text-xl font-bold text-white mb-4">Live Stats</h3>
      </BentoCard>
    );
  }

  // Duplicate for seamless infinite scrolling
  const marqueeStats = [...statsData, ...statsData];

  return (
    <BentoCard disable3D colSpan="md:col-span-2 lg:col-span-1" rowSpan="row-span-1" className="flex flex-col overflow-hidden bg-[#0a0a14] group/stats border-neon-cyan/20">
      <div className="flex items-center justify-between p-4 border-b border-neon-cyan/10 bg-black/40 relative z-20 shadow-md">
        <div className="flex items-center gap-2">
          <Activity size={14} className="text-neon-cyan" />
          <h3 className="text-lg font-bold text-white tracking-tight">Live Stats</h3>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan shadow-[0_0_5px_#00f2ff] animate-pulse" />
        </div>
      </div>
      
      <div 
        className="relative flex-1 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)"
        }}
      >
        <div className="animate-marquee-vertical flex flex-col gap-4 py-4 px-6 hover:[animation-play-state:paused]">
          {marqueeStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-black/50 backdrop-blur-md transition-all duration-300 hover:border-neon-cyan/50 hover:bg-neon-cyan/5 hover:shadow-[0_0_15px_-3px_rgba(0,242,255,0.4)] group/card"
              >
                <div className="flex items-center gap-3">
                  <Icon className="text-neon-cyan group-hover/card:scale-110 transition-transform" size={16} />
                  <span className="text-[10px] font-bold text-white/90 tracking-wide">
                    {stat.label}
                  </span>
                </div>
                <span className={`text-sm font-bold ${stat.value === 'ACTIVE' ? 'text-neon-cyan bg-neon-cyan/10 px-2 py-0.5 rounded-sm' : 'text-white'}`}>
                  {stat.value}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </BentoCard>
  );
}
