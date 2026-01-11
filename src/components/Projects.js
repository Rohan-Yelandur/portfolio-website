import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const [contributionCount, setContributionCount] = useState(null);

  useEffect(() => {
    // Fetch contribution data from public API
    fetch('https://github-contributions-api.jogruber.de/v4/Rohan-Yelandur')
      .then(response => response.json())
      .then(data => {
        // Calculate contributions for the last 365 days
        // The API returns all contributions sorted by date
        // We'll approximate "last year" as the last 365 entries that have passed or just use 2025+2026 totals 
        // A safer bet for "snake" matching is the last 365 days.
        const today = new Date();
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(today.getFullYear() - 1);

        const total = data.contributions.reduce((acc, day) => {
          const date = new Date(day.date);
          if (date >= oneYearAgo && date <= today) {
            return acc + day.count;
          }
          return acc;
        }, 0);

        setContributionCount(total);
      })
      .catch(err => console.error("Failed to fetch github contributions:", err));
  }, []);

  const projects = [
    {
      id: 1,
      title: "AR Musical Instrument Platform",
      description: "Augmented-reality platform for playing and learning instruments in the browser.",
      image: "/media/harmonium_thumbnail.PNG",
      path: "/projects/ar-musical"
    },
    {
      id: 2,
      title: "AI Math Tutor",
      description: "Custom video generation pipeline to create animated and narrated math lessons.",
      image: "/media/manim-ai_thumbnail.PNG",
      path: "/projects/ai-math-tutor"
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
      <h2 className="section-title">Check out my work!</h2>
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

      <div className="github-snake-container">
        <h3 className="snake-heading">I'm Always Building 👨‍💻</h3>
        <p className="snake-subtext">
          I've contributed to GitHub 
          {contributionCount !== null ? ` ${contributionCount} times ` : ''}
          in the last year to personal and open source projects + startups.
        </p>
        <img
          src="https://raw.githubusercontent.com/Rohan-Yelandur/Rohan-Yelandur/output/github-snake.svg"
          alt="GitHub Contributions Snake Animation"
        />
      </div>
    </section>
  );
};

export default Projects;
