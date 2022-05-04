import React from "react";
import CartWidget from "./CartWidget";
import usuarioIcono from "../assets/bx-user.svg";
import busquedaIcono from "../assets/bx-search.svg";
import menuIcono from "../assets/bx-menu.svg";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="fylo">
      <nav className="nav container">
        <figure className="nav__logo">
          <img src={logo} className="nav__img" alt="Logo" />
        </figure>
        <Link to="/" className="nav__link">
          <img
            src={usuarioIcono}
            className="nav__icon"
            alt="Icono del usuario"
          />
        </Link>
        <Link to="/" className="nav__link">
          <CartWidget></CartWidget>
        </Link>
        <Link to="/" className="nav__link">
          <img
            src={busquedaIcono}
            className="nav__icon"
            alt="Icono de búsqueda"
          />
        </Link>
        <Link to="/" className="nav__link">
          <img src={menuIcono} className="nav__icon" alt="Icono del menú" />
        </Link>
      </nav>
      <div className="line"></div>
    </header>
  );
};

export default NavBar;
