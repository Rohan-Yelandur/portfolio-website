import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { scrollToSection } from './scrollUtils';
import './Hero.css';
import profilePicture from '../assets/profile_picture.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image">
            <img 
              src={profilePicture} 
              alt="Profile" 
              className="profile-image"
            />
          </div>
          
          <div className="hero-text">
            <h1 className="hero-title">Hello, I'm <span className="highlight">Rohan Yelandur</span></h1>
            <p className="hero-subtitle">Full Stack Developer & UI/UX Designer</p>
            <p className="hero-description">
              Passionate about creating beautiful, functional, and user-centered digital experiences.
            </p>
          </div>
          
          <div className="social-links">
            <a 
              href="mailto:r.yelandur@gmail.com" 
              className="social-link"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a 
              href="https://github.com/Rohan-Yelandur" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/rohan-yelandur" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
          
          <div className="hero-actions">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects', 70)}
            >
              View My Work
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('about', 70)}
            >
              About Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;