import React from "react";
import Item from "./Item";
import { productList } from "../data/dataProduct";

const ItemList = () => {
  return (
    <div>
      {productList.map((products) => (
        <Item productList={products} />
      ))}
    </div>
  );
};

export default ItemList;
