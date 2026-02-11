import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface LandingTemplateSelectorProps {
  selected: 'a' | 'b' | 'c';
  onSelect: (template: 'a' | 'b' | 'c') => void;
}

export default function LandingTemplateSelector({ selected, onSelect }: LandingTemplateSelectorProps) {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <Tabs value={selected} onValueChange={(value) => onSelect(value as 'a' | 'b' | 'c')}>
        <TabsList className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg">
          <TabsTrigger value="a" className="data-[state=active]:bg-celebration-accent data-[state=active]:text-white">
            Elegant
          </TabsTrigger>
          <TabsTrigger value="b" className="data-[state=active]:bg-celebration-accent data-[state=active]:text-white">
            Playful
          </TabsTrigger>
          <TabsTrigger value="c" className="data-[state=active]:bg-celebration-accent data-[state=active]:text-white">
            Modern
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
