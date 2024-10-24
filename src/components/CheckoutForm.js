// src/components/CheckoutForm.js
import React, { useState } from 'react';

const CheckoutForm = ({ placeOrder }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    placeOrder(formData);
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h3>Shipping Information</h3>
      <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
      <input type="text" name="address" placeholder="Address" onChange={handleChange} />
      
      <h3>Payment Information</h3>
      <input type="text" name="cardNumber" placeholder="Card Number" onChange={handleChange} />
      <input type="text" name="expiry" placeholder="Expiry Date" onChange={handleChange} />
      <input type="text" name="cvv" placeholder="CVV" onChange={handleChange} />
      
      <button type="submit">Place Order</button>
    </form>
  );
};

export default CheckoutForm;
