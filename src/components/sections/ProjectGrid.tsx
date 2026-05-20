"use client";

import BentoCard from "../BentoCard";
import { ExternalLink, CodeXml } from "lucide-react";

const projects = [
  {
    title: "Algo Trading Backtesting",
    desc: "US30 Strategy simulation system with profit/loss, win rate, and drawdown analysis.",
    tags: ["Node.js", "Express", "Vercel"],
    color: "from-blue-500/20 to-cyan-500/20",
    colSpan: "md:col-span-2",
  },
  {
    title: "SkillArc Showcase",
    desc: "Project upload platform with automated video walkthroughs using Playwright.",
    tags: ["React", "Playwright", "MongoDB"],
    color: "from-purple-500/20 to-pink-500/20",
    colSpan: "md:col-span-2",
  },
  {
    title: "ThriftX Marketplace",
    desc: "Full-stack Sustainable marketplace for buying and selling pre-owned items(Funded Startup Project).",
    tags: ["MongoDB", "JWT", "Express"],
    color: "from-emerald-500/20 to-teal-500/20",
    colSpan: "md:col-span-2",
  }
];

export default function ProjectGrid() {
  return (
    <>
      {projects.map((project) => (
        <BentoCard 
          key={project.title} 
          colSpan={project.colSpan}
          rowSpan="row-span-1"
          className="group/project"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover/project:opacity-100 transition-opacity duration-500`} />
          
          <div className="flex flex-col h-full justify-between relative z-10">
            <div>
              <h4 className="text-lg font-bold text-white group-hover/project:text-neon-cyan transition-colors">{project.title}</h4>
              <p className="text-sm text-white/50 line-clamp-2 mt-1">{project.desc}</p>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/40">{tag}</span>
                ))}
              </div>
              <div className="flex gap-2">
                <CodeXml size={16} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
                <ExternalLink size={16} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </BentoCard>
      ))}
    </>
  );
}
