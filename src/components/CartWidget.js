import React from "react";
import { Badge } from "react-bootstrap";
import carritoIcono from "../assets/bx-cart.svg";
import { useCartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cartLength } = useCartContext();
  const numTotal = cartLength();

  return (
    <div className="btnCart" id="btnCart">
      <Badge id="cantidad" pill bg="success">
        {numTotal}
      </Badge>{" "}
      <img
        src={carritoIcono}
        className="nav__icon"
        alt="Icono del carrito de compras"
      />
    </div>
  );
};

export default CartWidget;
