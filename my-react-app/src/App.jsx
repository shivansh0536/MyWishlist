import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import WishlistPage from './pages/WishlistPage';
import RecommendationsPage from './pages/RecommendationsPage';
import AboutPage from './pages/AboutPage';
import './App.css';

function App() {
  const handleNavigate = (page) => {
    // Logic for navigation can be implemented here
  };

  return (
    <Router>
      <div className="app">
        <Navbar onNavigate={handleNavigate} />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/product/:id" component={ProductDetailPage} />
          <Route path="/wishlist" component={WishlistPage} />
          <Route path="/recommendations" component={RecommendationsPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;