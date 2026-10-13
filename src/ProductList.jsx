import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems } from './CartSlice';
import { plantsData, categories } from './plantsData';
import Navbar from './Navbar';
import { Check, Plus, Sparkles, Filter, Leaf } from 'lucide-react';

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Helper to check if a plant is already present in cart
  const isPlantInCart = (plantId) => {
    return cartItems.some((item) => item.id === plantId);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src =
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80';
  };

  const filteredCategories =
    selectedCategory === 'All'
      ? categories
      : categories.filter((c) => c.name === selectedCategory);

  return (
    <div className="product-page-wrapper">
      {/* Shared Navbar */}
      <Navbar />

      <main className="product-list-container">
        {/* Page Banner */}
        <section className="product-hero-banner">
          <div className="product-hero-content">
            <span className="badge-pill">
              <Sparkles size={14} /> Curated Plant Collection
            </span>
            <h1 className="page-title">Find Your Perfect Green Companion</h1>
            <p className="page-description">
              Hand-tended, healthy indoor houseplants selected to purify your air, soothe your spirit, and bring enduring life to your home.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="category-filter-bar">
            <span className="filter-label">
              <Filter size={16} /> Filter:
            </span>
            <button
              className={`filter-btn ${selectedCategory === 'All' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('All')}
              id="filter-all"
            >
              All Plants ({plantsData.length})
            </button>
            {categories.map((cat) => {
              const count = plantsData.filter((p) => p.category === cat.name).length;
              return (
                <button
                  key={cat.name}
                  className={`filter-btn ${selectedCategory === cat.name ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.name)}
                  id={`filter-${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>
        </section>

        {/* Categories and Plant Grids */}
        <div className="categories-wrapper">
          {filteredCategories.map((category) => {
            const plantsInCategory = plantsData.filter(
              (plant) => plant.category === category.name
            );

            return (
              <section
                key={category.name}
                className="category-section"
                id={`category-${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="category-header">
                  <div className="category-title-wrap">
                    <Leaf className="category-icon" size={24} />
                    <h2 className="category-heading">{category.name}</h2>
                  </div>
                  <p className="category-subtext">{category.description}</p>
                </div>

                <div className="plants-grid">
                  {plantsInCategory.map((plant) => {
                    const inCart = isPlantInCart(plant.id);

                    return (
                      <article
                        key={plant.id}
                        className={`plant-card ${inCart ? 'in-cart' : ''}`}
                        id={`plant-card-${plant.id}`}
                      >
                        <div className="plant-image-container">
                          <img
                            src={plant.image}
                            alt={plant.name}
                            className="plant-image"
                            onError={handleImageError}
                            loading="lazy"
                          />
                          <span className="plant-category-badge">{plant.category}</span>
                        </div>

                        <div className="plant-info">
                          <h3 className="plant-name">{plant.name}</h3>
                          <p className="plant-description">{plant.description}</p>

                          <div className="plant-card-footer">
                            <div className="plant-price-wrap">
                              <span className="price-label">Price</span>
                              <span className="plant-price">${plant.price.toFixed(2)}</span>
                            </div>

                            <button
                              type="button"
                              className={`add-to-cart-btn ${inCart ? 'added-disabled' : ''}`}
                              onClick={() => handleAddToCart(plant)}
                              disabled={inCart}
                              id={`add-to-cart-btn-${plant.id}`}
                              aria-label={
                                inCart
                                  ? `${plant.name} already in cart`
                                  : `Add ${plant.name} to cart`
                              }
                            >
                              {inCart ? (
                                <>
                                  <Check size={18} />
                                  <span>Added to Cart</span>
                                </>
                              ) : (
                                <>
                                  <Plus size={18} />
                                  <span>Add to Cart</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Paradise Nursery. Handcrafted for plant lovers everywhere.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductList;
