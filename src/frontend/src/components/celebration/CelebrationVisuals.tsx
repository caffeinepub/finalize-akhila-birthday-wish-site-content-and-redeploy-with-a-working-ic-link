import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export default function CelebrationVisuals() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Balloons */}
      <div className={`absolute bottom-0 left-[5%] w-16 h-20 md:w-24 md:h-32 ${!prefersReducedMotion ? 'animate-float-up' : ''}`}>
        <img src="/assets/generated/balloons-set.dim_1024x1024.png" alt="" className="w-full h-full object-contain opacity-80" />
      </div>
      <div className={`absolute bottom-0 right-[10%] w-20 h-24 md:w-28 md:h-36 ${!prefersReducedMotion ? 'animate-float-up-delayed' : ''}`}>
        <img src="/assets/generated/balloons-set.dim_1024x1024.png" alt="" className="w-full h-full object-contain opacity-70" />
      </div>
      <div className={`absolute bottom-0 left-[30%] w-14 h-18 md:w-20 md:h-28 ${!prefersReducedMotion ? 'animate-float-up-slow' : ''}`}>
        <img src="/assets/generated/balloons-set.dim_1024x1024.png" alt="" className="w-full h-full object-contain opacity-60" />
      </div>

      {/* Stars */}
      <div className={`absolute top-[10%] left-[15%] w-8 h-8 ${!prefersReducedMotion ? 'animate-twinkle' : ''}`}>
        <img src="/assets/generated/stars-pack.dim_512x512.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div className={`absolute top-[20%] right-[20%] w-6 h-6 ${!prefersReducedMotion ? 'animate-twinkle-delayed' : ''}`}>
        <img src="/assets/generated/stars-pack.dim_512x512.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div className={`absolute top-[40%] left-[8%] w-10 h-10 ${!prefersReducedMotion ? 'animate-twinkle-slow' : ''}`}>
        <img src="/assets/generated/stars-pack.dim_512x512.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div className={`absolute top-[60%] right-[12%] w-7 h-7 ${!prefersReducedMotion ? 'animate-twinkle' : ''}`}>
        <img src="/assets/generated/stars-pack.dim_512x512.png" alt="" className="w-full h-full object-contain" />
      </div>

      {/* Hearts */}
      <div className={`absolute top-[15%] right-[30%] w-10 h-10 ${!prefersReducedMotion ? 'animate-pulse-slow' : ''}`}>
        <img src="/assets/generated/hearts-pack.dim_512x512.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div className={`absolute top-[50%] left-[20%] w-8 h-8 ${!prefersReducedMotion ? 'animate-pulse-slow-delayed' : ''}`}>
        <img src="/assets/generated/hearts-pack.dim_512x512.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div className={`absolute top-[70%] right-[25%] w-12 h-12 ${!prefersReducedMotion ? 'animate-pulse-slow' : ''}`}>
        <img src="/assets/generated/hearts-pack.dim_512x512.png" alt="" className="w-full h-full object-contain" />
      </div>
    </div>
  );
}
