
import React from 'react';

interface SkillBarProps {
  skill: string;
  level: number;
  color: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, level, color }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{skill}</span>
        <span className="text-sm text-gray-600">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: `${level}%`, 
            backgroundColor: color,
            animation: 'fillBar 1.5s ease-out'
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
