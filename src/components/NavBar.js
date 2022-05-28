import React from "react";

import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  const categories = [
    { id: "asfadd", address: "/", text: "Todos los productos" },
    { id: "123asf", address: "/category/women", text: "Mujeres" },
    { id: "sgs3q3", address: "/category/men", text: "Hombres" },
  ];

  return (
    <header className="fylo">
      <nav className="nav container-page">
        <NavLink to="/">
          <figure className="nav__logo">
            <img src={logo} className="nav__img" alt="Logo" />
          </figure>
        </NavLink>
        {categories.map((nav) => {
          return (
            <div className="nav__links--items" key={nav.id}>
              <NavLink to={nav.address} className="nav__link">
                {" "}
                {nav.text}
              </NavLink>
            </div>
          );
        })}
        <NavLink to="/cart" className="nav__link">
          <CartWidget></CartWidget>
        </NavLink>
      </nav>
      <div className="line"></div>
    </header>
  );
};

export default NavBar;
