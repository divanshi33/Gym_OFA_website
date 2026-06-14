import React, { useState } from 'react';
import { User, Mail, Phone, MessageSquare, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Enter a valid email address';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "8f77e37f-a1c8-4600-98ef-83022ae38ede",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error sending message. Please check your connection and try again.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-title-container">
        <span className="section-subtitle">REACH OUT TO US</span>
        <h2 className="section-title">GET IN TOUCH</h2>
      </div>

      <div className="contact-container glass-panel">

        {/* Info Panel */}
        <div className="contact-info-panel">
          <h3 className="contact-panel-title text-gradient">Start Your Fitness Journey</h3>
          <p className="contact-panel-desc">
            Ready to transform your health? Reach out to OFA and our certified trainers will get back to you within 24 hours.
          </p>

          <div className="contact-details-list">
            <div className="detail-item">
              <span className="detail-icon">📍</span>
              <div className="detail-text">
                <strong>Location</strong>
                <p>OK Fitness Academy, Vasant Kunj, Purple Point<br />New Delhi, Delhi – 110070</p>
              </div>
            </div>

            <div className="detail-item">
              <span className="detail-icon">📧</span>
              <div className="detail-text">
                <strong>Email Address</strong>
                <p><a href="mailto:okfitnessacademy@gmail.com" className="contact-link">okfitnessacademy@gmail.com</a></p>
              </div>
            </div>

            <div className="detail-item">
              <span className="detail-icon">📞</span>
              <div className="detail-text">
                <strong>Phone</strong>
                <p><a href="tel:+917827127138" className="contact-link">+91 7827127138</a></p>
              </div>
            </div>

            <div className="detail-item">
              <span className="detail-icon">🕐</span>
              <div className="detail-text">
                <strong>Office Hours</strong>
                <p>Monday – Saturday: 8 AM – 8 PM<br />Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="contact-action-btns">
            <a href="tel:+917827127138" className="btn-gold contact-call-btn">
              📞 Call Now
            </a>
            <a href="https://wa.me/917827127138" target="_blank" rel="noopener noreferrer" className="btn-outline contact-wa-btn">
              💬 WhatsApp
            </a>
          </div>
        </div>

        {/* Form Panel */}
        <div className="contact-form-panel">
          {submitted ? (
            <div className="contact-success-panel animate-scale">
              <CheckCircle size={56} className="text-gold success-icon" />
              <h3 className="success-title">Message Sent!</h3>
              <p className="success-desc">
                Thank you for reaching out to OK Fitness Academy. Our team will contact you within 24 hours.
              </p>
              <button onClick={() => setSubmitted(false)} className="btn-gold btn-success-return">
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-group">
                <label htmlFor="contact-name">Full Name</label>
                <div className="contact-input-wrapper">
                  <User size={18} className="contact-icon" />
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={errors.name ? 'input-error' : ''}
                  />
                </div>
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="contact-group">
                <label htmlFor="contact-email">Email Address</label>
                <div className="contact-input-wrapper">
                  <Mail size={18} className="contact-icon" />
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className={errors.email ? 'input-error' : ''}
                  />
                </div>
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="contact-group">
                <label htmlFor="contact-phone">Phone Number</label>
                <div className="contact-input-wrapper">
                  <Phone size={18} className="contact-icon" />
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className={errors.phone ? 'input-error' : ''}
                  />
                </div>
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>

              <div className="contact-group">
                <label htmlFor="contact-message">Message</label>
                <div className="contact-input-wrapper alignment-top">
                  <MessageSquare size={18} className="contact-icon icon-message" />
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your fitness goals..."
                    className={errors.message ? 'input-error' : ''}
                  ></textarea>
                </div>
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              <button type="submit" className="btn-gold btn-contact-submit">
                Send Message <Send size={14} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="contact-map-container glass-panel animate-scale">
        <iframe
          title="OFA Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14019.262529239564!2d77.13876936359526!3d28.530263625476313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df639c071d7%3A0x3c271cf57662cf05!2sVasant%20Kunj%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: '12px' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
