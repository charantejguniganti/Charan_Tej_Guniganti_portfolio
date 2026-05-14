import Scene from "@/components/Scene";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import BentoGrid from "@/components/BentoGrid";
import HeroPanel from "@/components/sections/HeroPanel";
import StatusPanel from "@/components/sections/StatusPanel";
import TechStackPanel from "@/components/sections/TechStackPanel";
import ProjectGrid from "@/components/sections/ProjectGrid";
import TerminalPanel from "@/components/sections/TerminalPanel";
import DeveloperStatsPanel from "@/components/sections/DeveloperStatsPanel";
import EducationPanel from "@/components/sections/EducationPanel";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Global Background */}
      <Scene />
      
      {/* UI Overlays */}
      <LoadingScreen />
      <CustomCursor />
      
      {/* Global Noise & Scanlines Overlay */}
      <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="fixed inset-0 z-[9998] pointer-events-none scanlines opacity-[0.05]" />
      
      {/* Main Content */}
      <div className="relative z-10 pt-20 pb-32">
        <div className="container mx-auto px-4">
          <BentoGrid>
            {/* Row 1 & 2 Left */}
            <HeroPanel />
            
            {/* Row 1 Right */}
            <StatusPanel />
            
            {/* Row 2 Right */}
            <TechStackPanel />
            
            {/* Row 3 */}
            <TerminalPanel />
            <DeveloperStatsPanel />
            <ProjectGrid />
            
            {/* Row 4 */}
            <EducationPanel />
          </BentoGrid>
        </div>
      </div>

      {/* Footer Decoration */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-plasma-purple to-electric-pink opacity-20" />
    </main>
  );
}
