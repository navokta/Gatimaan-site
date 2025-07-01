import React, { useEffect, useRef } from 'react';
import './Header.css';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const hamburgerRef = useRef(null);
  const navLinksRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const hamburger = hamburgerRef.current;
    const navLinks = navLinksRef.current;

    const handleClickOutside = (e) => {
      if (
        hamburger &&
        navLinks &&
        !hamburger.contains(e.target) &&
        !navLinks.contains(e.target)
      ) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleMenu = () => {
    hamburgerRef.current.classList.toggle('active');
    navLinksRef.current.classList.toggle('active');
  };

  const handleNavClick = () => {
    hamburgerRef.current.classList.remove('active');
    navLinksRef.current.classList.remove('active');
  };

  return (
    <header className="navbar">
      <div className="logo des">
        <NavLink to="/">
          <button>GATIMAAN</button>
        </NavLink>
      </div>

      <button
        className="hamburger des"
        aria-label="Toggle menu"
        onClick={toggleMenu}
        ref={hamburgerRef}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav>
        <ul className="nav-links" ref={navLinksRef}>
          <li
            className={`nav-item des ${
              location.pathname === '/' ? 'available' : ''
            }`}
            onClick={handleNavClick}
          >
            <NavLink to="/">Home</NavLink>
          </li>
          <li
            className={`nav-item des ${
              location.pathname === '/layout/about' ? 'available' : ''
            }`}
            onClick={handleNavClick}
          >
            <NavLink to="/layout/about">About</NavLink>
          </li>
          <li
            className={`nav-item des ${
              location.pathname === '/layout/courses' ? 'available' : ''
            }`}
            onClick={handleNavClick}
          >
            <NavLink to="/layout/courses">Courses</NavLink>
          </li>
          <li
            className={`nav-item des ${
              location.pathname === '/layout/contact' ? 'available' : ''
            }`}
            onClick={handleNavClick}
          >
            <NavLink to="/layout/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
