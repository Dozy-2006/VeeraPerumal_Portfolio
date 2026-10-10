export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  problem: string;
  implementation: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl?: string;
  liveUrl?: string;
  visualType: 'transaction-visualizer' | 'ai-notetaker';
}

export interface ExperienceItem {
  id: string;
  organization: string;
  position: string;
  projectTitle: string;
  location: string;
  summary: string;
  implementationHighlights: string[];
  technologies: string[];
  scope: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  gradeLabel: string;
  gradeValue: string;
  highlights?: string[];
}

export interface RecognitionItem {
  id: string;
  title: string;
  event: string;
  organization: string;
  type: 'Award' | 'Hackathon Finalist' | 'Certification';
}

export interface SkillCategory {
  title: string;
  description: string;
  items: string[];
}
