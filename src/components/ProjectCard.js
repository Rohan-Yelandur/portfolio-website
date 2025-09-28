import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { title, description, image, githubUrl, liveUrl, devpostUrl, technologies } = project;

  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
        <div className="project-overlay">
          <div className="project-links">
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
                aria-label="GitHub Repository"
              >
                <FaGithub />
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
                aria-label="Live Demo"
              >
                <FaExternalLinkAlt />
              </a>
            )}
            {devpostUrl && (
              <a 
                href={devpostUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
                aria-label="Devpost"
              >
                <SiDevpost />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        {technologies && technologies.length > 0 && (
          <div className="project-technologies">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}
        
        <div className="project-actions">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary btn-small"
            >
              <FaGithub /> Code
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary btn-small"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
          {devpostUrl && (
            <a 
              href={devpostUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary btn-small"
            >
              <SiDevpost /> Devpost
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;