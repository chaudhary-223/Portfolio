import { useEffect, useRef } from "react";

export function CursorTrail({ color }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    let points = [];

    const onMouseMove = (e) => {
      points.push({ x: e.clientX, y: e.clientY, age: 0 });
    };
    window.addEventListener("mousemove", onMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      
      // The glow effect
      ctx.shadowBlur = 16;
      ctx.shadowColor = color;
      
      for (let i = 1; i < points.length; i++) {
        const p1 = points[i - 1];
        const p2 = points[i];
        
        // Maximum age of a point is 35 frames (a bit longer than half a second)
        const life = 60;
        const opacity = Math.max(1 - p2.age / life, 0);
        
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        
        // Taper the width of the line as it ages
        ctx.lineWidth = 10 * opacity; 
        
        ctx.globalAlpha = opacity;
        ctx.strokeStyle = color;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      // Age points and remove old ones
      for (let i = 0; i < points.length; i++) {
        points[i].age += 1;
      }
      points = points.filter(p => p.age < 60);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color]);

  return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 9999 }} />;
}
