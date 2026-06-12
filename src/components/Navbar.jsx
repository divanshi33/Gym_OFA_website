import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          OFA <span className="text-gold">GYM</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'active' : ''} 
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            About Us
          </NavLink>
          <NavLink 
            to="/testimonials" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Testimonials
          </NavLink>
          <NavLink 
            to="/gallery" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Gallery
          </NavLink>
          <NavLink 
            to="/trainers" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Our Trainers
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Contact Us
          </NavLink>
        </nav>

        <div className="navbar-actions">
          <Link 
            to="/contact" 
            className="btn-gold navbar-auth-btn"
          >
            Book Free Trial
          </Link>

          <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle Menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'active' : ''} 
            onClick={closeMobileMenu}
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'active' : ''} 
            onClick={closeMobileMenu}
          >
            About Us
          </NavLink>
          <NavLink 
            to="/testimonials" 
            className={({ isActive }) => isActive ? 'active' : ''} 
            onClick={closeMobileMenu}
          >
            Testimonials
          </NavLink>
          <NavLink 
            to="/gallery" 
            className={({ isActive }) => isActive ? 'active' : ''} 
            onClick={closeMobileMenu}
          >
            Gallery
          </NavLink>
          <NavLink 
            to="/trainers" 
            className={({ isActive }) => isActive ? 'active' : ''} 
            onClick={closeMobileMenu}
          >
            Our Trainers
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? 'active' : ''} 
            onClick={closeMobileMenu}
          >
            Contact Us
          </NavLink>

          <Link 
            to="/contact" 
            onClick={closeMobileMenu} 
            className="btn-gold mobile-auth-btn"
          >
            Book Free Trial
          </Link>
        </nav>
      </div>
    </header>
  );
}
