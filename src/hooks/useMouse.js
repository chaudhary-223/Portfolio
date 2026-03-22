import { useState, useEffect } from "react";

export function useMouse() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const fn = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);
  return pos;
}
