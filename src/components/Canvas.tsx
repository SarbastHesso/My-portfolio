import React, { useEffect, useRef } from "react";
import "./Canvas.css";

interface Particle {
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
  speed: number;
  update: () => void;
  draw: () => void;
}

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  let w: number, h: number, particles: Particle[];
  const particleDistance = 40;
  const mouse = {
    x: 0,
    y: 0,
    radius: 100,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const init = () => {
      resizeReset();
      animationLoop();
    };

    const resizeReset = () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      w = canvas.width = window.innerWidth;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      h = canvas.height = window.innerHeight;

      // eslint-disable-next-line react-hooks/exhaustive-deps
      particles = [];
      for (
        let y =
          (((h - particleDistance) % particleDistance) + particleDistance) / 2;
        y < h;
        y += particleDistance
      ) {
        for (
          let x =
            (((w - particleDistance) % particleDistance) + particleDistance) /
            2;
          x < w;
          x += particleDistance
        ) {
          particles.push(new ParticleClass(x, y));
        }
      }
    };

    const animationLoop = () => {
      ctx.clearRect(0, 0, w, h);
      drawScene();
      requestAnimationFrame(animationLoop);
    };

    const drawScene = () => {
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      drawLine();
    };

    const drawLine = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < particleDistance * 1.5) {
            const opacity = 1 - distance / (particleDistance * 1.5);
            ctx.strokeStyle = "rgba(255,255,255," + opacity + ")";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const mousemove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const mouseout = () => {
      mouse.x = NaN;
      mouse.y = NaN;
    };

    class ParticleClass implements Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      speed: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = 4;
        this.baseX = this.x;
        this.baseY = this.y;
        this.speed = Math.random() * 25 + 5;
      }

      draw() {
        if (ctx) {
          ctx.fillStyle = "rgba(255,255,255,1)";
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
        }
      }

      update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = mouse.radius;
        const force = (maxDistance - distance) / maxDistance; // 0 ~ 1
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const directionX = forceDirectionX * force * this.speed;
        const directionY = forceDirectionY * force * this.speed;

        if (distance < mouse.radius) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
      }
    }

    init();

    window.addEventListener("resize", resizeReset);
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseout", mouseout);

    return () => {
      window.removeEventListener("resize", resizeReset);
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseout", mouseout);
    };
  }, []);

  return <canvas ref={canvasRef} id="canvas"></canvas>;
};

export default Canvas;
