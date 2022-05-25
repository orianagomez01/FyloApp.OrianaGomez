import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";
import basuraIcono from "../assets/bxs-trash.svg";

const CartItem = ({ item }) => {
  const { removeItem, precioTotal, clear } = useCartContext();
  const pTotal = precioTotal();

  return (
    <div className="cartItem__container">
      <Container>
        <Row>
          <Col xs={4} md={3} className="cartItem__title cartItem__content">
            PRODUCTOS
          </Col>
          <Col xs={4} md={3} className="cartItem__title cartItem__content">
            CANTIDAD
          </Col>
          <Col xs={2} md={2} className="cartItem__title cartItem__content">
            SUBTOTAL
          </Col>
          <Col xs={2} md={4} className="cartItem__content"></Col>
        </Row>
        <div className="line"></div>

        <Row className="cartItem__row">
          <Col className="cartItem__content">
            {" "}
            <img
              src={require(`../assets/${item.picture}`)}
              className="cartItem__img"
              alt="Imagen del producto"
            ></img>
            <p className="cartItem__title cartItem_paragraph">{item.title} </p>
          </Col>
          <Col className="cartItem__content">{item.quantity}</Col>
          <Col className="cartItem__content">${pTotal}</Col>
          <Col className="cartItem__content">
            {" "}
            <button
              onClick={() => removeItem(item.id)}
              className="modal__icon"
              id={item.id}
            >
              <img
                className="modal__icon--img"
                src={basuraIcono}
                alt="Icono de tacho de basura"
              />
            </button>
          </Col>
        </Row>
      </Container>
      <div className="line"></div>

      <div className="text-center">
        <Button onClick={() => clear()} variant="success">
          Borrar Todo
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
