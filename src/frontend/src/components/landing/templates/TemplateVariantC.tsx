import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Gift, Heart } from 'lucide-react';
import { ROUTES } from '@/content/routes';

export default function TemplateVariantC() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-white dark:bg-gray-950">
      <div className="relative bg-gradient-to-br from-celebration-accent via-celebration-accent-dark to-orange-600 flex items-center justify-center p-8 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(/assets/generated/birthday-bg.dim_1920x1080.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10">
          <Gift className="w-32 h-32 md:w-48 md:h-48 text-white animate-bounce-slow" />
        </div>
      </div>

      <div className="flex items-center justify-center p-8 md:p-16">
        <div className="max-w-lg">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-celebration-accent/10 rounded-full mb-6">
              <span className="text-celebration-accent font-semibold text-sm tracking-wider uppercase">
                Special Day
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-3 leading-tight">
              HAPPY BIRTHDAY
            </h1>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-celebration-accent mb-4">
              PUREST SOUL!
            </h2>
            
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                AKHILAAA
              </h3>
              <Heart className="w-7 h-7 md:w-9 md:h-9 text-pink-500 fill-pink-500 animate-pulse" />
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            Today is all about celebrating the incredible person you are. Click below to see your special message.
          </p>
          
          <Button
            size="lg"
            onClick={() => navigate({ to: ROUTES.CELEBRATE })}
            className="bg-celebration-accent hover:bg-celebration-accent-dark text-white px-10 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-auto"
          >
            View Your Message
          </Button>
        </div>
      </div>
    </div>
  );
}
