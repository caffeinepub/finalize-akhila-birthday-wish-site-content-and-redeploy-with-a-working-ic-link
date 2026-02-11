import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Sparkles, Heart } from 'lucide-react';
import { ROUTES } from '@/content/routes';

export default function TemplateVariantA() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-celebration-bg-start via-celebration-bg-mid to-celebration-bg-end relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/assets/generated/birthday-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 animate-float">
          <Sparkles className="w-16 h-16 md:w-20 md:h-20 mx-auto text-celebration-accent" />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-celebration-heading mb-4 tracking-tight leading-tight">
          HAPPY BIRTHDAY
          <br />
          <span className="text-celebration-accent italic">PUREST SOUL!</span>
        </h1>
        
        <div className="flex items-center justify-center gap-3 mb-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-celebration-heading">
            AKHILAAA
          </h2>
          <Heart className="w-8 h-8 md:w-12 md:h-12 text-pink-500 fill-pink-500 animate-pulse" />
        </div>
        
        <p className="text-xl md:text-2xl text-celebration-text mb-12 font-light">
          A special celebration awaits you
        </p>
        
        <Button
          size="lg"
          onClick={() => navigate({ to: ROUTES.CELEBRATE })}
          className="bg-celebration-accent hover:bg-celebration-accent-dark text-white px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-celebration-accent/50 transition-all duration-300 hover:scale-105"
        >
          Open Your Surprise
        </Button>
      </div>
    </div>
  );
}
