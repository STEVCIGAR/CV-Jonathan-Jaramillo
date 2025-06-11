
import React from 'react';
import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LanguageToggleProps {
  isEnglish: boolean;
  onToggle: () => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ isEnglish, onToggle }) => {
  return (
    <Button
      onClick={onToggle}
      variant="outline"
      size="sm"
      className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm hover:bg-white/100 transition-all duration-300"
    >
      <Languages className="w-4 h-4 mr-2" />
      {isEnglish ? 'ES' : 'EN'}
    </Button>
  );
};

export default LanguageToggle;
