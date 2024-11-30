import React, { createContext, useState } from 'react';


export const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

 
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    console.log(cartItems)
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    console.log('hi')
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
