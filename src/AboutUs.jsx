import React from 'react';
import { Leaf, HeartHandshake, ShieldCheck, Truck, Sparkles, SunMedium } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="about-us-section" id="about-us">
      <div className="about-container">
        <div className="about-header text-center">
          <span className="badge-pill">
            <Sparkles size={14} /> Our Botanical Story
          </span>
          <h2 className="section-title">Welcome to Paradise Nursery</h2>
          <p className="section-subtitle">
            Cultivating serene, healthy indoor spaces since 2018. We believe every home deserves the tranquil embrace of living greenery.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-story-card">
            <h3>Our Mission</h3>
            <p>
              At Paradise Nursery, our mission is to reconnect modern urban dwellers with the revitalizing power of nature. In a fast-paced digital world, tending to indoor houseplants grounds us, purifies our breathing spaces, and transforms ordinary rooms into lush sanctuaries.
            </p>
            <p>
              Whether you are an experienced botanist or adopting your very first succulent, we are dedicated to guiding you every step of the way with plant care wisdom, curated botanical collections, and unconditional plant care support.
            </p>
          </div>

          <div className="about-story-card">
            <h3>Uncompromising Quality</h3>
            <p>
              Every plant at Paradise Nursery is ethically propagated in our climate-optimized greenhouses by seasoned horticulturists. We inspect root systems, foliage vitality, and soil microbiome health before any plant is approved for delivery.
            </p>
            <p>
              We guarantee that our plants arrive vibrant, pest-free, and potted in premium, well-draining organic soil blends specially tailored for indoor longevity.
            </p>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Leaf size={24} />
            </div>
            <h4>Ethically Grown</h4>
            <p>100% sustainably nursery-grown plants nurtured without synthetic growth hormones.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <SunMedium size={24} />
            </div>
            <h4>Curated for Homes</h4>
            <p>Carefully selected species adapted for diverse indoor environments, from low light to bright rooms.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Truck size={24} />
            </div>
            <h4>Safe Delivery</h4>
            <p>Custom biodegradable packaging engineered to keep roots snug and leaves intact during transit.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <HeartHandshake size={24} />
            </div>
            <h4>30-Day Plant Guarantee</h4>
            <p>Our botanical wellness guarantee ensures your leafy companions thrive, or we replace them gladly.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
