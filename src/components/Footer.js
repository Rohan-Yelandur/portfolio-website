import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  // Initialize randomly
  const [pet, setPet] = useState(Math.random() < 0.5 ? 'pug' : 'kitten');

  useEffect(() => {
    // Preload pet images to prevent glitches when switching
    const images = ['/media/pug.gif', '/media/kitten.gif'];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const handleAnimationIteration = () => {
    // Strictly switch to the other pet to avoid streaks (ensure it changes)
    setPet(prevPet => prevPet === 'pug' ? 'kitten' : 'pug');
  };

  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <h2 className="footer-title">Let's build something <span className="shine">together.</span></h2>
        <div className="footer-links">
          <a href="mailto:r.yelandur@gmail.com" className="email-link">
            <FaEnvelope className="footer-icon" /> r.yelandur@gmail.com
          </a>
          <div className="social-links">
            <a href="https://linkedin.com/in/rohan-yelandur" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="linkedin">
              <FaLinkedin className="social-icon-img" />
            </a>
            <a href="https://github.com/Rohan-Yelandur" target="_blank" rel="noopener noreferrer" title="GitHub" className="github">
              <FaGithub className="social-icon-img" />
            </a>
          </div>
        </div>
        <p className="copyright">&copy; {new Date().getFullYear()} Rohan Yelandur</p>
      </div>
      <div className="pet-container">
        <img
          key={pet} // Force re-render to restart animation cleanly
          src={`/media/${pet}.gif`}
          alt={`Walking ${pet}`}
          className={`pet-walk ${pet}`}
          onAnimationIteration={handleAnimationIteration}
        />
      </div>
    </footer>
  );
};

export default Footer;
