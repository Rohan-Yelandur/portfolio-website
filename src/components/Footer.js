import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <h2 className="footer-title">Let's build something <span className="underline">together.</span></h2>
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
    </footer>
  );
};

export default Footer;
