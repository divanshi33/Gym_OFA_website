import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    name: 'Sarah Connor',
    role: 'Athletic Competitor',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150',
    stars: 5,
    text: 'Joining OFA GYM completely transformed my athletic capabilities. The training programs, the premium facility, and the elite community are unparalleled in this industry.'
  },
  {
    name: 'Jessica Miller',
    role: 'Executive Member',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150',
    stars: 5,
    text: 'The nutritional counseling coupled with custom personal training helped me reach my wellness goals in record time. It feels like a high-end luxury resort.'
  },
  {
    name: 'David Lance',
    role: 'Powerlifter',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    stars: 5,
    text: 'The strength equipment here is top tier, the environment is exceptionally clean, and Sunny and Razab provide invaluable technical coaching feedback.'
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayRef = useRef(null);

  const resetTimer = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
    resetTimer();
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    resetTimer();
  };

  const handleDotClick = (idx) => {
    setActiveIndex(idx);
    resetTimer();
  };

  return (
    <section className="testimonials-section">
      <div className="section-title-container">
        <span className="section-subtitle">COMMUNITY REVIEWS</span>
        <h2 className="section-title">TESTIMONIALS</h2>
      </div>

      <div className="carousel-wrapper glass-panel">
        <button className="carousel-btn prev-btn" onClick={handlePrev} aria-label="Previous testimonial">
          <ChevronLeft size={24} />
        </button>

        <div className="carousel-track">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div 
              key={idx} 
              className={`carousel-slide ${idx === activeIndex ? 'active' : ''}`}
            >
              <div className="testimonial-rating">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={18} fill="#00E5D4" color="#00E5D4" />
                ))}
              </div>
              
              <p className="testimonial-text">"{testimonial.text}"</p>

              <div className="testimonial-profile">
                <img src={testimonial.image} alt={testimonial.name} className="profile-img" />
                <div className="profile-info">
                  <h4 className="profile-name">{testimonial.name}</h4>
                  <span className="profile-role">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-btn next-btn" onClick={handleNext} aria-label="Next testimonial">
          <ChevronRight size={24} />
        </button>

        {/* Carousel Dots */}
        <div className="carousel-dots">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
