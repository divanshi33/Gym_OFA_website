import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../logo.png';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Toggle scrolled class
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check which section is in view
      const sections = ['home', 'testimonials', 'gallery', 'join-team', 'about', 'trainers', 'support', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call to set active section on load
    handleScroll();
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
        <a href="#home" className="logo" onClick={closeMobileMenu}>
          <img src={logoImg} alt="OFA GYM Logo" className="navbar-logo-img" />
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
          <a href="#testimonials" className={activeSection === 'testimonials' ? 'active' : ''}>Testimonials</a>
          <a href="#gallery" className={activeSection === 'gallery' ? 'active' : ''}>Gallery</a>
          <a href="#join-team" className={activeSection === 'join-team' ? 'active' : ''}>Join Team</a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About Us</a>
          <a href="#trainers" className={activeSection === 'trainers' ? 'active' : ''}>Trainers</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </nav>

        <div className="navbar-actions">
          <a 
            href="#contact" 
            className="btn-gold navbar-auth-btn"
          >
            Book Free Trial
          </a>

          <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle Menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={closeMobileMenu}>Home</a>
          <a href="#testimonials" className={activeSection === 'testimonials' ? 'active' : ''} onClick={closeMobileMenu}>Testimonials</a>
          <a href="#gallery" className={activeSection === 'gallery' ? 'active' : ''} onClick={closeMobileMenu}>Gallery</a>
          <a href="#join-team" className={activeSection === 'join-team' ? 'active' : ''} onClick={closeMobileMenu}>Join Team</a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={closeMobileMenu}>About Us</a>
          <a href="#trainers" className={activeSection === 'trainers' ? 'active' : ''} onClick={closeMobileMenu}>Trainers</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={closeMobileMenu}>Contact</a>

          <a href="#contact" onClick={closeMobileMenu} className="btn-gold mobile-auth-btn">
            Book Free Trial
          </a>
        </nav>
      </div>
    </header>
  );
}
