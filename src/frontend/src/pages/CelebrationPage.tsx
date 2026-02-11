import { useNavigate } from '@tanstack/react-router';
import { ArrowLeft, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CelebrationVisuals from '@/components/celebration/CelebrationVisuals';
import ConfettiCrackerBurst from '@/components/celebration/ConfettiCrackerBurst';
import { birthdayMessage } from '@/content/birthdayMessage';
import CopyLinkButton from '@/components/CopyLinkButton';
import { ROUTES } from '@/content/routes';

export default function CelebrationPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-celebration-bg-start via-celebration-bg-mid to-celebration-bg-end">
      <CelebrationVisuals />
      <ConfettiCrackerBurst />
      
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate({ to: ROUTES.LANDING })}
          className="mb-6 text-celebration-text hover:text-celebration-accent hover:bg-celebration-accent/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <main className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-celebration-heading tracking-tight leading-tight">
              HAPPY BIRTHDAY
              <br />
              <span className="text-celebration-accent">PUREST SOUL!</span>
            </h1>
            <div className="flex items-center justify-center gap-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-celebration-heading">
                AKHILAAA
              </h2>
              <Heart className="w-8 h-8 md:w-10 md:h-10 text-pink-500 fill-pink-500 animate-pulse" />
            </div>
          </div>

          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
            <div className="prose prose-lg md:prose-xl max-w-none text-celebration-text-dark">
              {birthdayMessage.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <CopyLinkButton />
          </div>
        </main>

        <footer className="mt-16 text-center text-sm text-celebration-text/70">
          <p>
            © {new Date().getFullYear()} · Built with ❤️ using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== 'undefined' ? window.location.hostname : 'birthday-wish'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-celebration-accent hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
