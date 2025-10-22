import React from "react";
import "../App.css";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const increase = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrease = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  const handleConfirmOrder = () => {
    navigate("/confirmation", { state: { cart, total } });
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <span>{item.name}</span>
                <div className="cart-controls">
                  <button onClick={() => decrease(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increase(item.id)}>+</button>
                </div>
                <span>₦{(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <h3>Total: ₦{total}</h3>
          <button
            className="confirm-btn"
            onClick={() => navigate("/confirmation", { state: { cart, total } })}
          >
            Confirm Order
          </button>

          </div>
        </>
      )}

  
    </div>
  );
};

export default Cart;
