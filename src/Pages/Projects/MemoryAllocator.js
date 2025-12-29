import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaArrowLeft } from 'react-icons/fa';
import './ProjectPage.css';

const MemoryAllocator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = {
    title: "Memory Allocator",
    description: "Custom malloc and free implementations optimized for speed and memory efficiency.",
    technologies: ["C", "System Programming", "Unix"],
    links: {
      code: "https://github.com"
    },
    image: "/media/memory-allocator_thumbnail.PNG",
    gallery: ["/media/memory-allocator_thumbnail.PNG"]
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryAllocator;
