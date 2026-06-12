import React from 'react';
import Testimonials from '../components/Testimonials';
import { Award, Zap, TrendingUp } from 'lucide-react';
import './TestimonialsPage.css';

const SUCCESS_STORIES = [
  {
    name: 'Aman Sharma',
    achievement: 'Lost 18kg & Built Core Strength',
    duration: '6 Months',
    beforeUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400',
    afterUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=400',
    highlight: 'Overcame chronic back pain through structured rehabilitation and functional strength training with Coach Sunny.'
  },
  {
    name: 'Rohan Verma',
    achievement: 'Gained 8kg Lean Muscle Mass',
    duration: '4 Months',
    beforeUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400',
    afterUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=400',
    highlight: 'Optimized metabolic rate and diet plan under ISSA Nutritionist Coach Razab, coupled with progressive overload.'
  }
];

export default function TestimonialsPage() {
  return (
    <div className="page-wrapper">
    <div className="testimonials-page-wrapper">
      <div className="inner-page-hero">
        <span className="subtitle-neon">OFA SUCCESS STORIES</span>
        <h1 className="title-glow">CLIENT TRANSFORMATIONS</h1>
        <p className="subtitle-desc">
          Real results from real members. See how our dedicated training programs have reshaped lives.
        </p>
      </div>

      {/* Auto Carousel Component */}
      <div className="carousel-section-container">
        <Testimonials />
      </div>

      {/* Before and After Section */}
      <section className="transformations-section">
        <div className="section-title-container">
          <span className="section-subtitle">VISUAL EVIDENCE</span>
          <h2 className="section-title">BEFORE & AFTER</h2>
        </div>

        <div className="transformations-grid">
          {SUCCESS_STORIES.map((story, idx) => (
            <div key={idx} className="transformation-card glass-panel">
              <div className="transformation-images">
                <div className="image-side">
                  <span className="label-side">BEFORE</span>
                  <img src={story.beforeUrl} alt={`${story.name} Before`} className="trans-img" />
                </div>
                <div className="image-side">
                  <span className="label-side label-after">AFTER</span>
                  <img src={story.afterUrl} alt={`${story.name} After`} className="trans-img highlight-border" />
                </div>
              </div>
              <div className="transformation-details">
                <h3 className="trans-name">{story.name}</h3>
                <p className="trans-achievement"><Zap size={14} className="text-aqua" /> {story.achievement}</p>
                <p className="trans-duration"><TrendingUp size={14} className="text-aqua" /> Duration: {story.duration}</p>
                <p className="trans-highlight">"{story.highlight}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fitness Journey Highlights */}
      <section className="journey-highlights-section glass-panel">
        <div className="highlights-header">
          <Award size={36} className="text-aqua-glow" />
          <h2 className="highlights-title">OFA FITNESS JOURNEY PATHWAY</h2>
        </div>
        <div className="timeline-grid">
          <div className="timeline-item">
            <div className="timeline-badge">1</div>
            <h4>Consultation & Analysis</h4>
            <p>We analyze your body metrics, movement patterns, and custom nutritional requirements.</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-badge">2</div>
            <h4>Personalized Strategy</h4>
            <p>Our trainers program customized resistance training, target ranges, and macro counts.</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-badge">3</div>
            <h4>Accountability & Adaptability</h4>
            <p>Routine body assessments and biomechanical updates keep you progressing towards your goal.</p>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}
