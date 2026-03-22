import { useInView } from '../hooks/useInView';

export function Reveal({ children, delay = 0, y = 40, className = "", style = {} }) {
  const [ref, v] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: v ? 1 : 0,
      transform: v ? "translateY(0px)" : `translateY(${y}px)`,
      transition: `opacity 0.9s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.9s cubic-bezier(.16,1,.3,1) ${delay}s`,
      ...style,
    }}>{children}</div>
  );
}
