import React, { useEffect, useRef } from 'react';
import { Home, Dumbbell, Apple, Activity, Scale, Heart } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Offers.css';

gsap.registerPlugin(ScrollTrigger);

const OFFERS = [
  {
    icon: Heart,
    title: 'Personal Training',
    desc: 'Certified trainers visit your home, society gym, or outdoor location and provide one-on-one fitness coaching tailored to your goals.'
  },
  {
    icon: Dumbbell,
    title: 'Strength Training',
    desc: 'Build muscle mass, improve strength, and enhance physical performance with customized workout programs.'
  },
  {
    icon: Scale,
    title: 'Weight Management',
    desc: 'Healthy and sustainable weight loss or weight gain programs designed according to individual requirements.'
  },
  {
    icon: Activity,
    title: 'Functional Fitness',
    desc: 'Improve mobility, flexibility, balance, and everyday physical performance through science-backed techniques.'
  },
  {
    icon: Apple,
    title: 'Nutritional Counseling',
    desc: 'Customized meal plans and nutrition guidance to support your fitness journey and amplify results.'
  },
  {
    icon: Home,
    title: 'Home Workout Training',
    desc: 'Professional fitness coaching at your home without needing a gym membership — convenient and effective.'
  }
];

export default function Offers() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll('.offer-card');
    
    gsap.fromTo(
      cards,
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 78%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  return (
    <section id="services" className="offers-section">
      <div className="section-title-container">
        <span className="section-subtitle">OUR CAPABILITIES</span>
        <h2 className="section-title">WHAT WE OFFER</h2>
      </div>

      <div className="offers-grid" ref={containerRef}>
        {OFFERS.map((offer, idx) => {
          const IconComponent = offer.icon;
          return (
            <div key={idx} className="offer-card glass-panel">
              <div className="offer-icon-wrapper">
                <IconComponent size={32} className="offer-icon" />
              </div>
              <h3 className="offer-card-title">{offer.title}</h3>
              <p className="offer-card-desc">{offer.desc}</p>
              <div className="offer-card-glow-overlay"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
