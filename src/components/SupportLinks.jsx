import React from 'react';
import { Phone, MessageSquare, Mail, MapPin, Clock } from 'lucide-react';
import './SupportLinks.css';

const QUICK_LINKS = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 7827127138',
    href: 'tel:+917827127138',
    type: 'call'
  },
  {
    icon: MessageSquare,
    label: 'WhatsApp',
    value: 'Chat with us now',
    href: 'https://wa.me/917827127138',
    type: 'wa'
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'okfitnessacademy@gmail.com',
    href: 'mailto:okfitnessacademy@gmail.com',
    type: 'email'
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Vasant Kunj, Purple Point, New Delhi – 110070',
    href: 'https://maps.google.com/?q=Vasant+Kunj+New+Delhi',
    type: 'map'
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon – Sat: 8 AM – 8 PM',
    href: null,
    type: 'hours'
  }
];

const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    color: '#E1306C',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
      </svg>
    )
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    color: '#FF0000',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
      </svg>
    )
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    color: '#1877F2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    )
  }
];

export default function SupportLinks() {
  return (
    <section id="support" className="support-section">
      <div className="support-bg-glow support-glow-left"></div>
      <div className="support-bg-glow support-glow-right"></div>

      <div className="section-title-container">
        <span className="section-subtitle">WE'RE HERE FOR YOU</span>
        <h2 className="section-title">CUSTOMER SUPPORT</h2>
      </div>

      <p className="support-intro">
        Have a question, need help with your programme, or just want to say hi?
        Reach us through any of the channels below — we typically respond within a few hours.
      </p>

      {/* Quick contact tiles */}
      <div className="support-links-grid">
        {QUICK_LINKS.map((link, idx) => {
          const Icon = link.icon;
          const inner = (
            <>
              <div className={`support-link-icon-wrap type-${link.type}`}>
                <Icon size={22} />
              </div>
              <div className="support-link-text">
                <span className="support-link-label">{link.label}</span>
                <span className="support-link-value">{link.value}</span>
              </div>
              {link.href && <span className="support-link-arrow">→</span>}
            </>
          );

          return link.href ? (
            <a
              key={idx}
              href={link.href}
              className="support-link-card glass-panel"
              target={link.type === 'wa' || link.type === 'map' ? '_blank' : undefined}
              rel={link.type === 'wa' || link.type === 'map' ? 'noopener noreferrer' : undefined}
            >
              {inner}
            </a>
          ) : (
            <div key={idx} className="support-link-card glass-panel no-link">
              {inner}
            </div>
          );
        })}
      </div>

      {/* Social media row */}
      <div className="support-socials-row">
        <span className="support-socials-label">Follow us on social media:</span>
        <div className="support-socials-icons">
          {SOCIALS.map((s, idx) => (
            <a
              key={idx}
              href={s.href}
              className="support-social-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{ '--social-color': s.color }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
