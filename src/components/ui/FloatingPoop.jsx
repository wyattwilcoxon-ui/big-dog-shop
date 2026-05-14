import React, { useEffect, useRef, useState } from 'react';

const EMOJIS = ['💩', '🐾', '💩', '🐶', '💩', '🐾'];

export default function FloatingPoop() {
  const [poops, setPoops] = useState([]);
  const idRef = useRef(0);
  const throttleRef = useRef(false);

  useEffect(() => {
    const handleMove = (e) => {
      if (throttleRef.current) return;
      throttleRef.current = true;
      setTimeout(() => { throttleRef.current = false; }, 120);

      const id = idRef.current++;
      const emoji = EMOJIS[id % EMOJIS.length];
      const x = e.clientX;
      const y = e.clientY;
      const rotation = Math.random() * 60 - 30;
      const drift = Math.random() * 60 - 30;

      setPoops(prev => [...prev.slice(-10), { id, x, y, emoji, rotation, drift }]);

      setTimeout(() => {
        setPoops(prev => prev.filter(p => p.id !== id));
      }, 900);
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[200]">
      {poops.map(p => (
        <div
          key={p.id}
          className="absolute text-xl select-none"
          style={{
            left: p.x,
            top: p.y,
            transform: `rotate(${p.rotation}deg)`,
            animation: `floatUp 0.9s ease-out forwards`,
            '--drift': `${p.drift}px`,
          }}
        >
          {p.emoji}
        </div>
      ))}
      <style>{`
        @keyframes floatUp {
          0%   { opacity: 1; transform: translate(0, 0) rotate(var(--r, 0deg)) scale(1); }
          100% { opacity: 0; transform: translate(var(--drift, 0px), -60px) rotate(calc(var(--r, 0deg) + 20deg)) scale(0.4); }
        }
      `}</style>
    </div>
  );
}