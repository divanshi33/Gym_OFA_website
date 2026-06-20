import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      
      {/* Upper Grid Area */}
      <div className="footer-top-grid">
        
        {/* Brand block */}
        <div className="footer-brand-box">
          <a href="#home" className="footer-logo">
            OFA<span className="text-gold">GYM</span>
          </a>
          <p className="footer-tagline">
            Experience mobile personal fitness training at its finest. Certified trainers bringing customized programming directly to you.
          </p>
          <div className="footer-social-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://wa.me/917827127138" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </a>
          </div>
        </div>

        {/* Navigation links block */}
        <div className="footer-nav-box">
          <h4 className="footer-title">EXPLORE</h4>
          <nav className="footer-links">
            <a href="#home">Home</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#gallery">Gallery</a>
            <a href="#join-team">Join Our Team</a>
            <a href="#about">About Us</a>
            <a href="#trainers">Our Trainers</a>
            <a href="#contact">Contact Us</a>
          </nav>
        </div>

        {/* Hours block */}
        <div className="footer-hours-box">
          <h4 className="footer-title">WORKING HOURS</h4>
          <div className="footer-hours-list">
            <div className="hours-item">
              <Clock size={14} className="text-gold" />
              <div>
                <span>Monday - Saturday</span>
                <p>08:00 AM - 08:00 PM</p>
              </div>
            </div>
            <div className="hours-item">
              <Clock size={14} className="text-gold" />
              <div>
                <span>Sunday</span>
                <p>Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact info block */}
        <div className="footer-contact-box">
          <h4 className="footer-title">CONTACT INFO</h4>
          <div className="footer-contact-list">
            <div className="contact-item">
              <MapPin size={14} className="text-gold" />
              <p>Vasant Kunj, Purple Point, New Delhi, Delhi - 110070</p>
            </div>
            <div className="contact-item">
              <Mail size={14} className="text-gold" />
              <p><a href="mailto:okfitnessacademy@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>okfitnessacademy@gmail.com</a></p>
            </div>
            <div className="contact-item">
              <Phone size={14} className="text-gold" />
              <p><a href="tel:+917827127138" style={{ color: 'inherit', textDecoration: 'none' }}>7827127138</a></p>
            </div>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="footer-middle-divider"></div>

      {/* Lower Copyright Area */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} OK Fitness Academy (OFA). All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <a href="#contact">Book Free Trial</a>
        </div>
      </div>
    </footer>
  );
}
