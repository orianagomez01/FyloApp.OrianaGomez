import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const { cart, getTotal, cartLength, clear } = useCartContext();
  const [final, setFinal] = useState(false);

  const handleClose = () => setFinal(false);
  const handleShow = () => setFinal(true);

  const [buyer, setBuyer] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    telefono: "",
    email: "",
    emailConfirm: "",
  });

  const dateOrder = new Date().toLocaleDateString();

  function orderHandler() {
    const order = {
      buyer,
      items: cart,
      date: dateOrder,
      total: getTotal(),
    };
    saveToFirestore(order);
  }

  const saveToFirestore = (order) => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then((response) => {
      setOrderId(response);
      console.log(response);
    });
  };

  const submitOnChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formIsComplete = Object.keys(buyer).find(
      (field) => buyer[field] === ""
    );
    return formIsComplete;
  };

  return (
    <>
      <div className="checkout checkout__container">
        <div className="checkout__content--one">
          <h1> Resumen</h1>
          <div className="checkout__description">
            <div className="checkout_row">
              <p> Cantidad de items:</p>
              <p className="checkout__cart checkout__paragraphs">
                {" "}
                {cartLength()}
              </p>
            </div>
            <div className="checkout_row">
              <p className="checkout__paragraph"> Gastos de envío: </p>
              <p className="checkout__cart checkout__paragraphs checkout__paragraph">
                {" "}
                ¡Envío gratis!
              </p>
            </div>
            <div className="checkout_row">
              <p className="checkout__paragraphs"> TOTAL:</p>
              <p className="checkout__cart checkout__paragraphs">
                {" "}
                ${getTotal()}
              </p>
            </div>
          </div>
        </div>
        <div className="checkout__content--two">
          <h2 className="checkout__title">Detalles de facturación</h2>
          {/* {Object.keys(buyer).map((key) => {
            return (
              <div key={key}> */}
          <form>
            <input
              className="checkout__input"
              id="nombre"
              type="text"
              name="nombre"
              required
              onChange={submitOnChange}
              placeholder="Nombre"
            />
            <input
              className="checkout__input"
              id="apellido"
              type="text"
              name="apellido"
              required
              onChange={submitOnChange}
              placeholder="Apellido"
            />
            <input
              className="checkout__input"
              id="edad"
              type="text"
              name="edad"
              required
              onChange={submitOnChange}
              placeholder="Edad"
            />
            <input
              className="checkout__input "
              id="telefono"
              type="tel"
              name="telefono"
              required
              onChange={submitOnChange}
              placeholder="Teléfono (xxxxxxxxx)"
            />
            <input
              className="checkout__input"
              id="email"
              type="email"
              name="email"
              required
              onChange={submitOnChange}
              placeholder="E-mail"
            />
            <input
              className="checkout__input "
              id="emailConfirm"
              type="email"
              name="emailConfirm"
              required
              onChange={submitOnChange}
              placeholder="Confirmar e-mail"
            />

            {/* <input
                    className="checkout__input"
                    placeholder={key}
                    name={key}
                    value={buyer[key]}
                    type="text"
                    required
                    onChange={submitOnChange}
                  /> */}
          </form>
        </div>
        {/* );
          })} */}
        <button
          className="checkout__btn"
          disabled={validateForm()}
          onClick={() => {
            orderHandler();
            handleShow();
          }}
        >
          Realizar compra{" "}
        </button>
      </div>
      {/* </div> */}
      {/* {Object.keys(buyer).map((key) => {
        return ( */}
      <Modal show={final} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¡Tu orden fue confirmada!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¡Muchas gracias por su compra {buyer.nombre}! Se ha enviado a su mail{" "}
          {buyer.email} el e-ticket con el orden de compra: {orderId}{" "}
        </Modal.Body>
        <Modal.Footer>
          <Link to="/">
            {" "}
            <Button variant="success" onClick={handleClose}>
              {" "}
              Volver al inicio
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
      );
      {/* })} */}
    </>
  );
};

// html: (
//   <p>
//     ¡Muchas gracias por su compra ${buyer.nombre}! Se ha enviado a su
//     mail ${buyer.email} el e-ticket con el orden de compra: {orderId}
//   </p>
// ),
// confirmButtonText: "Volver al inicio",

export default Checkout;
