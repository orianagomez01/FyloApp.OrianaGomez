import React from "react";
import { Link } from "react-router-dom";
import carritoIcono from "../assets/bx-cart.svg";

const CartWidget = () => {
  return (
    <Link to="/">
      <img
        src={carritoIcono}
        className="nav__icon"
        alt="Icono del carrito de compras"
      />
    </Link>
  );
};

export default CartWidget;
