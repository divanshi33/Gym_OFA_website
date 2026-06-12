import React, { useState } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import './AuthModal.css';

export default function AuthModal({ isOpen, onClose, onAuthSuccess, showToast }) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear errors when typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!isLogin && !formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem('gym_users') || '[]');

    if (isLogin) {
      // Find matching user
      const existingUser = users.find(u => u.email.toLowerCase() === formData.email.toLowerCase());
      
      if (!existingUser) {
        setErrors({ email: 'No user registered with this email' });
        showToast('Error', 'No user registered with this email', 'error');
        return;
      }

      if (existingUser.password !== formData.password) {
        setErrors({ password: 'Incorrect password' });
        showToast('Error', 'Incorrect password', 'error');
        return;
      }

      // Success
      showToast('Welcome Back!', `Logged in successfully as ${existingUser.name}`, 'success');
      onAuthSuccess({ name: existingUser.name, email: existingUser.email });
      handleClose();
    } else {
      // Sign Up
      // Check if user already exists
      const userExists = users.some(u => u.email.toLowerCase() === formData.email.toLowerCase());
      if (userExists) {
        setErrors({ email: 'Email already registered' });
        showToast('Error', 'Email already registered. Please login.', 'error');
        return;
      }

      // Save new user
      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password
      };
      users.push(newUser);
      localStorage.setItem('gym_users', JSON.stringify(users));

      showToast('Registration Successful!', 'Account created. You can now log in.', 'success');
      // Auto toggle to login
      setIsLogin(true);
      setFormData({
        name: '',
        email: formData.email,
        password: '',
        confirmPassword: ''
      });
    }
  };

  const handleClose = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setErrors({});
    setShowPassword(false);
    onClose();
  };

  return (
    <div className="auth-modal-overlay" onClick={handleClose}>
      <div className="auth-modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
        <button className="auth-close-btn" onClick={handleClose}>
          <X size={20} />
        </button>

        <div className="auth-tabs">
          <button 
            className={`auth-tab ${isLogin ? 'active' : ''}`} 
            onClick={() => { setIsLogin(true); setErrors({}); }}
          >
            Login
          </button>
          <button 
            className={`auth-tab ${!isLogin ? 'active' : ''}`} 
            onClick={() => { setIsLogin(false); setErrors({}); }}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="form-group animate-slide">
              <label htmlFor="auth-name">Name</label>
              <div className="input-wrapper">
                <User size={18} className="input-icon" />
                <input
                  type="text"
                  id="auth-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Smith"
                  className={errors.name ? 'input-error' : ''}
                />
              </div>
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="auth-email">Email Address</label>
            <div className="input-wrapper">
              <Mail size={18} className="input-icon" />
              <input
                type="email"
                id="auth-email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                className={errors.email ? 'input-error' : ''}
              />
            </div>
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="auth-password">Password</label>
            <div className="input-wrapper">
              <Lock size={18} className="input-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                id="auth-password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••"
                className={errors.password ? 'input-error' : ''}
              />
              <button
                type="button"
                className="btn-password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          {!isLogin && (
            <div className="form-group animate-slide">
              <label htmlFor="auth-confirmPassword">Confirm Password</label>
              <div className="input-wrapper">
                <Lock size={18} className="input-icon" />
                <input
                  type="password"
                  id="auth-confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className={errors.confirmPassword ? 'input-error' : ''}
                />
              </div>
              {errors.confirmPassword && (
                <span className="error-text">{errors.confirmPassword}</span>
              )}
            </div>
          )}

          <button type="submit" className="btn-gold btn-auth-submit">
            {isLogin ? 'Login to Elite Membership' : 'Create Elite Account'}
          </button>
        </form>

        <p className="auth-switch-text">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <button 
            type="button" 
            className="auth-switch-btn" 
            onClick={() => { setIsLogin(!isLogin); setErrors({}); }}
          >
            {isLogin ? 'Sign Up Now' : 'Login Now'}
          </button>
        </p>
      </div>
    </div>
  );
}
