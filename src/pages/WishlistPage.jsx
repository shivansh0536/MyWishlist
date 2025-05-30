import React, { useEffect, useState } from 'react';

function WishlistPage() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(stored);
  }, []);

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter(item => item.id !== id);
    setWishlist(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
  };

  return (
    <div className="container">
      <h2 className="section-title">❤️ My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="note">Your wishlist is empty. Start exploring and add some favorites!</p>
      ) : (
        <div className="card-grid">
          {wishlist.map(product => (
            <div key={product.id} className="card wishlist-card">
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <p>${product.price}</p>
              <button className="btn-remove" onClick={() => removeFromWishlist(product.id)}>
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WishlistPage;
