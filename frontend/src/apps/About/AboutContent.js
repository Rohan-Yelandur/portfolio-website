import React from 'react';
import './AboutContent.css';

const AboutContent = () => {
  return (
    <div className="tinder-card">
      <div className="tinder-image">
        <img 
          src="/profile_picture.jpg" 
          alt="Rohan Yelandur" 
          className="profile-photo"
        />
      </div>
      
      <div className="tinder-info">
        <div className="name-age">
          <h1>Rohan Yelandur</h1>
          <span className="age">19</span>
        </div>
        
        <div className="location-info">
          <div className="info-item">
            <span className="icon">🎓</span>
            <span>Studying at UT Austin</span>
          </div>
          <div className="info-item">
            <span className="icon">📍</span>
            <span>Austin, Texas</span>
          </div>
        </div>
        
        <div className="looking-for">
          <span className="icon">💼</span>
          <span>Looking for exciting opportunities</span>
        </div>
        
        <div className="about-me-section">
          <h3>About me</h3>
          <p>
            CS student @ UT Austin passionate about building innovative software. 
            From full-stack development to AI/ML and robotics, I love creating 
            scalable solutions that make an impact.
          </p>
          <p>
            When I'm not coding, you'll find me at the gym, hiking outdoors, 
            or playing basketball.
          </p>
        </div>
        
        <div className="interests-section">
          <h3>Interests</h3>
          <div className="interest-tags">
            <span className="tag">Software Engineering</span>
            <span className="tag">AI & Robotics</span>
            <span className="tag">Web3</span>
            <span className="tag">Fitness</span>
            <span className="tag">Basketball</span>
            <span className="tag">Hiking</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
