import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import Navbar from './Navbar';
import { Sprout, ArrowRight, ShieldCheck, Heart, Sparkles, Leaf } from 'lucide-react';

// Landing Page Component
const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page-container">
      {/* Background with readable overlay is styled in App.css */}
      <div className="landing-hero-backdrop"></div>

      {/* Floating navigation on landing page */}
      <header className="landing-nav">
        <div className="landing-nav-brand">
          <Sprout size={30} className="brand-logo-icon" />
          <span className="brand-title">Paradise Nursery</span>
        </div>
        <div className="landing-nav-links">
          <a href="#about-us" className="landing-nav-link">About Us</a>
          <Link to="/plants" className="landing-nav-link">Catalog</Link>
          <Link to="/cart" className="landing-nav-link">Cart</Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="landing-hero-content">
        <div className="hero-text-wrapper">
          <div className="hero-pill-badge">
            <Sparkles size={16} /> Handcrafted Botanic Sanctuary
          </div>

          <h1 className="hero-headline">
            Welcome to <span className="highlight-text">Paradise Nursery</span>
          </h1>

          <p className="hero-description">
            Where greenery meets elegance. Breathe cleaner air, revitalize your interior spaces, and cultivate peace of mind with our curated collection of vibrant, sustainably nurtured houseplants.
          </p>

          <div className="hero-cta-group">
            <button
              type="button"
              className="btn-get-started"
              onClick={() => navigate('/plants')}
              id="get-started-btn"
            >
              <span>Get Started</span>
              <ArrowRight size={20} />
            </button>
            <a href="#about-us" className="btn-secondary-outline">
              Learn More
            </a>
          </div>

          {/* Value Badges */}
          <div className="hero-badges-row">
            <div className="hero-badge-item">
              <Leaf size={18} className="badge-icon" />
              <span>100% Organic Nursery</span>
            </div>
            <div className="hero-badge-item">
              <ShieldCheck size={18} className="badge-icon" />
              <span>Guaranteed Healthy Arrival</span>
            </div>
            <div className="hero-badge-item">
              <Heart size={18} className="badge-icon" />
              <span>Beginner Friendly Varieties</span>
            </div>
          </div>
        </div>
      </main>

      {/* Embedded About Us Section on Landing Page */}
      <div className="landing-about-wrapper">
        <AboutUs />
      </div>

      <footer className="landing-footer">
        <p>© {new Date().getFullYear()} Paradise Nursery. Cultivated with love and botanic care.</p>
      </footer>
    </div>
  );
};

// Standalone About Us Page with shared Navbar
const AboutPage = () => (
  <div className="about-page-wrapper">
    <Navbar />
    <main className="about-page-main">
      <AboutUs />
    </main>
    <footer className="site-footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Paradise Nursery. Handcrafted for plant lovers everywhere.</p>
      </div>
    </footer>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
