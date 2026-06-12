import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell } from 'lucide-react';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="notfound-wrapper">
      <div className="notfound-content glass-panel">
        <Dumbbell size={64} className="notfound-icon text-neon" />
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">Page Not Found</h2>
        <p className="notfound-text">
          Looks like you strayed from your fitness track. Let's get you back to the academy dashboard.
        </p>
        <Link to="/" className="btn-notfound">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
