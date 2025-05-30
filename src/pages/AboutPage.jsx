import React from 'react';

function AboutPage() {
  return (
    <div className="container">
      <h2>About Us</h2>

      {/* History Section */}
      <section className="about-section">
        <h3>Our History</h3>
        <p>
          Founded in 2025, our platform started with a simple mission: to help
          shoppers find the best products quickly and easily. What began as a
          small side project has grown into a full-fledged application with
          thousands of users worldwide.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="about-section">
        <h3>Mission & Vision</h3>
        <p>
          <strong>Mission:</strong> To empower consumers with powerful search
          and personalized recommendations, making every shopping experience
          delightful.
        </p>
        <p>
          <strong>Vision:</strong> To be the go‑to platform for product
          discovery, helping users uncover hidden gems and top-rated items
          across all categories.
        </p>
      </section>

      {/* Team Members */}
      <section className="about-section">
        <h3>Meet the Team</h3>
        <div className="team-grid">
          <div className="team-member">
            <img src="/images/team1.jpg" alt="Alice" />
            <h4>Alice Johnson</h4>
            <p>Lead Developer</p>
          </div>
          <div className="team-member">
            <img src="/images/team2.jpg" alt="Bob" />
            <h4>Bob Smith</h4>
            <p>UI/UX Designer</p>
          </div>
          <div className="team-member">
            <img src="/images/team3.jpg" alt="Carol" />
            <h4>Carol Lee</h4>
            <p>Product Manager</p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="about-section">
        <h3>Contact Us</h3>
        <p>
          Have questions or feedback? Reach out to us:
        </p>
        <ul>
          <li>Email: <a href="mailto:support@example.com">support@example.com</a></li>
          <li>Phone: +1 (555) 123-4567</li>
          <li>Address: 123 React Street, JavaScript City, WWW 00000</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutPage;
