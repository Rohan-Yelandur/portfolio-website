import React from 'react';
import './SkillsContent.css';

const SkillsContent = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'TypeScript']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Python', 'Express', 'REST APIs', 'Database Design']
    },
    {
      category: 'Tools & Other',
      skills: ['Git', 'VS Code', 'Webpack', 'npm', 'Agile']
    }
  ];

  return (
    <div className="app-content">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsContent;
