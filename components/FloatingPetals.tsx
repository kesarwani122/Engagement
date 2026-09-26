"use client";

import React, { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
  type: "petal" | "goldDust";
}

export const FloatingPetals = ({ enabled = true }: { enabled?: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!enabled) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Color palette for petals & gold dust
    const petalColors = [
      "rgba(232, 139, 158, ", // Blush Pink
      "rgba(217, 82, 121, ",  // Deep Rose
      "rgba(251, 207, 220, ", // Soft Pink
      "rgba(197, 155, 39, ",  // Gold Dust
    ];

    const count = width < 768 ? 16 : 28;
    const petals: Petal[] = [];

    for (let i = 0; i < count; i++) {
      const isGold = Math.random() > 0.75;
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: isGold ? Math.random() * 2 + 1.5 : Math.random() * 8 + 6,
        speedX: (Math.random() - 0.3) * 0.8,
        speedY: Math.random() * 0.9 + 0.4,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.5,
        opacity: Math.random() * 0.5 + 0.3,
        color: isGold ? "rgba(201, 164, 54, " : petalColors[Math.floor(Math.random() * 3)],
        type: isGold ? "goldDust" : "petal",
      });
    }

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);

      if (p.type === "goldDust") {
        ctx.beginPath();
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.shadowBlur = 4;
        ctx.shadowColor = "#C59B27";
        ctx.fill();
      } else {
        // Soft organic petal shape
        ctx.beginPath();
        ctx.moveTo(0, -p.size);
        ctx.bezierCurveTo(p.size * 0.8, -p.size * 0.8, p.size * 0.8, p.size * 0.8, 0, p.size);
        ctx.bezierCurveTo(-p.size * 0.8, p.size * 0.8, -p.size * 0.8, -p.size * 0.8, 0, -p.size);
        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.fill();
      }

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        // Wrap around smoothly
        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) {
          p.x = -20;
        } else if (p.x < -20) {
          p.x = width + 20;
        }

        drawPetal(p);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 select-none opacity-80"
      aria-hidden="true"
    />
  );
};
