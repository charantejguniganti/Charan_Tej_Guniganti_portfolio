"use client";

import { motion } from "framer-motion";
import BentoCard from "../BentoCard";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const educationData = [
  {
    institution: "Polaris School Of Technology",
    period: "2025 - Present",
    degree: "Integrated B.Tech in Computer Science (AI and ML)",
    score: "CGPA: 7",
    icon: GraduationCap,
    color: "text-neon-cyan"
  },
  {
    institution: "Physics Wallah Vidyapeeth",
    period: "2023 - 2025",
    degree: "Class XII (Intermediate)",
    score: "Percentage: 80%",
    icon: Award,
    color: "text-plasma-purple"
  },
  {
    institution: "Johnson Grammar School (I.C.S.E.)",
    period: "2022 - 2023",
    degree: "Class X (Matriculation)",
    score: "Percentage: 89%",
    icon: BookOpen,
    color: "text-electric-pink"
  }
];

export default function EducationPanel() {
  return (
    <BentoCard colSpan="md:col-span-4 lg:col-span-6" rowSpan="row-span-2" className="group/education overflow-hidden">
      <div className="flex flex-col h-full relative z-10">
        <div className="mb-6 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/5 border border-white/10">
            <GraduationCap className="text-neon-cyan" size={24} />
          </div>
          <h3 className="text-2xl font-bold text-white tracking-widest uppercase">Education</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">
          {educationData.map((edu, idx) => {
            const Icon = edu.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative p-6 rounded-2xl bg-black/40 border border-white/5 hover:border-white/20 transition-all group flex flex-col justify-between"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`${edu.color} opacity-70 group-hover:opacity-100 transition-opacity`} size={28} />
                    <span className="text-xs font-mono text-white/40 bg-white/5 px-2 py-1 rounded-full">{edu.period}</span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-neon-cyan transition-colors">{edu.institution}</h4>
                  <p className="text-sm text-white/60 mb-4">{edu.degree}</p>
                </div>
                
                <div className="inline-block px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-mono text-white/80 w-fit">
                  {edu.score}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-neon-cyan/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-plasma-purple/5 blur-3xl rounded-full pointer-events-none" />
    </BentoCard>
  );
}
