import React from "react";

const ItemListContainer = (props) => {
  return (
    <div className="greeting">
      <h1 className="greeting__text">Bienvenidx {props.name}</h1>
    </div>
  );
};

export default ItemListContainer;
