import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <nav className="navbar">
          <div className="nav-logo">🌿 Paradise Nursery</div>

          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/plants">Plants</a>
            <a href="/cart">🛒 Cart (0)</a>
          </div>
        </nav>

        <div className="empty-cart">
          <h1>Your Shopping Cart</h1>
          <p>Your cart is currently empty.</p>

          <a href="/plants" className="continue-button">
            Continue Shopping
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <nav className="navbar">
        <div className="nav-logo">🌿 Paradise Nursery</div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/plants">Plants</a>
          <a href="/cart">🛒 Cart ({totalItems})</a>
        </div>
      </nav>

      <main className="cart-container">
        <h1>Shopping Cart</h1>

        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-image"
              />

              <div className="cart-item-info">
                <h2>{item.name}</h2>

                <p>Unit Price: ${item.price}</p>

                <p>
                  Item Total: $
                  {(item.price * item.quantity).toFixed(2)}
                </p>

                <div className="quantity-controls">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    +
                  </button>
                </div>

                <button
                  className="delete-button"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Cart Summary</h2>

          <p>Total Items: {totalItems}</p>

          <p className="total-amount">
            Total Amount: ${totalAmount.toFixed(2)}
          </p>

          <div className="cart-actions">
            <button
              className="checkout-button"
              onClick={() => alert("Coming Soon")}
            >
              Checkout
            </button>

            <a href="/plants" className="continue-button">
              Continue Shopping
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CartItem;