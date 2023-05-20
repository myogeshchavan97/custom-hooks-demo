import { useState } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    setCart([...cart, product]);
  };

  const removeProduct = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return {
    cart,
    addProduct,
    removeProduct
  };
};
