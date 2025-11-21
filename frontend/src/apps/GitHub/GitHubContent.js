import React from 'react';
import './GitHubContent.css';

const GitHubContent = () => {
  return (
    <div className="app-content link-content">
      <div className="link-icon">🐙</div>
      <h2>GitHub Profile</h2>
      <p>Check out my repositories and open source contributions on GitHub.</p>
      <a 
        href="https://github.com/Rohan-Yelandur" 
        target="_blank" 
        rel="noopener noreferrer"
        className="open-link-button github-button"
      >
        Open GitHub Profile
      </a>
    </div>
  );
};

export default GitHubContent;
