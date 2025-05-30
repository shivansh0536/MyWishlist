// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import WishlistPage from './pages/WishlistPage';
import RecommendationsPage from './pages/RecommendationsPage';
import AboutPage from './pages/AboutPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  const [page, setPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);

  useEffect(() => {
    document.body.classList.add('light');
  }, []);

  const handleViewProduct = (product, fromPage) => {
    setSelectedProduct(product);
    setPreviousPage(fromPage);
    setPage('product');
  };

  const renderPage = () => {
    if (page === 'home') {
      return <HomePage onProductClick={(product) => handleViewProduct(product, 'home')} />;
    }
    if (page === 'recommendations') {
      return <RecommendationsPage onViewProduct={(product) => handleViewProduct(product, 'recommendations')} />;
    }
    if (page === 'wishlist') return <WishlistPage onViewProduct={(product) => handleViewProduct(product, 'wishlist')} />;
    if (page === 'about') return <AboutPage />;
    if (page === 'product') {
      return <ProductDetailPage product={selectedProduct} goBack={() => setPage(previousPage || 'home')} />;
    }
    return <HomePage onProductClick={(product) => handleViewProduct(product, 'home')} />;
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
