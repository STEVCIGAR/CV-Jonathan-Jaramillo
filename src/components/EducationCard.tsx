
import React from 'react';
import { Link } from 'react-router-dom';
import { Education } from '@/types/cv';
import { GraduationCap, ArrowRight } from 'lucide-react';

interface EducationCardProps {
  education: Education;
  theme: any;
  index: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ education, theme, index }) => {
  return (
    <Link to={`/education/${index}`}>
      <div 
        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border-l-4 cursor-pointer group"
        style={{ 
          borderLeftColor: theme.secondary,
          animationDelay: `${index * 0.1}s`
        }}
      >
        <div className="flex items-start gap-3">
          <div 
            className="p-2 rounded-lg"
            style={{ backgroundColor: `${theme.secondary}20` }}
          >
            <GraduationCap className="w-5 h-5" style={{ color: theme.secondary }} />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg" style={{ color: theme.primary }}>
              {education.degree}
            </h3>
            <p className="font-semibold text-gray-700">{education.institution}</p>
            {education.period && (
              <p className="text-sm text-gray-600 mt-1">{education.period}</p>
            )}
            <p className="text-gray-700 leading-relaxed line-clamp-3">{education.Program}</p>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
        </div>
      </div>
    </Link>
  );
};

export default EducationCard;
