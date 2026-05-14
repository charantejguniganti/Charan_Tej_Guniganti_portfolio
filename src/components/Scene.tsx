"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float, Grid } from "@react-three/drei";
import { useRef, useMemo, useEffect, useState } from "react";
import * as THREE from "three";
import { EffectComposer, Bloom, ChromaticAberration, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

const generatePoints = () => {
  const positions = new Float32Array(5000 * 3);
  for (let i = 0; i < 5000; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 100;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
  }
  return positions;
};

function StarField() {
  const ref = useRef<THREE.Points>(null);
  
  const sphere = useMemo(() => generatePoints(), []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f2ff"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function CyberCloud() {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * 0.05;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 2;
    }
  });

  return (
    <group ref={ref}>
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[10, 5, -10]}>
          <sphereGeometry args={[5, 32, 32]} />
          <meshPhongMaterial color="#9d00ff" transparent opacity={0.1} shininess={100} />
        </mesh>
        <mesh position={[-10, -5, -15]}>
          <sphereGeometry args={[7, 32, 32]} />
          <meshPhongMaterial color="#00f2ff" transparent opacity={0.05} shininess={100} />
        </mesh>
      </Float>
    </group>
  );
}

function HolographicGrid() {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={[0, -5, 0]}>
        <Grid
          infiniteGrid
          fadeDistance={50}
          fadeStrength={5}
          cellSize={1}
          sectionSize={5}
          sectionColor="#9d00ff"
          cellColor="#00f2ff"
        />
        {/* Glow under grid */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
          <planeGeometry args={[100, 100]} />
          <meshBasicMaterial color="#00f2ff" transparent opacity={0.02} />
        </mesh>
      </group>
    </Float>
  );
}

export default function Scene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="fixed inset-0 -z-10 bg-[#050816]" />;

  return (
    <div className="fixed inset-0 -z-10 bg-[#050816]">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f2ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#9d00ff" />
        
        <StarField />
        <CyberCloud />
        <HolographicGrid />
        
        <fog attach="fog" args={["#050816", 5, 20]} />

        <EffectComposer>
          <Bloom 
            intensity={1.5} 
            luminanceThreshold={0.1} 
            luminanceSmoothing={0.9} 
            blendFunction={BlendFunction.ADD} 
          />
          <ChromaticAberration 
            blendFunction={BlendFunction.NORMAL} 
            offset={new THREE.Vector2(0.001, 0.001)} 
          />
          <Noise opacity={0.05} />
        </EffectComposer>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050816]/50 to-[#050816] pointer-events-none" />
    </div>
  );
}
