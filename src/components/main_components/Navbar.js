import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

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
      <div className="nav-content">
        <a href="#showcase" className="logo" onClick={() => setIsOpen(false)}>VI</a>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#showcase" onClick={() => setIsOpen(false)}><span>00. </span>About</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}><span>01. </span>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}><span>02. </span>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;