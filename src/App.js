import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import OrderSummary from './components/OrderSummary';
import CheckoutForm from './components/CheckoutForm';
import OrderConfirmation from './components/OrderConfirmation';
import products from './data/products'; // Assuming products.js contains product data

const App = () => {
  const [cart, setCart] = useState([]);
  const [orderDetails, setOrderDetails] = useState(null);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateCart = (product, quantity) => {
    if (quantity === 0) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(cart.map((item) => item.id === product.id ? { ...item, quantity } : item));
    }
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const placeOrder = (customerInfo) => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0) * 1.18 + 50; // Including tax & shipping
    setOrderDetails({ ...customerInfo, total });
    setCart([]); // Empty the cart after order is placed
  };

  return (
    <div className="App">
      <h1>Online Store</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cart} updateCart={updateCart} removeFromCart={removeFromCart} />
      <OrderSummary cartItems={cart} />
      {cart.length > 0 && <CheckoutForm placeOrder={placeOrder} />}
      {orderDetails && <OrderConfirmation orderDetails={orderDetails} />}
    </div>
  );
};

export default App;
