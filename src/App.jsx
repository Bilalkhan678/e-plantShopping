import { useState } from "react";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";

function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
    setShowCart(false);
  };

  const handleHome = () => {
    setShowProducts(false);
    setShowCart(false);
  };

  const handleCart = () => {
    setShowCart(true);
    setShowProducts(false);
  };

  if (showCart) {
    return <CartItem />;
  }

  if (showProducts) {
    return <ProductList />;
  }

  return (
    <div className="home-page">
      <div className="home-overlay">
        <nav className="navbar home-navbar">
          <div className="nav-logo">🌿 Paradise Nursery</div>

          <div className="nav-links">
            <button onClick={handleHome}>Home</button>

            <button onClick={handleGetStarted}>Plants</button>

            <button onClick={handleCart}>🛒 Cart</button>
          </div>
        </nav>

        <div className="hero-content">
          <h1>Paradise Nursery</h1>

          <p>
            Bring the beauty of nature into your home with our
            beautiful collection of houseplants.
          </p>

          <button
            onClick={handleGetStarted}
            className="get-started-button"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;