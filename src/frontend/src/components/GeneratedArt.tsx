interface GeneratedArtProps {
  src: string;
  alt?: string;
  className?: string;
}

export function GeneratedArt({ src, alt = '', className = '' }: GeneratedArtProps) {
  return <img src={src} alt={alt} className={className} />;
}

export const GENERATED_ASSETS = {
  background: '/assets/generated/birthday-bg.dim_1920x1080.png',
  balloons: '/assets/generated/balloons-set.dim_1024x1024.png',
  crackerBurst: '/assets/generated/cracker-burst.dim_1024x1024.png',
  stars: '/assets/generated/stars-pack.dim_512x512.png',
  hearts: '/assets/generated/hearts-pack.dim_512x512.png',
} as const;
