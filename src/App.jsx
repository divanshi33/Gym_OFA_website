import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

// Reset scroll position to top when changing pages
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const cursorGlowRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const loadTimer = setTimeout(() => setLoading(false), 1800);
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      setShowBackToTop(window.scrollY > 400);
    };
    const handleMouseMove = (e) => {
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.left = `${e.clientX}px`;
        cursorGlowRef.current.style.top = `${e.clientY}px`;
      }
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${e.clientX}px`;
        cursorDotRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(loadTimer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-container">
        {/* Scroll Progress Indicator */}
        <div className="scroll-progress-container">
          <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
        </div>
        {/* Loading Screen Overlay */}
        <div className={`loading-screen ${!loading ? 'fade-out' : ''}`}>
          <div className="loading-spinner-box">
            <div className="loading-ring"></div>
            <div className="loading-logo">OFA</div>
          </div>
        </div>
        {/* Cursor Glow effects */}
        <div className="cursor-glow" ref={cursorGlowRef}></div>
        <div className="custom-cursor-dot" ref={cursorDotRef}></div>
        {/* Navigation Header */}
        <Navbar />
        {/* Page Routes */}
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
        {/* Footer */}
        <Footer />
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/917827127138"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float-btn"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
            <path d="M16.002 2C8.268 2 2 8.268 2 16.002a13.953 13.953 0 001.887 7.022L2 30l7.185-1.873A13.955 13.955 0 0016.002 30C23.732 30 30 23.732 30 16.002 30 8.268 23.732 2 16.002 2zm7.088 19.37c-.3.84-1.748 1.607-2.410 1.712-.616.097-1.390.137-2.243-.140a20.61 20.61 0 01-2.031-.750c-3.573-1.544-5.905-5.130-6.083-5.367-.180-.237-1.460-1.940-1.460-3.703s.924-2.627 1.253-2.986c.328-.360.716-.450.954-.450l.685.013c.220.010.517-.083.810.618.300.720 1.017 2.480 1.107 2.660.090.180.150.390.030.630-.120.240-.180.390-.360.600-.180.210-.378.470-.540.630-.180.180-.367.375-.158.735.210.360.935 1.543 2.007 2.499 1.380 1.230 2.543 1.610 2.903 1.790.360.180.570.150.780-.090.210-.240.900-1.050 1.140-1.410.240-.360.480-.300.810-.180.330.120 2.100 1.005 2.460 1.185.360.180.600.270.690.420.090.147.090.850-.210 1.685z" />
          </svg>
        </a>
        {/* Floating Back To Top Button */}
        <button
          className={`back-to-top-btn ${showBackToTop ? 'visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </BrowserRouter>
  );
}

