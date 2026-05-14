"use client";

import BentoCard from "../BentoCard";
import { Activity, Clock, CodeXml, Zap } from "lucide-react";

export default function StatusPanel() {
  const stats = [
    { label: "Focus", value: "Backend/Scalability", icon: Zap, color: "text-neon-cyan" },
    { label: "B.Tech Grade", value: "7 CGPA", icon: CodeXml, color: "text-plasma-purple" },
    { label: "Experience", value: "ThriftX Project", icon: Clock, color: "text-electric-pink" },
    { label: "Core Node", value: "SkillArc Engine", icon: Activity, color: "text-holographic-blue" },
  ];

  return (
    <BentoCard colSpan="md:col-span-2" rowSpan="row-span-1">
      <div className="flex flex-col h-full justify-between">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
          <span className="text-xs font-mono text-white/40 uppercase tracking-widest">System Status: Active</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <div className="flex items-center gap-1.5 mb-1">
                <stat.icon size={14} className={stat.color} />
                <span className="text-[10px] text-white/40 font-mono uppercase">{stat.label}</span>
              </div>
              <span className="text-sm font-semibold text-white/90">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
