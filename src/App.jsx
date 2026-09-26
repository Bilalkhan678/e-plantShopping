import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";

function Home() {
  return (
    <div className="home-page">
      <div className="home-overlay">
        <nav className="navbar home-navbar">
          <div className="nav-logo">🌿 Paradise Nursery</div>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/plants">Plants</Link>
            <Link to="/cart">🛒 Cart</Link>
          </div>
        </nav>

        <div className="hero-content">
          <h1>Paradise Nursery</h1>

          <p>
            Bring the beauty of nature into your home with our
            beautiful collection of houseplants.
          </p>

          <Link to="/plants" className="get-started-button">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/plants" element={<ProductList />} />

        <Route path="/cart" element={<CartItem />} />

        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;