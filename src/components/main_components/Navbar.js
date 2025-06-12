import React, { useState, useEffect, useRef } from 'react';
import resumePdf from '../../res/resume.pdf';
import './Navbar.css';
import './global.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="w-1600 nav-content">
        <a href="#showcase" className="logo" onClick={() => setIsOpen(false)}>
          ilmar
          <img src='res/portfolio_logo.png'/>
        </a>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#showcase" onClick={() => setIsOpen(false)}><span>00. </span>About</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}><span>01. </span>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}><span>02. </span>Contact</a></li>
        </ul>

        <div className="right-controls">
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <span className={`bar ${isOpen ? 'open' : ''}`}></span>
            <span className={`bar ${isOpen ? 'open' : ''}`}></span>
            <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          </div>

          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-button"
          >
            View Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;