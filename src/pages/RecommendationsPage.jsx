import React, { useEffect, useState } from 'react';

function RecommendationsPage() {
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        // Simple logic: recommend top 4 cheapest items
        const sorted = [...data].sort((a, b) => a.price - b.price);
        setRecommended(sorted.slice(0, 4));
      })
      .catch(err => console.error('Error fetching recommendations:', err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Recommended for You</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {recommended.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <img src={product.image} alt={product.title} style={{ height: '150px' }} />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendationsPage;
