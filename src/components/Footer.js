import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { scrollToSection } from './scrollUtils';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Let's Connect</h3>
            <p className="footer-text">
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out if you'd like to work together!
            </p>
            <div className="footer-social">
              <a 
                href="mailto:r.yelandur@gmail.com" 
                className="footer-social-link"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a 
                href="https://github.com/Rohan-Yelandur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/rohan-yelandur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <span 
                  className="footer-link"
                  onClick={() => scrollToSection('home', 70)}
                >
                  Home
                </span>
              </li>
              <li>
                <span 
                  className="footer-link"
                  onClick={() => scrollToSection('about', 70)}
                >
                  About
                </span>
              </li>
              <li>
                <span 
                  className="footer-link"
                  onClick={() => scrollToSection('projects', 70)}
                >
                  Projects
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {currentYear} Rohan Yelandur. Made with <FaHeart className="heart-icon" /> using React
            </p>
          </div>
          <div className="footer-scroll-top">
            <button 
              className="scroll-top-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Scroll to top"
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;