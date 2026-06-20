import React from 'react';
import ownerImg from '../owner.png';
import { Award, Target, Zap, Phone, MessageSquare } from 'lucide-react';
import './OwnerSection.css';

const ACHIEVEMENTS = [
  { icon: Award,  label: '10+ Years',    sub: 'Fitness Industry Experience' },
  { icon: Target, label: '500+ Clients', sub: 'Transformed Lives' },
  { icon: Zap,    label: 'Certified',    sub: 'GGFI, K11 & CPR Trained' },
];

export default function OwnerSection() {
  return (
    <section id="owner" className="owner-section">
      {/* Decorative blobs */}
      <div className="owner-blob owner-blob-left"></div>
      <div className="owner-blob owner-blob-right"></div>

      <div className="section-title-container">
        <span className="section-subtitle">THE VISIONARY BEHIND OFA</span>
        <h2 className="section-title">MEET THE OWNER</h2>
      </div>

      <div className="owner-card-wrapper glass-panel">
        {/* Left – Photo */}
        <div className="owner-photo-col">
          <div className="owner-photo-frame">
            <img src={ownerImg} alt="Vicky – OFA Founder" className="owner-photo-img" />
            <div className="owner-photo-ring"></div>
          </div>
          <span className="owner-founder-badge">FOUNDER &amp; HEAD COACH</span>
        </div>

        {/* Right – Info */}
        <div className="owner-info-col">
          <h2 className="owner-name">Vicky</h2>
          <p className="owner-title">OK Fitness Academy (OFA) – Founder</p>

          <p className="owner-bio">
            At ok fitness academy [OFA], we bring fitness directly to you. Our mission is simple — to make health and personal training more convenient, personalized, and effective than ever before. Whether you prefer working out at home, in your society gym, or outdoors, our certified personal trainers come to your location to help you achieve your fitness goals.
          </p>
          <p className="owner-bio">
            We understand that every body is unique. That’s why we design customized workout and nutrition plans tailored to your lifestyle, fitness level, and aspirations. From strength training and weight management to functional fitness and flexibility, our trainers focus on your goals — at your pace, in your space.
          </p>
          <p className="owner-bio">
            With OK FITNESS ACADEMY [OFA], you don’t just get a workout; you get motivation, accountability, and lasting results. We’re not just about fitness — we’re about building healthier, stronger, and happier lives.
          </p>
          <p className="owner-bio">
            Don't wait till tomorrow when you can start today. <a href="#contact" style={{ color: 'var(--color-gold)', textDecoration: 'none', fontWeight: 'bold' }}>Contact Us</a> to schedule a free fitness session with our fitness trainer.
          </p>

          {/* Achievement badges */}
          <div className="owner-achievements">
            {ACHIEVEMENTS.map((a, i) => {
              const Icon = a.icon;
              return (
                <div key={i} className="owner-ach-card">
                  <Icon size={20} className="owner-ach-icon" />
                  <span className="owner-ach-label">{a.label}</span>
                  <span className="owner-ach-sub">{a.sub}</span>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="owner-cta-row">
            <a href="tel:+917827127138" className="btn-gold owner-cta-btn">
              <Phone size={16} /> Call Vicky
            </a>
            <a
              href="https://wa.me/917827127138"
              target="_blank"
              rel="noopener noreferrer"
              className="owner-wa-btn"
            >
              <MessageSquare size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
