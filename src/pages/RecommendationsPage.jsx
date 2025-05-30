import React, { useEffect, useState } from 'react';
import './RecommendationsPage.css';

function RecommendationsPage({ onViewProduct }) {
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        const sorted = [...data].sort((a, b) => a.price - b.price);
        setRecommended(sorted.slice(0, 4));
      })
      .catch(err => console.error('Error fetching recommendations:', err));
  }, []);

  const handleView = (product) => {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    onViewProduct(product);
  };

  return (
    <div className="container">
      <h2 className="page-title">✨ Recommended for You</h2>
      {recommended.length === 0 ? (
        <p className="note">Loading recommendations...</p>
      ) : (
        <div className="card-grid">
          {recommended.map(product => (
            <div key={product.id} className="card recommend">
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <p>${product.price}</p>
              <button className="view-btn" onClick={() => handleView(product)}>
                🔍 View Product
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecommendationsPage;
