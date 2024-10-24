// src/components/OrderConfirmation.js
import React from 'react';

const OrderConfirmation = ({ orderDetails }) => {
  return (
    <div className="order-confirmation">
      <h3>Order Confirmation</h3>
      <p>Thank you, {orderDetails.name}!</p>
      <p>Your order has been placed and will be delivered to {orderDetails.address}.</p>
      <p>Total Amount: ₹{orderDetails.total}</p>
    </div>
  );
};

export default OrderConfirmation;
