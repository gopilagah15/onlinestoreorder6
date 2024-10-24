// src/components/OrderSummary.js
import React from 'react';

const OrderSummary = ({ cartItems }) => {
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    const tax = total * 0.18; // 18% tax
    const shipping = 50; // Flat shipping fee
    return total + tax + shipping;
  };

  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      <p>Subtotal: ₹{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
      <p>Tax: ₹{(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) * 0.18).toFixed(2)}</p>
      <p>Shipping: ₹50</p>
      <p>Total: ₹{calculateTotal()}</p>
    </div>
  );
};

export default OrderSummary;
