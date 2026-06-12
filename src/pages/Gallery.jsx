import React from 'react';
import GalleryComponent from '../components/Gallery';
import './GalleryPage.css';

export default function GalleryPage() {
  return (
    <main className="gallery-page-wrapper">
      <div className="gallery-page-hero">
        <span className="subtitle-neon">VISUAL WALKTHROUGH</span>
        <h1 className="title-glow">OFA GALLERY</h1>
        <p className="subtitle-desc">
          A glimpse into our training sessions, transformations, and the OFA experience.
        </p>
      </div>
      <GalleryComponent />
    </main>
  );
}
