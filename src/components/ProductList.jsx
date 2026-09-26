import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/CartSlice";

const products = [
  // Aromatic Plants
  {
    id: 1,
    name: "Lavender",
    price: 18,
    category: "Aromatic Plants",
    image:
      "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Rosemary",
    price: 15,
    category: "Aromatic Plants",
    image:
      "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Mint",
    price: 12,
    category: "Aromatic Plants",
    image:
      "https://images.unsplash.com/photo-1628556270448-4d4a414c2c7c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Basil",
    price: 14,
    category: "Aromatic Plants",
    image:
      "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Thyme",
    price: 13,
    category: "Aromatic Plants",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Lemongrass",
    price: 16,
    category: "Aromatic Plants",
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=500&q=80",
  },

  // Medicinal Plants
  {
    id: 7,
    name: "Aloe Vera",
    price: 20,
    category: "Medicinal Plants",
    image:
      "https://images.unsplash.com/photo-1596547609652-9cf5d8d0b0f8?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    name: "Neem",
    price: 22,
    category: "Medicinal Plants",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    name: "Eucalyptus",
    price: 25,
    category: "Medicinal Plants",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 10,
    name: "Chamomile",
    price: 17,
    category: "Medicinal Plants",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 11,
    name: "Peppermint",
    price: 15,
    category: "Medicinal Plants",
    image:
      "https://images.unsplash.com/photo-1628556270448-4d4a414c2c7c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 12,
    name: "Sage",
    price: 19,
    category: "Medicinal Plants",
    image:
      "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=500&q=80",
  },

  // Air Purifying Plants
  {
    id: 13,
    name: "Snake Plant",
    price: 24,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 14,
    name: "Peace Lily",
    price: 28,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 15,
    name: "Spider Plant",
    price: 21,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 16,
    name: "Boston Fern",
    price: 23,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1614594575920-a4c7f4b6a3f5?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 17,
    name: "Rubber Plant",
    price: 27,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1614594575920-a4c7f4b6a3f5?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 18,
    name: "Areca Palm",
    price: 30,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=500&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  // Total quantity of all products
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div className="products-page">
      <nav className="navbar">
        <div className="nav-logo">🌿 Paradise Nursery</div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">🛒 Cart ({totalItems})</Link>
        </div>
      </nav>

      <main className="products-container" id="plants">
        <h1>Paradise Nursery Plants</h1>

        {categories.map((category) => (
          <section className="category-section" key={category}>
            <h2>{category}</h2>

            <div className="product-grid">
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <div className="product-card" key={product.id}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />

                    <h3>{product.name}</h3>

                    <p className="product-category">
                      {product.category}
                    </p>

                    <p className="product-price">
                      ${product.price}
                    </p>

                    <button
                      onClick={() => dispatch(addToCart(product))}
                      disabled={isInCart(product.id)}
                    >
                      {isInCart(product.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;