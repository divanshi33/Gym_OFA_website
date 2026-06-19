import React from 'react';
import Hero from '../components/Hero';
import Offers from '../components/Offers';
import Stats from '../components/Stats';
import About from './About';
import TestimonialsPage from './TestimonialsPage';
import Gallery from '../components/Gallery';
import TrainersPage from './TrainersPage';
import Contact from '../components/Contact';
import { ArrowRight, Dumbbell, Phone } from 'lucide-react';
import './Home.css';

export default function Home() {
  return (
    <main>
      <div id="home">
        <Hero />
        <Offers />
        <Stats />
      </div>

      {/* ── Book Free Trial CTA ── */}
      <section className="home-cta-section">
        {/* Background radial blobs */}
        <div className="home-cta-blob home-cta-blob-1"></div>
        <div className="home-cta-blob home-cta-blob-2"></div>

        <div className="home-cta-inner">
          <div className="home-cta-badge">
            <Dumbbell size={16} />
            <span>LIMITED SLOTS AVAILABLE</span>
          </div>

          <h2 className="home-cta-headline">
            Start Your <span className="home-cta-highlight">Elite Fitness</span> Journey Today
          </h2>

          <p className="home-cta-subtext">
            Experience world-class personal training at your home, society gym, or outdoor location.
            Book your <strong>FREE trial session</strong> now — no commitment required.
          </p>

          <div className="home-cta-actions">
            <a href="#contact" className="home-cta-btn-primary">
              Book Free Trial <ArrowRight size={18} />
            </a>
            <a href="tel:+917827127138" className="home-cta-btn-secondary">
              <Phone size={16} /> Call Now
            </a>
          </div>

          <div className="home-cta-trust-strip">
            <span>✓ Certified Coaches</span>
            <span>✓ Home Visits</span>
            <span>✓ Personalised Plans</span>
            <span>✓ No Hidden Fees</span>
          </div>
        </div>
      </section>

      <About />
      <TestimonialsPage />
      <Gallery />
      <TrainersPage />
      <Contact />
    </main>
  );
}
