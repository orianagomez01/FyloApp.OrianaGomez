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

  // Obtener número total de items
  const cartLength = () => {
    let qty = 0;
    cart.forEach((item) => {
      qty = qty + item.quantity;
    });
    return qty;
  };

  // Obtener el subtotal
  const getSubtotal = (price, quantity) => {
    let subtotal = 0;
    subtotal = subtotal + price * quantity;
    return Number(subtotal);
  };

  // Obtener el total
  const getTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total = total + item.quantity * item.price;
    });
    return Number(total);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        setCart,
        clear,
        removeItem,
        cartLength,
        getTotal,
        getSubtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
