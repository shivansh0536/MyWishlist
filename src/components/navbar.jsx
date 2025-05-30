import React, { useState, useEffect } from 'react';
import './nav.css';

function Navbar({ onNavigate }) {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Apply theme to body
  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Close mobile menu on navigation
  const handleNavigate = (page) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => handleNavigate('home')}>
        QuickCart
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <button onClick={() => handleNavigate('home')}>Home</button>
        <button onClick={() => handleNavigate('recommendations')}>Recommendations</button>
        <button onClick={() => handleNavigate('wishlist')}>Wishlist</button>
        <button onClick={() => handleNavigate('about')}>About</button>
      </div>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
        {isDark ? '🌙 Dark' : '☀️ Light'}
      </button>
    </nav>
  );
}

export default Navbar;
