import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const sections = ['hero', 'projects', 'about', 'footer'];
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#hero" className={activeSection === 'hero' ? 'active-pill' : ''}>Work</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className={activeSection === 'projects' ? 'active-pill' : ''}>Projects</a>
          </li>
          <li className="nav-item">
            <a href="#about" className={activeSection === 'about' ? 'active-pill' : ''}>About</a>
          </li>
          <li className="nav-item">
            <a href="#footer" className={activeSection === 'footer' ? 'active-pill' : ''}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
