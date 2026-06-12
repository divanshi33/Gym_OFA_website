import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import trainer1Img from '../trainer_1.png';
import trainer2Img from '../trainer_2.png';
import './Trainers.css';

gsap.registerPlugin(ScrollTrigger);

export default function Trainers() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const trainerLeftRef = useRef(null);
  const trainerRightRef = useRef(null);
  const nameLeftRef = useRef(null);
  const nameRightRef = useRef(null);

  useEffect(() => {
    // Fade up animation when entering the viewport
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    );

    // Scroll-linked synchronized scaling
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom', // Start scaling when top of section enters bottom of viewport
        end: 'bottom top',   // End scaling when bottom of section leaves top of viewport
        scrub: 1,            // Smooth scrub
      }
    });

    tl.to(titleRef.current, {
      scale: 0.8,
      opacity: 0.8,
      duration: 1
    }, 0)
    .to([trainerLeftRef.current, trainerRightRef.current], {
      scale: 1.12,
      duration: 1
    }, 0)
    .to([nameLeftRef.current, nameRightRef.current], {
      scale: 1.15,
      color: '#00E5D4',
      duration: 1
    }, 0);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section id="about" className="trainers-section" ref={sectionRef}>
      <div className="trainers-bg-glow"></div>
      
      {/* Title */}
      <div className="trainers-title-wrapper" ref={titleRef}>
        <span className="section-subtitle">THE ELITE TEAM</span>
        <h2 className="trainers-heading">TRAINERS</h2>
      </div>

      {/* Trainers Cards Container */}
      <div className="trainers-container" ref={containerRef}>
        
        {/* Trainer 1: Sunny */}
        <div className="trainer-card-wrapper" ref={trainerLeftRef}>
          <div className="trainer-card glass-panel">
            <div className="trainer-img-container">
              <img src={trainer1Img} alt="Trainer Sunny" className="trainer-img" />
              <div className="trainer-overlay">
                <div className="trainer-specialty">STRENGTH & CONDITIONING</div>
              </div>
            </div>
            <div className="trainer-info">
              <h3 className="trainer-name" ref={nameLeftRef}>Sunny</h3>
              <p className="trainer-role">Head Strength Coach</p>
            </div>
          </div>
        </div>

        {/* Trainer 2: Razab */}
        <div className="trainer-card-wrapper" ref={trainerRightRef}>
          <div className="trainer-card glass-panel">
            <div className="trainer-img-container">
              <img src={trainer2Img} alt="Trainer Razab" className="trainer-img" />
              <div className="trainer-overlay">
                <div className="trainer-specialty">CARDIO & ATHLETIC PERFORMANCE</div>
              </div>
            </div>
            <div className="trainer-info">
              <h3 className="trainer-name" ref={nameRightRef}>Razab</h3>
              <p className="trainer-role">Elite Conditioning Expert</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
