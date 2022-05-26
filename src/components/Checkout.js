import React from "react";

const Checkout = () => {
  return (
    <form onSubmit={onSubmit}>
      {inputs.map((inp) => (
        <Input key={inp} etiqueta={inp} onInputChange={onInputChange} />
      ))}
      <input
        type="submit"
        disabled={
          !(
            inputData.nombre !== "" &&
            inputData.apellido !== "" &&
            inputData.edad !== ""
          )
        }
      ></input>
    </form>
  );
};

export default Checkout;
