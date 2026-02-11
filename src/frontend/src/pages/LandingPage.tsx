import { useState } from 'react';
import LandingTemplateSelector from '@/components/landing/LandingTemplateSelector';
import TemplateVariantA from '@/components/landing/templates/TemplateVariantA';
import TemplateVariantB from '@/components/landing/templates/TemplateVariantB';
import TemplateVariantC from '@/components/landing/templates/TemplateVariantC';
import CopyLinkButton from '@/components/CopyLinkButton';

export default function LandingPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<'a' | 'b' | 'c'>('a');

  return (
    <div className="relative min-h-screen">
      <div className="absolute top-4 right-4 z-50">
        <CopyLinkButton />
      </div>
      <LandingTemplateSelector selected={selectedTemplate} onSelect={setSelectedTemplate} />
      {selectedTemplate === 'a' && <TemplateVariantA />}
      {selectedTemplate === 'b' && <TemplateVariantB />}
      {selectedTemplate === 'c' && <TemplateVariantC />}
    </div>
  );
}
