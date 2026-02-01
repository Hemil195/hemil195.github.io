import { useState, useEffect } from 'react';
import './ThemeToggle.css';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setIsDark(savedTheme === 'dark');
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="toggle-track">
        <div className="toggle-thumb">
          {isDark ? (
            <i className="fas fa-moon"></i>
          ) : (
            <i className="fas fa-sun"></i>
          )}
        </div>
      </div>
    </button>
  );
}

export default ThemeToggle;
