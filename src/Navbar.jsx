import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from './CartSlice';
import { Sprout, ShoppingCart, Home, Leaf } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <header className="site-header">
      <div className="navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" id="nav-brand-logo">
          <div className="brand-icon-wrapper">
            <Sprout className="brand-icon" size={28} />
          </div>
          <div className="brand-text">
            <span className="brand-name">Paradise Nursery</span>
            <span className="brand-tagline">Where Greenery Meets Elegance</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="nav-links">
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            id="nav-link-home"
          >
            <Home size={18} className="nav-icon" />
            <span>Home</span>
          </Link>
          <Link
            to="/plants"
            className={`nav-link ${location.pathname === '/plants' ? 'active' : ''}`}
            id="nav-link-plants"
          >
            <Leaf size={18} className="nav-icon" />
            <span>Plants</span>
          </Link>
          <Link
            to="/about"
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            id="nav-link-about"
          >
            <span>About Us</span>
          </Link>
        </nav>

        {/* Cart Icon with Dynamic Count */}
        <div className="navbar-actions">
          <Link
            to="/cart"
            className={`cart-button ${location.pathname === '/cart' ? 'active' : ''}`}
            id="nav-link-cart"
            aria-label={`Shopping cart with ${totalQuantity} items`}
          >
            <div className="cart-icon-container">
              <ShoppingCart size={22} />
              {totalQuantity > 0 && (
                <span className="cart-badge" id="cart-badge-count">
                  {totalQuantity}
                </span>
              )}
            </div>
            <span className="cart-label">Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
