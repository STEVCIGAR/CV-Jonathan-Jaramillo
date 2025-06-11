
import React from 'react';
import { Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { themes } from '@/data/themes';
import { Theme } from '@/types/cv';

interface ThemeSelectorProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ currentTheme, onThemeChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed top-4 left-4 z-50">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        size="sm"
        className="bg-white/90 backdrop-blur-sm hover:bg-white/100 transition-all duration-300"
      >
        <Palette className="w-4 h-4 mr-2" />
        Theme
      </Button>
      
      {isOpen && (
        <div className="absolute top-12 left-0 bg-white/95 backdrop-blur-md rounded-lg shadow-lg p-3 min-w-48 animate-fade-in">
          <div className="grid gap-2">
            {themes.map((theme) => (
              <button
                key={theme.name}
                onClick={() => {
                  onThemeChange(theme);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors ${
                  currentTheme.name === theme.name ? 'bg-gray-100' : ''
                }`}
              >
                <div 
                  className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: theme.primary }}
                />
                <span className="text-sm font-medium">{theme.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
