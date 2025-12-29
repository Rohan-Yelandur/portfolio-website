import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import './ProjectPage.css';

const ARMusical = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = {
    title: "AR Musical Instrument Platform",
    description: "An augmented-reality platform for playing and learning instruments in the browser.",
    technologies: ["React", "Three.js", "WebXR", "Node.js"],
    links: {
      code: "https://github.com",
      demo: "https://devpost.com"
    },
    video: "https://www.youtube.com/embed/mPMlWaZJMw0",
    gallery: ["/media/harmonium_thumbnail.PNG"]
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
            <div className="video-container">
              <iframe
                src={project.video}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="gallery-grid">
              {project.gallery.map((img, index) => (
                <div key={index} className="gallery-item">
                  <img src={img} alt={`${project.title} screenshot ${index + 1}`} />
                </div>
              ))}
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

export default ARMusical;
