import React from "react";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import carritoIcono from "../assets/bx-cart.svg";
import { useCartContext } from "../context/CartContext";

const CartWidget = () => {
  const { total } = useCartContext();
  const numTotal = total();

  return (
    <div className="btnCart" id="btnCart">
      <Link to="/cart">
        <Badge id="cantidad" pill bg="success">
          {numTotal}
        </Badge>{" "}
        <img
          src={carritoIcono}
          className="nav__icon"
          alt="Icono del carrito de compras"
        />
      </Link>
    </div>
  );
};

export default CartWidget;
