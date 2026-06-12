import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import './Gallery.css';

const GALLERY_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600',
    title: 'Heavy Lift Focus'
  },
  {
    url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600',
    title: 'Dumbbell Rows Area'
  },
  {
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600',
    title: 'Functional Rig Zone'
  },
  {
    url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=600',
    title: 'Strength Core Training'
  },
  {
    url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600',
    title: 'Core Stability & Abs'
  },
  {
    url: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=600',
    title: 'Elite Power Cage'
  }
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="section-title-container">
        <span className="section-subtitle">VISUAL WALKTHROUGH</span>
        <h2 className="section-title">GYM GALLERY</h2>
      </div>

      {/* Masonry Columns Grid */}
      <div className="gallery-masonry-grid">
        {GALLERY_IMAGES.map((img, idx) => (
          <div key={idx} className="gallery-item" onClick={() => openLightbox(idx)}>
            <img src={img.url} alt={img.title} className="gallery-img" loading="lazy" />
            <div className="gallery-item-hover">
              <Maximize2 size={24} className="hover-icon text-gold" />
              <h3 className="hover-title">{img.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close-btn" onClick={closeLightbox} aria-label="Close Lightbox">
            <X size={24} />
          </button>
          
          <button className="lightbox-nav-btn prev-image-btn" onClick={prevImage} aria-label="Previous image">
            <ChevronLeft size={28} />
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={GALLERY_IMAGES[lightboxIndex].url} 
              alt={GALLERY_IMAGES[lightboxIndex].title} 
              className="lightbox-img" 
            />
            <span className="lightbox-caption">{GALLERY_IMAGES[lightboxIndex].title}</span>
          </div>

          <button className="lightbox-nav-btn next-image-btn" onClick={nextImage} aria-label="Next image">
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
}
