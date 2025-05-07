import React, { useEffect, useState } from 'react';

function HomePage({ onProductClick }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToWishlist = (product) => {
    const stored = JSON.parse(localStorage.getItem('wishlist')) || [];
    const exists = stored.find(item => item.id === product.id);
    if (!exists) {
      stored.push(product);
      localStorage.setItem('wishlist', JSON.stringify(stored));
      alert('Added to wishlist!');
    } else {
      alert('Already in wishlist!');
    }
  };

  return (
    <div className="container">
      <h2>All Products</h2>
      <div className="card-grid">
        {products.map(product => (
          <div
            key={product.id}
            className="card"
            onClick={() => onProductClick(product)}
          >
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            <button onClick={(e) => {
              e.stopPropagation();
              addToWishlist(product);
            }}>
              💖 Add to Wishlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
