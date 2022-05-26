import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";
import basuraIcono from "../assets/bxs-trash-alt.svg";

const CartItem = ({ item }) => {
  const { removeItem, getSubtotal } = useCartContext();

  return (
    <>
      <div className="cartItem__container" id="container--items">
        <Container>
          <Row className="cartItem__row">
            <Col xs={4} md={3} className="cartItem__figure">
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
            <Col xs={4} md={3} className="cartItem__content cartItem__texts">
              {item.quantity}
            </Col>
            <Col xs={4} md={3} className="cartItem__content cartItem__texts">
              ${getSubtotal(item.price, item.quantity)}
            </Col>
            <Col xs={4} md={2} className="cartItem__content cartItem__texts">
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
    </>
  );
};

export default CartItem;
