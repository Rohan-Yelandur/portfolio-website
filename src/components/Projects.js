import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AR Musical Instrument Platform",
      description: "An augmented-reality platform for playing and learning instruments in the browser.",
      image: "/images/harmonium_thumbnail.PNG"
    },
    {
      id: 2,
      title: "AI Math Tutor",
      description: "A custom video generation pipeline to create animated and narrated math lessons.",
      image: "/images/manim-ai_thumbnail.PNG"
    },
    {
      id: 3,
      title: "Memory Allocator",
      description: "Custom malloc and free implementations optimized for speed and memory efficiency.",
      image: "/images/memory-allocator_thumbnail.PNG"
    },
    {
      id: 4,
      title: "ZipReader",
      description: "App to make reading books and notes 2x faster.",
      image: "/images/zipreader_thumbnail.PNG"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image-box">
              <img src={project.image} alt={project.title} />
            </div>
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
