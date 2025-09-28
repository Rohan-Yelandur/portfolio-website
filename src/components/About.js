import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              Hello! I'm a passionate full-stack developer with a love for creating 
              beautiful, functional, and user-centered digital experiences. I enjoy 
              working with modern technologies and constantly learning new skills to 
              stay at the forefront of web development.
            </p>
            
            <p className="about-paragraph">
              My journey in development started with curiosity about how websites work, 
              and has evolved into a deep appreciation for clean code, thoughtful design, 
              and seamless user experiences. I believe in the power of technology to 
              solve real-world problems and make people's lives better.
            </p>
            
            <p className="about-paragraph">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or enjoying a good cup of coffee 
              while sketching out ideas for my next project.
            </p>
          </div>
          
          <div className="skills">
            <h3 className="skills-title">Skills & Technologies</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4 className="category-title">Frontend</h4>
                <ul className="skill-list">
                  <li>React.js</li>
                  <li>JavaScript (ES6+)</li>
                  <li>HTML5 & CSS3</li>
                  <li>TypeScript</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h4 className="category-title">Backend</h4>
                <ul className="skill-list">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Python</li>
                  <li>RESTful APIs</li>
                  <li>Database Design</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h4 className="category-title">Tools & Others</h4>
                <ul className="skill-list">
                  <li>Git & GitHub</li>
                  <li>VS Code</li>
                  <li>Figma</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;