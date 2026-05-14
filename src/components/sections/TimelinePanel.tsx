"use client";

import { motion } from "framer-motion";
import BentoCard from "../BentoCard";

const experiences = [
  { year: "2024-28", role: "B.Tech CSE", company: "Polaris School", desc: "Grade: 7 CGPA" },
  { year: "2025-26", role: "Full Stack Dev", company: "ThriftX", desc: "Built marketplace with Node/Express." },
  { year: "2025", role: "Dev Intern", company: "SkillArc", desc: "Project automation tools." },
];

export default function TimelinePanel() {
  return (
    <BentoCard colSpan="md:col-span-4" rowSpan="row-span-1">
      <div className="flex flex-col md:flex-row h-full gap-6 items-center">
        <h3 className="text-xl font-bold text-white whitespace-nowrap">Exp_Log</h3>
        
        <div className="flex-1 flex justify-between items-start w-full md:px-4">
          {experiences.map((exp, i) => (
            <div key={exp.year} className="relative flex flex-col items-center flex-1">
              {/* Connector Line */}
              {i < experiences.length - 1 && (
                <div className="absolute top-2 left-[50%] w-full h-[1px] bg-white/10" />
              )}
              
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-4 h-4 rounded-full bg-neon-cyan/20 border border-neon-cyan glow-cyan mb-2 relative z-10"
              />
              
              <div className="text-center">
                <div className="text-[10px] font-mono text-neon-cyan">{exp.year}</div>
                <div className="text-xs font-bold text-white">{exp.role}</div>
                <div className="text-[10px] text-white/40">{exp.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
