import React from 'react';

function ProductDetailPage({ product, goBack }) {
  if (!product) {
    return (
      <div className="container">
        <button className="back-button" onClick={goBack}>
          ← Back
        </button>
        <p>No product selected.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <button className="back-button" onClick={goBack}>
        ← Back
      </button>
      <h2>{product.title}</h2>
      <div className="product-detail">
        <img src={product.image} alt={product.title} />
        <div>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Rating:</strong> {product.rating?.rate} ⭐</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
