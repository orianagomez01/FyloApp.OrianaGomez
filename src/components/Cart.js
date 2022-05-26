import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { Button, Col, Container, Row } from "react-bootstrap";

const Cart = () => {
  const { cart, clear, getTotal } = useCartContext();
  const pTotal = getTotal();

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
          <div className="cartItem__container">
            <Container>
              <Row>
                <Col xs={4} md={4} className="cartItem__title">
                  PRODUCTOS
                </Col>
                <Col xs={4} md={3} className="cartItem__title">
                  CANTIDAD
                </Col>
                <Col xs={2} md={2} className="cartItem__title">
                  SUBTOTAL
                </Col>
                <Col xs={2} md={4}></Col>
              </Row>
              <div className="line" id="line1"></div>
            </Container>

            {cart.map((item) => {
              return <CartItem key={item.id} item={item}></CartItem>;
            })}

            <div className="cartItem__description">
              <p className="cartItem__description--text">
                {" "}
                <span className="cartItem__description--texts">
                  Gastos de envío:
                </span>{" "}
                ¡Envío gratis!{" "}
              </p>
              <p className="cartItem__description--texts">TOTAL: ${pTotal}</p>
              <div className="cartItem__description--buttons">
                <Button onClick={() => clear()} variant="danger">
                  Borrar Todo
                </Button>
                <Button onClick={() => clear()} variant="success">
                  Siguiente
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
