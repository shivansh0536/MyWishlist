import React from 'react';

function AboutPage() {
  return (
    <div className="container about-page">
      <h2 className="section-title">About QuickCart 🛒</h2>
      <p>
        Welcome to <strong>QuickCart</strong> — your modern and minimal shopping companion! Our goal is to provide a seamless, intuitive experience for browsing, filtering, and discovering products tailored just for you.
      </p>

      <h3>🚀 Key Features</h3>
      <ul>
        <li>⚡ Fast & responsive user interface</li>
        <li>🎯 Smart recommendations</li>
        <li>❤️ Personalized wishlist</li>
        <li>🌙 Dark mode toggle</li>
        <li>📱 Mobile-friendly design</li>
      </ul>

      <h3>👨‍💻 Tech Stack</h3>
      <ul>
        <li>⚛️ React.js (Frontend)</li>
        <li>🎨 Custom CSS with modern color palette</li>
        <li>🛍️ Fake Store API for product data</li>
      </ul>

      <h3>💡 Why QuickCart?</h3>
      <p>
        Built for speed and simplicity, QuickCart is ideal for quick product discovery and wishlist management — whether you’re on a phone or desktop.
      </p>
    </div>
  );
}

export default AboutPage;
