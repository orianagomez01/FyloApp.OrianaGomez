import React from "react";
import CartWidget from "./CartWidget";
import usuarioIcono from "../assets/bx-user.svg";
import busquedaIcono from "../assets/bx-search.svg";
import menuIcono from "../assets/bx-menu.svg";
import logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const categories = [
    { id: "asfadd", address: "/", text: "Todos los productos" },
    { id: "123asf", address: "/category/women", text: "Mujeres" },
    { id: "sgs3q3", address: "/category/men", text: "Hombres" },
  ];

  return (
    <header className="fylo">
      <nav className="nav container-page">
        <figure className="nav__logo">
          <img src={logo} className="nav__img" alt="Logo" />
        </figure>
        {categories.map((nav) => {
          return (
            <div className="nav__links--items" key={nav.id}>
              <NavLink to={nav.address} className="nav__link--center">
                {" "}
                {nav.text}
              </NavLink>
            </div>
          );
        })}

        <Link to="/" className="nav__link">
          <img
            src={usuarioIcono}
            className="nav__icon"
            alt="Icono del usuario"
          />
        </Link>
        <Link to="/" className="nav__link">
          <img
            src={busquedaIcono}
            className="nav__icon"
            alt="Icono de búsqueda"
          />
        </Link>
        <Link to="/" className="nav__link">
          <CartWidget></CartWidget>
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
