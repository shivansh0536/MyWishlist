function ProductDetailPage({ product, goBack }) {
  if (!product) return <p className="container">No product selected.</p>;

  return (
    <div className="container">
      <button onClick={goBack} className="back-button">← Back to Home</button>
      <h2>Product Details</h2>
      <div style={{ display: 'flex', gap: '30px' }}>
        <img src={product.image} alt={product.title} style={{ height: '250px' }} />
        <div>
          <h3>{product.title}</h3>
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
