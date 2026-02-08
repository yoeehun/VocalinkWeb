import React, { useState } from 'react';
import './App.css';

function App() {
  // Dynamic data using state
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // System configuration data
  const systemConfig = {
    appName: 'VocaLink',
    description: 'Empowering people to connect with deaf and mute individuals through seamless communication.',
    version: '1.0.0',
    copyrightYear: 2026
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
    setErrorMessage('');
  };

  // Toggle password visibility
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.username || !formData.password) {
      setErrorMessage('Please enter both username and password');
      return;
    }

    console.log('Login successful:', {
      username: formData.username,
      rememberMe: formData.rememberMe
    });
    
    alert(`Login Successful!\nWelcome, ${formData.username}.`);
  };

  return (
    <div className="app">
      {/* Left Side - Branding & Collage */}
      <div className="left-panel">
        
        {/* New Collage Background */}
        <div className="collage-container">
            <img src="/collage-1.jpg" alt="Classroom setting" className="collage-img img-1" />
            <img src="/collage-2.jpg" alt="Happy students" className="collage-img img-2" />
            <img src="/collage-3.jpg" alt="Teacher signing" className="collage-img img-3" />
            <img src="/collage-4.jpg" alt="Student learning" className="collage-img img-4" />
        </div>

        <div className="branding">
          <div className="logo">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="3" fill="white"/>
              <circle cx="12" cy="12" r="7" fill="none" stroke="white" strokeWidth="2"/>
              <circle cx="12" cy="12" r="10" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5"/>
            </svg>
          </div>
          <h1>{systemConfig.appName}</h1>
          <p className="description">{systemConfig.description}</p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="right-panel">
        <div className="login-container">
          <div className="login-header">
            <h2>Welcome Back</h2>
            <p>Sign in to access your dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            {errorMessage && (
              <div className="error-message">
                {errorMessage}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="username">Username or Email</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username or email"
                value={formData.username}
                onChange={handleInputChange}
                autoComplete="username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={handleTogglePassword}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                />
                <span>Remember me</span>
              </label>
              <a href="#forgot" className="forgot-password">Forgot Password?</a>
            </div>

            <button type="submit" className="login-button">
              Sign In
            </button>

            <p className="register-link">
              Don't have an account? <a href="#register">Sign Up</a>
            </p>
          </form>

          <div className="login-footer">
            <p>&copy; {systemConfig.copyrightYear} {systemConfig.appName} v{systemConfig.version}</p>
            <p>Designed for Deaf &amp; Mute Individuals</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;