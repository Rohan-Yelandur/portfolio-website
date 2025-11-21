import React from 'react';
import './LinkedInContent.css';

const LinkedInContent = () => {
  return (
    <div className="app-content link-content">
      <div className="link-icon">💼</div>
      <h2>LinkedIn Profile</h2>
      <p>Visit my LinkedIn profile to connect and see my professional background.</p>
      <a 
        href="https://www.linkedin.com/in/rohan-yelandur/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="open-link-button"
      >
        Open LinkedIn Profile
      </a>
    </div>
  );
};

export default LinkedInContent;
