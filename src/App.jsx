import React, { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import HomePage from './components/homepage';
import ProductDetailPage from './pages/ProductDetailPage';
import WishlistPage from './pages/WishlistPage';
import RecommendationsPage from './pages/RecommendationsPage';
import AboutPage from './pages/AboutPage';

function App() {
  const [page, setPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null); // ✅ added

  const renderPage = () => {
    if (page === 'home') return <HomePage onProductClick={(product) => {
      setSelectedProduct(product);
      setPage('product');
    }} />;
    if (page === 'product') return (
      <ProductDetailPage
        product={selectedProduct}
        goBack={() => setPage('home')}
      />
    );
    if (page === 'product') return (
      <ProductDetailPage
        product={selectedProduct}
        goBack={() => setPage('home')}
      />
    );
    if (page === 'product') return (
      <ProductDetailPage
        product={selectedProduct}
        goBack={() => setPage('home')}
      />
    );    
    if (page === 'wishlist') return <WishlistPage />;
    if (page === 'recommendations') return <RecommendationsPage />;
    if (page === 'about') return <AboutPage />;
    return <HomePage />;
  };

  return (
    <>
      <Navbar onNavigate={setPage} />
      {renderPage()}
      <Footer />
    </>
  );
}

export default App;
