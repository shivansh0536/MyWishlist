import React, { useEffect, useState } from 'react';

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
    // store if you still need it
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    // pass product back up so App.jsx can set it
    onViewProduct(product);
  };

  return (
    <div className="container">
      <h2 className="recommend-heading">Recommended for You</h2>
      {recommended.length === 0 ? (
        <p className="note">No recommendations yet. Please wait...</p>
      ) : (
        <div className="card-grid">
          {recommended.map(product => (
            <div key={product.id} className="card recommend">
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <p>${product.price}</p>
              <button onClick={() => handleView(product)}>
                View
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecommendationsPage;
