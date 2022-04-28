import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <Item products={product} />
      ))}
    </div>
  );
};

export default ItemList;
