function ProductDetailPage() {
    return (
        <div className="product-detail-page">
            <h1>Product Detail</h1>
            <img src="product-image-url" alt="Product" />
            <p>Description of the product goes here.</p>
            <button>Add to Wishlist</button>
        </div>
    );
}

export default ProductDetailPage;