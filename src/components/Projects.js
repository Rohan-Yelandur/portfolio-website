import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AR Musical Instrument Platform",
      description: "An augmented-reality platform for playing and learning instruments in the browser.",
      image: "/media/harmonium_thumbnail.PNG",
      path: "/projects/ar-musical"
    },
    {
      id: 2,
      title: "AI Math Tutor",
      description: "A custom video generation pipeline to create animated and narrated math lessons.",
      image: "/media/manim-ai_thumbnail.PNG",
      path: "/projects/ai-math-tutor"
    },
    {
      id: 3,
      title: "Memory Allocator",
      description: "Custom malloc and free implementations optimized for speed and memory efficiency.",
      image: "/media/memory-allocator_thumbnail.PNG",
      path: "/projects/memory-allocator"
    },
    {
      id: 4,
      title: "ZipReader",
      description: "App to make reading books and notes 2x faster.",
      image: "/media/zipreader_thumbnail.PNG",
      path: "/projects/zip-reader"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <Link to={project.path} className="project-link">
              <div className="project-image-box">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span>View Details</span>
                </div>
              </div>
            </Link>
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
