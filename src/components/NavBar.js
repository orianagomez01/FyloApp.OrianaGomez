import React from "react";
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";

const NavBar = () => {
  return (
    <header className="fylo">
      <nav className="nav container">
        <CartWidget></CartWidget>
        <ItemListContainer></ItemListContainer>
      </nav>
      <div className="line"></div>
    </header>
  );
};

export default NavBar;
