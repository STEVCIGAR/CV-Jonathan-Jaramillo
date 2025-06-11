
import React from 'react';
import { Link } from 'react-router-dom';
import { Experience } from '@/types/cv';
import { Briefcase, Calendar, ArrowRight } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
  theme: any;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, theme, index }) => {
  return (
    <Link to={`/experience/${index}`}>
      <div 
        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border-l-4 cursor-pointer group"
        style={{ 
          borderLeftColor: theme.accent,
          animationDelay: `${index * 0.1}s`
        }}
      >
        <div className="flex items-start gap-3 mb-3">
          <div 
            className="p-2 rounded-lg"
            style={{ backgroundColor: `${theme.primary}20` }}
          >
            <Briefcase className="w-5 h-5" style={{ color: theme.primary }} />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg" style={{ color: theme.primary }}>
              {experience.position}
            </h3>
            <p className="font-semibold text-gray-700">{experience.company}</p>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
        </div>
        
        <div className="flex items-center gap-2 mb-3 text-gray-600">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">{experience.period}</span>
        </div>
        
        <p className="text-gray-700 leading-relaxed line-clamp-3">{experience.description}</p>
      </div>
    </Link>
  );
};

export default ExperienceCard;
