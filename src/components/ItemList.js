import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="product">
      {products.map((product) => (
        <Item key={product.id} products={product} />
      ))}
    </div>
  );
};

export default ItemList;
