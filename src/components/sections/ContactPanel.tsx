"use client";

import { motion } from "framer-motion";
import BentoCard from "../BentoCard";
import { Send, MessageSquare, Briefcase, Mail, Code } from "lucide-react";

export default function ContactPanel() {
  return (
    <BentoCard colSpan="md:col-span-2" rowSpan="row-span-1" className="group/contact">
      <div className="flex flex-col h-full justify-between">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Transmit</h3>
          <p className="text-xs text-white/40">Open for collaborations and inquiries.</p>
        </div>
        
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            {[Briefcase, MessageSquare, Code, Mail].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -3, color: "#00f2ff" }}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 transition-colors"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
          
          <button className="w-full py-2 px-4 rounded-xl bg-neon-cyan/10 border border-neon-cyan/50 text-neon-cyan font-mono text-sm uppercase tracking-widest hover:bg-neon-cyan hover:text-black transition-all flex items-center justify-center gap-2 group">
            Transmit Message
            <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-neon-cyan/10 blur-3xl group-hover/contact:bg-neon-cyan/20 transition-all" />
    </BentoCard>
  );
}
