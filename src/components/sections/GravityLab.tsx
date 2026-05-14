"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";
import BentoCard from "../BentoCard";

export default function GravityLab() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint } = Matter;

    // Create engine
    const engine = Engine.create();
    engine.gravity.y = -0.1; // Anti-gravity!
    engineRef.current = engine;

    // Create renderer
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: sceneRef.current.clientWidth,
        height: sceneRef.current.clientHeight,
        wireframes: false,
        background: "transparent",
      },
    });

    // Create boundaries
    const width = sceneRef.current.clientWidth;
    const height = sceneRef.current.clientHeight;
    
    const ground = Bodies.rectangle(width / 2, height + 50, width, 100, { isStatic: true });
    const ceiling = Bodies.rectangle(width / 2, -50, width, 100, { isStatic: true });
    const leftWall = Bodies.rectangle(-50, height / 2, 100, height, { isStatic: true });
    const rightWall = Bodies.rectangle(width + 50, height / 2, 100, height, { isStatic: true });

    // Create floating objects
    const boxes = Array.from({ length: 12 }).map((_, i) => {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const size = 20 + Math.random() * 30;
      
      return Bodies.rectangle(x, y, size, size, {
        render: {
          fillStyle: "transparent",
          strokeStyle: i % 2 === 0 ? "#00f2ff" : "#9d00ff",
          lineWidth: 2,
        },
        frictionAir: 0.05,
        restitution: 0.8,
      });
    });

    Composite.add(engine.world, [ground, ceiling, leftWall, rightWall, ...boxes]);

    // Add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    Composite.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    // Run
    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    return () => {
      Render.stop(render);
      Engine.clear(engine);
      render.canvas.remove();
    };
  }, []);

  return (
    <BentoCard colSpan="md:col-span-3" rowSpan="row-span-2" className="relative cursor-grab active:cursor-grabbing overflow-hidden">
      <div className="absolute inset-0 z-10 p-6 pointer-events-none">
        <h3 className="text-xl font-bold text-white">Gravity Lab</h3>
        <p className="text-sm text-white/40">Interact with anti-gravity particles</p>
      </div>
      <div ref={sceneRef} className="absolute inset-0 w-full h-full" />
    </BentoCard>
  );
}
