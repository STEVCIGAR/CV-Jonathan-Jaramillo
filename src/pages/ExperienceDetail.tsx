
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, Calendar, MapPin } from 'lucide-react';
import { cvDataEN, cvDataES } from '@/data/cvData';
import { Button } from '@/components/ui/button';

const ExperienceDetail = () => {
  const { index } = useParams();
  const [isEnglish, setIsEnglish] = React.useState(true);
  
  React.useEffect(() => {
    const savedLanguage = localStorage.getItem('cv-language');
    if (savedLanguage) {
      setIsEnglish(savedLanguage === 'en');
    }
  }, []);

  const cvData = isEnglish ? cvDataEN : cvDataES;
  const experienceIndex = parseInt(index || '0');
  const experience = cvData.experience[experienceIndex];

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            {isEnglish ? 'Experience not found' : 'Experiencia no encontrada'}
          </h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              {isEnglish ? 'Back to CV' : 'Volver al CV'}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link to="/" className="inline-block mb-8">
          <Button variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {isEnglish ? 'Back to CV' : 'Volver al CV'}
          </Button>
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Briefcase className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{experience.position}</h1>
              <p className="text-xl text-gray-600">{experience.company}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-6 text-gray-600">
            <Calendar className="w-5 h-5" />
            <span className="font-medium">{experience.period}</span>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3 text-gray-900">
                {isEnglish ? 'Job Description' : 'Descripción del Trabajo'}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">{experience.description}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-gray-900">
                {isEnglish ? 'Key Responsibilities' : 'Responsabilidades Clave'}
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    {experience.key1}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    {experience.key2}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    {experience.key3}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    {experience.key4}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
