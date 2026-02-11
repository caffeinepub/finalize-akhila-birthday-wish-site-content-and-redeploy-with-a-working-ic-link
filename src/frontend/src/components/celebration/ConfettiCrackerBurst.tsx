import { useState, useEffect } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export default function ConfettiCrackerBurst() {
  const [showBurst, setShowBurst] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBurst(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (prefersReducedMotion) {
    return (
      <div className="fixed top-[10%] left-1/2 -translate-x-1/2 w-32 h-32 pointer-events-none z-20">
        <img
          src="/assets/generated/cracker-burst.dim_1024x1024.png"
          alt=""
          className="w-full h-full object-contain opacity-60"
        />
      </div>
    );
  }

  return (
    <>
      {showBurst && (
        <div className="fixed top-[10%] left-1/2 -translate-x-1/2 w-32 h-32 pointer-events-none z-20 animate-burst-scale">
          <img
            src="/assets/generated/cracker-burst.dim_1024x1024.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      )}
      
      {showBurst && (
        <>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="fixed top-[10%] left-1/2 w-2 h-2 rounded-full pointer-events-none z-20"
              style={{
                backgroundColor: ['#FF6B9D', '#FFA500', '#FFD700', '#FF69B4', '#FF8C00'][i % 5],
                animation: `confetti-fall ${2 + Math.random() * 2}s ease-out forwards`,
                animationDelay: `${Math.random() * 0.3}s`,
                transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`,
                '--tx': `${(Math.random() - 0.5) * 400}px`,
                '--ty': `${300 + Math.random() * 200}px`,
              } as React.CSSProperties}
            />
          ))}
        </>
      )}
    </>
  );
}
