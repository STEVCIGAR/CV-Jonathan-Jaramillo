
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Calendar, Award } from 'lucide-react';
import { cvDataEN, cvDataES } from '@/data/cvData';
import { Button } from '@/components/ui/button';

const EducationDetail = () => {
  const { index } = useParams();
  const [isEnglish, setIsEnglish] = React.useState(true);
  
  React.useEffect(() => {
    const savedLanguage = localStorage.getItem('cv-language');
    if (savedLanguage) {
      setIsEnglish(savedLanguage === 'en');
    }
  }, []);

  const cvData = isEnglish ? cvDataEN : cvDataES;
  const educationIndex = parseInt(index || '0');
  const education = cvData.education[educationIndex];

  if (!education) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            {isEnglish ? 'Education not found' : 'Educación no encontrada'}
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
            <div className="p-3 bg-green-100 rounded-lg">
              <GraduationCap className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{education.degree}</h1>
              <p className="text-xl text-gray-600">{education.institution}</p>
            </div>
          </div>

          {education.period && (
            <div className="flex items-center gap-2 mb-6 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">{education.period}</span>
            </div>
          )}

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3 text-gray-900">
                {isEnglish ? 'Program Details' : 'Detalles del Programa'}
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">
                  {education.Program}
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-gray-900">
                {isEnglish ? 'Key Subjects' : 'Materias Clave'}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">
                    {isEnglish ? 'Course Syllabus' : 'Pénsum'}
                  </h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    {education.key1}
                  </li>
                    <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    {education.key2}
                  </li>
                    <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    {education.key3}
                  </li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-green-900 mb-2">
                    {isEnglish ? 'Highlight' : 'Destacado'}
                  </h3>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    {education.Highlight1}
                  </li>
                    <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    {education.Highlight2}
                  </li>
                    <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    {education.Highlight3}
                  </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-gray-900">
                {isEnglish ? 'Achievements' : 'Logros'}
              </h2>
              <div className="flex items-center gap-3 p-4 bg-yellow-50 rounded-lg">
                <Award className="w-6 h-6 text-yellow-600" />
                <span className="text-yellow-800 font-medium">
                  {education.Achievements}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationDetail;
