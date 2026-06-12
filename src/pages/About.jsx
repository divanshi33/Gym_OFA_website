import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Target, Compass, Award, ShieldCheck, Zap } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <div className="page-wrapper">
    <section className="about-page-wrapper">
      <div className="inner-page-hero">
        <span className="subtitle-neon">ESTABLISHED EXCELLENCE</span>
        <h1 className="title-glow">ABOUT OK FITNESS ACADEMY</h1>
        <p className="subtitle-desc">
          We bring high-end athletic training and custom wellness directly to your location.
        </p>
      </div>

      <div className="about-grid-container">
        {/* Left column: Narrative */}
        <div className="about-narrative glass-panel">
          <h2 className="narrative-title text-aqua">WHO WE ARE</h2>
          <p className="about-para">
            At <strong>OK Fitness Academy (OFA)</strong>, we break the barriers of traditional gym models. We believe that professional, elite-level fitness coaching should adapt to your schedule and environment.
          </p>
          <p className="about-para">
            Whether you choose to train at home, in your society facility, or outdoors, our certified personal trainers come fully equipped to design and execute high-performance training regimens tailored to you.
          </p>
          
          {/* Mission & Vision Row */}
          <div className="mission-vision-row">
            <div className="mv-card">
              <div className="mv-icon-wrapper"><Target size={20} className="text-aqua" /></div>
              <h3>OUR MISSION</h3>
              <p>To eliminate barriers to health and peak performance by delivering elite personal coaching directly to our clients, ensuring consistency and accelerated results.</p>
            </div>
            <div className="mv-card">
              <div className="mv-icon-wrapper"><Compass size={20} className="text-aqua" /></div>
              <h3>OUR VISION</h3>
              <p>To be the premier mobile fitness academy in India, recognized for transforming lifestyles through science-based athletic training, complete accountability, and nutrition.</p>
            </div>
          </div>
        </div>

        {/* Right column: Highlights and Statistics */}
        <div className="about-stats-showcase">
          <div className="about-image-collage">
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=500" alt="Training Session" className="collage-img" />
          </div>

          <div className="stats-box-grid">
            <div className="about-stat-card glass-panel">
              <span className="about-stat-number">500+</span>
              <span className="about-stat-label">Happy Clients</span>
            </div>
            <div className="about-stat-card glass-panel">
              <span className="about-stat-number">50+</span>
              <span className="about-stat-label">Expert Trainers</span>
            </div>
            <div className="about-stat-card glass-panel">
              <span className="about-stat-number">10+</span>
              <span className="about-stat-label">Years Experience</span>
            </div>
            <div className="about-stat-card glass-panel">
              <span className="about-stat-number">1000+</span>
              <span className="about-stat-label">Sessions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fitness Philosophy Section */}
      <section className="philosophy-section glass-panel">
        <h2 className="philosophy-headline text-aqua">OUR FITNESS PHILOSOPHY</h2>
        <p className="philosophy-text">
          Fitness is not about short-term limits; it is about establishing permanent, positive biological and physical adaptations. At OFA, we blend compound movement progression, customized macronutrient scheduling, and recovery diagnostics to build athletic resilience and mental strength.
        </p>

        <div className="philosophy-grid">
          <div className="philosophy-card">
            <Award size={24} className="philosophy-icon" />
            <h4>Elite Biomechanics</h4>
            <p>Every coach focuses on kinetic alignment, safety, and proper execution of exercises to prevent injury and maximize muscular hypertrophy.</p>
          </div>
          <div className="philosophy-card">
            <ShieldCheck size={24} className="philosophy-icon" />
            <h4>Adaptability</h4>
            <p>No gym? No problem. Our mobile trainers provide professional-grade functional tools (kettlebells, TRX, resistance bands) at your home.</p>
          </div>
          <div className="philosophy-card">
            <Zap size={24} className="philosophy-icon" />
            <h4>Complete Nutrition</h4>
            <p>We supply personalized diet plans mapping caloric and macronutrient guidelines directly to your daily physical output metrics.</p>
          </div>
        </div>
      </section>

      {/* Why Choose OFA CTA */}
      <div className="about-cta-footer">
        <h3>Ready to experience elite, convenient coaching?</h3>
        <Link to="/contact" className="btn-gold">
          Book Your Free Trial Today
        </Link>
      </div>
    </section>
    </div>
  );
}

