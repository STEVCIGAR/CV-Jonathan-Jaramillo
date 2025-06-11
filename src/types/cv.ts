
export interface PersonalInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface Experience {
  position: string;
  company: string;
  description: string;
  period: string;
  key1?: string;
  key2?: string;
  key3?: string;
  key4?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  key1?: string;
  key2?: string;
  key3?: string;
  Highlight1?: string;
  Highlight2?: string;
  Highlight3?: string;
  Achievements?: string;
  Program?: string;
}

export interface CVData {
  personalInfo: PersonalInfo;
  about: string;
  objective: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
}

export interface Theme {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  gradient: string;
}
