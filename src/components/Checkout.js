import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";

const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const { cart, getTotal, cartLength } = useCartContext();
  const [final, setFinal] = useState(false);

  const [buyer, setBuyer] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    telefono: "",
    email: "",
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
    // setFinal(true);

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then((response) => {
      setOrderId(response);
      console.log(response);
    });
    // .finally(() => setFinal(false));
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
    // <>
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
        {Object.keys(buyer).map((key) => {
          return (
            <div key={key}>
              <form>
                <input
                  className="checkout__input"
                  placeholder={key}
                  name={key}
                  value={buyer[key]}
                  type="text"
                  required
                  onChange={submitOnChange}
                />
              </form>
            </div>
          );
        })}
        <button
          className="checkout__btn"
          disabled={validateForm()}
          onClick={() => {
            orderHandler(), setFinal(true);
          }}
        >
          Realizar compra{" "}
        </button>
      </div>
    </div>
  );
};

export default Checkout;

{
  /* <div className="checkout__final">
        <p>
          {" "}
          ¡Muchas gracias por su compra {buyer.nombre}! Se ha enviado a su mail{" "}
          {buyer.email} el e-ticket con el orden de compra: {orderId}{" "}
        </p>
      </div> */
}
{
  /* </> */
}
