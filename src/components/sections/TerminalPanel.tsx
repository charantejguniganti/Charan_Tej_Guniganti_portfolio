"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BentoCard from "../BentoCard";

const commands = [
  "Initializing neural interface...",
  "Loading Charan_Tej_OS v2.0",
  "Connecting to ThriftX DB...",
  "Running SkillArc Automation...",
  "Backtesting Strategy: US30...",
  "System Status: 7 CGPA Optimal",
  "Uplink established: Vercel Cloud"
];

export default function TerminalPanel() {
  const [logs, setLogs] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < commands.length) {
      const timer = setTimeout(() => {
        setLogs(prev => [...prev, commands[index]].slice(-5));
        setIndex(prev => prev + 1);
      }, 1500 + Math.random() * 2000);
      return () => clearTimeout(timer);
    } else {
        setTimeout(() => {
            setLogs([]);
            setIndex(0);
        }, 5000);
    }
  }, [index]);

  return (
    <BentoCard colSpan="md:col-span-3" rowSpan="row-span-1" className="font-mono text-xs overflow-hidden bg-black/80">
      <div className="flex items-center gap-2 mb-2 border-b border-white/5 pb-1">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500/50" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
          <div className="w-2 h-2 rounded-full bg-green-500/50" />
        </div>
        <span className="text-[10px] text-white/20 uppercase tracking-tighter">AI_TERMINAL_V4</span>
      </div>
      
      <div className="space-y-1">
        {logs.map((log, i) => (
          <motion.div
            key={log + i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-2"
          >
            <span className="text-neon-cyan opacity-50">{">"}</span>
            <span className={i === logs.length - 1 ? "text-neon-cyan" : "text-white/60"}>
              {log}
              {i === logs.length - 1 && (
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-1.5 h-3 bg-neon-cyan ml-1 align-middle"
                />
              )}
            </span>
          </motion.div>
        ))}
        {logs.length === 0 && (
            <div className="text-white/20 animate-pulse italic">Awaiting input...</div>
        )}
      </div>
      
      <div className="absolute inset-0 pointer-events-none scanlines opacity-10" />
    </BentoCard>
  );
}
