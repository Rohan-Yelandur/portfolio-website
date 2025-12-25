import React from 'react';
import './About.css';

const About = () => {
  const experiences = [
    {
      role: "Software Development Engineer Intern",
      company: "Amazon",
      period: "May 2025 - Aug 2025"
    },
    {
      role: "AI & Robotics Researcher",
      company: "UT Austin Robotics Lab",
      period: "Jan 2025 - Present"
    },
    {
      role: "Manager",
      company: "Mathnasium",
      period: "May 2023 - Nov 2023"
    }
  ];

  return (
    <section id="about" className="about">
      <h2 className="section-title">A little about me.</h2>
      <div className="about-grid">
        <div className="about-left">
          <p className="big-text">
            I'm a Computer Science student at UT Austin <span className="hookem" onClick={() => console.log('Hookem clicked!')}>🤘</span> with a focus on AI and robotics.
          </p>
          <p className="sub-text">
            Currently researching task planning and failure mode diagnosis at the UT Austin Robotics Lab. I enjoy building things that bridge the gap between software and the physical world.
          </p>

          <div className="outside-work">
            <h3 className="sub-heading">But outside of work...</h3>
            <p className="sub-text extra-info">
              I serve as a <strong>Product Manager</strong> for the <a href="https://txproduct.org/" target="_blank" rel="noopener noreferrer" className="inline-link">Texas Product & Engineering Organization</a>,
              where I lead engineering and design teams to build end-to-end software for non-profits.
            </p>
            <p className="sub-text extra-info">
              I'm an <strong>Eagle Scout</strong>, the highest rank in the Boy Scouts of America.
              I led as a Senior Patrol Leader while completing service projects and earning the Gold Palm award.
            </p>
          </div>
        </div>
        <div className="about-right">
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <div key={index} className="exp-item">
                <span className="exp-tag">{exp.period}</span>
                <p className="exp-role">{exp.role}</p>
                <p className="exp-company">{exp.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
