import React from 'react';
import trainer1Img from '../trainer_1.png';
import trainer2Img from '../trainer_2.png';
import { Phone, MessageSquare, Award, Star, Activity, Check } from 'lucide-react';
import './TrainersPage.css';

const TRAINERS_DATA = [
  {
    name: 'Sunny',
    category: 'Head Strength Coach & Personal Trainer',
    mainPhoto: trainer1Img,
    actionPhotos: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=400'
    ],
    certifications: [
      'Gold\'s Gym Certified Trainer (GGFI)',
      'K11 Certified Personal Trainer',
      'CPR & AED Certified'
    ],
    experience: '8+ Years',
    services: [
      'Strength Training',
      'Functional Fitness',
      'Powerlifting Coaching',
      'Home Training Sessions'
    ],
    details: 'Specializes in high-intensity functional training, posture correction, and body recomposition.'
  },
  {
    name: 'Razab',
    category: 'Elite Conditioning Expert & Nutritionist',
    mainPhoto: trainer2Img,
    actionPhotos: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=400'
    ],
    certifications: [
      'ACE Certified Personal Trainer',
      'ISSA Certified Sports Nutritionist',
      'Advanced Kettlebell Specialist'
    ],
    experience: '6+ Years',
    services: [
      'Weight Loss / Fat Loss',
      'Weight Gain / Muscle Building',
      'Cardio & Athletic Performance',
      'Custom Diet & Nutrition Plans'
    ],
    details: 'Specializes in personalized weight management programs, athletic development, and lifestyle modification.'
  }
];

export default function TrainersPage() {
  return (
    <div className="page-wrapper">
    <div className="trainers-page-wrapper">
      <div className="inner-page-hero">
        <div className="trainers-hero-glow"></div>
        <span className="subtitle-neon">OFA ELITE INSTRUCTORS</span>
        <h1 className="title-glow">MEET OUR TRAINERS</h1>
        <p className="subtitle-desc">
          OFA brings the academy's elite fitness trainers straight to your doorstep or society gym.
        </p>
      </div>

      <div className="trainers-cards-container">
        {TRAINERS_DATA.map((trainer, idx) => (
          <div key={idx} className="trainer-profile-card-detailed glass-panel">
            <div className="trainer-visual-block">
              {/* Main Photo with OFA T-Shirt */}
              <div className="trainer-main-photo-wrapper">
                <img src={trainer.mainPhoto} alt={trainer.name} className="trainer-main-photo" />
                <span className="badge-featured">CERTIFIED COACH</span>
              </div>
              
              {/* Action Photos */}
              <div className="trainer-action-photos">
                {trainer.actionPhotos.map((photo, pIdx) => (
                  <div key={pIdx} className="action-photo-wrapper">
                    <img src={photo} alt={`${trainer.name} Action ${pIdx + 1}`} className="trainer-action-photo" />
                  </div>
                ))}
              </div>
            </div>

            <div className="trainer-info-block">
              <span className="trainer-category-tag">{trainer.category}</span>
              <h2 className="trainer-name-detailed">{trainer.name}</h2>
              <p className="trainer-exp-badge">Experience: <strong>{trainer.experience}</strong></p>
              
              <p className="trainer-bio-text">{trainer.details}</p>

              {/* Certifications */}
              <div className="info-sub-section">
                <h3 className="sub-section-title"><Award size={18} className="text-aqua" /> Certifications</h3>
                <ul className="cert-list">
                  {trainer.certifications.map((cert, cIdx) => (
                    <li key={cIdx} className="cert-item">
                      <Star size={12} className="text-aqua-glow" fill="var(--color-primary)" /> {cert}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services Provided */}
              <div className="info-sub-section">
                <h3 className="sub-section-title"><Activity size={18} className="text-aqua" /> Services Provided</h3>
                <div className="services-tag-container">
                  {trainer.services.map((service, sIdx) => (
                    <span key={sIdx} className="service-tag">
                      <Check size={12} className="text-aqua" /> {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Book / CTA */}
              <div className="trainer-card-cta">
                <a href="tel:7827127138" className="btn-call-trainer">
                  <Phone size={16} /> Call Sunny/Razab
                </a>
                <a href="https://wa.me/917827127138" target="_blank" rel="noopener noreferrer" className="btn-wa-trainer">
                  <MessageSquare size={16} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Global Academy CTA Section */}
      <section className="academy-cta-block glass-panel">
        <h2 className="cta-headline">Transform Your Lifestyle Today</h2>
        <p className="cta-paragraph">
          Book your first trial session with Sunny or Razab. Our trainers travel directly to your location with all necessary equipment.
        </p>
        <div className="cta-buttons-wrapper">
          <a href="/contact" className="btn-main-trial">
            Book Free Trial Now
          </a>
        </div>
      </section>
    </div>
    </div>
  );
}
