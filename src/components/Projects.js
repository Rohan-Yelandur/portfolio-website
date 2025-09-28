import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

// Sample project data - you can easily replace this with your own projects
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application built with React and Node.js, featuring user authentication, payment integration, and admin dashboard.",
    image: "https://via.placeholder.com/400x250/D4A373/FEFAE0?text=E-Commerce+Platform",
    githubUrl: "https://github.com/Rohan-Yelandur/ecommerce-platform",
    liveUrl: "https://your-ecommerce-demo.com",
    devpostUrl: "https://devpost.com/software/ecommerce-platform",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://via.placeholder.com/400x250/CCD5AE/FEFAE0?text=Task+Manager",
    githubUrl: "https://github.com/Rohan-Yelandur/task-manager",
    liveUrl: "https://your-taskmanager-demo.com",
    technologies: ["React", "Firebase", "Material-UI", "Socket.io"]
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current conditions and forecasts using third-party APIs with beautiful data visualizations.",
    image: "https://via.placeholder.com/400x250/E9EDC9/FEFAE0?text=Weather+Dashboard",
    githubUrl: "https://github.com/Rohan-Yelandur/weather-dashboard",
    liveUrl: "https://your-weather-demo.com",
    devpostUrl: "https://devpost.com/software/weather-dashboard",
    technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"]
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "An analytics dashboard for social media metrics with data visualization, trend analysis, and automated reporting features.",
    image: "https://via.placeholder.com/400x250/FAEDCD/FEFAE0?text=Analytics+Dashboard",
    githubUrl: "https://github.com/Rohan-Yelandur/social-analytics",
    liveUrl: "https://your-analytics-demo.com",
    technologies: ["React", "D3.js", "Python", "Flask", "PostgreSQL"]
  },
  {
    id: 5,
    title: "Recipe Finder App",
    description: "A mobile-first recipe application with ingredient-based search, meal planning, and shopping list generation capabilities.",
    image: "https://via.placeholder.com/400x250/CCD5AE/FEFAE0?text=Recipe+Finder",
    githubUrl: "https://github.com/Rohan-Yelandur/recipe-finder",
    liveUrl: "https://your-recipe-demo.com",
    technologies: ["React Native", "Redux", "Spoonacular API", "AsyncStorage"]
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A responsive personal portfolio website showcasing projects, skills, and experience with modern design and smooth animations.",
    image: "https://via.placeholder.com/400x250/D4A373/FEFAE0?text=Portfolio+Website",
    githubUrl: "https://github.com/Rohan-Yelandur/portfolio",
    liveUrl: "https://your-portfolio.com",
    technologies: ["React", "CSS3", "React Icons", "Responsive Design"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="projects-subtitle">
          Here are some of the projects I've worked on. Each one represents a unique challenge 
          and learning experience in my development journey.
        </p>
        
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="projects-cta">
          <p className="cta-text">Want to see more of my work?</p>
          <a 
            href="https://github.com/Rohan-Yelandur" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;