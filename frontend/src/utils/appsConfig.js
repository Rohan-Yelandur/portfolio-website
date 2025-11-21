import AboutContent from '../apps/About/AboutContent';
import SkillsContent from '../apps/Skills/SkillsContent';
import ExperienceContent from '../apps/Experience/ExperienceContent';
import OpenBackersContent from '../apps/OpenBackers/OpenBackersContent';
import VibeathonContent from '../apps/Vibeathon/VibeathonContent';
import ChatbotContent from '../apps/Chatbot/ChatbotContent';
import BrowserContent from '../apps/Browser/BrowserContent';

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
    id: 'openbackers', 
    title: 'OpenBackers', 
    icon: '🌐',
    component: OpenBackersContent,
    externalUrl: 'https://openbackers.vercel.app/'
  },
  { 
    id: 'vibeathon', 
    title: 'Vibeathon', 
    icon: '🎵',
    component: VibeathonContent,
    externalUrl: 'https://tvg-vibeathon.vercel.app/'
  },
  { 
    id: 'experience', 
    title: 'Experience', 
    icon: '🎯',
    component: ExperienceContent 
  },
  { 
    id: 'chatbot', 
    title: 'AI Chatbot', 
    icon: '🤖',
    component: ChatbotContent 
  },
  { 
    id: 'browser', 
    title: 'Browser', 
    icon: '🌐',
    component: BrowserContent 
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
