import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Home, Dumbbell, Apple, Activity, Scale, Heart, ArrowRight, Phone, MapPin, Users, Laptop, BookOpen, Sparkles } from 'lucide-react';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  { icon: Users,      title: 'Group Classes',              desc: 'High-energy group workouts for societies, corporates, and communities.' },
  { icon: Heart,      title: 'Couple Training',             desc: 'Achieve your fitness goals together with customized partner workouts.' },
  { icon: BookOpen,   title: 'Health Seminar & Consultation', desc: 'Expert wellness advice, assessments, and corporate seminars.' },
  { icon: Dumbbell,   title: 'Personal Fitness Training',   desc: 'Elite one-on-one training tailored to your body type and goals.' },
  { icon: Laptop,     title: 'Online Training',             desc: 'Virtual coaching sessions and real-time remote fitness planning.' },
  { icon: MapPin,     title: 'Personal Trainer in Gurgaon',  desc: 'Certified home personal trainers available across Gurgaon sectors.' },
  { icon: MapPin,     title: 'Personal Trainer in Noida',    desc: 'Elite fitness coaching brought straight to your doorstep in Noida.' },
  { icon: Sparkles,   title: 'Yoga Trainer in Delhi NCR',    desc: 'Mindfulness, flexibility, and expert yoga instruction across NCR.' },
];

export default function Hero() {
  const sectionRef   = useRef(null);
  const headlineRef  = useRef(null);
  const subRef       = useRef(null);
  const cardsRef     = useRef(null);
  const ctaRef       = useRef(null);
  const arrowRef     = useRef(null);
  const particleRef  = useRef(null);

  useEffect(() => {
    // Particles
    const pc = particleRef.current;
    if (pc) {
      pc.innerHTML = '';
      for (let i = 0; i < 18; i++) {
        const p = document.createElement('div');
        p.className = 'hero-particle';
        p.style.cssText = `
          left:${Math.random()*100}%;
          top:${Math.random()*100}%;
          width:${Math.random()*5+2}px;
          height:${p.style.width};
          animation-delay:${Math.random()*5}s;
          animation-duration:${Math.random()*10+5}s`;
        pc.appendChild(p);
      }
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from(headlineRef.current,  { opacity: 0, y: -50, duration: 1 })
        .from(subRef.current,       { opacity: 0, y: 30,  duration: 0.8 }, '-=0.5')
        .from('.hero-service-card', { opacity: 0, y: 40, scale: 0.92, stagger: 0.1, duration: 0.6 }, '-=0.4')
        .from(ctaRef.current,       { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
        .from(arrowRef.current,     { opacity: 0, y: -10, duration: 0.5 }, '-=0.2')
        .to(arrowRef.current, { y: 8, duration: 0.9, repeat: -1, yoyo: true, ease: 'power1.inOut' });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="hero-section" ref={sectionRef}>
      <div className="hero-bg-overlay"></div>
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>
      <div className="hero-light-streak-1"></div>
      <div className="hero-light-streak-2"></div>
      <div className="hero-particles-container" ref={particleRef}></div>

      <div className="hero-inner">
        {/* Badge */}
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          DELHI NCR's #1 HOME PERSONAL TRAINING
        </div>

        {/* Main headline */}
        <h1 className="hero-headline" ref={headlineRef}>
          What We <span className="hero-highlight">Offer</span>
        </h1>

        <p className="hero-sub" ref={subRef}>
          Certified coaches come <strong>directly to you</strong> — home, society gym, or outdoors.
          Elite fitness training tailored to your goals, schedule, and lifestyle.
        </p>

        {/* Service cards */}
        <div className="hero-services-grid" ref={cardsRef}>
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="hero-service-card">
                <div className="hero-service-icon-wrap">
                  <Icon size={24} className="hero-service-icon" />
                </div>
                <div className="hero-service-text">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA buttons */}
        <div className="hero-cta-row" ref={ctaRef}>
          <a href="#contact" className="btn-gold hero-cta-primary">
            Book Free Trial <ArrowRight size={18} />
          </a>
          <a href="tel:+917827127138" className="hero-cta-secondary">
            <Phone size={16} /> Call Now
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator" ref={arrowRef}>
        <span>SCROLL DOWN</span>
        <ArrowDown size={18} className="text-gold" />
      </div>
    </section>
  );
}
