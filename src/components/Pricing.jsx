import React from 'react';
import { Check } from 'lucide-react';
import './Pricing.css';

const PLANS = [
  {
    name: 'Basic Plan',
    price: '29',
    period: 'month',
    features: [
      { text: 'Standard Gym Access', active: true },
      { text: 'Locker & Shower Access', active: true },
      { text: '1 Complimentary Fitness Assessment', active: true },
      { text: 'Personal Trainer Support', active: false },
      { text: 'Customized Diet Plans', active: false },
      { text: 'Priority Booking & Workshops', active: false }
    ],
    popular: false,
    btnText: 'Start Basic'
  },
  {
    name: 'Premium Plan',
    price: '59',
    period: 'month',
    features: [
      { text: 'Unlimited Gym Access 24/7', active: true },
      { text: 'Premium Locker & Towel Service', active: true },
      { text: 'Personal Trainer (3 sessions/mo)', active: true },
      { text: 'Customized Diet & Meal Plans', active: true },
      { text: 'Progress Assessments', active: true },
      { text: 'Priority Workshop Invites', active: false }
    ],
    popular: true,
    btnText: 'Start Premium'
  },
  {
    name: 'Elite Plan',
    price: '99',
    period: 'month',
    features: [
      { text: 'All Premium Tier Features', active: true },
      { text: '1-on-1 Personal Trainer Daily', active: true },
      { text: 'Custom Macro Diet & Body Scans', active: true },
      { text: 'Unlimited Specialty Workshops', active: true },
      { text: 'Priority Spa & Recovery Lounge', active: true },
      { text: 'Complimentary Hydro-Bar Drinks', active: true }
    ],
    popular: false,
    btnText: 'Join Elite Club'
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <div className="section-title-container">
        <span className="section-subtitle">MEMBERSHIPS</span>
        <h2 className="section-title">CHOOSE YOUR PLAN</h2>
      </div>

      <div className="pricing-grid">
        {PLANS.map((plan, idx) => (
          <div key={idx} className={`pricing-card glass-panel ${plan.popular ? 'popular' : ''}`}>
            {plan.popular && (
              <div className="popular-badge">
                MOST POPULAR
              </div>
            )}
            
            <div className="pricing-card-header">
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price-wrapper">
                <span className="currency">$</span>
                <span className="price">{plan.price}</span>
                <span className="period">/{plan.period}</span>
              </div>
            </div>

            <div className="pricing-card-divider"></div>

            <ul className="plan-features">
              {plan.features.map((feature, fIdx) => (
                <li key={fIdx} className={`feature-item ${feature.active ? '' : 'inactive'}`}>
                  <Check size={16} className={`feature-icon ${feature.active ? 'text-gold' : 'muted'}`} />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>

            <div className="pricing-card-footer">
              <button className={`btn-pricing-cta ${plan.popular ? 'btn-gold' : 'btn-outline'}`}>
                {plan.btnText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
