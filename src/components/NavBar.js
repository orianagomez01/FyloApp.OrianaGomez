import React from "react";
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";
import usuarioIcono from "../assets/bx-user.svg";
import busquedaIcono from "../assets/bx-search.svg";
import menuIcono from "../assets/bx-menu.svg";
import logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <header className="fylo">
      <nav className="nav container">
        <figure className="nav__logo">
          <img src={logo} className="nav__img" alt="Logo" />
        </figure>
        <a href="#" className="nav__link">
          <img
            src={usuarioIcono}
            className="nav__icon"
            alt="Icono del usuario"
          />
        </a>
        <a href="#" className="nav__link">
          <CartWidget></CartWidget>
        </a>
        <a href="#" className="nav__link">
          <img
            src={busquedaIcono}
            className="nav__icon"
            alt="Icono de búsqueda"
          />
        </a>
        <a href="#" className="nav__link">
          <img src={menuIcono} className="nav__icon" alt="Icono del menú" />
        </a>
      </nav>
      <div className="line"></div>
      <ItemListContainer name="Oriana"></ItemListContainer>
    </header>
  );
};

export default NavBar;
