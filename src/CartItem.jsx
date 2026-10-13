import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  selectCartItems,
  selectTotalQuantity,
  selectTotalAmount,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
} from './CartSlice';
import Navbar from './Navbar';
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  CreditCard,
  ShieldCheck,
  Package,
} from 'lucide-react';

const CartItem = ({ onContinueShopping }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  const totalAmount = useSelector(selectTotalAmount);

  const [checkoutMessage, setCheckoutMessage] = useState(false);

  const handleContinueShopping = (e) => {
    if (e) e.preventDefault();
    if (onContinueShopping) {
      onContinueShopping(e);
    } else {
      navigate('/plants');
    }
  };

  const handleCheckout = () => {
    setCheckoutMessage(true);
  };

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src =
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80';
  };

  return (
    <div className="cart-page-wrapper">
      {/* Shared Navbar */}
      <Navbar />

      <main className="cart-container">
        {/* Cart Page Title */}
        <div className="cart-header">
          <div className="cart-header-title">
            <span className="badge-pill">
              <ShoppingBag size={14} /> Review Your Plants
            </span>
            <h1 className="page-title">Your Plant Cart</h1>
          </div>
          <button
            type="button"
            className="continue-shopping-top-btn"
            onClick={handleContinueShopping}
            id="continue-shopping-header-btn"
          >
            <ArrowLeft size={16} /> Continue Shopping
          </button>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <div className="empty-cart-card" id="empty-cart-message">
            <div className="empty-cart-icon-wrap">
              <ShoppingBag size={56} className="empty-cart-icon" />
            </div>
            <h2>Your Cart is Currently Empty</h2>
            <p>
              Looks like you haven't added any botanical companions to your sanctuary yet. Explore our vibrant collection of air-purifying plants, low-light varieties, and hardy succulents.
            </p>
            <Link
              to="/plants"
              className="btn-primary"
              id="empty-cart-continue-btn"
              onClick={handleContinueShopping}
            >
              Explore Plants
            </Link>
          </div>
        ) : (
          /* Cart Content with Grid Layout */
          <div className="cart-content-layout">
            {/* Items Column */}
            <div className="cart-items-column">
              <div className="cart-items-header-bar">
                <span>Houseplant Items ({cartItems.length})</span>
                <button
                  type="button"
                  className="clear-cart-text-btn"
                  onClick={() => dispatch(clearCart())}
                  id="clear-all-cart-btn"
                >
                  Clear Cart
                </button>
              </div>

              <div className="cart-items-list">
                {cartItems.map((item) => {
                  const itemSubtotal = (item.price * item.quantity).toFixed(2);

                  return (
                    <article
                      key={item.id}
                      className="cart-item-card"
                      id={`cart-item-${item.id}`}
                    >
                      <div className="cart-item-thumb-wrapper">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="cart-item-image"
                          onError={handleImageError}
                        />
                      </div>

                      <div className="cart-item-details">
                        <div className="cart-item-top-row">
                          <div>
                            <span className="cart-item-category">{item.category}</span>
                            <h3 className="cart-item-name">{item.name}</h3>
                          </div>
                          <button
                            type="button"
                            className="cart-remove-btn"
                            onClick={() => dispatch(removeItem(item.id))}
                            id={`remove-btn-${item.id}`}
                            aria-label={`Remove ${item.name} from cart`}
                            title="Remove plant"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>

                        <div className="cart-item-pricing-row">
                          <div className="cart-item-unit-price">
                            <span className="price-label">Unit Price:</span>
                            <span className="unit-price-val">${item.price.toFixed(2)}</span>
                          </div>

                          {/* Quantity Controls */}
                          <div className="quantity-controls" id={`qty-controls-${item.id}`}>
                            <button
                              type="button"
                              className="qty-btn qty-decrease"
                              onClick={() => dispatch(decreaseQuantity(item.id))}
                              disabled={item.quantity <= 1}
                              id={`decrease-qty-btn-${item.id}`}
                              aria-label="Decrease quantity"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="qty-display" id={`qty-display-${item.id}`}>
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              className="qty-btn qty-increase"
                              onClick={() => dispatch(increaseQuantity(item.id))}
                              id={`increase-qty-btn-${item.id}`}
                              aria-label="Increase quantity"
                            >
                              <Plus size={16} />
                            </button>
                          </div>

                          {/* Item Subtotal */}
                          <div className="cart-item-subtotal">
                            <span className="price-label">Subtotal:</span>
                            <span
                              className="subtotal-val"
                              id={`item-subtotal-${item.id}`}
                            >
                              ${itemSubtotal}
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <aside className="cart-summary-sidebar">
              <div className="order-summary-card">
                <h3 className="summary-title">Order Summary</h3>

                <div className="summary-row">
                  <span>Total Items</span>
                  <span className="summary-bold" id="total-items-count">
                    {totalQuantity} {totalQuantity === 1 ? 'plant' : 'plants'}
                  </span>
                </div>

                <div className="summary-row">
                  <span>Standard Greenhouse Delivery</span>
                  <span className="summary-free">FREE</span>
                </div>

                <div className="summary-row">
                  <span>Care Guide & Nursery Guarantee</span>
                  <span className="summary-free">INCLUDED</span>
                </div>

                <div className="summary-divider"></div>

                <div className="summary-total-row">
                  <span className="total-label">Grand Total</span>
                  <span className="grand-total-amount" id="cart-grand-total">
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>

                {/* Checkout & Navigation Actions */}
                <div className="cart-summary-actions">
                  <button
                    type="button"
                    className="btn-checkout"
                    onClick={handleCheckout}
                    id="checkout-btn"
                  >
                    <CreditCard size={18} />
                    <span>Proceed to Checkout</span>
                  </button>

                  <button
                    type="button"
                    className="btn-continue-shopping"
                    onClick={handleContinueShopping}
                    id="continue-shopping-sidebar-btn"
                  >
                    <ArrowLeft size={16} />
                    <span>Continue Shopping</span>
                  </button>
                </div>

                <div className="summary-perks">
                  <div className="perk-item">
                    <ShieldCheck size={16} />
                    <span>30-Day Healthy Plant Guarantee</span>
                  </div>
                  <div className="perk-item">
                    <Package size={16} />
                    <span>Secure Biodegradable Protective Pots</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        )}

        {/* Checkout Modal / Message */}
        {checkoutMessage && (
          <div className="modal-backdrop" onClick={() => setCheckoutMessage(false)}>
            <div
              className="checkout-modal-content"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              <div className="modal-icon-wrapper">
                <Sparkles size={36} className="modal-icon" />
              </div>
              <h2>Checkout Coming Soon!</h2>
              <p>
                Thank you for choosing <strong>Paradise Nursery</strong>. We are actively finalizing our automated payment gateway.
              </p>
              <div className="modal-summary-box">
                <p>
                  <strong>Total Quantity:</strong> {totalQuantity} plant
                  {totalQuantity > 1 ? 's' : ''}
                </p>
                <p>
                  <strong>Total Order Amount:</strong> ${totalAmount.toFixed(2)}
                </p>
              </div>
              <button
                type="button"
                className="btn-primary"
                onClick={() => setCheckoutMessage(false)}
                id="close-checkout-modal-btn"
              >
                Got It! Keep Browsing
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CartItem;
