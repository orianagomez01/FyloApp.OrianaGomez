import React from "react";
import { useEffect, useState } from "react";
import { productList } from "../data/dataProduct";
import Item from "./Item";

const ItemList = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productList);
        // reject('error en la promesa')
      }, 2000);
    });

    getProducts
      .then((result) => {
        console.log("Se completó la promesa", result);
        setProduct(result);
        // }, (err) => {
        //   console.log('hubo un error', err);
        // }
      })
      .catch((err) => {
        console.log("hubo un error", err);
      });

    console.log("Se terminó el efecto");
  }, []);

  return (
    <div>
      {product.map((products) => (
        <Item productList={products} />
      ))}
    </div>
  );
};

export default ItemList;
