import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Heart, Star } from 'lucide-react';
import { ROUTES } from '@/content/routes';

export default function TemplateVariantB() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-50 to-orange-100 dark:from-pink-950 dark:via-yellow-950 dark:to-orange-950 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(/assets/generated/birthday-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="absolute top-10 left-10 animate-bounce-slow">
        <Heart className="w-12 h-12 text-pink-400 fill-pink-400" />
      </div>
      <div className="absolute top-20 right-20 animate-spin-slow">
        <Star className="w-16 h-16 text-yellow-400 fill-yellow-400" />
      </div>
      <div className="absolute bottom-20 left-20 animate-pulse">
        <Star className="w-10 h-10 text-orange-400 fill-orange-400" />
      </div>
      <div className="absolute bottom-32 right-32 animate-bounce-slow">
        <Heart className="w-14 h-14 text-pink-500 fill-pink-500" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 max-w-3xl text-center transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 mb-4 leading-tight">
            HAPPY BIRTHDAY
            <br />
            PUREST SOUL!
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-orange-600 to-yellow-600">
              AKHILAAA
            </h2>
            <Heart className="w-8 h-8 md:w-10 md:h-10 text-pink-500 fill-pink-500 animate-pulse" />
          </div>
          
          <div className="flex justify-center gap-4 mb-8">
            <div className="w-3 h-3 rounded-full bg-pink-500 animate-pulse" />
            <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse delay-100" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse delay-200" />
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 font-medium">
            Get ready for something magical! ✨
          </p>
          
          <Button
            size="lg"
            onClick={() => navigate({ to: ROUTES.CELEBRATE })}
            className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 hover:from-pink-600 hover:via-orange-600 hover:to-yellow-600 text-white px-12 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-bold"
          >
            Let's Celebrate! 🎉
          </Button>
        </div>
      </div>
    </div>
  );
}
