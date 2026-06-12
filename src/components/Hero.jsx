import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';
import ownerImg from '../owner.png';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);
  const wordOwnerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const ownerNameRef = useRef(null);
  const arrowRef = useRef(null);
  const particleContainerRef = useRef(null);

  useEffect(() => {
    // Generate background particles
    const particleContainer = particleContainerRef.current;
    if (particleContainer) {
      particleContainer.innerHTML = '';
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'hero-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.width = `${Math.random() * 6 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        particleContainer.appendChild(particle);
      }
    }

    // Use gsap.context to ensure complete cleanup and prevent React 18 duplicate run bugs
    const ctx = gsap.context(() => {
      // 1. Entrance animation (runs immediately on page load)
      const entranceTl = gsap.timeline();
      entranceTl
        .from(quoteRef.current, {
          opacity: 0,
          y: -40,
          duration: 1.2,
          ease: 'power3.out'
        })
        .from(wordOwnerRef.current, {
          opacity: 0,
          x: -100,
          scale: 0.8,
          duration: 1,
          ease: 'power3.out'
        }, '-=0.8')
        .from(imageContainerRef.current, {
          opacity: 0,
          scale: 0.4,
          duration: 1.2,
          ease: 'back.out(1.4)'
        }, '-=0.9')
        .from(ownerNameRef.current, {
          opacity: 0,
          x: 100,
          scale: 0.8,
          duration: 1,
          ease: 'power3.out'
        }, '-=1.1')
        .from(arrowRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.8
        }, '-=0.5')
        .to(arrowRef.current, {
          y: 8,
          duration: 0.8,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut'
        });

      // 2. Scroll-based animation using matchMedia for responsive layout
      const mm = gsap.matchMedia();

      // Desktop layout (horizontal grid)
      mm.add("(min-width: 769px)", () => {
        gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=100%',
            scrub: 1.2,
            pin: true,
            anticipatePin: 1
          }
        })
        // Quote: Scale 100% -> 0%, Opacity 1 -> 0
        .to(quoteRef.current, {
          opacity: 0,
          scale: 0,
          y: -50,
          duration: 1.5
        }, 0)
        // OWNER: Scale 100% -> 0%, Opacity 1 -> 0
        .to(wordOwnerRef.current, {
          opacity: 0,
          scale: 0,
          x: '-15vw',
          duration: 1.5
        }, 0)
        // Image: Scale from 260px (1.0) to 500px (1.92x), move upward, stronger glow
        .to(imageContainerRef.current, {
          scale: 1.92,
          y: '-10vh',
          boxShadow: '0 0 65px rgba(0, 229, 212, 0.75)',
          duration: 2
        }, 0)
        // VICKY name: Scale from 90px (1.0) to 150px (1.66x), move under the image to center
        .to(ownerNameRef.current, {
          scale: 1.66,
          x: '-25vw',
          y: '38vh',
          color: '#00E5D4',
          textShadow: '0 0 25px rgba(0, 229, 212, 0.6)',
          duration: 2
        }, 0)
        // Hide scroll down arrow
        .to(arrowRef.current, {
          opacity: 0,
          duration: 0.5
        }, 0);
      });

      // Mobile & Tablet layout (vertical stack)
      mm.add("(max-width: 768px)", () => {
        gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=100%',
            scrub: 1.2,
            pin: true,
            anticipatePin: 1
          }
        })
        // Quote: Fade and scale down slightly
        .to(quoteRef.current, {
          opacity: 0,
          scale: 0.6,
          y: -40,
          duration: 1.5
        }, 0)
        // OWNER word: Fade and slide up slightly
        .to(wordOwnerRef.current, {
          opacity: 0,
          scale: 0.6,
          y: -40,
          duration: 1.5
        }, 0)
        // Image: Moderate scale on mobile, push up slightly
        .to(imageContainerRef.current, {
          scale: 1.3,
          y: '-10vh',
          boxShadow: '0 0 45px rgba(0, 229, 212, 0.65)',
          duration: 2
        }, 0)
        // VICKY name: Keep centered (x: 0), scale moderately, position under the scaled image
        .to(ownerNameRef.current, {
          scale: 1.3,
          x: 0,
          y: '8vh',
          color: '#00E5D4',
          textShadow: '0 0 20px rgba(0, 229, 212, 0.5)',
          duration: 2
        }, 0)
        // Hide scroll down arrow
        .to(arrowRef.current, {
          opacity: 0,
          duration: 0.5
        }, 0);
      });

    }, sectionRef);

    // Clean up all GSAP bindings
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="hero-section" ref={sectionRef}>
      <div className="hero-bg-overlay"></div>
      
      {/* Background enhancements */}
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>
      <div className="hero-light-streak-1"></div>
      <div className="hero-light-streak-2"></div>
      <div className="hero-particles-container" ref={particleContainerRef}></div>
      
      {/* Motivational quote */}
      <div className="hero-quote-container" ref={quoteRef}>
        <p className="hero-quote-text">
          "Strength does not come from winning. Your struggles develop your strengths."
        </p>
      </div>

      <div className="hero-content-wrapper">
        {/* Left: OWNER */}
        <h1 className="hero-word-owner" ref={wordOwnerRef}>
          OWNER
        </h1>

        {/* Center: Circular Image Frame */}
        <div className="hero-image-outer" ref={imageContainerRef}>
          <div className="hero-image-inner">
            <img src={ownerImg} alt="Gym Owner" className="hero-owner-img" />
          </div>
          <div className="hero-image-glow-ring"></div>
        </div>

        {/* Right: Owner Name */}
        <h1 className="hero-owner-name" ref={ownerNameRef}>
          vicky
        </h1>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator" ref={arrowRef}>
        <span>SCROLL DOWN</span>
        <ArrowDown size={18} className="text-gold" />
      </div>
    </section>
  );
}
