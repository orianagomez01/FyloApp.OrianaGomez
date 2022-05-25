import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { Button } from "react-bootstrap";

const Cart = () => {
  const { cart } = useCartContext();

  return (
    <>
      {cart.length === 0 ? (
        <div className="cart__container text-center">
          <p>No hay productos seleccionados</p>
          <Link to="/">
            <Button variant="success">Volver al inicio</Button>
          </Link>
        </div>
      ) : (
        <>
          <div>
            {cart.map((item) => {
              return <CartItem key={item.id} item={item}></CartItem>;
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
