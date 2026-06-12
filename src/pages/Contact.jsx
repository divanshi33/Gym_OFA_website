import React from 'react';
import Contact from '../components/Contact';
import './Contact.css';

export default function ContactPage() {
  return (
    <main className="contact-page-wrapper">
      <div className="contact-page-hero">
        <span className="subtitle-neon">REACH US ANYTIME</span>
        <h1 className="title-glow">CONTACT US</h1>
        <p className="subtitle-desc">
          Ready to transform your fitness? Our certified trainers are just a message away.
        </p>
      </div>
      <Contact />
    </main>
  );
}
