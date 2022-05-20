//proveedor de cart
import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (cart.some((el) => el.id === item.id)) {
      let index = cart.findIndex((el) => el.id === item.id);

      let product = cart[index];
      product.quantity = product.quantity + quantity;

      const newCart = [...cart];
      newCart.splice(index, 1, product);

      setCart([...newCart]);
    } else {
      let product = { ...item, quantity };

      setCart([...cart, product]);
    }
  };

  const removeItem = (id) => {
    const newCart = [...cart];

    let index = newCart.findIndex((el) => el.id === id);

    newCart.splice(index, 1);

    setCart([...newCart]);
  };

  const clear = () => {
    setCart([]);
  };

  const total = () => {
    let total = 0;
    cart.forEach((item) => (total += item.quantity));
    return total;
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, setCart, clear, removeItem, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
