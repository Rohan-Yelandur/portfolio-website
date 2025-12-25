import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AR Instruments",
      description: "An augmented-reality platform for playing instruments in the browser.",
      image: "https://via.placeholder.com/600x450/e8f5e9/1a3a3a?text=AR+Project"
    },
    {
      id: 2,
      title: "AI Math Tutor",
      description: "Generating animated lessons via LLMs and multi-threaded processing.",
      image: "https://via.placeholder.com/600x450/f9fbe7/1a3a3a?text=AI+Tutor"
    },
    {
      id: 3,
      title: "Memory Allocator",
      description: "Custom malloc and free implementations optimized for speed.",
      image: "https://via.placeholder.com/600x450/d2e0db/1a3a3a?text=C+Project"
    },
    {
      id: 4,
      title: "Web3 Funding",
      description: "Ethereum crowdfunding application with Solidity smart contracts.",
      image: "https://via.placeholder.com/600x450/f1f8e9/1a3a3a?text=Web3+Project"
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
