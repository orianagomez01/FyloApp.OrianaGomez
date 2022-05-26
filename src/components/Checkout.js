import React, { useState } from "react";

const Checkout = () => {
  const [buyer, setBuyer] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    telefono: "",
    email: "",
  });

  const onInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const nameEveryInput = target.name;

    setBuyer({
      ...buyer,
      [nameEveryInput]: value,
    });
  };

  function onSubmit() {
    console.log("Finalizada la compra", buyer);
  }

  const validateForm = () => {
    let formIsComplete = Object.keys(buyer).find(
      (field) => buyer[field] === ""
    );

    return formIsComplete;
  };

  //render del checkout
  return (
    <div className="cartItem__container">
      <h1 className="checkout__title">Detalles de facturación</h1>

      {Object.keys(buyer).map((key) => {
        return (
          <div>
            <form>
              <input
                className="checkout__input"
                placeholder={key}
                name={key}
                value={buyer[key]}
                type="text"
                required
                onChange={(evt) => onInputChange(evt)}
              />
            </form>
          </div>
        );
      })}

      <button
        className="checkout__btn"
        disabled={validateForm()}
        onClick={(evt) => onSubmit(evt)}
      >
        Proceder al pago
      </button>
    </div>
  );
};

export default Checkout;
