import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";
import basuraIcono from "../assets/bxs-trash-alt.svg";

const CartItem = ({ item }) => {
  const { removeItem, getSubtotal, getTotal, clear } = useCartContext();
  const pTotal = getTotal();
  // const sTotal = getSubtotal();

  return (
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

          <Row className="cartItem__row">
            <Col className="cartItem__figure">
              {" "}
              <img
                src={require(`../assets/${item.picture}`)}
                className="cartItem__img"
                alt="Imagen del producto"
              ></img>
              <p className="cartItem__content cartItem__title cartItem_paragraph">
                {item.title}{" "}
              </p>
            </Col>
            <Col className="cartItem__content cartItem__texts">
              {item.quantity}
            </Col>
            <Col className="cartItem__content cartItem__texts">
              ${getSubtotal(item.price, item.quantity)}
            </Col>
            <Col className="cartItem__content cartItem__texts">
              {" "}
              <button
                type="submit"
                onClick={() => removeItem(item.id)}
                className="cartItem__btn"
                id={item.id}
              >
                <img
                  className="cartItem__icon--img"
                  src={basuraIcono}
                  alt="Icono de tacho de basura"
                />
              </button>
            </Col>
            <div className="line" id="line2"></div>
          </Row>
        </Container>
      </div>

      <div className="cartItem__description">
        <p className="cartItem__description--text">
          {" "}
          <span className="cartItem__description--texts">
            Gastos de envío:
          </span>{" "}
          ¡Envío gratis!{" "}
        </p>
        <p className="cartItem__description--text">
          {" "}
          <span className="cartItem__description--texts">TOTAL: </span> $
          {pTotal}
        </p>
        <div className="cartItem__description--buttons">
          <Button onClick={() => clear()} variant="danger">
            Borrar Todo
          </Button>
          <Button onClick={() => clear()} variant="success">
            Siguiente
          </Button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
