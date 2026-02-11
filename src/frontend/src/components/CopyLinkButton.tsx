import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, Check } from 'lucide-react';
import { toast } from 'sonner';

export default function CopyLinkButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success('Link copied to clipboard!', {
        description: 'Share this special birthday wish with others.',
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error('Failed to copy link', {
        description: 'Please try again.',
      });
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleCopy}
      className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-all"
    >
      {copied ? (
        <>
          <Check className="mr-2 h-4 w-4 text-green-600" />
          Copied!
        </>
      ) : (
        <>
          <Link className="mr-2 h-4 w-4" />
          Copy Link
        </>
      )}
    </Button>
  );
}
