// src/components/Cart.js
import React from 'react';

const Cart = ({ cartItems, updateCart, removeFromCart }) => {
  return (
    <div className="cart">
      <h3>Your Cart</h3>
      {cartItems.length === 0 ? <p>Your cart is empty</p> : null}
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateCart(item, parseInt(e.target.value))}
            />
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
