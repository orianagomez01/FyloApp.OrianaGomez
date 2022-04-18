import React from "react";
import logo from "../assets/logo.svg";

const CartWidget = () => {
  return (
    <figure className="nav__logo">
      <img src={logo} className="nav__img" alt="Logo" />
    </figure>
  );
};

export default CartWidget;
