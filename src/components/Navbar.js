import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { scrollToSection } from './scrollUtils';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScrollToSection = (sectionId) => {
    scrollToSection(sectionId, 70);
    closeMenu();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span onClick={() => handleScrollToSection('home')}>Portfolio</span>
        </div>
        
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <div className="navbar-item">
            <span 
              className="navbar-link" 
              onClick={() => handleScrollToSection('home')}
            >
              Home
            </span>
          </div>
          <div className="navbar-item">
            <span 
              className="navbar-link" 
              onClick={() => handleScrollToSection('about')}
            >
              About
            </span>
          </div>
          <div className="navbar-item">
            <span 
              className="navbar-link" 
              onClick={() => handleScrollToSection('projects')}
            >
              Projects
            </span>
          </div>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;