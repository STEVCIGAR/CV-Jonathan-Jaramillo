
import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, User, Target, Briefcase, GraduationCap, Code, MapPin } from 'lucide-react';
import { cvDataEN, cvDataES } from '@/data/cvData';
import { themes } from '@/data/themes';
import LanguageToggle from '@/components/LanguageToggle';
import ThemeSelector from '@/components/ThemeSelector';
import SkillBar from '@/components/SkillBar';
import ExperienceCard from '@/components/ExperienceCard';
import EducationCard from '@/components/EducationCard';
import DownloadButton from '@/components/DownloadButton';

const Index = () => {
  const [isEnglish, setIsEnglish] = useState(true);
  const [currentTheme, setCurrentTheme] = useState(themes[0]);
  const [animationKey, setAnimationKey] = useState(0);

  const cvData = isEnglish ? cvDataEN : cvDataES;
  
  // Skill levels for animation
  const skillLevels = [80, 75, 70, 70, 90, 75, 75, 70, 75, 70, 85, 70, 60, 75];

  useEffect(() => {
    setAnimationKey(prev => prev + 1);
    // Save language preference
    localStorage.setItem('cv-language', isEnglish ? 'en' : 'es');
  }, [isEnglish, currentTheme]);

  const handleLanguageToggle = () => {
    setIsEnglish(!isEnglish);
  };

  const handleThemeChange = (theme: any) => {
    setCurrentTheme(theme);
  };

  return (
    <div 
      className="min-h-screen transition-all duration-500"
      style={{ backgroundColor: currentTheme.background }}
    >
      <LanguageToggle isEnglish={isEnglish} onToggle={handleLanguageToggle} />
      <ThemeSelector currentTheme={currentTheme} onThemeChange={handleThemeChange} />
      <DownloadButton cvData={cvData} isEnglish={isEnglish} theme={currentTheme} />

      {/* Hero Section */}
      <section className={`relative overflow-hidden py-20 bg-gradient-to-br ${currentTheme.gradient}`}>
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center text-white animate-fade-in">
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {cvData.personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {cvData.personalInfo.title}
            </p>
            <div className="flex flex-wrap justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <a href={`tel:${cvData.personalInfo.phone}`} className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-105">
                <Phone className="w-5 h-5" />
                {cvData.personalInfo.phone}
              </a>
              <a href={`mailto:${cvData.personalInfo.email}`} className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-105">
                <Mail className="w-5 h-5" />
                {cvData.personalInfo.email}
              </a>
              <a href={cvData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-105">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a href={cvData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-105">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8 animate-fade-in">
              <div 
                className="p-3 rounded-lg"
                style={{ backgroundColor: `${currentTheme.primary}20` }}
              >
                <User className="w-6 h-6" style={{ color: currentTheme.primary }} />
              </div>
              <h2 className="text-3xl font-bold" style={{ color: currentTheme.primary }}>
                {isEnglish ? 'About Me' : 'Acerca de Mí'}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in hover:shadow-xl transition-all duration-300" style={{ animationDelay: '0.1s' }}>
                <p className="text-gray-700 leading-relaxed text-lg">{cvData.about}</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in hover:shadow-xl transition-all duration-300" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6" style={{ color: currentTheme.accent }} />
                  <h3 className="text-xl font-bold" style={{ color: currentTheme.primary }}>
                    {isEnglish ? 'Objective' : 'Objetivo'}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{cvData.objective}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16" style={{ backgroundColor: `${currentTheme.secondary}05` }}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12 animate-fade-in">
              <div 
                className="p-3 rounded-lg"
                style={{ backgroundColor: `${currentTheme.secondary}20` }}
              >
                <Briefcase className="w-6 h-6" style={{ color: currentTheme.secondary }} />
              </div>
              <h2 className="text-3xl font-bold" style={{ color: currentTheme.primary }}>
                {isEnglish ? 'Professional Experience' : 'Experiencia Profesional'}
              </h2>
            </div>
            <div className="grid gap-8">
              {cvData.experience.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  experience={exp}
                  theme={currentTheme}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12 animate-fade-in">
              <div 
                className="p-3 rounded-lg"
                style={{ backgroundColor: `${currentTheme.primary}20` }}
              >
                <GraduationCap className="w-6 h-6" style={{ color: currentTheme.primary }} />
              </div>
              <h2 className="text-3xl font-bold" style={{ color: currentTheme.primary }}>
                {isEnglish ? 'Education' : 'Educación'}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {cvData.education.map((edu, index) => (
                <EducationCard
                  key={index}
                  education={edu}
                  theme={currentTheme}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16" style={{ backgroundColor: `${currentTheme.primary}05` }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-12 animate-fade-in">
              <div 
                className="p-3 rounded-lg"
                style={{ backgroundColor: `${currentTheme.accent}20` }}
              >
                <Code className="w-6 h-6" style={{ color: currentTheme.accent }} />
              </div>
              <h2 className="text-3xl font-bold" style={{ color: currentTheme.primary }}>
                {isEnglish ? 'Skills' : 'Habilidades'}
              </h2>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6" key={animationKey}>
                {cvData.skills.map((skill, index) => (
                  <SkillBar
                    key={skill}
                    skill={skill}
                    level={skillLevels[index] || 70}
                    color={currentTheme.accent}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 bg-gradient-to-r ${currentTheme.gradient}`}>
        <div className="container mx-auto px-6 text-center text-white">
          <p className="text-lg mb-4">
            {isEnglish 
              ? 'Thank you for viewing my resume!' 
              : '¡Gracias por ver mi hoja de vida!'
            }
          </p>
          <p className="text-sm opacity-80">
            {isEnglish 
              ? 'Built with Vite, React, TypeScript & Tailwind CSS' 
              : 'Construido con Vite, React, TypeScript y Tailwind CSS'
            }
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;