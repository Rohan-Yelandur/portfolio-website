import React from 'react';
import './AboutContent.css';

const AboutContent = () => {
  return (
    <div className="app-content">
      <h2>About Me</h2>
      <div className="about-section">
        <p>
          Welcome to my portfolio! I'm a passionate developer with expertise in 
          building modern web applications.
        </p>
        <p>
          I specialize in creating intuitive user interfaces and robust backend systems. 
          My goal is to craft solutions that are both functional and aesthetically pleasing.
        </p>
        <div className="about-details">
          <h3>Contact Information</h3>
          <ul>
            <li><strong>Email:</strong> your.email@example.com</li>
            <li><strong>Location:</strong> Your City, Country</li>
            <li><strong>GitHub:</strong> github.com/yourusername</li>
            <li><strong>LinkedIn:</strong> linkedin.com/in/yourprofile</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
