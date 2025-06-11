
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import jsPDF from 'jspdf';
import { CVData } from '@/types/cv';

interface DownloadButtonProps {
  cvData: CVData;
  isEnglish: boolean;
  theme: any;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ cvData, isEnglish, theme }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    const margin = 20;
    let y = margin;
    
    // Header
    doc.setFontSize(24);
    doc.setTextColor(theme.primary);
    doc.text(cvData.personalInfo.name, margin, y);
    y += 10;
    
    doc.setFontSize(14);
    doc.setTextColor(100, 100, 100);
    doc.text(cvData.personalInfo.title, margin, y);
    y += 15;
    
    // Contact Info
    doc.setFontSize(10);
    doc.text(`${isEnglish ? 'Phone' : 'Teléfono'}: ${cvData.personalInfo.phone}`, margin, y);
    y += 5;
    doc.text(`Email: ${cvData.personalInfo.email}`, margin, y);
    y += 5;
    doc.text(`LinkedIn: ${cvData.personalInfo.linkedin}`, margin, y);
    y += 5;
    doc.text(`GitHub: ${cvData.personalInfo.github}`, margin, y);
    y += 15;
    
    // About
    doc.setFontSize(16);
    doc.setTextColor(theme.primary);
    doc.text(isEnglish ? 'About Me' : 'Acerca de Mí', margin, y);
    y += 8;
    
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    const aboutLines = doc.splitTextToSize(cvData.about, 170);
    doc.text(aboutLines, margin, y);
    y += aboutLines.length * 5 + 10;
    
    // Experience
    if (y > 250) {
      doc.addPage();
      y = margin;
    }
    
    doc.setFontSize(16);
    doc.setTextColor(theme.primary);
    doc.text(isEnglish ? 'Professional Experience' : 'Experiencia Profesional', margin, y);
    y += 10;
    
    cvData.experience.forEach((exp) => {
      if (y > 250) {
        doc.addPage();
        y = margin;
      }
      
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      doc.text(`${exp.position} - ${exp.company}`, margin, y);
      y += 5;
      
      doc.setFontSize(9);
      doc.setTextColor(100, 100, 100);
      doc.text(exp.period, margin, y);
      y += 5;
      
      doc.setFontSize(9);
      doc.setTextColor(0, 0, 0);
      const descLines = doc.splitTextToSize(exp.description, 170);
      doc.text(descLines, margin, y);
      y += descLines.length * 4 + 8;
    });
    
    // Save the PDF
    const fileName = `CV_Jonathan_Jaramillo_${isEnglish ? 'EN' : 'ES'}.pdf`;
    doc.save(fileName);
  };

  return (
    <Button
      onClick={generatePDF}
      className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      style={{ backgroundColor: theme.accent }}
    >
      <Download className="w-6 h-6 text-white" />
    </Button>
  );
};

export default DownloadButton;
