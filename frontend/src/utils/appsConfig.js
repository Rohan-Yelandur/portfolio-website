import AboutContent from '../apps/About/AboutContent';
import SkillsContent from '../apps/Skills/SkillsContent';
import ProjectsContent from '../apps/Projects/ProjectsContent';
import ExperienceContent from '../apps/Experience/ExperienceContent';

export const APPS = [
  { 
    id: 'about', 
    title: 'About Me', 
    icon: '📝',
    component: AboutContent 
  },
  { 
    id: 'skills', 
    title: 'Skills', 
    icon: '🛠️',
    component: SkillsContent 
  },
  { 
    id: 'projects', 
    title: 'Projects', 
    icon: '💼',
    component: ProjectsContent 
  },
  { 
    id: 'experience', 
    title: 'Experience', 
    icon: '🎯',
    component: ExperienceContent 
  },
  { 
    id: 'linkedin', 
    title: 'LinkedIn', 
    icon: '👔',
    url: 'https://www.linkedin.com/in/rohan-yelandur/'
  },
  { 
    id: 'github', 
    title: 'GitHub', 
    icon: '💻',
    url: 'https://github.com/Rohan-Yelandur'
  },
];
