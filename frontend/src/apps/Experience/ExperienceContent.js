import React from 'react';
import './ExperienceContent.css';

const ExperienceContent = () => {
  const experiences = [
    {
      role: 'Senior Software Developer',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      responsibilities: [
        'Lead development of customer-facing web applications',
        'Mentor junior developers and conduct code reviews',
        'Implement CI/CD pipelines and improve development workflow'
      ]
    },
    {
      role: 'Frontend Developer',
      company: 'Web Solutions LLC',
      period: '2020 - 2022',
      responsibilities: [
        'Built responsive web applications using React',
        'Collaborated with UX designers to implement modern interfaces',
        'Optimized application performance and accessibility'
      ]
    },
    {
      role: 'Junior Developer',
      company: 'StartUp XYZ',
      period: '2019 - 2020',
      responsibilities: [
        'Developed features for company\'s main product',
        'Fixed bugs and improved code quality',
        'Participated in agile development process'
      ]
    }
  ];

  return (
    <div className="app-content">
      <h2>Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h3>{exp.role}</h3>
              <span className="experience-period">{exp.period}</span>
            </div>
            <h4>{exp.company}</h4>
            <ul className="responsibilities-list">
              {exp.responsibilities.map((resp, respIndex) => (
                <li key={respIndex}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceContent;
