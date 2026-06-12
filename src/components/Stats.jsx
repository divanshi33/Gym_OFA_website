import React, { useState, useEffect, useRef } from 'react';
import './Stats.css';

function Counter({ target, suffix = '', duration = 1800 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTime = null;
    const startValue = 0;
    const endValue = parseInt(target, 10);

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing out quadratic
      const easeProgress = percentage * (2 - percentage);
      const currentValue = Math.floor(startValue + easeProgress * (endValue - startValue));
      
      setCount(currentValue);

      if (progress < duration) {
        window.requestAnimationFrame(animateCount);
      } else {
        setCount(endValue);
      }
    };

    window.requestAnimationFrame(animateCount);
  }, [started, target, duration]);

  return <span ref={elementRef} className="counter-number">{count}{suffix}</span>;
}

const STATS_DATA = [
  { target: '500', suffix: '+', label: 'Members Joined' },
  { target: '25', suffix: '+', label: 'Elite Trainers' },
  { target: '10', suffix: '+', label: 'Years Experience' },
  { target: '50', suffix: '+', label: 'Fitness Programs' }
];

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-grid-wrapper glass-panel">
        <div className="stats-container">
          {STATS_DATA.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value">
                <Counter target={stat.target} suffix={stat.suffix} />
              </div>
              <div className="stat-label">{stat.label}</div>
              {index < STATS_DATA.length - 1 && <div className="stat-divider"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
