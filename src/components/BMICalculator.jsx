import React, { useState } from 'react';
import './BMICalculator.css';

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [gaugePercent, setGaugePercent] = useState(0);

  const calculateBMI = (e) => {
    e.preventDefault();
    
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!h || !w || h <= 0 || w <= 0) return;

    // BMI formula: weight (kg) / [height (m)]^2
    const heightInMeters = h / 100;
    const bmiVal = w / (heightInMeters * heightInMeters);
    const roundedBmi = parseFloat(bmiVal.toFixed(1));
    setBmi(roundedBmi);

    // Determine category and gauge percentage (ranges from 10 to 40 BMI for display)
    let cat = '';
    let percent = 0;

    if (roundedBmi < 18.5) {
      cat = 'Underweight';
      // Map 10-18.5 BMI to 0%-25% gauge
      percent = Math.max(0, Math.min(25, ((roundedBmi - 10) / 8.5) * 25));
    } else if (roundedBmi >= 18.5 && roundedBmi < 25) {
      cat = 'Normal Weight';
      // Map 18.5-25 BMI to 25%-50% gauge
      percent = 25 + ((roundedBmi - 18.5) / 6.5) * 25;
    } else if (roundedBmi >= 25 && roundedBmi < 30) {
      cat = 'Overweight';
      // Map 25-30 BMI to 50%-75% gauge
      percent = 50 + ((roundedBmi - 25) / 5) * 25;
    } else {
      cat = 'Obese';
      // Map 30-40 BMI to 75%-100% gauge
      percent = 75 + Math.min(25, ((roundedBmi - 30) / 10) * 25);
    }

    setCategory(cat);
    setGaugePercent(percent);
  };

  const resetCalculator = () => {
    setHeight('');
    setWeight('');
    setBmi(null);
    setCategory('');
    setGaugePercent(0);
  };

  return (
    <section id="bmi-calculator" className="bmi-section">
      <div className="section-title-container">
        <span className="section-subtitle">FITNESS ANALYSIS</span>
        <h2 className="section-title">BMI CALCULATOR</h2>
      </div>

      <div className="bmi-container glass-panel">
        
        {/* Input Panel */}
        <div className="bmi-form-wrapper">
          <h3 className="bmi-subtitle text-gradient">Calculate Your Index</h3>
          <p className="bmi-intro">
            Body Mass Index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.
          </p>
          
          <form onSubmit={calculateBMI} className="bmi-form">
            <div className="bmi-input-group">
              <label htmlFor="bmi-height">Height (cm)</label>
              <input
                type="number"
                id="bmi-height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="e.g. 175"
                min="50"
                max="250"
                required
              />
            </div>
            
            <div className="bmi-input-group">
              <label htmlFor="bmi-weight">Weight (kg)</label>
              <input
                type="number"
                id="bmi-weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="e.g. 70"
                min="10"
                max="300"
                required
              />
            </div>

            <div className="bmi-actions">
              <button type="submit" className="btn-gold btn-bmi-submit">
                Calculate BMI
              </button>
              {bmi && (
                <button type="button" onClick={resetCalculator} className="btn-outline btn-bmi-reset">
                  Reset
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Output Visualization Panel */}
        <div className="bmi-output-wrapper">
          {bmi === null ? (
            <div className="bmi-output-placeholder">
              <div className="placeholder-icon-ring">
                <span className="placeholder-icon">?</span>
              </div>
              <p>Enter your measurements to reveal your profile analysis.</p>
            </div>
          ) : (
            <div className="bmi-result-panel animate-scale">
              <div className="bmi-value-display">
                <span className="result-val">{bmi}</span>
                <span className="result-label">YOUR BMI</span>
              </div>
              
              <div className="bmi-category-badge text-gold">
                {category}
              </div>

              {/* Gauge Meter */}
              <div className="bmi-gauge-container">
                <div className="bmi-gauge-bar">
                  <div className="gauge-segment underweight" title="Underweight (< 18.5)"></div>
                  <div className="gauge-segment normal" title="Normal (18.5 - 24.9)"></div>
                  <div className="gauge-segment overweight" title="Overweight (25 - 29.9)"></div>
                  <div className="gauge-segment obese" title="Obese (>= 30)"></div>
                  
                  {/* Indicator Needle */}
                  <div 
                    className="bmi-gauge-needle"
                    style={{ left: `${gaugePercent}%` }}
                  >
                    <div className="needle-pointer"></div>
                  </div>
                </div>
                
                <div className="bmi-gauge-labels">
                  <span>10.0</span>
                  <span>18.5</span>
                  <span>25.0</span>
                  <span>30.0</span>
                  <span>40.0</span>
                </div>
              </div>

              {/* Feedback Advice */}
              <p className="bmi-advice">
                {category === 'Underweight' && 'You have an underweight profile. We recommend focusing on nutrition counseling and structured muscle building.'}
                {category === 'Normal Weight' && 'Superb! You fall into the healthy weight range. Maintain your active lifestyle with our fitness programs.'}
                {category === 'Overweight' && 'You have an overweight profile. Cardio training, weight management, and diet guides will yield great progress.'}
                {category === 'Obese' && 'You fall in the obese range. We suggest a consultation with our personal training coaches to build a safe pathway.'}
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
