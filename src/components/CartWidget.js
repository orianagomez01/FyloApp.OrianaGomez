import React from "react";
import carritoIcono from "../assets/bx-cart.svg";

const CartWidget = () => {
  return (
    <img
      src={carritoIcono}
      className="nav__icon"
      alt="Icono del carrito de compras"
    />
  );
};

export default CartWidget;
