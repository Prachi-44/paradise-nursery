# Paradise Nursery 🌿
> *Where Greenery Meets Elegance — An Online Houseplant Shopping Store*

Welcome to **Paradise Nursery**, an e-commerce houseplant shopping web application built with **React**, **Vite**, **Redux Toolkit**, and **React Router DOM**. This project provides a seamless, responsive, and visually enchanting shopping experience for plant lovers looking to transform their homes into thriving botanical sanctuaries.

---

## 📖 Project Description

Paradise Nursery is designed for both budding plant parents and seasoned botanists. The platform showcases a curated catalog of high-quality indoor houseplants organized by functional botanical benefits. Shoppers can explore varieties, view detailed specifications, manage quantities dynamically in a centralized shopping cart, and experience state-of-the-art interactive e-commerce mechanics.

---

## ✨ Features

- **Lush Botanical Landing Page**:
  - Immersive hero background image with natural green and cream palette.
  - Prominent "Get Started" call-to-action button directing users to the plant catalog.
  - Comprehensive "About Us" section highlighting our greenhouse philosophy, sustainable sourcing, and 30-day plant guarantee.

- **Dynamic Plant Catalog (18+ Unique Houseplants)**:
  - Three distinct botanical categories (Air Purifying Plants, Low-Light Plants, and Succulents).
  - At least 6 unique houseplants per category with genuine photography, pricing, and descriptions.
  - Category quick-filter tabs for intuitive browsing.
  - Automatic image error handling with graceful fallback visuals.

- **Centralized Redux Shopping Cart**:
  - Global state management powered by **Redux Toolkit** (`createSlice`).
  - Add to Cart functionality with instant button state toggling ("Added to Cart" and disabled state while item is in cart).
  - Dynamic cart counter badge in the shared navbar reflecting total quantities in real-time.
  - Real-time quantity adjustment (`+` increment and `-` decrement, preventing quantity from dropping below 1).
  - Item deletion button to remove products from the cart and automatically re-enable them in the catalog.
  - Clear entire cart option.
  - Real-time subtotal (`price × quantity`) and grand total calculations formatted as currency.
  - Friendly "Checkout Coming Soon!" interactive modal.
  - "Continue Shopping" button returning shoppers back to `/plants`.
  - Empty cart state with helpful exploration prompts.

- **Responsive & Modern Design**:
  - Mobile-first, fully responsive grid system across mobile, tablet, and desktop viewports.
  - Micro-interactions, hover elevations, and custom glassmorphic styling.
  - Accessible typography using Google Fonts (*Playfair Display* & *Plus Jakarta Sans*).

---

## 🛠️ Technology Stack

- **Framework / Bundler**: [React 18](https://react.dev/) with [Vite](https://vitejs.dev/)
- **State Management**: [@reduxjs/toolkit](https://redux-toolkit.js.org/) & [react-redux](https://react-redux.js.org/)
- **Routing**: [React Router DOM (v6)](https://reactrouter.com/)
- **Styling**: Vanilla CSS with custom botanical design tokens, gradients, and flexbox/grid
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Product Categories

1. **Air Purifying Plants**:
   - *Plants*: Snake Plant, Spider Plant, Peace Lily, Boston Fern, English Ivy, Rubber Plant
   - *Purpose*: Varieties recognized by botanical studies to filter indoor toxins (benzene, formaldehyde) and naturally humidify living spaces.

2. **Low-Light Plants**:
   - *Plants*: ZZ Plant, Cast Iron Plant, Golden Pothos, Chinese Evergreen, Parlor Palm, Heartleaf Philodendron
   - *Purpose*: Resilient, shade-tolerant foliage tailored for cozy apartments, dim bedrooms, and windowless workspaces.

3. **Succulents**:
   - *Plants*: Aloe Vera, Jade Plant, Echeveria Elegans, Zebra Haworthia, String of Pearls, Burro's Tail
   - *Purpose*: Architectural, water-efficient beauties perfect for desks, sunny window sills, and minimalist aesthetics.

---

## 🛒 Shopping-Cart Functionality & Architecture

The application uses Redux Toolkit to manage cart state in [`src/CartSlice.jsx`](src/CartSlice.jsx):
- **`addItem`**: Adds an item with quantity 1 or increments if already present.
- **`removeItem`**: Removes an item by its unique ID.
- **`increaseQuantity`**: Increments the quantity of the given item.
- **`decreaseQuantity`**: Decrements item quantity while strictly preventing values below 1.
- **`updateQuantity`**: Explicit quantity updater.
- **`clearCart`**: Clears all items.
- **Selectors**:
  - `selectCartItems`: Retrieves all active items in the cart.
  - `selectTotalQuantity`: Calculates the sum of all item quantities (`Σ quantity`), driving the navbar badge.
  - `selectTotalAmount`: Computes the grand total sum (`Σ price × quantity`).

---

## 🚀 Installation & Running the Application

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0 or higher recommended)
- `npm` (v9.0 or higher)

### 1. Clone or Open the Repository
```bash
cd paradise-nursery
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser at the local URL displayed (typically `http://localhost:5173`).

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📂 Project Structure

```text
paradise-nursery/
├── README.md               # Project documentation
├── index.html              # HTML entry point with Google Fonts
├── package.json            # Project dependencies and npm scripts
├── vite.config.js          # Vite configuration
└── src/
    ├── AboutUs.jsx         # About Us component with mission & values
    ├── App.css             # Main stylesheet with botanical design tokens & responsive CSS
    ├── App.jsx             # Root component with routing and landing page
    ├── CartItem.jsx        # Shopping cart view with items, controls, and checkout
    ├── CartSlice.jsx       # Redux Toolkit cart slice with actions & selectors
    ├── Navbar.jsx          # Shared navigation bar with live cart count badge
    ├── ProductList.jsx     # Plant catalog with 18+ plants in 3 categories
    ├── plantsData.js       # Shared plant dataset with stable IDs, pricing & images
    ├── store.js            # Redux store configuration
    └── main.jsx            # Application root mounting Provider and BrowserRouter
```
