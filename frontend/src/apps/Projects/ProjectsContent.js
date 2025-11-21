import React from 'react';
import './ProjectsContent.css';

const ProjectsContent = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with shopping cart, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team features.',
      technologies: ['React', 'Firebase', 'Material-UI']
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather forecasting application with interactive maps and detailed metrics.',
      technologies: ['JavaScript', 'REST API', 'Chart.js']
    }
  ];

  return (
    <div className="app-content">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsContent;
