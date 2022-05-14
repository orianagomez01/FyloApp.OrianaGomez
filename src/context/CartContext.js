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

  // const isInCart = (id) => cart.find((producto) => producto.id === id);

  // const newCart = [...cart];

  // const addItem = (item, quantity) => {
  //   //carrito nuevo para no borrar los datos del anterior -- con los ... pasamos la info / datos de carrito para sumarle info nuevo y q no sean 2 arrays distintos

  //   const itemIsInCart = isInCart(item.id);

  //   if (itemIsInCart) {
  //     newCart(
  //       (newCart.findIndex(
  //         (product) => product.id === itemIsInCart.id
  //       ).quantity += quantity)
  //     );
  //     setCart(newCart);
  //     return;
  //   }

  //   item.quantity = quantity;
  //   setCart([...newCart, item]);
  // };

  // const removeItem = (item) => {
  //   const itemIsInCart = isInCart(item.id);

  //   if (!itemIsInCart) {
  //     return;
  //   }

  //   const removeCart = newCart.filter((product) => product.id !== item.id);

  //   setCart(removeCart);
  // };

  // const clear = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addItem, setCart, clear, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
