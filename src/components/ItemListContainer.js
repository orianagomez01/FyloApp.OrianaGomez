import React from "react";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
  return (
    <>
      <div className="greeting">
        <h1 className="greeting__text">Bienvenidx {props.name}</h1>
      </div>

      <div className="">
        <h2>Nuestros productos</h2>
        <ItemList></ItemList>
      </div>
    </>
  );
};

export default ItemListContainer;
