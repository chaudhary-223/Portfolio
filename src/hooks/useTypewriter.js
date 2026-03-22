import { useState, useEffect } from "react";

export function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [deleting, setDeleting] = useState(false);
  
  useEffect(() => {
    const word = words[wi];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(word.slice(0, ci + 1));
        if (ci + 1 === word.length) setTimeout(() => setDeleting(true), pause);
        else setCi(c => c + 1);
      } else {
        setDisplay(word.slice(0, ci - 1));
        if (ci - 1 === 0) { setDeleting(false); setWi(w => (w + 1) % words.length); setCi(0); }
        else setCi(c => c - 1);
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [ci, deleting, wi, words, speed, pause]);
  
  return display;
}
