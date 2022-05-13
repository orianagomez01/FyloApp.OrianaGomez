//proveedor de cart
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => {
  useContext(CartContext);
};

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => cart.find((producto) => producto.id === id);

  const newCart = [...cart];

  const addItem = (item, quantity) => {
    //carrito nuevo para no borrar los datos del anterior -- con los ... pasamos la info / datos de carrito para sumarle info nuevo y q no sean 2 arrays distintos

    const itemIsInCart = isInCart(item.id);

    if (itemIsInCart) {
      newCart(
        (newCart.findIndex(
          (product) => product.id === itemIsInCart.id
        ).quantity += quantity)
      );
      setCart(newCart);
      return;
    }

    item.quantity = quantity;
    setCart([...newCart, item]);
  };

  const removeItem = (item) => {
    const itemIsInCart = isInCart(item.id);

    if (!itemIsInCart) {
      return;
    }

    const removeCart = newCart.filter((product) => product.id !== item.id);

    setCart(removeCart);
  };

  const clear = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
