import React from "react";
import usuarioIcono from "../assets/bx-user.svg";
import carritoIcono from "../assets/bx-cart.svg";
import busquedaIcono from "../assets/bx-search.svg";
import menuIcono from "../assets/bx-menu.svg";

const ItemListContainer = () => {
  return (
    <>
      <a href="#" className="nav__link">
        <img src={usuarioIcono} className="nav__icon" alt="Icono del usuario" />
      </a>
      <a href="#" className="nav__link">
        <img
          src={carritoIcono}
          className="nav__icon"
          alt="Icono del carrito de compras"
        />
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
    </>
  );
};

export default ItemListContainer;
