import React, { useState } from 'react';
import { Dumbbell, Award, Users, Zap, Send, CheckCircle, ChevronRight } from 'lucide-react';
import './JoinTeam.css';

const PERKS = [
  {
    icon: Award,
    title: 'Certification Support',
    desc: 'We fund your professional certifications — ISSA, ACE, K11 and more.'
  },
  {
    icon: Zap,
    title: 'Flexible Schedule',
    desc: 'Work on your own terms. Choose your timings and locations.'
  },
  {
    icon: Users,
    title: 'Growing Community',
    desc: 'Join a family of elite coaches making a real difference in clients\' lives.'
  },
  {
    icon: Dumbbell,
    title: 'Competitive Pay',
    desc: 'Earn above-market rates with performance-based bonuses and incentives.'
  }
];

const ROLES = [
  'Personal Trainer (Home Visits)',
  'Strength & Conditioning Coach',
  'Nutritionist / Diet Consultant',
  'Yoga & Mobility Specialist',
  'Kids Fitness Trainer',
];

export default function JoinTeam() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', role: '', experience: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.role) return;
    setLoading(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '8f77e37f-a1c8-4600-98ef-83022ae38ede',
          subject: 'New Trainer Application – OFA',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          role: formData.role,
          experience: formData.experience,
          message: `New trainer application from ${formData.name} for the role: ${formData.role}. Experience: ${formData.experience || 'Not specified'}.`
        })
      });
      const result = await response.json();
      if (result.success) setSubmitted(true);
      else alert('Submission failed. Please try again.');
    } catch {
      alert('Error sending application. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="join-team" className="join-team-section">
      {/* Background decorative blobs */}
      <div className="jt-blob jt-blob-1"></div>
      <div className="jt-blob jt-blob-2"></div>

      <div className="section-title-container">
        <span className="section-subtitle">GROW WITH US</span>
        <h2 className="section-title">JOIN OUR TEAM</h2>
      </div>

      <p className="jt-intro-text">
        Are you a passionate fitness professional? OFA is always looking for motivated, certified coaches to
        join our elite mobile training team and help transform lives across Delhi NCR.
      </p>

      {/* Perks Grid */}
      <div className="jt-perks-grid">
        {PERKS.map((perk, idx) => {
          const Icon = perk.icon;
          return (
            <div key={idx} className="jt-perk-card glass-panel">
              <div className="jt-perk-icon-wrap">
                <Icon size={28} className="jt-perk-icon" />
              </div>
              <h3 className="jt-perk-title">{perk.title}</h3>
              <p className="jt-perk-desc">{perk.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Main content: roles + form */}
      <div className="jt-main-row">
        {/* Open Roles */}
        <div className="jt-roles-panel glass-panel">
          <h3 className="jt-panel-heading">Open Positions</h3>
          <ul className="jt-roles-list">
            {ROLES.map((role, idx) => (
              <li key={idx} className="jt-role-item">
                <ChevronRight size={16} className="jt-role-icon" />
                {role}
              </li>
            ))}
          </ul>
          <div className="jt-roles-note">
            <Zap size={14} className="text-aqua" />
            <span>Don't see your specialty? Apply anyway — we're always growing!</span>
          </div>
        </div>

        {/* Application Form */}
        <div className="jt-form-panel glass-panel">
          {submitted ? (
            <div className="jt-success">
              <CheckCircle size={52} className="jt-success-icon" />
              <h3>Application Received!</h3>
              <p>Thank you for your interest in joining OFA. We'll be in touch within 48 hours.</p>
              <button className="btn-gold" onClick={() => setSubmitted(false)}>Apply for Another Role</button>
            </div>
          ) : (
            <>
              <h3 className="jt-panel-heading">Apply Now</h3>
              <form className="jt-form" onSubmit={handleSubmit}>
                <div className="jt-form-group">
                  <label htmlFor="jt-name">Full Name <span className="req">*</span></label>
                  <input
                    id="jt-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="jt-form-group">
                  <label htmlFor="jt-email">Email Address <span className="req">*</span></label>
                  <input
                    id="jt-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="jt-form-group">
                  <label htmlFor="jt-phone">Phone Number <span className="req">*</span></label>
                  <input
                    id="jt-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
                <div className="jt-form-group">
                  <label htmlFor="jt-role">Role Applying For <span className="req">*</span></label>
                  <select id="jt-role" name="role" value={formData.role} onChange={handleChange} required>
                    <option value="">-- Select a role --</option>
                    {ROLES.map((role, idx) => (
                      <option key={idx} value={role}>{role}</option>
                    ))}
                    <option value="Other">Other / Open to Discussion</option>
                  </select>
                </div>
                <div className="jt-form-group">
                  <label htmlFor="jt-exp">Years of Experience</label>
                  <input
                    id="jt-exp"
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="e.g. 3 years"
                  />
                </div>
                <button type="submit" className="btn-gold jt-submit-btn" disabled={loading}>
                  {loading ? 'Sending…' : <><Send size={14} /> Submit Application</>}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
