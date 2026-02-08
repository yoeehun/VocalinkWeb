import React, { useState } from 'react';
import './App.css';

function App() {
  // Dynamic data using state (simulating system data)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // System configuration data (simulating from database/API)
  const systemConfig = {
    appName: 'VocaLink',
    tagline: 'Teacher & Admin Portal',
    description: 'Empowering educators to connect with deaf and hard of hearing students',
    version: '1.0.0',
    copyrightYear: 2026
  };

  // Features array (dynamic data to display on login page)
  const platformFeatures = [
    { id: 1, icon: '📚', title: 'Content Management', description: 'Upload and organize lessons with ease' },
    { id: 2, icon: '👥', title: 'Student Monitoring', description: 'Track student progress and records' },
    { id: 3, icon: '💬', title: 'Message Composer', description: 'Create accessible messages for students' },
    { id: 4, icon: '📊', title: 'Academic Dashboard', description: 'Manage activities and assignments' }
  ];

  // Demo credentials (simulating database data)
  const demoCredentials = [
    { id: 1, username: 'teacher@vocalink.com', password: 'teacher123', role: 'Teacher', name: 'Ms. Johnson' },
    { id: 2, username: 'admin@vocalink.com', password: 'admin123', role: 'Administrator', name: 'Dr. Smith' }
  ];

  // Quick stats for the platform (dynamic object)
  const platformStats = {
    totalStudents: 245,
    activeTeachers: 18,
    lessonsCreated: 1432,
    activeSessions: 12
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
    
    // Validation
    if (!formData.username || !formData.password) {
      setErrorMessage('Please enter both username and password');
      return;
    }

    // Check credentials against demo data
    const user = demoCredentials.find(
      cred => cred.username === formData.username && cred.password === formData.password
    );

    if (user) {
      console.log('Login successful:', {
        username: formData.username,
        role: user.role,
        name: user.name,
        rememberMe: formData.rememberMe
      });
      alert(`Welcome back, ${user.name}!\nRole: ${user.role}\n\nYou would now be redirected to the ${user.role === 'Teacher' ? 'Academic Dashboard' : 'Admin Panel'}.`);
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="app">
      {/* Left Side - Branding & Features */}
      <div className="left-panel">
        <div className="branding">
          <div className="logo">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="3" fill="white"/>
              <circle cx="12" cy="12" r="7" fill="none" stroke="white" strokeWidth="2"/>
              <circle cx="12" cy="12" r="10" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5"/>
            </svg>
          </div>
          <h1>{systemConfig.appName}</h1>
          <p className="subtitle">{systemConfig.tagline}</p>
          <p className="description">{systemConfig.description}</p>
        </div>

        {/* Platform Features - Dynamic rendering from array */}
        <div className="features">
          <h3>Platform Features</h3>
          <div className="features-grid">
            {platformFeatures.map(feature => (
              <div key={feature.id} className="feature-card">
                <span className="feature-icon">{feature.icon}</span>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Stats - Dynamic rendering from object */}
        <div className="stats">
          <div className="stat-item">
            <span className="stat-number">{platformStats.totalStudents}</span>
            <span className="stat-label">Students</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{platformStats.activeTeachers}</span>
            <span className="stat-label">Teachers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{platformStats.lessonsCreated}</span>
            <span className="stat-label">Lessons</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{platformStats.activeSessions}</span>
            <span className="stat-label">Active Now</span>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="right-panel">
        <div className="login-container">
          <div className="login-header">
            <h2>Welcome Back</h2>
            <p>Sign in to access your dashboard</p>
          </div>

          {/* Demo Credentials Info */}
          <div className="demo-info">
            <strong>Demo Credentials:</strong>
            <ul>
              {demoCredentials.map(cred => (
                <li key={cred.id}>
                  <strong>{cred.role}:</strong> {cred.username} / {cred.password}
                </li>
              ))}
            </ul>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="login-form">
            {/* Error Message */}
            {errorMessage && (
              <div className="error-message">
                {errorMessage}
              </div>
            )}

            {/* Username/Email Field */}
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

            {/* Password Field */}
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

            {/* Remember Me & Forgot Password */}
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

            {/* Submit Button */}
            <button type="submit" className="login-button">
              Sign In
            </button>

            {/* Register Link */}
            <p className="register-link">
              Don't have an account? <a href="#register">Contact Administrator</a>
            </p>
          </form>

          {/* Footer */}
          <div className="login-footer">
            <p>&copy; {systemConfig.copyrightYear} {systemConfig.appName} v{systemConfig.version}</p>
            <p>Designed for SNED Teachers & Administrators</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
