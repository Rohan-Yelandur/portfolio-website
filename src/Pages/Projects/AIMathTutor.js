import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import './ProjectPage.css';

const AIMathTutor = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = {
    title: "AI Math Tutor",
    description: "A custom video generation pipeline to create animated and narrated math lessons.",
    technologies: ["Python", "React", "FastAPI", "FFmpeg", "Gemini API", "ElevenLabs API"],
    links: {
      code: "https://github.com",
      demo: "https://devpost.com"
    },
    image: "/media/manim-ai_thumbnail.PNG",
    gallery: ["/media/manim-ai_thumbnail.PNG"]
  };

  return (
    <div className="project-details-page">
      <div className="project-details-container">
        <Link to="/" className="back-link">
          <FaArrowLeft /> Back to Projects
        </Link>

        <div className="project-header">
          <h1>{project.title}</h1>
          <div className="tech-stack">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>

        <div className="project-content">
          <div className="project-media">
            <div className="main-image">
              <img src={project.image} alt={project.title} />
            </div>
          </div>

          <div className="project-info">
            <p className="description">{project.description}</p>

            <div className="project-links">
              <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <FaGithub /> View Code
              </a>
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMathTutor;
