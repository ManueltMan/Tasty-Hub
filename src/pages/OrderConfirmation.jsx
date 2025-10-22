import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart = [], total = 0 } = location.state || {};

  const [activeTab, setActiveTab] = useState("bank");
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  const handleConfirmPayment = () => {
    setPaymentConfirmed(true);

    // later: send to backend / Firebase that payment was made
    setTimeout(() => {
      alert("Payment confirmed successfully!");
      navigate("/");
    }, 3000);
  };

  return (
    <div className="confirmation-page">
      <h1>Order Confirmation</h1>
      <section className="order-summary fade-in">
        <h2>Your Order Summary</h2>
        <ul>
          {cart.map((item, i) => (
            <li key={i}>
              <span>{item.name}</span>
              <span>₦{item.price}</span>
            </li>
          ))}
        </ul>
        <h3>Total: ₦{total}</h3>
      </section>

      <section className="payment-section fade-in">
        <h2>Select Payment Method</h2>
        <div className="payment-tabs">
          <button
            className={activeTab === "bank" ? "active" : ""}
            onClick={() => setActiveTab("bank")}
          >
            Bank Transfer
          </button>
          <button
            className={activeTab === "card" ? "active" : ""}
            onClick={() => setActiveTab("card")}
          >
            Card Payment
          </button>
          <button
            className={activeTab === "crypto" ? "active" : ""}
            onClick={() => setActiveTab("crypto")}
            disabled
          >
            Crypto QR (Coming Soon)
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "bank" && (
            <div className="tab-panel">
              <h3>Bank Transfer Details</h3>
              <p><strong>Bank Name:</strong> Zenith Bank</p>
              <p><strong>Account Name:</strong> TastyHub Ltd.</p>
              <p><strong>Account Number:</strong> 1234567890</p>
              <p>
                Please include your order ID in transfer note. Payment will be
                verified automatically within 5 minutes.
              </p>
            </div>
          )}

          {activeTab === "card" && (
            <div className="tab-panel">
              <h3>Pay with Card</h3>
              <form className="card-form">
                <input type="text" placeholder="Card Number" required />
                <input type="text" placeholder="MM/YY" required />
                <input type="text" placeholder="CVV" required />
                <button type="submit">Pay ₦{total}</button>
              </form>
            </div>
          )}

          {activeTab === "crypto" && (
            <div className="tab-panel">
              <h3>Crypto QR Payment</h3>
              <p>Feature coming soon.</p>
            </div>
          )}
        </div>
      </section>

      <section className="payment-confirmation fade-in">
        {!paymentConfirmed ? (
          <button onClick={handleConfirmPayment} className="confirm-btn">
            Click if you've made payment
          </button>
        ) : (
          <button className="confirmed" disabled>
            ✅ Payment Confirmed
          </button>
        )}
      </section>
    </div>
  );
};

export default OrderConfirmation;
